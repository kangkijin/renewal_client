<template>
  <div class="content_wrap">
    <CareerHeader v-model="menuType" />
    <div class="grid_content">
      <div class="sub_section">
        <RecrtDetailPage />
        <div class="btn_area">
          <router-link to="./" class="btn_white btn_xl btn_round">목록</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CareerHeader from "@/components/careerEmploy/CareerHeader.vue";
import RecrtDetailPage from "@/components/careerEmploy/RecrtDetailPage/RecrtDetailPage.vue";

export default {
  components: {
    CareerHeader,
    RecrtDetailPage,
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
