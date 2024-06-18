<template>
  <div class="myprogram_wrapper">
    <div class="myclassroom_wrapper">
      <!-- 운영현황 대시보드 (왼쪽 부분) -->
      <ProfProgramSidebar />
      <!-- //운영현황 대시보드 (왼쪽 부분) -->
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
      />
    </div>
  </div>
  <PopupView v-model="savePopupSts">
    <template #title>QnA 답변 {{ popupStsNm }}</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="cvsSavePopupSts(false)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="addQnaApply(infoObj.keyId)">저장</button>
    </template>
    <div class="tbl tbl_row scrollx_tbl_sm">
      <table>
        <caption>
          QnA
        </caption>
        <colgroup>
          <col style="width: 16.5%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">제목</th>
            <td>
              <div class="letter_count count40">
                <input
                  type="text"
                  class="form_style wd_p100"
                  placeholder="답변의 제목을 입력해주세요."
                  v-model="infoObj.title"
                />
                <p class="letter_counter"></p>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">설명</th>
            <td>
              <div class="letter_count count500">
                <textarea
                  rows="4"
                  class="form_style wd_p100"
                  placeholder="학습자료의 내용을 입력해주세요."
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
</template>
<script setup lang="ts">
import ProfProgramSidebar from "@/components/program/programOprt/classes/ProfProgramSidebar.vue";
import PopupView from "@/components/common/PopupView.vue";
import { onBeforeMount, onMounted, provide, ref, watch } from "vue";
import axios, { type AxiosResponse } from "axios";
import ClassCmmnCommu from "@/components/program/programOprt/classes/ClassCmmnCommu.vue";
import { accordion, letterCount } from "@/assets/js/common";
/** prop / 변수 모음 */
// eslint-disable-next-line no-unused-vars
const prop = defineProps({
  idx: { type: Number, required: true },
  menuName: { type: String, required: true },
  eliId: { type: Number, required: true, default: 9999 },
  eccDivCd: { type: String, required: true },
});

let qnaCnt = ref<number>(0); /** 등록된 학습자료 개수 */
let qnaList = ref<object[]>(); /** 등록된 학습자료 목록 */
let savePopupSts = ref<boolean>(false); /** QnA 등록 팝업 상태값 */
let popupStsNm = ref<string>("등록");
let infoObj = ref<object>({}); /** 팝업에 들어가는 값 */
let detailData = ref<object>({}); /** 아코디언 클릭 시 나타나는 상세내용 */
let selectReferId = ref<number>(); /** 답변할 키 */

/** 훅의 영역 */
onBeforeMount(() => {
  getQnAListInClass();
});
onMounted(() => {
  letterCount();
  accordion(); /** 목록 조회 후 아코디언 재배치 하기 위해 사용 */
});
watch(savePopupSts, (newVal: boolean) => {
  if (!newVal) {
    infoObj.value = {};
  }
});
watch(savePopupSts, (newVal: boolean) => {
  if (!newVal) {
    infoObj.value = {};
  }
});

/** 메소드(얇) 모음 */
/** (얇): QnA 목록 조회 */
const getQnAListInClass = () => {
  const _url: string = "/api/prof/EcpQna/getQnaList"; /** url */
  const param: object = {}; /** 요청에 넣어줄 값 */
  /** Axios 통신 */
  axios
    .get(_url, { params: param })
    .then((response: AxiosResponse) => {
      const stsCd = response.data.code;
      /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
      if (stsCd != 200) {
        throw new Error();
      }
      qnaList.value = response.data.data;
      qnaCnt.value = response.data.data.length;
    })
    .finally(() => {
      accordion();
    });
};

/** (얇): 학습자료 상세보기 */
const getQnaDetail = (keyId: number) => {
  const _url: string = "/api/prof/EcpQna/getQnaDetail"; /** url  dddd */
  const param: object = { keyId: keyId }; /** 요청에 넣어줄 값 */
  /** Axios 통신 */
  axios.get(_url, { params: param }).then((response: AxiosResponse) => {
    const stsCd = response.data.code;
    /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
    if (stsCd != 200) {
      throw new Error();
    }
    detailData.value = response.data.data;
  });
};

/** 등록 / 수정 팝업 상태 변경 함수 */
const cvsSavePopupSts = (sts: boolean, keyId?: number) => {
  popupStsNm.value = "등록";
  if (keyId) {
    const _url: string = "/api/prof/EcpQna/getQnaDetail";
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
          throw new Error();
        }
        let catchData = response.data.data;
        catchData.privateYn = catchData.privateYn === "Y";
        infoObj.value = catchData;
      })
      .catch((error: Error) => {
        alert(JSON.stringify(error));
      });
  }
  savePopupSts.value = sts;
};
/** QnA 삭제 */
const deleteQna = (keyId: number) => {
  if (!confirm("답변을 삭제하시겠습니까?")) {
    return;
  }
  const _url: string = "/api/prof/EcpQna/deleteQna";
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
        throw new Error();
      }
      const success = response.data.data;
      if (success) {
        alert("QnA 답변을 삭제하였습니다.");
        qnaList.value = [];
        getQnAListInClass();
      } else {
        alert("QnA 답변삭제를 실패하였습니다.");
      }
    })
    .catch((error: Error) => {
      alert(JSON.stringify(error));
    });
};

/** QnA 답변 등록 */
const addQnaApply = (keyId?: number) => {
  if (!confirm("답변을 " + popupStsNm.value + "하시겠습니까?")) {
    return;
  }
  const _url: string = keyId ? "/api/prof/EcpQna/saveUpdateQna" : "/api/prof/EcpQna/addQnaApply";
  let param: object = infoObj.value;
  param.referKeyId = selectReferId.value;
  param.regId = "DAIN";
  /** axios 통신 */
  axios
    .post(_url, param)
    .then((response: AxiosResponse) => {
      const stsCd = response.data.code;
      /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
      if (stsCd != 200) {
        throw new Error();
      }
      const success = response.data.data;
      if (success) {
        alert("QnA 답변을 " + popupStsNm.value + "하였습니다.");
        qnaList.value = [];
        getQnAListInClass();
        cvsSavePopupSts(false);
      } else {
        alert("QnA 답변" + popupStsNm.value + "을 실패하였습니다.");
      }
    })
    .catch((error: Error) => {
      alert(JSON.stringify(error));
    });
};

function referingId(referId: number) {
  selectReferId.value = referId;
}

/** 호이스팅으로 인한 provide 선언 */
provide("detailData", detailData);
provide("ReferingId", referingId);
provide("eccDivCd", prop.eccDivCd);
</script>
