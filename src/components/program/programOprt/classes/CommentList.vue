<template>
  <div class="comment_wrapper" :class="loaded ? '' : 'loading_md'">
    <!-- [pp] 댓글 없을시 strong 삭제, my_comment만 보이게 -->
    <strong
      >댓글<span>{{ totCnt }}</span></strong
    >
    <div class="my_comment">
      <div class="img_wrap">
        <img src="@/assets/images/common/img_ex2.png" alt="프로필 이미지" />
        <!--<img src="학생마다의 프로필이미지" alt="프로필 이미지" />-->
      </div>
      <div class="letter_count count100">
        <input
          type="search"
          class="form-control"
          placeholder="댓글을 입력해주세요"
          v-model.trim="commentInput"
          @keydown.enter="writeComment()"
        />
        <p class="letter_counter"></p>
      </div>
    </div>
    <div v-for="(obj, idx) in commentList" :key="obj.eccId" class="comment_box">
      <div class="img_wrap">
        <img src="@/assets/images/common/img_ex2.png" alt="프로필 이미지" />
        <!--        <img src=obj.이미지경로 alt="프로필 이미지" />-->
      </div>
      <div class="name">
        {{ obj.stdNm ? obj.stdNm : "사람이름" }}
        <p>{{ obj.dateSts }}</p>
        <template v-if="'DAIN' === obj.regId">
          <button
            v-if="!checkTartgetSts(obj.eccId)"
            type="button"
            class="btn_icon write icon_only"
            @click="setClassFromUpdSts(obj.eccId, obj.eccComment)"
          >
            수정
          </button>
          <button v-else type="button" class="btn_icon bell bg_gray icon_only" @click="setClassFromUpdSts(0, '')">
            수정 취소
          </button>
          <button type="button" class="delete" @click="delMainComment(obj.eccId)">삭제</button>
        </template>
      </div>
      <div class="comment">
        <input
          v-if="initClassFromUpdSts(obj.eccId)"
          type="search"
          class="form-control"
          v-model.trim="updateCommentInput"
          @keydown.enter="writeUpdateComment(obj.eccId)"
        />
        <p v-else>{{ obj.eccComment }}</p>
      </div>
      <div class="iconbtn_wrap">
        <div>
          <p class="check_like">
            <input type="checkbox" :id="'like' + idx" :name="'like' + idx" :value="obj.eccId" />
            <label :for="'like' + idx">좋아요</label>
          </p>
          <p class="count">{{ obj.good ? obj.good : 0 }}</p>
        </div>
        <div>
          <p class="check_comment">
            <input
              type="checkbox"
              v-model="visibleArr"
              :id="'comment' + idx"
              :name="'comment' + idx"
              :value="obj.eccId"
            />
            <label :for="'comment' + idx">댓글</label>
          </p>
          <p class="count">{{ obj.eccReferCnt }}</p>
        </div>
        <div>
          <button type="button" class="btn_icon bell icon_only">알림</button
          ><!-- 이게뭐임? -->
        </div>
      </div>
      <div v-if="isEccIdInclude(obj.eccId)" class="reply_wrap">
        <SubCommentList
          :eliId="prop.eliId"
          :eccDivCd="prop.eccDivCd"
          :eccReferKey="obj.eccId"
          @update:getCommentList="getCommentList()"
        ></SubCommentList>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import axios, { type AxiosResponse } from "axios";
import { inject, onMounted, type Ref, ref } from "vue";
import SubCommentList from "@/components/program/programOprt/classes/SubCommentList.vue";
/** 받은 prop 선언 */
const prop = defineProps({
  eliId: { type: Number, require: true },
  eccDivCd: { type: String, require: true },
});

let totCnt = ref<number>(0); /** 현재 작선된 메인 댓글의 개수  */
let commentList = ref<object[]>([]); /** 메인 댓글 정보 리스트 */
let commentInput = ref<string>(""); /** 댓글 입력정보 */
let visibleArr = ref<number[]>([]); /** 서브 댓글 온오프 정보 */
let updateTarget = ref<number>(0); /** 댓글 수정 타겟 */
let updateCommentInput = ref<string>(""); /** 댓글 수정 입력창 */

/* vm 인젝트 */
const vm = inject<object>("vm");
const loaded = ref<boolean>(true);
/** 훅의 영역 */
onMounted(() => {
  //getCommentList();
});

