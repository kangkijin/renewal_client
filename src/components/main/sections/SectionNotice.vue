<template>
  <div class="main_section section3">
    <div class="grid_content">
      <div class="toggle_wrap">
        <div class="left">
          <div class="radio_tab_wrap">
            <p class="radio_tab">
              <input type="radio" id="radio_notice1" name="radio_notice" checked />
              <label for="radio_notice1">공지사항</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio_notice2" name="radio_notice" />
              <label for="radio_notice2">설문조사</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio_notice3" name="radio_notice" />
              <label for="radio_notice3">만족도조사</label>
            </p>
          </div>
        </div>
        <!-- <div class="right">
          <router-link to="" class="direct_link">전체보기</router-link>
        </div> -->
      </div>
      <!-- 공지사항 없을때 표출 -->
      <!-- <div class="no_notice">
        <p>등록된 공지사항이 없습니다</p>
      </div> -->
      <div class="arrow_slide paging">
        <swiper v-bind="swiperOptions" :modules="modules">
          <swiper-slide>
            <!-- 공지사항 notice -->
            <router-link to="" class="notice_box">
              <div>
                <p class="title">[교원] 공지사항 제목</p>
                <div class="txt">
                  교원 여러분께 공지드립니다. 비교과 프로 그램 CQI 작성기간은 2024년 11월 1일~31일입니다. 기한내
                  작성요청드립니다.
                </div>
                <span class="date">2024.02.15</span>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <!-- 설문조사 survey -->
            <router-link to="" class="notice_box">
              <div>
                <p class="title">[교원] 설문조사 제목</p>
                <div class="txt">
                  교원 여러분께 공지드립니다. 비교과 프로 그램 CQI 작성기간은 2024년 11월 1일~31일입니다. 기한내
                  작성요청드립니다. 교원 여러분께 공지드립니다. 비교과 프로 그램 CQI 작성기간은 2024년 11월
                  1일~31일입니다. 기한내 작성요청드립니다.
                </div>
                <span class="date">2024.02.16</span>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <!-- 1개 나 2개 밖에 표출되지 않았을때 -->
            <div class="no_notice">
              <p class="font_gray">등록된 공지사항이 없습니다</p>
            </div>
          </swiper-slide>
          <swiper-slide>
            <!-- 만족도 조사 satisfy -->
            <router-link to="" class="notice_box">
              <div>
                <p class="title">[만족도조사] 만족도조사 제목 [만족도조사] 만족도조사 제목입니다</p>
                <div class="txt">
                  교원 여러분께 공지드립니다. 비교과 프로 그램 CQI 작성기간은 2024년 11월 1일~31 일입니다. 기한내
                  작성요청드립니다.
                </div>
                <span class="date">2023.11.30</span>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="" class="notice_box">
              <div>
                <p class="title">[교원] 공지사항 제목</p>
                <div class="txt">
                  교원 여러분께 공지드립니다. 비교과 프로 그램 CQI 작성기간은 2024년 11월 1일~31 일입니다. 기한내
                  작성요청드립니다.
                </div>
                <span class="date">2023.11.30</span>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="" class="notice_box">
              <div>
                <p class="title">[교원] 공지사항 제목</p>
                <div class="txt">
                  교원 여러분께 공지드립니다. 비교과 프로 그램 CQI 작성기간은 2024년 11월 1일~31 일입니다. 기한내
                  작성요청드립니다.
                </div>
                <span class="date">2023.11.30</span>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="" class="notice_box">
              <div>
                <p class="title">[교원] 공지사항 제목</p>
                <div class="txt">
                  교원 여러분께 공지드립니다. 비교과 프로 그램 CQI 작성기간은 2024년 11월 1일~31 일입니다. 기한내
                  작성요청드립니다.
                </div>
                <span class="date">2023.11.30</span>
              </div>
            </router-link>
          </swiper-slide>
          <swiper-slide>
            <router-link to="" class="notice_box">
              <div>
                <p class="title">[교원] 공지사항 제목</p>
                <div class="txt">
                  교원 여러분께 공지드립니다. 비교과 프로 그램 CQI 작성기간은 2024년 11월 1일~31 일입니다. 기한내
                  작성요청드립니다.
                </div>
                <span class="date">2023.11.30</span>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import { setColors } from "@/assets/js/common";

import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
      swiperOptions: {
        breakpoints: {
          1280: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
        },
        slidesPerView: 1,
        spaceBetween: 8,
        navigation: true,
        pagination: {
          clickable: true,
        },
      },
    };
  },
  mounted() {
    setColors();
  },
};
</script>
