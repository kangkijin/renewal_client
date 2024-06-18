<template>
  <div class="content_wrap diag_page">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">진단 · 조사 · 시험</h2>
        <div class="title_function">
          <div class="radio_tab_wrap">
            <p class="radio_tab inline">
              <input type="radio" id="radio1" name="radio_program" @click="onClickProfAbility()" checked />
              <label for="radio1">교수역량진단</label>
            </p>
            <p class="radio_tab inline">
              <input type="radio" id="radio3" name="radio_program" @click="onClickSurveyRsch()" />
              <label for="radio3">설문조사</label>
            </p>
            <p class="radio_tab inline">
              <input type="radio" id="radio4" name="radio_program" @click="onClickSatisRsch()" />
              <label for="radio4">만족도조사</label>
            </p>
            <p class="radio_tab inline">
              <input type="radio" id="radio5" name="radio_program" @click="onClickExam()" />
              <label for="radio5">시험</label>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid_content">
      <div class="sm_section">
        <IntroGuide />
      </div>
      <div class="sub_section">
        <TestDoResult />
      </div>
      <div class="sub_section">
        <div class="radio_black_txt_wrap xs">
          <p class="radio_black_txt">
            <input type="radio" name="radio_black_txt2" id="radio_black2_1" checked />
            <label for="radio_black2_1"></label>
          </p>
        </div>
        <ProfAbilityList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IntroGuide from "@/components/diag/profAbility/IntroGuide.vue";
import TestDoResult from "@/components/diag/profAbility/TestDoResult.vue";
import ProfAbilityList from "@/components/diag/profAbility/ProfAbilityList.vue";

export default {
  components: {
    IntroGuide,
    TestDoResult,
    ProfAbilityList,
  },
  methods: {
    onClickProfAbility() {
      this.$router.push("/prof/diag/profAbility");
    },
    onClickSurveyRsch() {
      this.$router.push("/prof/diag/surveyRsch");
    },
    onClickSatisRsch() {
      this.$router.push("/prof/diag/satisRsch");
    },
    onClickExam() {
      this.$router.push("/prof/diag/examination");
    },
  },
};
</script>
