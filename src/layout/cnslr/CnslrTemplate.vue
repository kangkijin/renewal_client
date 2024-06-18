<template>
  <!-- <Loading /> -->
  <div class="page_wrap cnslr">
    <div class="skip_nav">
      <a href="#gnb_skip">주요메뉴 바로가기</a>
      <a href="#container_skip">본문영역 바로가기</a>
    </div>
    <!-- header -->
    <cnslr-header />

    <!-- main -->
    <main>
      <router-view></router-view>
    </main>

    <!-- footer -->
    <cnslr-footer />
  </div>
</template>

<script>
import { CnslrHeader, CnslrFooter } from "./items/TemplateImport";

export default {
  components: {
    CnslrHeader,
    CnslrFooter,
  },
  mounted: function () {},
};
</script>
