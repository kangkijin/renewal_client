<template>
  <v-menu transition="slide-y-transition" min-width="0" scrim :close-on-content-click="false" v-model="menu">
    <template v-slot:activator="{ props }">
      <v-text-field
        v-bind="props"
        readonly
        density="compact"
        :disabled="disabled"
        :placeholder="placeholder"
        v-model="formatted"
        :hide-details="true"
        class="search_day form_style"
        :class="boxSize"
        variant="plain"
      ></v-text-field>
    </template>
    <v-list class="pa-0">
      <v-date-picker color="info" v-model="selDate" @update:model-value="updateDatePicker">
        <template v-slot:title></template>
        <template v-slot:header></template>
      </v-date-picker>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
import "@/plugins/vuetify";

import moment from "moment";
import { computed, ref } from "vue";

const menu = ref(false);
const selDate = ref(null);

const model = defineModel();

defineProps({
  placeholder: { type: String, default: "날짜" },
  disabled: { type: Boolean, default: false },
  boxSize: { type: String },
});

const formatted = computed(() => {
  return selDate.value ? moment(selDate.value).format("YYYY-MM-DD") : "";
});

const updateDatePicker = () => {
  menu.value = false;
  model.value = selDate.value;
};
</script>
