<template>
  <div v-if="listSts || classSts" class="myprogram_wrapper">
    <div class="myclassroom_wrapper">
      <ProfProgramSidebar></ProfProgramSidebar>
      <div class="myclass_wrap">
        <div class="myclass_header">
          <div class="quick_move">
            <button @click="onClickPrevMenu(idx)" class="btn_icon icon_only arrow_prev_white">이전탭</button>
            <p class="tab_title">{{ menuName }}</p>
            <button @click="onClickNextMenu(idx)" class="btn_icon icon_only arrow_next_white">다음탭</button>
          </div>
          <div v-if="!classSts" class="count">
            <p>강의 수</p>
            <strong>12</strong>
          </div>
          <template v-if="!classSts">
            <div class="list_btn">
              <button type="button" class="btn_icon myprogram" @click="moveExamRegPage()">강의등록</button>
            </div>
          </template>
          <template v-else>
            <div class="list_btn">
              <button type="button" class="btn_icon myprogram" @click="moveExamListPage()">강의목록</button>
            </div>
          </template>
        </div>
        <template v-if="listSts">
          <div class="sub_section">
            <div class="myclass_listwrap operator">
              <ul class="lesson_list">
                <li>
                  <div class="schedule">
                    <p>1회차</p>
                    <!-- 수업 종류에 따른 라벨
                      동영상 : gray
                      ZOOM : blue
                      유튜브 : red
                      오프라인 : navy
                    -->
                    <span class="lesson_label gray">동영상</span>
                  </div>
                  <div class="name">
                    <div class="name_wrap">
                      <div>
                        <strong class="float_label"><span>(1:10:55)</span></strong> AI 알고리즘의 이해 AI 알고리즘의
                        이해 AI 알고리즘의 이해 AI 알고리즘의 이해
                      </div>
                    </div>
                  </div>
                  <div class="oprtr_delete">
                    <button type="button" class="delete">삭제</button>
                  </div>
                  <div class="link">
                    <button class="btn_playlesson" @click="moveExamOverview()">
                      <div class="img_wrap">
                        <img src="@/assets/images/program/img_program_thumbnail.png" alt="비교과 이미지" />
                      </div>
                      <p class="progressbar">
                        <span class="wd_p100"></span>
                      </p>
                    </button>
                  </div>
                </li>
                <li>
                  <div class="schedule">
                    <p>2회차</p>
                    <!-- 수업 종류에 따른 라벨
                      동영상 : gray
                      ZOOM : blue
                      유튜브 : red
                      오프라인 : navy
                    -->
                    <span class="lesson_label gray">동영상</span>
                  </div>
                  <div class="name">
                    <div class="name_wrap">
                      <div>
                        <strong class="float_label"><span>(1:10:55)</span></strong> AI 알고리즘의 이해
                      </div>
                    </div>
                  </div>
                  <div class="oprtr_delete">
                    <button type="button" class="delete">삭제</button>
                  </div>
                  <div class="link">
                    <button class="btn_playlesson" @click="moveExamOverview()">
                      <div class="img_wrap">
                        <img src="@/assets/images/program/img_program_thumbnail.png" alt="비교과 이미지" />
                      </div>
                      <p class="progressbar">
                        <span class="wd_p100"></span>
                      </p>
                    </button>
                  </div>
                </li>
                <li>
                  <div class="schedule">
                    <p>3회차</p>
                    <!-- 수업 종류에 따른 라벨
                      동영상 : gray
                      ZOOM : blue
                      유튜브 : red
                      오프라인 : navy
                    -->
                    <span class="lesson_label gray">동영상</span>
                  </div>
                  <div class="name">
                    <div class="name_wrap">
                      <div>
                        <strong class="float_label"><span>(1:10:55)</span></strong> AI 알고리즘의 이해
                      </div>
                    </div>
                  </div>
                  <div class="oprtr_delete">
                    <button type="button" class="delete">삭제</button>
                  </div>
                  <div class="link">
                    <button class="btn_playlesson" @click="moveExamOverview()">
                      <div class="img_wrap">
                        <img src="@/assets/images/program/img_program_thumbnail.png" alt="비교과 이미지" />
                      </div>
                      <p class="progressbar">
                        <span class="wd_p100"></span>
                      </p>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </template>
        <LctrIntro v-if="classSts"></LctrIntro>
        <CommentList :eliId="eliId" :eccDivCd="eccDivCd"></CommentList>
      </div>
    </div>
  </div>
  <LctrReg v-if="regSts"></LctrReg>
</template>
<script setup lang="ts">
import { inject, provide, ref } from "vue";
import ProfProgramSidebar from "@/components/program/programOprt/classes/ProfProgramSidebar.vue";
import CommentList from "@/components/program/programOprt/classes/CommentList.vue";
import LctrReg from "@/components/program/programOprt/classes/datails/LctrReg.vue";
import LctrIntro from "@/components/program/programOprt/classes/datails/LctrIntro.vue";

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
let classSts = ref<boolean>(false);
function moveExamRegPage() {
  listSts.value = false;
  regSts.value = true;
  classSts.value = false;
}
function moveExamOverview(emmId?: number) {
  listSts.value = false;
  regSts.value = false;
  classSts.value = true;
}
function moveExamListPage() {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
  listSts.value = true;
  regSts.value = false;
  classSts.value = false;
}
provide("moveExamListPage", moveExamListPage);
</script>
