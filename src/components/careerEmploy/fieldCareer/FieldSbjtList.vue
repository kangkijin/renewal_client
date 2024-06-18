<template>
  <div class="section_tit_wrap">
    <h4 class="section_tit2">분야별 진로설계 연계교과목</h4>
  </div>
  <div class="search_box career field">
    <div class="search_section">
      <div class="search_toggle lg center flip">
        <div class="left">
          <p class="total_count"><strong>545</strong>개의 비교과 프로그램</p>
        </div>
        <div class="right">
          <div class="select_label_row">
            <span class="bold">전공/교양</span>
            <div class="select_row lg">
              <vue-select class="select_box" :options="selectOption.type" v-model="selectOption.value4"> </vue-select>
            </div>
          </div>
          <div class="select_label_row">
            <span class="bold">필수/선택</span>
            <div class="select_row lg">
              <vue-select class="select_box" :options="selectOption.options" v-model="selectOption.value5"></vue-select>
            </div>
          </div>
          <div class="search_row">
            <input type="search" class="form_style wd_p100" placeholder="교과명을 검색하세요" />
            <button type="button" class="btn_search btn_icon icon_only">검색</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 분야별 진로설계 연계교과목 리스트 표출 -->
  <DoubleList />
</template>

<script lang="ts">
import DoubleList from "@/components/program/DoubleList.vue";

export default {
  components: {
    DoubleList,
  },
  data: () => ({
    selectOption: {
      value4: "전체",
      value5: "전체",
      type: [{ label: "전공" }, { label: "교양" }],
      options: [{ label: "필수" }, { label: "선택" }],
    },
  }),
};
</script>
