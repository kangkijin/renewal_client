<template>
  <div class="myprogram_wrapper">
    <div class="myclassroom_wrapper">
      <ProfProgramSidebar />
      <ClassCmmnCommu
        :idx="idx"
        :menuName="menuName"
        :totalCnt="noticeCnt"
        :dataList="noticeList"
        :openPopFunc="cvsSavePopupSts"
        :deleteFunc="deleteNotice"
        :detailFunc="getNoticeDetail"
      />
    </div>
  </div>
  <PopupView v-model="savePopupSts">
    <template #title>공지사항 {{ popupStsNm }}</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="cvsSavePopupSts(false)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="addNoticeData()">저장</button>
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
          <!-- <tr>
            <th scope="row">상단고정</th>
            <td>
              <VSwitch v-model="testVal" label="Switch 1"></VSwitch>
            </td>
          </tr>-->
          <tr>
            <th scope="row">제목</th>
            <td>
              <div class="letter_count count40">
                <input
                  type="text"
                  class="form_style wd_p100"
                  placeholder="공지사항의 제목을 입력해주세요."
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
                  placeholder="공지사항의 내용을 입력해주세요."
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
import { accordion, letterCount } from "@/assets/js/common";
import { onBeforeMount, onMounted, provide, ref, watch } from "vue";
import axios, { type AxiosResponse } from "axios";
import ProfProgramSidebar from "@/components/program/programOprt/classes/ProfProgramSidebar.vue";
import PopupView from "@/components/common/PopupView.vue";
import ClassCmmnCommu from "@/components/program/programOprt/classes/ClassCmmnCommu.vue";
/** prop / 변수 모음 */
// eslint-disable-next-line no-unused-vars
const prop = defineProps({
  idx: { type: Number, required: true },
  menuName: { type: String, required: true },
  eliId: { type: Number, required: true, default: 9999 },
  eccDivCd: { type: String, required: true },
});

let testVal = ref<boolean>(false);
let noticeCnt = ref<number>(0); /** 등록된 공지사항 개수 */
let noticeList = ref<object[]>(); /** 등록된 공지사항 목록 */
let savePopupSts = ref<boolean>(false); /** 공지사항 등록 팝업 상태값 */
let popupStsNm = ref<string>("등록");
let infoObj = ref<object>({}); /** 팝업 입력 값 */
let detailData = ref<object>({}); /** 아코디언 클릭 시 나타나는 상세내용 */

/** 훅의 영역 */
onBeforeMount(() => {
  getNoticeListInClass();
});
onMounted(() => {
  letterCount();
  accordion(); /** 목록 조회 후 아코디언 재배치 하기 위해 사용 */
});
watch(savePopupSts, (newVal) => {
  if (!newVal) {
    infoObj.value = {};
  }
});

/** 메소드(얇) 모음 */
/** (얇): 공지사항 목록 조회 */
const getNoticeListInClass = () => {
  const _url: string = "/api/prof/EcpNotice/getNoticeList"; /** url */
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
      noticeList.value = response.data.data;
      noticeCnt.value = response.data.data ? response.data.data.length : 0;
    })
    .catch((error: Error) => {
      alert(JSON.stringify(error));
    })
    .finally(() => {
      accordion(); /** 목록 조회 후 아코디언 재배치 하기 위해 사용 */
    });
};

/** 공지사항 등록 / 수정 팝업 상태 변경 함수 */
// eslint-disable-next-line no-unused-vars
const cvsSavePopupSts = (sts: boolean, keyId?: number) => {
  if (keyId) {
    const _url: string = "/api/prof/EcpNotice/getNoticeDetail";
    const param: object = {
      keyId: keyId,
    };
    /** axios 통신*/
    axios
      .get(_url, { params: param })
      .then((response: AxiosResponse) => {
        const stsCd = response.data.code;
        /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
        if (stsCd != 200) {
          throw new Error();
        }
        infoObj.value = response.data.data;
      })
      .catch((error: Error) => {
        alert(JSON.stringify(error));
      });
  }
  savePopupSts.value = sts;
};

/** 공지사항 등록 */
const addNoticeData = () => {
  if (!confirm("공지사항을 " + popupStsNm.value + "하시겠습니까?")) {
    return;
  }
  let _url: string = "/api/prof/EcpNotice/saveNewNotice";
  let param: object = infoObj.value;
  param.typeCd = "Notice";
  param.regId = "DAIN";
  param.fixedYn = param.fixedYn ? "Y" : undefined;
  if (param.keyId) {
    _url = "/api/prof/EcpNotice/saveUpdateNotice";
  }
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
        alert("공지사항 " + popupStsNm.value + "을 완료하였습니다.");
        cvsSavePopupSts(false);
        noticeList.value = [];
        getNoticeListInClass();
      } else {
        //alert("공지사항 " + popupStsNm.value + "을 실패하였습니다.");
      }
    })
    .catch((error: Error) => {
      alert(JSON.stringify(error));
    });
};

/** (얇): 공지사항 상세보기 */
const getNoticeDetail = (keyId: number) => {
  const _url: string = "/api/prof/EcpNotice/getNoticeDetail"; /** url */
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

/** 공지사항 삭제 */
const deleteNotice = (keyId: number) => {
  if (!confirm("공지사항을 삭제하시겠습니까?")) {
    return;
  }
  const _url = "/api/prof/EcpNotice/deleteNotice";
  const param: object = {
    keyId: keyId,
    regId: "DAIN",
  };
  /** Axios conn */
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
        alert("공지사항 삭제를 완료하였습니다");
        getNoticeListInClass();
      } else {
        alert("공지사항 삭제를 실패하였습니다");
      }
    })
    .catch((error: Error) => {
      alert(JSON.stringify(error));
    });
};

/** 호이스팅으로 인한 provide 선언 */
provide("detailData", detailData);
provide("eccDivCd", prop.eccDivCd);
</script>
