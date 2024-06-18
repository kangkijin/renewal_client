<template>
  <div class="operator_tab_wrap">
    <p class="operator_tab">
      <input type="radio" name="operator_tab" id="operator1_1" class="hidden" value="menu" v-model="activeTab" />
      <label for="operator1_1">사용 메뉴 설정</label>
    </p>
    <p class="operator_tab">
      <input type="radio" name="operator_tab" id="operator1_2" class="hidden" value="stndr" v-model="activeTab" />
      <label for="operator1_2">이수 기준 설정</label>
    </p>
    <p class="operator_tab">
      <input type="radio" name="operator_tab" id="operator1_3" class="hidden" value="perm" v-model="activeTab" />
      <label for="operator1_3">운영자 권한 공유</label>
    </p>
  </div>

  <MenuSetup v-if="activeTab === 'menu'" />
  <StndrSetup v-if="activeTab === 'stndr'" />
  <OprtrRermShare v-if="activeTab === 'perm'" />
</template>
<script lang="ts">
import * as SetupComponent from "./tab/classSetupImport";
export default {
  components: SetupComponent,
  data: () => ({
    activeTab: "menu",
  }),
};
</script>
