<template>
  <div class="diag_timer_wrap">
    <div class="diag_timer">
      <div class="timer_header" :class="{ on: isOn }" @click="onClickToggleWbs()">
        <p class="text">진단 실시 중</p>

        <p class="qus_counter">
          <span>{{ resCnt }}</span> / {{ qusList.length }}
        </p>
      </div>
      <ul class="timer_quslist">
        <li v-for="item in qusList" :key="item.daqOrder" class="qus_item" :class="item.ansSts ?? 'disabled'">
          <p>{{ item.daqOrder + 1 }}</p>
          <strong></strong>
        </li>
      </ul>
      <div class="btn_area">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import type { CoreDiagQusTypes } from "@/types/diag/DiagTypes";

/** 팝업 전체 종료 제어 */
// const model = defineModel("dialog");

defineProps<{
  qusList: CoreDiagQusTypes[];
  resCnt: number;
}>();

const isOn = ref(false);

const onClickToggleWbs = () => {
  isOn.value = !isOn.value;
};
</script>
