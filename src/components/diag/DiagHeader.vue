<template>
  <div class="page_toparea">
    <h2 class="page_title">진단 · 조사 · 시험</h2>
    <div class="title_function">
      <div class="radio_tab_wrap">
        <p class="radio_tab inline">
          <input type="radio" id="radio1" @click="onClickMoveMenu('coreAbility')" value="core_ability" v-model="type" />
          <label for="radio1">핵심역량진단</label>
        </p>
        <p class="radio_tab inline">
          <input
            type="radio"
            id="radio2"
            @click="onClickMoveMenu('majorAbility')"
            value="major_ability"
            v-model="type"
          />
          <label for="radio2">전공능력진단</label>
        </p>
        <p class="radio_tab inline">
          <input type="radio" id="radio3" @click="onClickMoveMenu('surveyRsch')" />
          <label for="radio3">설문조사</label>
        </p>
        <p class="radio_tab inline">
          <input type="radio" id="radio4" @click="onClickMoveMenu('satisRsch')" />
          <label for="radio4">만족도조사</label>
        </p>
        <p class="radio_tab inline">
          <input type="radio" id="radio5" @click="onClickMoveMenu('examination')" />
          <label for="radio5">시험</label>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getCurrentInstance } from "vue";

const type = defineModel();

const instance = getCurrentInstance();
if (!instance) {
  throw new Error("getCurrentInstance returned null");
}

const vm = instance.appContext.config.globalProperties;

const onClickMoveMenu = (name: string) => {
  vm.$router.push(`/user/diag/${name}`);
};
</script>
