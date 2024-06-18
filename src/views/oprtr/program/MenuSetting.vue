<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">비교과 운영</h2>
        <div class="title_function">
          <div class="radio_tab_wrap">
            <p class="radio_tab">
              <input type="radio" id="radio1" name="radio_program" />
              <label for="radio1">비교과신청</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio2" name="radio_program" />
              <label for="radio2">나의 비교과</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio3" name="radio_program" checked />
              <label for="radio3">비교과 운영</label>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid_content">
      <div class="sub_section top">
        <div class="section_tit_wrap">
          <h3 class="section_subtit">Class</h3>
        </div>
        <div class="toggle_wrap">
          <div class="left wd_p100">
            <div class="radio_tab_lg_wrap">
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_1" class="hidden" value="" checked />
                <label for="radio1_1">강의실</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_2" class="hidden" value="" />
                <label for="radio1_2">시험</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_3" class="hidden" value="" />
                <label for="radio1_3">과제</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_4" class="hidden" value="" />
                <label for="radio1_4">학습자료</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_5" class="hidden" value="" />
                <label for="radio1_5">Q&A</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_6" class="hidden" value="" />
                <label for="radio1_6">공지사항</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_7" class="hidden" value="" />
                <label for="radio1_7">출석&성적</label>
              </p>
            </div>
          </div>
        </div>
        <div class="operator_tab_wrap">
          <p class="operator_tab">
            <input type="radio" name="operator_tab" id="operator1_1" class="hidden" value="" checked />
            <label for="operator1_1">사용 메뉴 설정</label>
          </p>
          <p class="operator_tab">
            <input type="radio" name="operator_tab" id="operator1_2" class="hidden" value="" />
            <label for="operator1_2">이수 기준 설정</label>
          </p>
          <p class="operator_tab">
            <input type="radio" name="operator_tab" id="operator1_3" class="hidden" value="" />
            <label for="operator1_3">운영자 권한 공유</label>
          </p>
        </div>
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
      </div>
    </div>
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
