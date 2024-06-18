<template>
  <div class="content_wrap diag_page">
    <div class="grid_content">
      <DiagHeader v-model="menuType"></DiagHeader>
    </div>
    <div class="grid_content">
      <div class="sm_section">
        <GuideBox :type="menuType">
          핵심역량진단이란
          <template #subTitle>
            우리대학에서 설정한<br />
            6대 핵심역량의 수준을 측정하는 검사입니다
          </template>
        </GuideBox>
        <GuideDetail></GuideDetail>
      </div>
      <div class="sub_section">
        <DiagSection></DiagSection>
      </div>

      <div class="sub_section">
        <div class="radio_black_txt_wrap xs">
          <p class="radio_black_txt">
            <input type="radio" v-model="listRadio" id="ecpList" value="ecpList" />
            <label for="ecpList">추천비교과</label>
          </p>
          <p class="radio_black_txt">
            <input type="radio" v-model="listRadio" id="curriList" value="curriList" />
            <label for="curriList">추천 교양(교과)</label>
          </p>
        </div>
        <template v-if="listRadio == 'ecpList'">
          <ecp-list />
        </template>
        <template v-if="listRadio == 'curriList'">
          <curri-list />
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import EcpList from "@/components/diag/coreAbility/EcpList.vue";
import CurriList from "@/components/diag/coreAbility/CurriList.vue";

import DiagHeader from "@/components/diag/DiagHeader.vue";
import GuideBox from "@/components/common/GuideBox.vue";
import GuideDetail from "@/components/diag/coreAbility/GuideDetail.vue";
import DiagSection from "@/components/diag/coreAbility/DiagSection.vue";

export default {
  components: {
    DiagHeader,
    GuideBox,
    GuideDetail,
    DiagSection,
    EcpList,
    CurriList,
  },
  data: () => ({
    menuType: "core_ability",
    listRadio: "ecpList",
  }),
  methods: {
    onClickMoveMenu(name: string) {
      const vm = this;
      vm.$router.push(`/user/diag/${name}`);
    },
  },
};
</script>
