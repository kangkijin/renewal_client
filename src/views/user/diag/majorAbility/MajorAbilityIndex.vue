<template>
  <div class="content_wrap">
    <div class="grid_content">
      <DiagHeader v-model="menuType"></DiagHeader>
    </div>
    <div class="grid_content">
      <div class="sub_section">
        <GuideBox :type="menuType">
          전공능력진단이란
          <template #subTitle>
            학과별로 설정되어 있는 전공능력을<br />
            스스로 진단해보고 나의 강점과 약점을 정확하게 파악해 자기계발의 방향성을 정하는 검사입니다.
          </template>
        </GuideBox>
        <GuideDetail></GuideDetail>
      </div>
      <div class="sub_section">
        <TestDoResult />
      </div>
      <div class="sub_section">
        <div class="radio_black_txt_wrap xs">
          <p class="radio_black_txt">
            <input type="radio" name="radio_black_txt" id="radio_black_1" checked />
            <label for="radio_black_1">추천교과(전공)</label>
          </p>
        </div>
        <curri-list />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TestDoResult from "@/components/diag/majorAbility/TestDoResult.vue";
import CurriList from "@/components/diag/majorAbility/CurriList.vue";

import DiagHeader from "@/components/diag/DiagHeader.vue";
import GuideBox from "@/components/common/GuideBox.vue";
import GuideDetail from "@/components/diag/majorAbility/GuideDetail.vue";

export default {
  components: {
    DiagHeader,
    GuideBox,
    GuideDetail,
    TestDoResult,
    CurriList,
  },
  data: () => ({
    menuType: "major_ability",
  }),
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
