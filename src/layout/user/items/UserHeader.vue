<template>
  <div class="header_wrap">
    <div class="header_top">
      <div class="grid_content">
        <!-- TODO 개발 편의를 위한 버튼, 개발 완료 시 삭제 -->
        <router-link to="/prof/main" class="btn_round btn_xs btn_primary mr-2"> 교수 화면 </router-link>
        <router-link to="/cnslr/main" class="btn_round btn_xs btn_secondary"> 상담 화면 </router-link>

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
            <router-link to="/user/portfolio">포트폴리오</router-link>
            <router-link to="/user/program">비교과 프로그램</router-link>
            <router-link to="/user/diag">진단&middot;조사&middot;시험</router-link>
            <router-link to="/user/careerEmploy">진로설계&middot;취업창업</router-link>
            <router-link to="/user/prfsncnsl">전문상담</router-link>
            <router-link to="">대학인증</router-link>
            <router-link to="">마일리지</router-link>
          </div>
        </nav>
      </div>
    </div>
    <div class="gnb_submenu">
      <div class="grid_content">
        <nav class="nav_wrap">
          <ul class="sub_1depth">
            <li>
              <a href="javascript:void(0);">포트폴리오</a>
              <ul class="sub_2depth">
                <li><router-link to="/user/portfolio">My history</router-link></li>
                <li><router-link to="/user/portfolio">My resume</router-link></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);">비교과프로그램</a>
              <ul class="sub_2depth">
                <li><router-link to="/user/program/list">비교과 신청</router-link></li>
                <li><router-link to="/user/program/myProgram">나의 비교과</router-link></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);">진단 &middot; 조사 &middot; 시험</a>
              <ul class="sub_2depth">
                <li><router-link to="/user/diag/coreAbility">핵심역량진단</router-link></li>
                <li><router-link to="/user/diag/majorAbility">전공능력진단</router-link></li>
                <li><router-link to="/user/diag/surveyRsch">설문조사</router-link></li>
                <li><router-link to="/user/diag/satisRsch">만족도조사</router-link></li>
                <li><router-link to="/user/diag/examination">시험</router-link></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);">진로설계 &middot; 취업창업</a>
              <ul class="sub_2depth">
                <li><router-link to="/user/careerEmploy/fieldCareer">분야별진로설계</router-link></li>
                <li><router-link to="/user/careerEmploy/rcmdRecrt">추천채용</router-link></li>
                <li><router-link to="/user/careerEmploy/outsideRecrt">교외채용</router-link></li>
                <li><router-link to="/user/careerEmploy/insideRecrt">교내채용</router-link></li>
                <li><router-link to="/user/careerEmploy/worknet">워크넷</router-link></li>
                <li><router-link to="/user/careerEmploy/saramin">사람인</router-link></li>
                <li><router-link to="/user/careerEmploy/employSpec">취업스펙</router-link></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);">전문상담</a>
              <ul class="sub_2depth">
                <li><router-link to="/user/prfsncnsl/cnslReq">상담신청</router-link></li>
                <li><router-link to="/user/prfsncnsl/myCnsl">나의 상담 내역</router-link></li>
              </ul>
            </li>
            <li>
              <router-link to="">대학인증</router-link>
            </li>
            <li>
              <router-link to="">마일리지</router-link>
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

<script lang="ts">
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
