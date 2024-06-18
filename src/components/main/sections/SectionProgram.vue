<template>
  <div class="main_section section2">
    <div class="grid_content">
      <div class="section_tit_wrap">
        <h3 class="section_subtit">비교과 프로그램</h3>
      </div>
      <div class="toggle_wrap">
        <div class="left">
          <div class="radio_tab_wrap">
            <p class="radio_tab">
              <input type="radio" id="radio1" name="radio_program" checked />
              <label for="radio1">비교과신청</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio2" name="radio_program" />
              <label for="radio2">나의비교과</label>
            </p>
          </div>
        </div>
        <div class="right">
          <router-link to="" class="direct_link">전체보기</router-link>
        </div>
      </div>
      <!-- 비교과 없을때 표출 -->
      <!-- <div class="no_notice">
        <p>비교과 프로그램이 없습니다</p>
      </div> -->
      <div class="arrow_slide paging" :class="loaded ? '' : 'loading_md'">
        <swiper v-bind="swiperOptions" :modules="modules">
          <swiper-slide>
            <div class="nonsubject_box">
              <div class="contents">
                <div class="img_wrap">
                  <img src="../../../assets/images/common/img_program_ex.png" alt="예시" />
                </div>
                <p class="title">
                  <!-- 상태에 따른 클래스 변경 : 
                    모집중 : blue
                    모집예정 : pink
                    운영중 : green
                    운영종료 : gray
                  -->
                  <span class="status_label blue">모집중</span>
                  챗 GPT와 함께하는 AI 채팅
                </p>
                <p class="btn_like2">
                  <input type="checkbox" id="programlike1" name="programlike" />
                  <label for="programlike1">좋아요</label>
                </p>
                <div class="label_area">
                  <span class="team">Team</span>
                  <span class="class">Class</span>
                </div>
                <div class="capa_area">
                  역량
                  <span>자기주도역량</span>
                  <span>감성역량</span>
                </div>
                <p class="txt">
                  우리는 점차 데이터 중심적으로 돌아가는 세상에 살고 있습니다. 기관이 빅데이터기술 선택을 비롯한 데이터
                  기술 선택을 비롯한 데이터 기술 선택을 비롯한 데이터 기술 선택을 비롯한 데이터
                </p>
                <ul class="period">
                  <li>
                    <span>모집</span>
                    24/07/01 ~ 24/07/31
                  </li>
                  <li>
                    <span>운영</span>
                    24/07/01 ~ 24/07/31
                  </li>
                  <li>
                    <span>대상</span>
                    재학생ㆍ휴학생
                  </li>
                </ul>
                <ul class="function_list">
                  <li class="mileage">100,000</li>
                  <li class="like">999+</li>
                </ul>
              </div>
              <div class="btn_area">
                <router-link to="" class="btn_round btn_white btn_sm">상세</router-link>
                <router-link to="" class="btn_round btn_black btn_sm">신청</router-link>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="nonsubject_box">
              <div class="contents">
                <div class="img_wrap">
                  <img src="../../../assets/images/common/img_program_ex.png" alt="예시" />
                </div>
                <p class="title">
                  <!-- 상태에 따른 클래스 변경 : 
                    모집중 : blue
                    모집예정 : pink
                    운영중 : green
                    운영종료 : gray
                  -->
                  <span class="status_label pink">모집예정</span>
                  서비스 산업을 도약시키는 사물
                </p>
                <p class="btn_like2">
                  <input type="checkbox" id="programlike2" name="programlike" />
                  <label for="programlike2">좋아요</label>
                </p>
                <div class="label_area">
                  <span class="team">Team</span>
                  <span class="class">Class</span>
                </div>
                <div class="capa_area">
                  역량
                  <span>지식이해역량</span>
                  <span>정보활용역량</span>
                  <span>창의역량</span>
                </div>
                <p class="txt">
                  서비스 산업을 도약시키는 사물에는 다양한 기술적 요소와 디지털 혁신이 포함될 수 있습니다. 여기에는
                  인터넷을 통한 연결성, 센서 기술, 빅데이터 분석, 인공지능, 로봇공학 등이 해당될 수 있습니다. 이러한
                  기술적 요소들은 서비스 산업을 혁신하고 향상시키는데 큰 역할을 합니다.
                </p>
                <ul class="period">
                  <li>
                    <span>모집</span>
                    24/07/01 ~ 24/07/31
                  </li>
                  <li>
                    <span>운영</span>
                    24/07/01 ~ 24/07/31
                  </li>
                  <li>
                    <span>대상</span>
                    재학생ㆍ휴학생
                  </li>
                </ul>
                <ul class="function_list">
                  <li class="mileage">100,000</li>
                  <li class="like">999+</li>
                </ul>
              </div>
              <div class="btn_area">
                <router-link to="" class="btn_round btn_white btn_sm">상세</router-link>
                <button type="button" class="btn_round btn_black btn_sm">이수증</button>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="nonsubject_box">
              <div class="contents">
                <div class="img_wrap">
                  <img src="../../../assets/images/common/img_program_ex.png" alt="예시" />
                </div>
                <p class="title">
                  <!-- 상태에 따른 클래스 변경 : 
                    모집중 : blue
                    모집예정 : pink
                    운영중 : green
                    운영종료 : gray
                  -->
                  <span class="status_label green">운영중</span>
                  창의적 프로그래밍: 코딩으로 아이디어를 현실로
                </p>
                <p class="btn_like2">
                  <input type="checkbox" id="programlike3" name="programlike" />
                  <label for="programlike3">좋아요</label>
                </p>
                <div class="label_area">
                  <span class="team">Team</span>
                  <span class="class">Class</span>
                </div>
                <div class="capa_area">
                  역량
                  <span>지식이해역량</span>
                  <span>정보활용역량</span>
                  <span>창의역량</span>
                </div>
                <p class="txt">
                  이 프로그램은 코딩의 기초를 배우면서 창의적 문제 해결 능력을 키우는 것을 목표로 합니다. 참가자들은
                  다양한 프로젝트를 통해 코딩 기술을 연마하고 자신의 아이디어를 현실로 구현하는 경험을 쌓습니다.
                </p>
                <ul class="period">
                  <li>
                    <span>모집</span>
                    24/07/01 ~ 24/07/31
                  </li>
                  <li>
                    <span>운영</span>
                    24/07/01 ~ 24/07/31
                  </li>
                  <li>
                    <span>대상</span>
                    재학생ㆍ휴학생
                  </li>
                </ul>
                <ul class="function_list">
                  <li class="mileage">100,000</li>
                  <li class="like">999+</li>
                </ul>
              </div>
              <div class="btn_area">
                <router-link to="" class="btn_round btn_white btn_sm">상세</router-link>
                <router-link to="" class="btn_round btn_black btn_sm">신청</router-link>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="nonsubject_box">
              <div class="contents">
                <div class="img_wrap">
                  <img src="../../../assets/images/common/img_program_ex.png" alt="예시" />
                </div>
                <p class="title">
                  <!-- 상태에 따른 클래스 변경 : 
                    모집중 : blue
                    모집예정 : pink
                    운영중 : green
                    운영종료 : gray
                  -->
                  <span class="status_label gray">운영종료</span>
                  세계를 만나는 미디어 탐험: 다양한 문화를 배우는 여정
                </p>
                <p class="btn_like2">
                  <input type="checkbox" id="programlike3" name="programlike" />
                  <label for="programlike3">좋아요</label>
                </p>
                <div class="label_area">
                  <span class="team">Team</span>
                  <span class="class">Class</span>
                </div>
                <div class="capa_area">
                  역량
                  <span>지식이해역량</span>
                  <span>정보활용역량</span>
                  <span>창의역량</span>
                </div>
                <p class="txt">
                  다양한 미디어 형식을 통해 세계의 다양한 문화를 탐험하는 것을 목표로 합니다. 참가자들은 영화, 음악,
                  문학 등을 통해 다양한 문화를 이해하고 폭넓은 시각을 키우는 기회를 제공받습니다.
                </p>
                <ul class="period">
                  <li>
                    <span>모집</span>
                    24/07/01 ~ 24/07/31
                  </li>
                  <li>
                    <span>운영</span>
                    24/07/01 ~ 24/07/31
                  </li>
                  <li>
                    <span>대상</span>
                    재학생ㆍ휴학생
                  </li>
                </ul>
                <ul class="function_list">
                  <li class="mileage">100,000</li>
                  <li class="like">999+</li>
                </ul>
              </div>
              <div class="btn_area">
                <router-link to="" class="btn_round btn_white btn_sm">상세</router-link>
                <router-link to="" class="btn_round btn_black btn_sm">신청</router-link>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  // props: {
  //   loaded: { type: Boolean, default: false },
  // },
  setup() {
    return {
      modules: [Navigation, Pagination],
      swiperOptions: {
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 8,
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
  data: () => ({
    loaded: false,
  }),
  mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 2000);
  },
};
</script>
