<template>
  <div class="content_wrap mainpage">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">상담대시보드 (지도교수)</h2>
        <div class="title_function dashboard">
          <p class="font_gray">※ 데이터 집계 시점 : 2024년 MN월 DD일</p>
          <router-link to="/cnslr/main/setup" class="btn_round btn_md btn_white btn_icon admin">
            대시보드 설정
          </router-link>
        </div>
      </div>
    </div>

    <component v-for="component in componentsList" :key="component.order" :is="component.id" />
  </div>
</template>

<script lang="ts">
import * as Sections from "@/components/main/sections/mainSectionImport";

export default {
  components: Sections,
  data: () => ({
    componentsList: [],
  }),
  created() {
    this.$loading.show();
    setTimeout(() => {
      this.fnGetDshbList();
    }, 400);
  },
  methods: {
    /** 저장되어있는 대시보드 순서 가져오기 */
    fnGetDshbList() {
      const vm = this;
      vm.componentsList = [
        {
          order: 0,
          id: "CnslrInfo",
          name: "개인정보/알림",
        },
        {
          order: 1,
          id: "SectionCnslTargetList",
          name: "상담 대상자 목록",
        },
      ];
      this.$loading.hide();
    },
  },
};
</script>
