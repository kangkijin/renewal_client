<template>
  <div class="content_wrap">
    <CareerHeader v-model="menuType" />
    <div class="grid_content">
      <div class="sub_section">
        <SpecRegArea />
      </div>
      <div class="sub_section">
        <MySpecPoint />
      </div>
      <div class="sub_section">
        <EmplStdList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CareerHeader from "@/components/careerEmploy/CareerHeader.vue";
import SpecRegArea from "@/components/careerEmploy/employSpec/SpecRegArea.vue";
import MySpecPoint from "@/components/careerEmploy/employSpec/MySpecPoint.vue";
import EmplStdList from "@/components/careerEmploy/employSpec/EmplStdList.vue";

export default {
  components: {
    CareerHeader,
    SpecRegArea,
    MySpecPoint,
    EmplStdList,
  },
  data: () => ({
    menuType: "employ_spec",
  }),
  methods: {
    onClickMoveMenu(name: string) {
      const vm = this;
      vm.$router.push(`/user/careerEmploy/${name}`);
    },
  },
};
</script>
