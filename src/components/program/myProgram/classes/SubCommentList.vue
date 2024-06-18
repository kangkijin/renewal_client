<template>
  <div class="my_comment">
    <div class="img_wrap">
      <img src="@/assets/images/common/img_ex2.png" alt="프로필 이미지" />
    </div>
    <div class="letter_count count100">
      <input
        type="search"
        class="form-control"
        placeholder="답글을 입력해주세요"
        v-model.trim="subCommentInput"
        @keydown.enter="writeSubComment(prop.eccReferKey)"
      />
      <p class="letter_counter"></p>
    </div>
  </div>
  <div v-for="subObj in subCommentList" :key="subObj.eccId" class="comment_box">
    <div class="img_wrap">
      <img src="@/assets/images/common/img_ex1.png" alt="프로필 이미지" />
    </div>
    <div class="name">
      {{ subObj.stdNm ? subObj.stdNm : "서브사람이름" }}
      <p>{{ subObj.dateSts }}</p>
      <template v-if="'DAIN' === subObj.regId">
        <button
          v-if="!checkSubTartgetSts(subObj.eccId)"
          type="button"
          class="btn_icon write icon_only"
          @click="setClassFromUpdSts(subObj.eccId, subObj.eccComment)"
        >
          수정
        </button>
        <button v-else type="button" class="btn_icon bell bg_gray icon_only" @click="setClassFromUpdSts(0, '')">
          수정 취소
        </button>
        <button type="button" class="delete" @click="delSubComment(subObj.eccId)">삭제</button>
      </template>
    </div>
    <!--<p class="comment">{{ subObj.eccComment }}</p>-->
    <div class="comment">
      <input
        v-if="initClassFromUpdSts(subObj.eccId)"
        type="search"
        class="form-control"
        v-model.trim="subUpdateCommentInput"
        @keydown.enter="writeUpdateSubComment(subObj.eccId)"
      />
      <p v-else>{{ subObj.eccComment }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, type Ref, ref } from "vue";
import axios, { type AxiosResponse } from "axios";
import { letterCount } from "@/assets/js/common";
/** 받은 prop 선언 */
const prop = defineProps({
  eliId: { type: Number, require: true },
  eccDivCd: { type: String, require: true },
  eccReferKey: { type: Number, require: true },
});
const emit = defineEmits(["update:getCommentList"]);

/** 변수의 영역 */
let subCommentList = ref<object[]>(); /** 서브 댓글 정보 리스트 */
let subCommentInput = ref<string>(""); /** 서브 댓글 입력정보 */
let subUpdateTarget = ref<number>(0); /** 서브 댓글 수정 타겟 */
let subUpdateCommentInput = ref<string>(""); /** 서브 댓글 수정 입력창 */

/** 훅의 영역 */
onMounted(() => {
  letterCount();
  getSubCommentList(prop.eccReferKey); /** eccId 임시값임 */
});

/** 함수의 영역 */
/** 서브 댓글 조회 함수 */
const getSubCommentList = (eccReferKey: number) => {
  const _url: string = "/api/v1/subCommentList";
  const param: object = {
    eccReferKey: eccReferKey,
  };
  axios
    .get(_url, { params: param })
    .then((response: AxiosResponse) => {
      const stsCd = response.data.code;
      subCommentList.value = response.data.data;
      /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
      if (stsCd != 200) {
        throw new Error();
      }
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error: Error) => {
      alert("오류2");
    });
};

/** 서브 댓글 작성 함수 */
const writeSubComment = (eccReferKey: number) => {
  if (!confirm("서브댓글을 등록하시겠습니까?")) {
    return;
  }
  /** 빈 값 체크 */
  if (!subCommentInput.value) {
    alert("댓글의 내용을 입력해주세요");
    return;
  }
  const _url = "/api/v1/writeSubComment";
  let param: object;
  param = {
    eliId: prop.eliId,
    eccDivCd: prop.eccDivCd,
    eccReferKey: eccReferKey,
    eccComment: subCommentInput.value,
    /** 임시값 */
    regId: "DAIN",
  };
  axios
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
        alert("댓글 등록을 완료하였습니다.");
        initSubInput(subCommentInput, "");
        emit("update:getCommentList");
        getSubCommentList(eccReferKey);
      } else {
        alert("댓글 등록을 실패하였습니다.");
      }
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error: Error) => {
      alert("오류");
    });
};

/** 입력창 초기화(깊) */
// eslint-disable-next-line no-unused-vars
function initSubInput(input: Ref<string>, initVal: string) {
  input.value = initVal;
}

/** 수정 입력창 상태여부 함수 (깊) */
// eslint-disable-next-line no-unused-vars
function initClassFromUpdSts(eccId: number): boolean {
  return subUpdateTarget.value === eccId;
}

/** 수정 입력창 초기화(깊) */
function setClassFromUpdSts(eccId: number, eccComment: string) {
  subUpdateTarget.value = eccId;
  subUpdateCommentInput.value = eccComment;
}

/** 수정 입력창 상태(깊) */
function checkSubTartgetSts(eccId: number): boolean {
  return subUpdateTarget.value === eccId;
}

/** 댓글 수정 함수(얇) */
const writeUpdateSubComment = (eccId: number) => {
  if (!confirm("서브댓글을 수정하시겠습니까?")) {
    return;
  }
  /** 빈 값 체크 */
  if (!subUpdateCommentInput.value) {
    alert("댓글의 내용을 입력해주세요");
    return;
  }
  const _url = "/api/v1/updateComment";
  const param: object = {
    eccId: eccId,
    eccComment: subUpdateCommentInput.value,
    /** 임시값 */
    regId: "DAIN",
  };
  axios
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
        alert("서브 댓글 수정이 완료되었습니다");
        subUpdateTarget.value = 0;
        subUpdateCommentInput.value = "";
        getSubCommentList(prop.eccReferKey);
      } else {
        alert("서브 댓글 수정이 실패하었습니다");
      }
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error: Error) => {
      alert("서브 댓글 수정이 에러하었습니다");
    });
};

/** 댓글 삭제 함수(얇) */
// eslint-disable-next-line no-unused-vars
const delSubComment = (delEccId: number) => {
  if (!confirm("해당 댓글을 삭제 하시겠습니까?")) {
    return;
  }
  const _url = "/api/v1/removeComment";
  const param: object = {
    eccId: delEccId,
    /** 임시값 */
    regId: "DAIN",
  };
  axios
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
        alert("댓글 삭제가 완료되었습니다");
        emit("update:getCommentList");
        getSubCommentList(prop.eccReferKey);
      } else {
        alert("댓글 삭제가 실패하었습니다");
      }
    })
    // eslint-disable-next-line no-unused-vars
    .catch((error: Error) => {
      alert("댓글 삭제 에러");
    });
};
</script>
