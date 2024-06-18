<template>
  <div>
    <div class="section_tit_wrap">
      <h4 class="section_tit2">핵심역량진단 비교그래프</h4>
    </div>
    <div class="box graph_box">
      <!-- 결과 없을 경우 표출 -->
      <!--  
          <div class="test_before">
            <div>
              <p>핵심역량진단 결과가 없습니다.</p>
            </div>
          </div>
        -->
      <div class="radio_sm_txt_wrap">
        <p class="radio_black_txt">
          <input type="radio" name="radio_sm_txt" id="radio_1" />
          <label for="radio_1">학과</label>
        </p>
        <p class="radio_black_txt">
          <input type="radio" name="radio_sm_txt" id="radio_2" />
          <label for="radio_2">학교</label>
        </p>
        <p class="radio_black_txt">
          <input type="radio" name="radio_sm_txt" id="radio_3" checked />
          <label for="radio_3">4년</label>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
