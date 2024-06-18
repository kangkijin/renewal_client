<template>
  <!-- <Loading /> -->
  <div class="page_wrap prof">
    <div class="skip_nav">
      <a href="#gnb_skip">주요메뉴 바로가기</a>
      <a href="#container_skip">본문영역 바로가기</a>
    </div>
    <!-- header -->
    <prof-header />

    <!-- main -->
    <main>
      <router-view></router-view>
    </main>

    <!-- footer -->
    <prof-footer />
  </div>
</template>

<script>
import { ProfHeader, ProfFooter } from "./items/TemplateImport";

export default {
  components: {
    ProfHeader,
    ProfFooter,
  },
  mounted: function () {},
};
</script>
