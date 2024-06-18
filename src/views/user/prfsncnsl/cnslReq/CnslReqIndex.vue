<template>
  <div class="content_wrap prfsn_cnsl">
    <div class="grid_content">
      <PrfsncnslHeader v-model="menuType"></PrfsncnslHeader>
    </div>
    <div class="grid_content">
      <div class="sub_section">
        <GuideBox :type="menuType">
          상담신청
          <template #subTitle>
            성공적인 사회 진출 및 학교 생황을 위하여 진로, 취업, 학업, 심리, 글쓰기 등에 대한<br />
            고민과 어려움을 교수님, 전문상담원과 상담할 수 있도록 하기 위하여 실시하고 있습니다.
          </template>
        </GuideBox>
        <GuideDetail />
      </div>
      <div class="sub_section">
        <CnslReqStep />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PrfsncnslHeader from "@/components/prfsncnsl/PrfsncnslHeader.vue";
import GuideBox from "@/components/common/GuideBox.vue";
import GuideDetail from "@/components/prfsncnsl/cnslReq/GuideDetail.vue";
import CnslReqStep from "@/components/prfsncnsl/cnslReq/CnslReqStep.vue";

export default {
  components: {
    PrfsncnslHeader,
    GuideBox,
    GuideDetail,
    CnslReqStep,
  },
  props: ["value"],
  data: function () {
    return {
      menuType: "cnsl_req",
    };
  },
};
</script>
