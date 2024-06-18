<template>
  <div class="flex_wrap diag_testwrap">
    <DoCoreAbilityDiag></DoCoreAbilityDiag>
    <CoreAbilityRslt></CoreAbilityRslt>
    <CoreAbilityChart></CoreAbilityChart>
  </div>
</template>
<script setup lang="ts">
import { DoCoreAbilityDiag, CoreAbilityRslt, CoreAbilityChart } from "./section/CoreAbilitySectionImport";
</script>
