<template>
  <div class="page_toparea">
    <h2 class="page_title">전문상담</h2>
    <div class="title_function">
      <div class="radio_tab_wrap">
        <p class="radio_tab inline">
          <input type="radio" id="radio_prfcnsl1" @click="onClickMoveMenu('cnslReq')" value="cnsl_req" v-model="type" />
          <label for="radio_prfcnsl1">상담신청</label>
        </p>
        <p class="radio_tab inline">
          <input type="radio" id="radio_prfcnsl2" @click="onClickMoveMenu('myCnsl')" value="my_cnsl" v-model="type" />
          <label for="radio_prfcnsl2">나의 상담 내역</label>
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
  vm.$router.push(`/user/prfsncnsl/${name}`);
};
</script>
