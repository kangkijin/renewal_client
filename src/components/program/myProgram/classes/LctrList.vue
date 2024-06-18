<template>
  <div class="myprogram_wrapper">
    <div class="myclassroom_wrapper">
      <ProgramSidebar />

      <div class="myclass_wrap">
        <div class="myclass_header">
          <div class="quick_move">
            <button @click="onClickPrevMenu(idx)" class="btn_icon icon_only arrow_prev_white">이전탭</button>
            <p class="tab_title">강의실</p>
            <button @click="onClickNextMenu(idx)" class="btn_icon icon_only arrow_next_white">다음탭</button>
          </div>
          <div class="count">
            <p>강의 수</p>
            <strong>12</strong>
          </div>
          <div class="progress">
            <p>진도율</p>
            <strong>41.0<i>%</i></strong>
          </div>
        </div>
        <div v-if="listSts" class="sub_section">
          <!-- [pp] 내용 없을때 -->
          <div v-if="lctrList.length === 0" class="no_lesson">
            <p class="font_gray">진행중인 강의가 없습니다.</p>
          </div>

          <div v-else class="myclass_listwrap">
            <ul class="lesson_list">
              <li v-for="lctr in lctrList" :key="lctr.강의_상세_키">
                <div class="schedule">
                  <p>{{ lctr.강의_회차 }}회차</p>

                  <span class="lesson_label" :class="fnLctrDivClass(lctr.강의_종류_코드)">{{ lctr.강의_종류 }}</span>
                </div>
                <div class="name">
                  <div class="name_wrap">
                    <div>
                      <strong class="float_label">
                        <span v-if="lctr.강의_시간 != '' && lctr.강의_시간 != null">({{ lctr.강의_시간 }})</span>
                      </strong>
                      {{ lctr.강의_명 }}
                    </div>
                  </div>
                </div>
                <div class="progress" v-if="lctr.강의_종류_코드 === 'Y' || lctr.강의_종류_코드 === 'V'">
                  {{ lctr.강의_진행도 }}<strong>%</strong>
                </div>
                <div class="status" v-if="lctr.강의_종류_코드 === 'Y' || lctr.강의_종류_코드 === 'V'">
                  <p :class="lctr.강의_수강_여부 === 'Y' ? 'font_navy' : 'font_red'">{{ lctr.강의_진행상태 }}</p>
                </div>
                <div class="link" v-if="lctr.강의_종류_코드 === 'Y' || lctr.강의_종류_코드 === 'V'">
                  <button class="btn_playlesson" @click="moveExamOverview()">
                    <div class="img_wrap">
                      <img src="@/assets/images/program/img_program_thumbnail.png" alt="비교과 이미지" />
                    </div>
                    <p class="progressbar">
                      <!-- [pp] 진행도 wd_p0 ~ wd_p100 으로 조절 -->
                      <span :class="`wd_p${lctr.강의_진행도}`"></span>
                    </p>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <LctrIntro v-if="classSts"></LctrIntro>
        <CommentList :eliId="9999" :eccDivCd="'LCTR'"></CommentList>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { letterCount } from "@/assets/js/common";
import ProgramSidebar from "@/components/program/myProgram/classes/ProgramSidebar.vue";

// TODO 삭제예정
import testData from "./_lctrData";
import CommentList from "@/components/program/myProgram/classes/CommentList.vue";
import { ref } from "vue";
import LctrIntro from "@/components/program/programOprt/classes/datails/LctrIntro.vue";
export default {
  components: { LctrIntro, CommentList, ProgramSidebar },
  props: {
    idx: { type: Number, required: true },
    onClickNextMenu: { type: Function, required: true },
    onClickPrevMenu: { type: Function, required: true },
  },
  data: () => ({
    lctrList: [],
    listSts: true,
    classSts: false,
  }),
  created() {
    this.fnGetLctrList();
  },
  mounted() {
    letterCount();
  },
  methods: {
    moveExamListPage() {
      window.scrollTo({
        top: 0,
        behavior: "instant",
      });
      this.listSts = true;
      this.classSts = false;
    },
    moveExamOverview(emmId?: number) {
      this.listSts = false;
      this.classSts = true;
    },
    fnLctrDivClass(_div) {
      let className = "";
      switch (_div) {
        case "V":
          className = "gray";
          break;
        case "Y":
          className = "red";
          break;
        case "Z":
          className = "blue";
          break;
        case "F":
          className = "navy";
          break;
      }
      return className;
    },

    onClickNavLctrDetail(_key) {
      const vm = this;
      vm.$parent.$data.detailKey = _key;
      vm.$parent.$data.activeMenu.id = "LctrDetail";
    },

    fnGetLctrList() {
      const vm = this;
      // 강의종류코드
      // V: 동영상(비디오), Y: 유튜브, Z: 줌, F: 오프라인
      vm.lctrList = testData;
    },
  },
};
</script>
