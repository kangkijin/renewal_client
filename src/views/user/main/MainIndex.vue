<template>
  <div class="content_wrap mainpage user">
    <div class="grid_content">
      <div class="page_toparea dashboard">
        <h2 class="page_title">My 대시보드</h2>
        <div class="title_function">
          <p class="font_gray">※ 데이터 집계 시점 : 2024년 MN월 DD일</p>
          <router-link to="/user/main/setup" class="btn_round btn_md btn_white btn_icon admin">
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
          id: "UserInfo",
          name: "개인정보/알림",
        },
        {
          order: 1,
          id: "SectionProgram",
          name: "비교과 프로그램",
        },
        {
          order: 2,
          id: "SectionNotice",
          name: "공지사항/설문조사/만족도조사",
        },
        {
          order: 3,
          id: "SectionEmployspec",
          name: "취업생과 비교하는 나의 취업 스펙",
        },
        {
          order: 4,
          id: "SectionRecrtCnsl",
          name: "채용 정보/상담신청 바로가기",
        },
        {
          order: 5,
          id: "SectionZone",
          name: "출력 Zone/입력 Zone",
        },
      ];
      this.$loading.hide();
    },
  },
};
</script>
