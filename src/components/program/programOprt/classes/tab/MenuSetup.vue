<template>
  <div class="oprtr_wrapper">
    <div class="setting_header">
      <div class="toggle_wrap">
        <div class="left">
          <h4 class="setting_tit">사용 메뉴 설정</h4>
        </div>
        <div class="right">
          <p class="info">*Class 메뉴 중 프로그램에 필요한 운영 메뉴를 설정해주세요.</p>
        </div>
      </div>
    </div>
    <div class="setting_wrap">
      <div class="check_all_wrap">
        <p class="check_row">
          <input type="checkbox" name="checkall" id="checkall" class="hidden" />
          <label for="checkall">전체</label>
        </p>
        <p class="check_row">
          <input type="checkbox" name="check" id="check1_1" class="hidden" />
          <label for="check1_1">강의실</label>
        </p>
        <p class="check_row">
          <input type="checkbox" name="check" id="check1_2" class="hidden" />
          <label for="check1_2">시험</label>
        </p>
        <p class="check_row">
          <input type="checkbox" name="check" id="check1_3" class="hidden" />
          <label for="check1_3">과제</label>
        </p>
        <p class="check_row">
          <input type="checkbox" name="check" id="check1_4" class="hidden" />
          <label for="check1_4">학습자료</label>
        </p>
        <p class="check_row">
          <input type="checkbox" name="check" id="check1_5" class="hidden" />
          <label for="check1_5">Q&A</label>
        </p>
        <p class="check_row">
          <input type="checkbox" name="check" id="check1_6" class="hidden" />
          <label for="check1_6">공지사항</label>
        </p>
        <p class="check_row">
          <input type="checkbox" name="check" id="check1_7" class="hidden" checked disabled />
          <label for="check1_7">출석&성적</label>
        </p>
      </div>
    </div>
  </div>
  <div class="btn_area">
    <button type="button" class="btn_round btn_secondary btn_xl">저장</button>
  </div>
</template>
<script lang="ts">
import { checkAll } from "@/assets/js/common";
export default {
  mounted: function () {
    checkAll();
  },
};
</script>
