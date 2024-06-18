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
      <div class="search_wrap">
        <div class="select_row sm2">
          <vue-select class="select_box" :options="selectOption.year" :placeholder="'년도 전체'"></vue-select>
        </div>
        <div class="select_row sm2">
          <vue-select class="select_box" :options="selectOption.capa" :placeholder="'핵심역량 전체'"></vue-select>
        </div>
        <div class="select_row sm2">
          <vue-select class="select_box" :options="selectOption.category" :placeholder="'카테고리 전체'"></vue-select>
        </div>
        <div class="select_row sm2">
          <vue-select class="select_box" :options="selectOption.stat" :placeholder="'운영상태 전체'"></vue-select>
        </div>
        <div class="search_row lg">
          <input type="search" class="form_style wd_p100" placeholder="보고 싶은 비교과 프로그램을 찾아보세요" />
          <button type="button" class="btn_search btn_icon icon_only">검색</button>
        </div>
      </div>
    </div>
    <div class="sub_section">
      <BoxList :list="programList" oprt />
    </div>
  </div>
</template>

<script lang="ts">
import BoxList from "@/components/program/BoxList.vue";

// TODO 삭제예정
import testData from "@/components/program/_boxListData";

export default {
  components: {
    BoxList,
  },
  data: () => ({
    programList: [],
    selectOption: {
      year: [{ label: "2025" }],
      capa: [{ label: "핵심역량 가" }, { label: "핵심역량 나" }],
      category: [{ label: "카테고리 가" }, { label: "카테고리 나" }],
      selectType: [{ label: "이수" }, { label: "미이수" }],
      stat: [
        { label: "운영중" },
        { label: "승인" },
        { label: "승인대기" },
        { label: "미승인" },
        { label: "본인취소" },
        { label: "관리자취소" },
        { label: "운영완료" },
      ],
    },
  }),
  mounted() {
    this.fnGetProgramList();
  },
  methods: {
    fnGetProgramList() {
      const vm = this;
      vm.programList = testData;
      console.log(vm.programList);
    },
  },
};
</script>
