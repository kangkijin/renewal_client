<template>
  <div class="content_wrap">
    <CareerHeader v-model="menuType" />
    <div class="grid_content">
      <div class="sub_section">
        <FieldSearchArea />
      </div>
      <div class="sub_section">
        <FieldSbjtList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CareerHeader from "@/components/careerEmploy/CareerHeader.vue";
import FieldSearchArea from "@/components/careerEmploy/fieldCareer/FieldSearchArea.vue";
import FieldSbjtList from "@/components/careerEmploy/fieldCareer/FieldSbjtList.vue";

export default {
  components: {
    CareerHeader,
    FieldSearchArea,
    FieldSbjtList,
  },
  data: () => ({
    menuType: "field_career",
  }),
  methods: {
    onClickMoveMenu(name: string) {
      const vm = this;
      vm.$router.push(`/user/careerEmploy/${name}`);
    },
  },
};
</script>
