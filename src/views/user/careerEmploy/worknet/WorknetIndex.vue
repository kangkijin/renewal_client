<template>
  <div class="content_wrap">
    <CareerHeader v-model="menuType" />
    <div class="grid_content">
      <div class="sub_section">
        <WorknetList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CareerHeader from "@/components/careerEmploy/CareerHeader.vue";
import WorknetList from "@/components/careerEmploy/worknet/WorknetList.vue";
export default {
  components: {
    CareerHeader,
    WorknetList,
  },
  data: () => ({
    menuType: "worknet",
  }),
  methods: {
    onClickMoveMenu(name: string) {
      const vm = this;
      vm.$router.push(`/user/careerEmploy/${name}`);
    },
  },
};
</script>
