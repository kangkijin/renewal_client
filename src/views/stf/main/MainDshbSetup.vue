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
        { key: "00001", name: "비교과프로그램", icon: "program", order: 1 },
        { key: "00002", name: "공지사항/설문조사/만족도조사", icon: "notice", order: 2 },
      ] as DraggableElement[],
    };
  },
  methods: {},
};
</script>
