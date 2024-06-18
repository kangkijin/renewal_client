<template>
  <div class="diag_intro" :class="type">
    <div>
      <h3>
        <slot></slot>
      </h3>
      <slot name="subTitle"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  type: { type: String, required: true },
});
</script>
