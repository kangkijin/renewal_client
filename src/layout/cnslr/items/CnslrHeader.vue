<template>
  <div class="header_wrap">
    <div class="header_top">
      <div class="grid_content">
        <!-- TODO 개발 편의를 위한 버튼, 개발 완료 시 삭제 -->
        <router-link to="/user/main" class="btn_round btn_xs btn_primary mr-2"> 학생 화면 </router-link>
        <router-link to="/prof/main" class="btn_round btn_xs btn_secondary"> 교수 화면 </router-link>

        <button type="button" class="btn_menu">메뉴보기</button>
        <h1 class="header_logo">
          <router-link to="/">
            <img src="@/assets/images/common/university.svg" alt="university" />
          </router-link>
        </h1>
        <div class="header_function">
          <!-- 알림 있을시 on 추가 -->
          <button type="button" class="btn_alarm on">알림</button>
          <button type="button" class="btn_mypage">마이페이지</button>
          <button type="button" class="btn_manual">메뉴얼 다운로드</button>
        </div>
      </div>
    </div>
    <div class="header_bottom">
      <div class="grid_content">
        <nav class="nav_wrap">
          <div id="gnbMenu" class="gnb_1depth">
            <router-link to="/cnslr">상담관리</router-link>
            <router-link to="">진단관리</router-link>
            <router-link to="/prof/program">비교과 관리</router-link>
            <router-link to="">인증현황</router-link>
            <router-link to="">공지사항</router-link>
          </div>
        </nav>
      </div>
    </div>
    <div class="gnb_submenu">
      <div class="grid_content">
        <nav class="nav_wrap">
          <ul class="sub_1depth">
            <li>
              <a href="javascript:void(0);">진단관리</a>
              <ul class="sub_2depth">
                <li><router-link to="">2뎁스</router-link></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);">비교과 관리</a>
              <ul class="sub_2depth">
                <li><router-link to="">2뎁스</router-link></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);">인증현황</a>
              <ul class="sub_2depth">
                <li><router-link to="">2뎁스</router-link></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);">공지사항</a>
              <ul class="sub_2depth">
                <li><router-link to="">2뎁스</router-link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <!-- 메뉴얼 다운로드 없을시 삭제 -->
      <div class="sub_footer">
        <div class="grid_content"></div>
      </div>
      <!-- 메뉴얼 다운로드 없을시 삭제 -->
    </div>
  </div>
</template>

<script>
import { gnbOneDepth, headerStyle, mobileGnb } from "@/assets/js/common";

export default {
  components: {},
  mounted: function () {
    gnbOneDepth();
    headerStyle();
    mobileGnb();
  },
};
</script>
