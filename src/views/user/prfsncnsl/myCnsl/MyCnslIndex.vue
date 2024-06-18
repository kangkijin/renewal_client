<template>
  <div class="content_wrap prfsn_cnsl">
    <div class="grid_content">
      <PrfsncnslHeader v-model="menuType"></PrfsncnslHeader>
    </div>
    <div class="grid_content">
      <div class="sm_section">
        <GuideBox :type="menuType">나의 상담내역</GuideBox>
      </div>
      <div class="sub_section">
        <DetailList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PrfsncnslHeader from "@/components/prfsncnsl/PrfsncnslHeader.vue";
import GuideBox from "@/components/common/GuideBox.vue";
import DetailList from "@/components/prfsncnsl/myCnsl/DetailList.vue";

export default {
  components: {
    GuideBox,
    DetailList,
    PrfsncnslHeader,
  },
  data: function () {
    return {
      menuType: "my_cnsl",
    };
  },
};
</script>
