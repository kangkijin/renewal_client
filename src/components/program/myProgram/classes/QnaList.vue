<template>
  <div class="myprogram_wrapper">
    <div class="myclassroom_wrapper">
      <ProgramSidebar />
      <ClassCmmnCommu
        :idx="idx"
        :menuName="menuName"
        :eliId="eliId"
        :totalCnt="qnaCnt"
        :dataList="qnaList"
        :openPopFunc="cvsSavePopupSts"
        :deleteFunc="deleteQna"
        :detailFunc="getQnaDetail"
        :eccDivCd="eccDivCd"
        :onClickNextMenu="onClickNextMenu"
        :onClickPrevMenu="onClickPrevMenu"
      />
    </div>
  </div>
  <PopupView v-model="savePopupSts">
    <template #title>Q&A 질문 {{ popupStsNm }}</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="cvsSavePopupSts(false)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="addNewQna()">저장</button>
    </template>
    <div class="tbl tbl_row scrollx_tbl_sm">
      <table>
        <caption>
          과제등록
        </caption>
        <colgroup>
          <col style="width: 16.5%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">비밀번호</th>
            <td>
              <p class="check_only mg_r10">
                <input type="checkbox" v-model="infoObj.privateYn" name="check" id="check1_1" class="hidden" />
                <label for="check1_1">전체</label>
              </p>
              <input
                type="password"
                class="form_style wd_200"
                placeholder="비밀번호를 입력해주세요."
                :disabled="!infoObj.privateYn"
                v-model="infoObj.privatePw"
                maxlength="4"
              />
              <strong class="mg_l10 font_red">비밀번호는, 숫자 4자리만 입력 가능합니다.</strong>
            </td>
          </tr>
          <tr>
            <th scope="row">제목</th>
            <td>
              <div class="letter_count count40">
                <input
                  type="text"
                  class="form_style wd_p100"
                  placeholder="활동 제목을 입력해주세요."
                  v-model="infoObj.title"
                />
                <p class="letter_counter"></p>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">내용</th>
            <td>
              <div class="letter_count count1000">
                <textarea
                  rows="4"
                  class="form_style wd_p100"
                  placeholder="활동 내용을 입력해주세요."
                  v-model="infoObj.content"
                ></textarea>
                <p class="letter_counter"></p>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">파일첨부</th>
            <td>
              <div class="attach_filewrap">
                <label class="btn_round btn_white btn_sm">
                  파일 추가
                  <input type="file" class="hidden" />
                </label>
                <div class="attach_file_list">
                  <!-- <div class="file_row">&lt;!&ndash; for 문 &ndash;&gt;
                    <div class="file_name">
                      <p>알고리즘수정.hwp</p>
                      <i>145KB</i>
                      <button type="button" class="btn_icon icon_only download">다운로드</button>
                      <button type="button" class="btn_icon icon_only delete">삭제</button>
                    </div>
                  </div>-->
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </PopupView>
  <PopupView class="small" v-if="false">
    <template #title>비밀번호 확인</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(2)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="popupHide(2)">저장</button>
    </template>
    &lt;!&ndash; template 다음에 내용 추가&ndash;&gt;
    <table class="wd_p100">
      <caption>
        비밀번호
      </caption>
      <colgroup>
        <col style="width: 22%" />
        <col style="width: auto" />
      </colgroup>
      <tbody>
        <tr>
          <th scope="row">비밀번호</th>
          <td>
            <input type="password" class="form_style wd_p100" placeholder="비밀번호를 입력해주세요." />
          </td>
        </tr>
      </tbody>
    </table>
  </PopupView>
</template>

<script setup lang="ts">
import { accordion } from "@/assets/js/common";
import ProgramSidebar from "@/components/program/myProgram/classes/ProgramSidebar.vue";
import { onBeforeMount, provide, ref, watch } from "vue";
import axios, { type AxiosResponse } from "axios";
import PopupView from "@/components/common/PopupView.vue";
import ClassCmmnCommu from "@/components/program/myProgram/classes/ClassCmmnCommu.vue";
/** prop / 변수 모음 */
// eslint-disable-next-line no-unused-vars
const prop = defineProps({
  idx: { type: Number, required: true },
  menuName: { type: String, required: true },
  eliId: { type: Number, required: true, default: 9999 },
  eccDivCd: { type: String, required: true },
  onClickNextMenu: { type: Function, required: true },
  onClickPrevMenu: { type: Function, required: true },
});

let qnaCnt = ref<number | undefined>(0); /** 등록된 학습자료 개수 */
let qnaList = ref<object[]>(); /** 등록된 학습자료 목록 */
let savePopupSts = ref<boolean>(false); /** QnA 등록 팝업 상태값 */
let popupStsNm = ref<string>("등록");
let infoObj = ref<object>({}); /** 팝업에 들어가는 값 */
let detailData = ref<object>({}); /** 아코디언 클릭 시 나타나는 상세내용 */

