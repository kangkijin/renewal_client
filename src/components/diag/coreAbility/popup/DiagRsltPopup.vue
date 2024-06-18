<template>
  <PopupView class="xlarge" v-model="model" :loading="!loaded">
    <template #title>핵심역량진단 결과</template>
    <div class="diag_desc">
      <div class="top">
        <div><strong>진단명</strong>(핵심역량진단실시계획명)</div>
        <div><strong>문항수</strong>76</div>
        <div><strong>응시기간</strong>2014-03-13 12:00 ~ 2024-04-01 01:00</div>
      </div>
      <div class="bottom editor_area">
        핵심역량진단입니다. <br />
        편하게 봐주세요. 그렇다고 아무거나 누르지 마세요.
      </div>
    </div>
    <div class="sm_section">
      <div class="section_tit_wrap">
        <h5 class="section_tit_sm">강점역량·약점역량·중간역량</h5>
        <!-- <div class="title_function">
          <span class="bold">핵심역량진단 선택</span>
          <vue-select class="select_box wd_150" :options="selectedOption.groups" :placeholder="'선택'"></vue-select>
          <button type="button" class="btn_md btn_round btn_white">다운로드</button>
        </div> -->
      </div>
      <div>
        <TextBarChart></TextBarChart>
      </div>
    </div>
    <template #footer>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="onClickClosePopup()">확인</button>
    </template>
  </PopupView>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import PopupView from "@/components/common/PopupView.vue";
import TextBarChart from "@/components/chart/TextBarChart.vue";

const props = defineProps<{
  datId: number;
}>();

onMounted(() => {
  fnGetRsltData();
});

/** 팝업 True / False */
const model = defineModel({ type: Boolean });

const loaded = ref(false);

const fnGetRsltData = () => {
  const param = {
    datId: props.datId,
  };
  setTimeout(() => {
    loaded.value = true;
  }, 1000);

  console.log(props.datId);
};

/** 팝업 닫기 */
const onClickClosePopup = () => {
  const overlays = document.querySelectorAll(".overlay_popup");
  if (overlays.length <= 1) {
    document.body.classList.remove("on");
  }
  model.value = false;
};
</script>
