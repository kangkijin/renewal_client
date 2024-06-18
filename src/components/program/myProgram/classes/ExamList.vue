<template>
  <div v-if="listSts" class="myprogram_wrapper">
    <div class="myclassroom_wrapper">
      <ProgramSidebar />
      <div class="myclass_wrap">
        <div class="myclass_header">
          <div class="quick_move">
            <button @click="onClickPrevMenu(idx)" class="btn_icon icon_only arrow_prev_white">이전탭</button>
            <p class="tab_title">{{ menuName }}</p>
            <button @click="onClickNextMenu(idx)" class="btn_icon icon_only arrow_next_white">다음탭</button>
          </div>
          <div class="count">
            <p>시험 수</p>
            <strong>3</strong>
          </div>
          <div class="progress">
            <p>누적점수</p>
            <strong>
              28.0
              <i>점</i>
            </strong>
          </div>
        </div>
        <div class="sub_section">
          <div class="myclass_listwrap operator">
            <ul class="lesson_list">
              <li>
                <div class="schedule">
                  <p>1회차</p>
                  <span class="lesson_label green">시험</span>
                </div>
                <div class="name">
                  <div class="name_wrap">
                    <div>
                      <strong class="float_label"><span>(비중 33%)</span></strong>
                      1회차 비교과 시험
                    </div>
                  </div>
                  <p class="date">2024.09.10 12:00 ~ 2024.10.01 12:00</p>
                </div>
                <div class="oprtr_delete">
                  <span class="delete font_gray">미실시</span>
                </div>
                <div class="link">
                  <router-link to="" class="btn_starttest btn_icon icon_only disabled">시험 바로가기</router-link>
                </div>
              </li>
              <li>
                <div class="schedule">
                  <p>2회차</p>
                  <span class="lesson_label green">시험</span>
                </div>
                <div class="name">
                  <div class="name_wrap">
                    <div>
                      <strong class="float_label"><span>(비중 33%)</span></strong>
                      2회차 비교과 시험
                    </div>
                  </div>
                  <p class="date">2024.09.10 12:00 ~ 2024.10.01 12:00</p>
                </div>
                <div class="oprtr_delete">
                  <span class="delete">완료</span>
                </div>
                <div class="link">
                  <router-link to="" class="btn_starttest btn_icon icon_only disabled">시험 바로가기</router-link>
                </div>
              </li>
              <li>
                <div class="schedule">
                  <p>3회차</p>
                  <span class="lesson_label green">시험</span>
                </div>
                <div class="name">
                  <div class="name_wrap">
                    <div>
                      <strong class="float_label"><span>(비중 33%)</span></strong>
                      3회차 비교과 시험
                    </div>
                  </div>
                  <p class="date">2024.09.10 12:00 ~ 2024.10.01 12:00</p>
                </div>
                <div class="oprtr_delete">
                  <span class="delete">진행중</span>
                </div>
                <div class="link">
                  <button type="button" class="btn_starttest btn_icon icon_only" @click="moveExamOverview()">
                    시험 바로가기
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <CommentList :eliId="eliId" :eccDivCd="eccDivCd"></CommentList>
      </div>
      <!-- <ClassCmmnEduAct
      :idx="idx"
      :menuName="menuName"
      :eliId="eliId"
      :totalCnt="examDataCnt"
      :calculValue="examAccum"
      :dataList="examDataList"
    >
    </ClassCmmnEduAct>-->
    </div>
  </div>
  <ExamIntro v-if="regSts"></ExamIntro>
  <ExamIntro v-if="overViewSts"></ExamIntro>
</template>

<script setup lang="ts">
import ProgramSidebar from "@/components/program/myProgram/classes/ProgramSidebar.vue";
import CommentList from "@/components/program/myProgram/classes/CommentList.vue";
import ExamIntro from "@/components/program/myProgram/classes/details/ExamIntro.vue";
import { provide, ref } from "vue";

