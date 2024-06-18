<template>
  <div class="content_wrap diag_page">
    <div class="grid_content">
      <PortfolioHeader v-model="menuType"></PortfolioHeader>
    </div>
    <div class="grid_content">
      <HistorySection />
    </div>
  </div>
</template>

<script lang="ts">
import PortfolioHeader from "@/components/portfolio/PortfolioHeader.vue";
import HistorySection from "@/components/portfolio/myHistory/HistorySection.vue";

export default {
  components: {
    PortfolioHeader,
    HistorySection,
  },
  data: () => ({
    menuType: "my_history",
  }),
  methods: {
    onClickMoveMenu(name: string) {
      const vm = this;
      vm.$router.push(`/user/portfolio/${name}`);
    },
  },
};
</script>
