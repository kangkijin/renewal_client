<template>
  <!-- <Loading /> -->
  <div class="page_wrap user">
    <div class="skip_nav">
      <a href="#gnb_skip">주요메뉴 바로가기</a>
      <a href="#container_skip">본문영역 바로가기</a>
    </div>
    <!-- header -->
    <user-header />

    <!-- main -->
    <main>
      <router-view />
    </main>

    <!-- footer -->
    <user-footer />
  </div>
</template>

<script>
import { UserHeader, UserFooter } from "./items/TemplateImport";

export default {
  components: {
    UserHeader,
    UserFooter,
  },
};
</script>
