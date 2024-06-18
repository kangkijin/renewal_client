<template>
  <footer id="footer" class="footer_wrap">
    <p class="copyright">CAMPUS.All rights reserved.</p>
    <div class="footer_link">
      <router-link to="">이용약관</router-link>
      <router-link to="" class="bold">개인정보 처리방침</router-link>
    </div>
    <strong class="footer_logo">
      <!-- <img src="@/assets/images/common/system_logo.svg" alt="초당대학교" /> -->
      <img src="@/assets/images/common/university.svg" alt="예시" />
    </strong>
    <a href="javascript:void(0);" class="move_top" title="페이지 상단으로 이동">TOP</a>
  </footer>
</template>

<script>
import { moveTop } from "@/assets/js/common";
export default {
  mounted: function () {
    moveTop();
  },
};
</script>
