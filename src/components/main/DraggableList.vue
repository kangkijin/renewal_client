<template>
  <div class="dashboard_setting box sub_section">
    <draggable class="dashboard_list" :list="model" :animation="200">
      <transition-group>
        <div class="section_board" :class="[element.icon, element.class]" v-for="element in model" :key="element.order">
          <span class="number"></span>
          <h2>{{ element.name }}</h2>
          <p>클릭 후 원하는 위치로 <span class="font_blue">drag</span>해주세요.</p>
        </div>
      </transition-group>
    </draggable>
    <div class="btn_area">
      <button type="button" class="btn_xl btn_round btn_white" style="margin-right: 8px">취소</button>
      <button type="button" class="btn_xl btn_round btn_primary">설정변경</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { VueDraggableNext as draggable } from "vue-draggable-next";
import type { DraggableElement } from "@/types/main/DraggableTypes";

const model = defineModel({ type: Array<DraggableElement> });
</script>
