<template>
  <div class="content_wrap">
    <CareerHeader v-model="menuType" />
    <InsideRecrtList />
  </div>
</template>

<script lang="ts">
import CareerHeader from "@/components/careerEmploy/CareerHeader.vue";
import InsideRecrtList from "@/components/careerEmploy/insideRecrt/InsideRecrtList.vue";

export default {
  components: {
    CareerHeader,
    InsideRecrtList,
  },
  data: () => ({
    menuType: "inside_recrt",
  }),
  methods: {
    onClickMoveMenu(name: string) {
      const vm = this;
      vm.$router.push(`/user/careerEmploy/${name}`);
    },
  },
};
</script>
