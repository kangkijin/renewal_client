<template>
  <ReportIntro
    v-if="overViewSts && loaded"
    :detailData="getReportInfo"
    @moveExamListPage="moveExamListPage"
  ></ReportIntro>
  <ClassCmmnEduAct
    v-if="listSts"
    :class="loaded ? '' : 'loading_md'"
    :idx="idx"
    :menuName="menuName"
    :totalCnt="reportCnt"
    :dataList="reportList"
    @moveExamRegPage="moveExamRegPage"
    @moveExamOverview="moveExamOverview"
    @deleteSelected="deleteReport"
  ></ClassCmmnEduAct>
  <ReportReg v-if="regSts && loaded" @moveExamListPage="moveExamListPage"></ReportReg>
</template>

<script setup lang="ts">
import { inject, onBeforeMount, provide, ref } from "vue";
import ReportReg from "@/components/program/programOprt/classes/datails/ReportReg.vue";
import ReportIntro from "@/components/program/programOprt/classes/datails/ReportIntro.vue";
import ClassCmmnEduAct from "@/components/program/programOprt/classes/ClassCmmnEduAct.vue";
import type { AxiosResponse } from "axios";
/** prop / 변수 영역 */
const prop = defineProps({
  idx: { type: Number, required: true },
  menuName: { type: String, required: true },
  eccDivCd: { type: String, required: true },
});
let listSts = ref<boolean>(true);
let regSts = ref<boolean>(false);
let overViewSts = ref<boolean>(false);
// 공통 디티오 로 변경 해야 함????
const reportList = ref<object[]>([]);
const reportCnt = ref<number>(0);
const getReportInfo = ref<object>({});
const loaded = ref<boolean>(true);
/* vm 인젝트 */
const vm = inject<object>("vm");
/** 훅의 영역 */
onBeforeMount(() => {
  getReportListAxios();
});
/** 메소드 영역 */
/* R: 과제 목록 조회 */
const getReportListAxios = () => {
  const _url: string = "/api/prof/EcpReport/getReportDataList";
  const param: object = {
    eliId: 9999,
    ecmId: 9999,
    ecsId: 9999,
  }; //나중에 강의실 키나 차수 키 같은거 넣어야함
  loaded.value = false;
  /* Axios 통신 */
  vm.$axios
    .get(_url, { params: param })
    .then((response: AxiosResponse) => {
      const stsCd = response.data.code;
      /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
      if (stsCd != 200) {
        throw new Error();
      }
      reportList.value = response.data.data;
      reportCnt.value = response.data.data ? response.data.data.length : 0;
    })
    .catch((error: Error) => {
      vm.$alert(JSON.stringify(error));
    })
    .finally(() => {
      loaded.value = true;
    });
};
/* R: 과제 상세 조회 */
const getReportInfoAxios = (keyId: number) => {
  const _url: string = "/api/prof/EcpReport/getReportDetailData";
  const param: object = {
    keyId: keyId,
  }; //나중에 강의실 키나 차수 키 같은거 넣어야함
  loaded.value = false;
  /* Axios 통신 */
  vm.$axios
    .get(_url, { params: param })
    .then((response: AxiosResponse) => {
      const stsCd = response.data.code;
      /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
      if (stsCd != 200) {
        throw new Error();
      }
      getReportInfo.value = response.data.data;
      listSts.value = false;
      regSts.value = false;
      overViewSts.value = true;
    })
    .catch((error: Error) => {
      vm.$alert(JSON.stringify(error));
    })
    .finally(() => {
      loaded.value = true;
    });
};
/* D: 과제 삭제 */
const deleteReport = (keyId: number) => {
  vm.$confirm("선택한 과제를 삭제하시겠습니까?", "확인", (isComfirm: boolean) => {
    if (isComfirm) {
      const _url: string = "/api/prof/EcpReport/removeReport";
      const param: object = {
        keyId: keyId,
      };
      loaded.value = false;
      /** Axios 통신 */
      vm.$axios
        .post(_url, param)
        .then((response: AxiosResponse) => {
          const stsCd = response.data.code;
          /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
          if (stsCd != 200) {
            throw new Error();
          }
          const success = response.data.data;
          if (success) {
            vm.$alert("과제 삭제를 성공하였습니다.");
            getReportListAxios();
          } else {
            vm.$alert("과제 삭제를 실패하였습니다.");
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
function moveExamRegPage() {
  listSts.value = false;
  overViewSts.value = false;
  regSts.value = true;
}
function moveExamOverview(keyId: number) {
  getReportInfoAxios(keyId);
}
function moveExamListPage() {
  getReportListAxios();
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
  listSts.value = true;
  regSts.value = false;
  overViewSts.value = false;
}
/*  */
/** 호이스팅으로 인한 provide 선언 */
provide("eccDivCd", prop.eccDivCd);
</script>
