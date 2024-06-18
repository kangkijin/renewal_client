<template>
  <div class="content_wrap">
    <CareerHeader v-model="menuType" />
    <div class="grid_content">
      <div class="sub_section">
        <SaraminList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CareerHeader from "@/components/careerEmploy/CareerHeader.vue";
import SaraminList from "@/components/careerEmploy/saramin/SaraminList.vue";
export default {
  components: {
    CareerHeader,
    SaraminList,
  },
  data: () => ({
    menuType: "saramin",
  }),
  methods: {
    onClickMoveMenu(name: string) {
      const vm = this;
      vm.$router.push(`/user/careerEmploy/${name}`);
    },
  },
};
</script>