// eslint-disable-next-line no-unused-vars
const prop = defineProps({
  idx: { type: Number, required: true },
  menuName: { type: String, required: true },
  eliId: { type: Number, required: true, default: 9999 },
  eccDivCd: { type: String, required: true },
  onClickNextMenu: { type: Function, required: true },
  onClickPrevMenu: { type: Function, required: true },
});
let listSts = ref<boolean>(true);
let regSts = ref<boolean>(false);
let overViewSts = ref<boolean>(false);
/*
import ProgramSidebar from "@/components/program/myProgram/classes/ProgramSidebar.vue";
import ClassCmmnEduAct from "@/components/program/myProgram/classes/ClassCmmnEduAct.vue";
import { onBeforeMount, provide, ref } from "vue";
import axios, { type AxiosResponse } from "axios";
import ExamDetail from "@/components/program/myProgram/classes/details/ExamReg.vue";
/!** prop / 변수 모음 *!/
const prop = defineProps({
  idx: { type: Number, required: true },
  menuName: { type: String, required: true },
  eliId: { type: Number, required: true, default: 9999 },
  eccDivCd: { type: String, required: true },
});

const examDataCnt = ref<number | undefined>(); /!** 전체 시험 수 *!/
const examAccum = ref<number | undefined>(); /!** 시험 누적 점수 *!/
const examDataList = ref<object[]>([]); /!** 시험 데이터 목록 *!/
/!** 훅의 영역 *!/
onBeforeMount(() => {
  getExamDataList();
});
/!** 메소드 영역 *!/
/!** 시험 데이터 목록 조회 *!/
const getExamDataList = () => {
  const _url: string = "/api/v1/getExamList";
  const param: object = {
    rootId: prop.eliId,
  };
  /!** Axios 통신 *!/
  axios
    .get(_url, { params: param })
    .then((response: AxiosResponse) => {
      const stsCd = response.data.code;
      /!** 상태코드가 200이 아니면 (예: 300 류) 에러호출 *!/
      if (stsCd != 200) {
        throw new Error();
      }
      examDataList.value = response.data.data;
      examDataCnt.value = response.data.data ? response.data.data.length : undefined;
      //examAccum.value =
    })
    .catch((error: Error) => {
      alert(JSON.stringify(error));
    });
};
/!** 누적점수 계산 *!/
/!** 호이스팅으로 인한 provide 선언 영역 *!/
provide("eccDivCd", prop.eccDivCd);
*/

/*import moment from "moment";
import { letterCount } from "@/assets/js/common";
import ProgramSidebar from "@/components/program/myProgram/classes/ProgramSidebar.vue";
import CommentList from "@/components/program/myProgram/classes/CommentList.vue";*/
/*import testData from "./_examData";

export default {
  components: { CommentList, ProgramSidebar },
  props: {
    idx: { type: Number, required: true },
  },
  data: () => ({
    examList: [],
  }),
  created() {
    this.fnGetExamList();
  },
  mounted() {
    letterCount();
  },
  methods: {
    moment,

    fnGetExamList() {
      const vm = this;
      vm.examList = testData;
    },

    onClickNavExamDetail(_cd, _key) {
      const vm = this;
      // 완료
      if (_cd === "CD01") {
        vm.$alert("준비 중 입니다.");
      }
      // 미실시 (진행 전)
      else if (_cd === "CD03") {
        vm.$parent.$data.detailKey = _key;
        vm.$parent.$data.activeMenu.id = "ExamIntro";
      }
    },
  },
};*/
function moveExamRegPage() {
  listSts.value = !listSts.value;
  regSts.value = false;
  overViewSts.value = false;
}
function moveExamOverview(emmId?: number) {
  listSts.value = false;
  regSts.value = false;
  overViewSts.value = true;
}
function moveExamListPage() {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
  listSts.value = true;
  regSts.value = false;
  overViewSts.value = false;
}
provide("moveExamListPage", moveExamListPage);
</script>
