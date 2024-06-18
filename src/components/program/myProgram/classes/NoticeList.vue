<template>
  <div class="myprogram_wrapper">
    <div class="myclassroom_wrapper">
      <ProgramSidebar />
      <ClassCmmnCommu
        :idx="idx"
        :menuName="menuName"
        :eliId="eliId"
        :totalCnt="noticeCnt"
        :dataList="noticeList"
        :detailFunc="getNoticeDetail"
        :eccDivCd="eccDivCd"
        :onClickNextMenu="onClickNextMenu"
        :onClickPrevMenu="onClickPrevMenu"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { accordion } from "@/assets/js/common";
import ProgramSidebar from "@/components/program/myProgram/classes/ProgramSidebar.vue";
import { onBeforeMount, provide, ref } from "vue";
import axios, { type AxiosResponse } from "axios";
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

let noticeCnt = ref<number | undefined>(); /** 등록된 공지사항 개수 */
let noticeList = ref<object[]>(); /** 등록된 공지사항 목록 */
let detailData = ref<object>({}); /** 아코디언 클릭 시 나타나는 상세내용 */

/** 훅의 영역 */
onBeforeMount(() => {
  //getNoticeListInClass();
});

/** 메소드(얇) 모음 */
/** (얇): 학습자료 목록 조회 */
const getNoticeListInClass = () => {
  const _url: string = "/api/v1/getNoticeList"; /** url */
  // eslint-disable-next-line no-unused-vars
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
      //noticeList.value = response.data.data;
      //noticeCnt.value = response.data.data ? response.data.data.length : undefined;
    })
    .catch((error: Error) => {
      //alert(JSON.stringify(error));
    })
    .finally(() => {
      accordion(); /** 목록 조회 후 아코디언 재배치 하기 위해 사용 */
    });
};

/** (얇): 공지사항 상세보기 */
const getNoticeDetail = (keyId: number) => {
  const _url: string = "/api/v1/getNoticeDetail"; /** url */
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

/** 호이스팅으로 인한 provide 선언 */
provide("eccDivCd", prop.eccDivCd);
provide("detailData", detailData);
</script>
