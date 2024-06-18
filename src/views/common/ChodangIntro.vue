<template>
  <div class="university_intro">
    <div class="header_wrap">
      <div class="header_top border_bn">
        <div class="grid_content">
          <h1 class="header_logo">
            <router-link to="/">
              <img src="@/assets/images/common/university.svg" alt="university" />
            </router-link>
          </h1>
          <div class="header_function">
            <!-- 알림 있을시 on 추가 -->
            <button type="button" class="btn_mypage">마이페이지</button>
            <button type="button" class="text">회원가입</button>
          </div>
        </div>
      </div>
    </div>
    <div class="page_wrap bg_white">
      <div class="skip_nav">
        <a href="#gnb_skip">주요메뉴 바로가기</a>
        <a href="#container_skip">본문영역 바로가기</a>
      </div>
      <div class="content_wrap intro">
        <div class="grid_content">
          <h1 class="university_name">
            <strong>CHODANG</strong>
            UNIVERSITY
          </h1>
        </div>
      </div>
      <footer id="footer" class="footer_wrap">
        <p class="copyright">CHODANG.All rights reserved.</p>
        <div class="footer_link">
          <router-link to="">이용약관</router-link>
          <router-link to="" class="bold">개인정보 처리방침</router-link>
        </div>
      </footer>
    </div>
  </div>
</template>
<!-- 24.02.22 아직 시안 안정해졌습니다. -->
