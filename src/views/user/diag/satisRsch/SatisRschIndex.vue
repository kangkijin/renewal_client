<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">진단 · 조사 · 시험</h2>
        <div class="title_function">
          <div class="radio_tab_wrap">
            <p class="radio_tab inline">
              <input type="radio" id="radio1" name="radio_program" @click="onClickCoreAbility()" />
              <label for="radio1">핵심역량진단</label>
            </p>
            <p class="radio_tab inline">
              <input type="radio" id="radio2" name="radio_program" @click="onClickMajorAbility()" />
              <label for="radio2">전공능력진단</label>
            </p>
            <p class="radio_tab inline">
              <input type="radio" id="radio3" name="radio_program" @click="onClickSurveyRsch()" />
              <label for="radio3">설문조사</label>
            </p>
            <p class="radio_tab inline">
              <input type="radio" id="radio4" name="radio_program" @click="onClickSatisRsch()" checked />
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
        <SatisList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IntroGuide from "@/components/diag/satisRsch/IntroGuide.vue";
import SatisList from "@/components/diag/satisRsch/SatisList.vue";

export default {
  components: {
    IntroGuide,
    SatisList,
  },
  methods: {
    onClickCoreAbility() {
      this.$router.push("/user/diag/coreAbility");
    },
    onClickMajorAbility() {
      this.$router.push("/user/diag/majorAbility");
    },
    onClickSurveyRsch() {
      this.$router.push("/user/diag/surveyRsch");
    },
    onClickSatisRsch() {
      this.$router.push("/user/diag/satisRsch");
    },
    onClickExam() {
      this.$router.push("/user/diag/examination");
    },
  },
};
</script>
