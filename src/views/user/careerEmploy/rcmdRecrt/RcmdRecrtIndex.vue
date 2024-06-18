<template>
  <div class="content_wrap">
    <CareerHeader v-model="menuType" />
    <RcmdRecrtList />
  </div>
</template>

<script lang="ts">
import CareerHeader from "@/components/careerEmploy/CareerHeader.vue";
import RcmdRecrtList from "@/components/careerEmploy/rcmdRecrt/RcmdRecrtList.vue";

export default {
  components: {
    CareerHeader,
    RcmdRecrtList,
  },
  data: () => ({
    menuType: "rcmd_recrt",
  }),
  methods: {
    onClickMoveMenu(name: string) {
      const vm = this;
      vm.$router.push(`/user/careerEmploy/${name}`);
    },
  },
};
</script>