/** 함수의 영역(얇은거, 깊은거) */
/** 댓글 목록 조회 함수(얇) */
const getCommentList = () => {
  const _url: string = "/api/prof/EcpComment/mainCommentList";
  const param: object = {
    eliId: prop.eliId,
    eccDivCd: prop.eccDivCd,
  };

  loaded.value = false;
  /* axios 통신 */
  vm.$axios
    .get(_url, { params: param })
    .then((response: AxiosResponse) => {
      const stsCd = response.data.code;
      commentList.value = response.data.data;
      totCnt.value = response.data.data.length > 0 ? response.data.data[0].eccTotCnt : 0;
      /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
      if (stsCd != 200) {
        throw new Error();
      }
    })
    .catch((error: Error) => {
      vm.$alert(JSON.stringify(error));
    })
    .finally(() => {
      loaded.value = true;
    });
};
/** 댓글 작성 함수(얇) */
const writeComment = () => {
  vm.$confirm("댓글을 등록하시겠습니까?", "확인", (isConfirm: boolean) => {
    if (isConfirm) {
      /* 빈 값 체크 */
      if (!commentInput.value) {
        vm.$alert("댓글의 내용을 입력해주세요");
        return;
      }
      const _url = "/api/prof/EcpComment/writeMainComment";
      let param: object = {
        eliId: prop.eliId,
        eccDivCd: prop.eccDivCd,
        eccComment: commentInput.value,
        /** 임시값 */
        regId: "DAIN",
      };

      loaded.value = false;
      /* axios 통신 */
      vm.$axios
        .post(_url, param)
        .then((response: AxiosResponse) => {
          const stsCd = response.data.code;
          const catchData = response.data.data;
          /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
          if (stsCd != 200) {
            throw new Error();
          }
          /** 받은 상태에 따른 알림 */
          if (catchData) {
            vm.$alert("댓글 등록을 완료하였습니다.");
            initInput(commentInput, "");
            getCommentList();
          } else {
            vm.$alert("댓글 등록을 실패하였습니다.");
          }
        })
        .catch((error: Error) => {
          vm.$alert(JSON.stringify(error));
        })
        .finally(() => {
          loaded.value = true;
        });
    }
  });
};

/** 댓글 삭제 함수(얇) */
const delMainComment = (delEccId: number) => {
  vm.confirm("해당 댓글을 삭제 하시겠습니까?", "확인", (isComfirm: boolean) => {
    if (isComfirm) {
      const _url = "/api/prof/EcpComment/removeComment";
      const param: object = {
        eccId: delEccId,
        /** 임시값 */
        regId: "DAIN",
      };

      loaded.value = false;
      /* axios 통신 */
      vm.$axios
        .post(_url, param)
        .then((response: AxiosResponse) => {
          const stsCd = response.data.code;
          const catchData = response.data.data;
          /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
          if (stsCd != 200) {
            throw new Error();
          }
          /** 받은 데이터에 따른 처리 분기 */
          if (catchData) {
            vm.$alert("댓글 삭제가 완료되었습니다");
            getCommentList();
          } else {
            vm.$alert("댓글 삭제가 실패하었습니다");
          }
        })
        .catch((error: Error) => {
          vm.$alert(JSON.stringify(error));
        })
        .finally(() => {
          loaded.value = true;
        });
    }
  });
};

/** 대댓글 온오프 클릭 시 (깊)*/
function isEccIdInclude(eccId: number) {
  return visibleArr.value.includes(eccId);
}
/** 입력창 초기화(깊) */
function initInput(input: Ref<string>, initVal: string) {
  input.value = initVal;
}

/** 수정 입력창 상태여부 함수 (깊) */
function initClassFromUpdSts(eccId: number): boolean {
  return updateTarget.value === eccId;
}

/** 수정 입력창 초기화(깊) */
function setClassFromUpdSts(eccId: number, eccComment: string) {
  updateTarget.value = eccId;
  updateCommentInput.value = eccComment;
}

/** 수정 입력창 상태(깊) */
function checkTartgetSts(eccId: number): boolean {
  return updateTarget.value === eccId;
}

/** 댓글 수정 함수(얇) */
const writeUpdateComment = (eccId: number) => {
  vm.confirm("메인댓글을 수정하시겠습니까?", "확인", (isComfirm: boolean) => {
    if (isComfirm) {
      /* 빈 값 체크 */
      if (!updateCommentInput.value) {
        vm.$alert("댓글의 내용을 입력해주세요");
        return;
      }
      const _url = "/api/prof/EcpComment/updateComment";
      const param: object = {
        eccId: eccId,
        eccComment: updateCommentInput.value,
        /** 임시값 */
        regId: "DAIN",
      };

      loaded.value = false;
      /* axios 통신 */
      vm.$axios
        .post(_url, param)
        .then((response: AxiosResponse) => {
          const stsCd = response.data.code;
          const catchData = response.data.data;
          /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
          if (stsCd != 200) {
            throw new Error();
          }
          /** 받은 데이터에 따른 처리 분기 */
          if (catchData) {
            vm.$alert("댓글 수정이 완료되었습니다");
            updateTarget.value = 0;
            updateCommentInput.value = "";
            getCommentList();
          } else {
            vm.$alert("댓글 수정이 실패하었습니다");
          }
        })
        .catch((error: Error) => {
          vm.$alert(JSON.stringify(error));
        });
    }
  });
};
</script>
