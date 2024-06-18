<template>
  <div class="mystatus_wrap">
    <div class="mystatus_box">
      <h4>현재 프로그램 <br />운영 중입니다.</h4>
      <p class="date">운영기간 : 2024.01.01~2024.08.28</p>
      <div class="oprtr_status">
        <div class="profile_wrap">
          <div class="img_wrap">
            <img src="/src/assets/images/common/img_ex1.png" alt="프로필 이미지" />
          </div>
          <p class="name">나교수<strong>교수</strong></p>
          <p class="part">간호학부 · 간호학과</p>
        </div>
      </div>
    </div>
    <div class="btn_area">
      <router-link to="/prof/program/operation" class="btn_round btn_secondary btn_icon btn_xl myprogram">
        비교과 운영 목록
        <!-- 수정이 질문이 필요한 부분 -->
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