/** 훅의 영역 */
onBeforeMount(() => {
  //getQnAListInClass();
});
watch(savePopupSts, (newVal) => {
  if (!newVal) {
    infoObj.value = {};
  }
});
// eslint-disable-next-line no-unused-vars
watch(
  () => infoObj.value.privatePw,
  // eslint-disable-next-line no-unused-vars
  (newValue) => {
    if (newValue) {
      infoObj.value.privatePw = newValue.replace(/\D/g, "");
    }
  },
);

/** 메소드(얇) 모음 */
/** (얇): QnA 목록 조회 */
const getQnAListInClass = () => {
  const _url: string = "/api/v1/getQnaList"; /** url */
  const param: object = {}; /** 요청에 넣어줄 값 */
  /** Axios 통신 */
  axios
    .get(_url, { params: param })
    .then((response: AxiosResponse) => {
      const stsCd = response.data.code;
      /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
      if (stsCd != 200) {
        //throw new Error();
      }
      //qnaList.value = response.data.data;
      //qnaCnt.value = response.data.data.length ? response.data.data.length : 0;
    })
    .finally(() => {
      accordion(); /** 목록 조회 후 아코디언 재배치 하기 위해 사용 */
    });
};

/** (얇): 학습자료 상세보기 */
const getQnaDetail = (keyId: number) => {
  const _url: string = "/api/v1/getDetailApply"; /** url */
  const param: object = { keyId: keyId }; /** 요청에 넣어줄 값 */
  /** Axios 통신 */
  axios.get(_url, { params: param }).then((response: AxiosResponse) => {
    const stsCd = response.data.code;
    /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
    if (stsCd != 200) {
      //throw new Error();
    }
    //detailData.value = response.data.data;
  });
};

/** 등록 / 수정 팝업 상태 변경 함수 */
// eslint-disable-next-line no-unused-vars
const cvsSavePopupSts = (sts: boolean, keyId?: number) => {
  popupStsNm.value = "등록";
  if (keyId) {
    const _url: string = "/api/v1/getQnaDetail";
    const param: object = {
      keyId: keyId,
    };
    popupStsNm.value = "수정";
    /** axios 통신*/
    axios
      .get(_url, { params: param })
      .then((response: AxiosResponse) => {
        const stsCd = response.data.code;
        /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
        if (stsCd != 200) {
          //throw new Error();
        }
        //let catchData = response.data.data;
        // catchData.privateYn = catchData.privateYn === "Y";
        //infoObj.value = catchData;
      })
      .catch((error: Error) => {
        //alert(JSON.stringify(error));
      });
  }
  savePopupSts.value = sts;
};

/** QnA 등록 */
const addNewQna = () => {
  if (!confirm("QnA를 " + popupStsNm.value + "하시겠습니까?")) {
    return;
  }
  const _url: string = "/api/v1/saveNewQna";
  let param: object = infoObj.value;
  param.regId = "DAIN";
  param.privateYn = param.privateYn ? "Y" : undefined;
  /** axios 통신 */
  axios
    .post(_url, param)
    .then((response: AxiosResponse) => {
      const stsCd = response.data.code;
      /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
      if (stsCd != 200) {
        //throw new Error();
      }
      const success = response.data.data;
      if (success) {
        //alert("QnA를 등록하였습니다.");
        //getQnAListInClass();
        //cvsSavePopupSts(false);
      } else {
        //alert("QnA 등록을 실패하였습니다.");
      }
    })
    .catch((error: Error) => {
      //alert(JSON.stringify(error));
    });
};

/** QnA 삭제 */
const deleteQna = (keyId: number) => {
  if (!confirm("QnA를 삭제하시겠습니까?")) {
    return;
  }
  const _url: string = "/api/v1/deleteQna";
  let param: object = {
    keyId: keyId,
    regId: "DAIN",
  };
  /** axios 통신 */
  axios
    .post(_url, param)
    .then((response: AxiosResponse) => {
      const stsCd = response.data.code;
      /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
      if (stsCd != 200) {
        //throw new Error();
      }
      const success = response.data.data;
      if (success) {
        //alert("QnA를 삭제하였습니다.");
        //qnaList.value = [];
        //getQnAListInClass();
      } else {
        //alert("QnA 삭제를 실패하였습니다.");
      }
    })
    .catch((error: Error) => {
      //alert(JSON.stringify(error));
    });
};

/** 호이스팅으로 인한 provide 선언 */
provide("eccDivCd", prop.eccDivCd);
provide("detailData", detailData);
</script>
