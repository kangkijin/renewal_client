<template>
  <div class="grid_content">
    <div class="page_toparea">
      <h2 class="page_title">포트폴리오</h2>
      <div class="title_function">
        <div class="radio_tab_wrap">
          <p class="radio_tab inline">
            <input type="radio" id="radio1" @click="onClickMoveMenu('myHistory')" value="my_history" v-model="type" />
            <label for="radio1">My history</label>
          </p>
          <p class="radio_tab inline">
            <input type="radio" id="radio2" value="my_resume" v-model="type" />
            <label for="radio2">My resume</label>
          </p>
        </div>
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
  vm.$router.push(`/user/portfolio/${name}`);
};
</script>
