<template>
  <div class="content_wrap">
    <CareerHeader v-model="menuType" />
    <OutsideRecrtList />
  </div>
</template>

<script lang="ts">
import CareerHeader from "@/components/careerEmploy/CareerHeader.vue";
import OutsideRecrtList from "@/components/careerEmploy/outsideRecrt/OutsideRecrtList.vue";

export default {
  components: {
    CareerHeader,
    OutsideRecrtList,
  },
  data: () => ({
    menuType: "outside_recrt",
  }),
  methods: {
    onClickMoveMenu(name: string) {
      const vm = this;
      vm.$router.push(`/user/careerEmploy/${name}`);
    },
  },
};
</script>
