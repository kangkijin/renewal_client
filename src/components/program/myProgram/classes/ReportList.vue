<template>
  <div v-if="listSts" class="myprogram_wrapper">
    <div class="myclassroom_wrapper">
      <ProgramSidebar />
      <div class="myclass_wrap">
        <div class="myclass_header">
          <div class="quick_move">
            <button @click="onClickPrevMenu(idx)" class="btn_icon icon_only arrow_prev_white">이전탭</button>
            <p class="tab_title">과제</p>
            <button @click="onClickNextMenu(idx)" class="btn_icon icon_only arrow_next_white">다음탭</button>
          </div>
          <div class="count">
            <p>과제 수</p>
            <strong>4</strong>
          </div>
          <div class="progress">
            <p>누적점수</p>
            <strong>28.0</strong>
            <p class="mg_l5">점</p>
          </div>
        </div>
        <div class="sub_section">
          <!-- [pp] 내용 없을때 -->
          <!-- <div class="no_lesson">
                  <p class="font_gray">진행중인 과제가 없습니다.</p>
                </div> -->
          <div class="myclass_listwrap">
            <ul class="lesson_list">
              <li>
                <div class="schedule">
                  <p>1차 과제</p>
                  <!-- 과제 종류에 따른 라벨
                          팀 과제 : yellow
                          과제 : orange
                        -->
                  <span class="lesson_label yellow">팀 과제</span>
                </div>
                <div class="name">
                  <div class="name_wrap">
                    <div>
                      <strong class="float_label"><span>(비중 25%)</span></strong>
                      1차 팀 과제
                    </div>
                  </div>
                  <p class="date">2024.09.10 12:00 ~ 2024.10.01 12:00</p>
                </div>
                <div class="test_status font_gray">
                  <!-- 미실시일때만 font_gray 추가
                        <p>92<span>점</span></p>
                        <p>채점 중</p>
                        <p class="font_gray">미실시</p>
                        -->
                  <p>미실시</p>
                </div>
                <div class="link">
                  <router-link to="" class="btn_starttest btn_icon icon_only disabled"> 시험 바로가기 </router-link>
                </div>
              </li>
              <li>
                <div class="schedule">
                  <p>2차 과제</p>
                  <!-- 과제 종류에 따른 라벨
                          팀 과제 : yellow
                          과제 : orange
                        -->
                  <span class="lesson_label yellow">팀 과제</span>
                </div>
                <div class="name">
                  <div class="name_wrap">
                    <div>
                      <strong class="float_label"><span>(비중 25%)</span></strong>
                      2차 팀 과제
                    </div>
                  </div>
                  <p class="date">2024.09.10 12:00 ~ 2024.10.01 12:00</p>
                </div>
                <div class="test_status">
                  <!-- 미실시일때만 font_gray 추가
                        <p>92<span>점</span></p>
                        <p>채점 중</p>
                        <p class="font_gray">미실시</p>
                        -->
                  <p>100<span>점</span></p>
                </div>
                <div class="link">
                  <router-link to="" class="btn_starttest btn_icon icon_only disabled"> >시험 바로가기</router-link>
                </div>
              </li>
              <li>
                <div class="schedule">
                  <p>3차 과제</p>
                  <!-- 과제 종류에 따른 라벨
                          팀 과제 : yellow
                          과제 : orange
                        -->
                  <span class="lesson_label orange">과제</span>
                </div>
                <div class="name">
                  <div class="name_wrap">
                    <div>
                      <strong class="float_label"><span>(비중 25%)</span></strong>
                      3차 개인 과제
                    </div>
                  </div>
                  <p class="date">2024.09.10 12:00 ~ 2024.10.01 12:00</p>
                </div>
                <div class="test_status">
                  <!-- 미실시일때만 font_gray 추가
                        <p>92<span>점</span></p>
                        <p>채점 중</p>
                        <p class="font_gray">미실시</p>
                        -->
                  <p>채점 중</p>
                </div>
                <div class="link">
                  <router-link to="" class="btn_starttest btn_icon icon_only disabled"> >시험 바로가기</router-link>
                </div>
              </li>
              <li>
                <div class="schedule">
                  <p>종합 과제</p>
                  <!-- 과제 종류에 따른 라벨
                          팀 과제 : yellow
                          과제 : orange
                        -->
                  <span class="lesson_label orange">과제</span>
                </div>
                <div class="name">
                  <div class="name_wrap">
                    <div>
                      <strong class="float_label"><span>(비중 25%)</span></strong>
                      종합 과제
                    </div>
                  </div>
                  <p class="date">2024.09.10 12:00 ~ 2024.10.01 12:00</p>
                </div>
                <div class="test_status">
                  <!-- 미실시일때만 font_gray 추가
                        <p>92<span>점</span></p>
                        <p>채점 중</p>
                        <p class="font_gray">미실시</p>
                        -->
                  <p>채점 중</p>
                </div>
                <div class="link">
                  <!-- 미실시 disabled 추가 -->
                  <button type="button" class="btn_starttest btn_icon icon_only" @click="moveExamOverview()">
                    시험 바로가기
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <CommentList :eliId="9999" :eccDivCd="'HMWRK'"></CommentList>
      </div>
    </div>
  </div>
  <ReportIntro v-if="overViewSts"></ReportIntro>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import ProgramSidebar from "@/components/program/myProgram/classes/ProgramSidebar.vue";
import ReportIntro from "@/components/program/myProgram/classes/details/ReportIntro.vue";
import CommentList from "@/components/program/myProgram/classes/CommentList.vue";
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
