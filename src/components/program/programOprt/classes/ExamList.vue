<template>
  <div v-if="listSts" class="myprogram_wrapper">
    <div class="myclassroom_wrapper">
      <ProfProgramSidebar></ProfProgramSidebar>
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
          <div class="list_btn">
            <button type="button" class="btn_icon myprogram" @click="moveExamRegPage()">시험등록</button>
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
                  <button type="button" class="delete">삭제</button>
                </div>
                <div class="link">
                  <button type="button" class="btn_starttest btn_icon icon_only" @click="moveExamOverview()">
                    시험 바로가기
                  </button>
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
                  <button type="button" class="delete">삭제</button>
                </div>
                <div class="link">
                  <button type="button" class="btn_starttest btn_icon icon_only" @click="moveExamOverview()">
                    시험 바로가기
                  </button>
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
                  <button type="button" class="delete">삭제</button>
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
    </div>
  </div>
  <ExamReg v-if="regSts"></ExamReg>
  <ExamIntro v-if="overViewSts"></ExamIntro>
</template>

<script setup lang="ts">
import CommentList from "@/components/program/programOprt/classes/CommentList.vue";
import { inject, provide, ref } from "vue";
import ProfProgramSidebar from "@/components/program/programOprt/classes/ProfProgramSidebar.vue";
import ExamIntro from "@/components/program/programOprt/classes/datails/ExamIntro.vue";
import ExamReg from "@/components/program/programOprt/classes/datails/ExamReg.vue";

const prop = defineProps({
  idx: { type: Number, required: true },
  menuName: { type: String, required: true },
  eliId: { type: Number, required: true, default: 9999 },
  eccDivCd: { type: String, required: true },
});

const onClickPrevMenu = inject("onClickPrevMenu");
const onClickNextMenu = inject("onClickNextMenu");

let listSts = ref<boolean>(true);
let regSts = ref<boolean>(false);
let overViewSts = ref<boolean>(false);
function moveExamRegPage() {
  listSts.value = false;
  regSts.value = true;
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
