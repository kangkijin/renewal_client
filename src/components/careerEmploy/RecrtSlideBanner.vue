<template>
  <div class="career_slide box">
    <!-- [pp] 배너 비어있을때 :
    <div class="no_slide">
      <p>등록된 이미지가 없습니다</p>
    </div> 
    -->
    <div class="arrow_slide mini">
      <swiper v-bind="swiperOptions" :modules="modules">
        <swiper-slide class="career_slide_item">
          <router-link to="">
            <div class="info">
              <strong>추천 채용</strong>
              <p>광양제철 기술직 추천채용</p>
            </div>
            <div class="img">
              <!-- [pp] 관리자에서 이미지 등록시 크기 : 848*224 이상으로 등록필요 -->
              <img src="@/assets/images/careerEmploy/img_ex_field1.png" alt="예시" />
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide class="career_slide_item">
          <router-link to="">
            <div class="info">
              <strong>추천 채용</strong>
              <p>광양제철 기술직 추천채용</p>
            </div>
            <div class="img">
              <img src="@/assets/images/careerEmploy/img_ex_field1.png" alt="예시" />
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation, Pagination],
      swiperOptions: {
        slidesPerView: 1,
        navigation: true,
        pagination: {
          clickable: true,
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        loop: true,
      },
    };
  },
};
</script>
