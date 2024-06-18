<template>
  <div class="content_wrap mainpage">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">대시보드 설정</h2>
      </div>
      <DraggableList v-model="list" />
    </div>
  </div>
</template>

<script lang="ts">
import DraggableList from "@/components/main/DraggableList.vue";
import type { DraggableElement } from "@/types/main/DraggableTypes";

export default {
  components: {
    DraggableList,
  },
  data() {
    return {
      list: [
        { key: "00001", name: "개인정보/알림", icon: "info", order: 1 },
        { key: "00002", name: "비교과프로그램", icon: "program", order: 2 },
        { key: "00003", name: "공지사항/설문조사/만족도조사", icon: "notice", order: 3 },
        { key: "00004", name: "상담 대시보드", icon: "counsel", order: 4 },
        { key: "00005", name: "우수학생/독려학생", icon: "topstudent", order: 5 },
        { key: "00006", name: "지도학생명단", icon: "guidance", order: 6 },
      ] as DraggableElement[],
    };
  },
  methods: {},
};
</script>
