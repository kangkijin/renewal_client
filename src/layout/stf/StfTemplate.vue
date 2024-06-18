<template>
  <!-- <Loading /> -->
  <div class="page_wrap stf">
    <div class="skip_nav">
      <a href="#gnb_skip">주요메뉴 바로가기</a>
      <a href="#container_skip">본문영역 바로가기</a>
    </div>
    <!-- header -->
    <stf-header />

    <!-- main -->
    <main>
      <router-view></router-view>
    </main>

    <!-- footer -->
    <stf-footer />
  </div>
</template>

<script>
import { StfHeader, StfFooter } from "./items/TemplateImport";

export default {
  components: {
    StfHeader,
    StfFooter,
  },
  mounted: function () {},
};
</script>
