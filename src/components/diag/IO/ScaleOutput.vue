<template>
  <div class="qus_header">
    <strong class="qus_num">{{ order < 10 ? `0${order}` : order }}.</strong>
    <p class="qus_tit">
      {{ title }}
      <!-- <strong class="qus_score">20점</strong> -->
    </p>
  </div>
  <div class="qus_cnt">
    <div class="scale_qusbox">
      <template v-for="(item, idx) in ansInfo" :key="idx">
        <p class="radio_row">
          <input type="radio" :id="`scale${order}_${idx}`" :value="String(item.score)" v-model="model" />
          <label :for="`scale${order}_${idx}`">
            <span class="number">{{ idx + 1 }}</span>
            {{ item.title }}
          </label>
        </p>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { AnsOuput } from "@/types/diag/DiagIOTypes";

defineProps<{
  order: number;
  title: string;
  ansInfo: AnsOuput[];
}>();

/** 선택된 값 */
const model = defineModel({ type: String });
</script>
