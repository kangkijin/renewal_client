<!-- 
  팝업 사이즈 
  클래스 x = 860px
  클래스 mini = 450px -- 스크롤이 없는 내용 없는 팝업
  클래스 small = 450px
  클래스 medium = 740px
  클래스 large = 1164px
-->
<template>
  <div v-if="model" class="overlay_popup" ref="popupModel">
    <div class="bg_overlay"></div>
    <div class="popup_container">
      <div class="popup_title">
        <button type="button" class="popup_close" @click="onClickClose">닫기</button>
        <h3>
          <!-- template v-slot:title (Start) -->
          <slot name="title"></slot>
          <!-- template v-slot:title (End) -->
        </h3>
      </div>
      <div class="popup_content" :class="loading ? 'loading_md' : ''">
        <slot></slot>
        <!-- 본문영역 slot 입력 X -->
      </div>
      <div class="popup_footer">
        <slot name="footer"></slot>
        <!-- template v-slot:content -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onMounted } from "vue";
import { popupHeight } from "@/assets/js/popup";
import { letterCount } from "@/assets/js/common";

const model = defineModel();

defineProps({
  loading: { type: Boolean, default: false },
});

const onClickClose = () => {
  const overlays = document.querySelectorAll(".overlay_popup");
  if (overlays.length <= 1) {
    document.body.classList.remove("on");
  }
  model.value = false;
};

watch(model, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      popupHeight();
      letterCount();
      document.body.classList.add("on");
    }, 200);
  } else {
    const overlays = document.querySelectorAll(".overlay_popup");
    if (overlays.length <= 1) {
      document.body.classList.remove("on");
    }
  }
});

onMounted(() => {
  if (model.value) {
    setTimeout(() => {
      document.body.classList.add("on");
    }, 200);
  }
  popupHeight();
  letterCount();
});
</script>
