<template>
  <div class="grid_content">
    <div class="page_toparea career">
      <h2 class="page_title">진로설계 · 취업창업</h2>
      <div class="title_function">
        <div class="radio_tab_wrap">
          <p class="radio_tab inline">
            <input
              type="radio"
              id="careerRadio1"
              @click="onClickMoveMenu('fieldCareer')"
              value="field_career"
              v-model="type"
            />
            <label for="careerRadio1">분야별진로설계</label>
          </p>
          <p class="radio_tab inline">
            <input
              type="radio"
              id="careerRadio2"
              @click="onClickMoveMenu('rcmdRecrt')"
              value="rcmd_recrt"
              v-model="type"
            />
            <label for="careerRadio2">추천채용</label>
          </p>
          <p class="radio_tab inline">
            <input
              type="radio"
              id="careerRadio3"
              @click="onClickMoveMenu('outsideRecrt')"
              value="outside_recrt"
              v-model="type"
            />
            <label for="careerRadio3">교외채용</label>
          </p>
          <p class="radio_tab inline">
            <input
              type="radio"
              id="careerRadio4"
              @click="onClickMoveMenu('insideRecrt')"
              value="inside_recrt"
              v-model="type"
            />
            <label for="careerRadio4">교내채용</label>
          </p>
          <p class="radio_tab inline">
            <input type="radio" id="careerRadio5" @click="onClickMoveMenu('worknet')" value="worknet" v-model="type" />
            <label for="careerRadio5">워크넷</label>
          </p>
          <p class="radio_tab inline">
            <input type="radio" id="careerRadio6" @click="onClickMoveMenu('saramin')" value="saramin" v-model="type" />
            <label for="careerRadio6">사람인</label>
          </p>
          <p class="radio_tab inline">
            <input
              type="radio"
              id="careerRadio7"
              @click="onClickMoveMenu('employSpec')"
              value="employ_spec"
              v-model="type"
            />
            <label for="careerRadio7">취업스펙</label>
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
  vm.$router.push(`/user/careerEmploy/${name}`);
};
</script>
