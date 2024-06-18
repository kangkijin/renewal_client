<template>
  <div class="main_section section6">
    <div class="grid_content">
      <div class="section_tit_wrap responsive_mob">
        <h3 class="section_subtit">
          지도학생명단
          <span class="number">50명</span>
        </h3>
        <div class="title_function">
          <div class="select_row sm">
            <vue-select :options="selectedOption.options" v-model="selectedOption.value" class="select_box" />
          </div>
        </div>
      </div>
      <div class="arrow_slide paging">
        <!-- 지도학생명단 없을때 :
        <div class="no_notice"><p class="font_gray">지도학생명단이 없습니다</p></div>
        -->
        <swiper v-bind="swiperOptions" :modules="modules">
          <swiper-slide>
            <ul class="box guidance_list">
              <li>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex1.png" alt="예시" />
                </div>
                <div class="contents">
                  <strong class="name">
                    이강선
                    <span>교육학과&middot;1학년</span>
                  </strong>
                  <p>소개 멘트 들어갑니다. 소개 멘트 들어갑니다.</p>
                  <ul>
                    <li>학점<span>3.72</span></li>
                    <li>마일리지<span>32,000</span></li>
                    <li>결석<span>8</span></li>
                    <li>성적증감<span>-0.72</span></li>
                  </ul>
                </div>
                <div class="function">
                  <span>상담 1회</span>
                  <button type="button" class="btn_icon icon_only write" @click="popupShow(0)">작성</button>
                  <button
                    type="button"
                    class="btn_icon icon_only add_person"
                    @click="addressAdd('나의 주소록에 등록 하시겠습니까?')"
                  >
                    추가
                  </button>
                </div>
              </li>
              <li>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex1.png" alt="예시" />
                </div>
                <div class="contents">
                  <strong class="name">
                    김현지
                    <span>교육학과&middot;1학년</span>
                  </strong>
                  <p>소개 멘트 들어갑니다. 소개 멘트 들어갑니다.</p>
                  <ul>
                    <li>학점<span>3.72</span></li>
                    <li>마일리지<span>32,000</span></li>
                    <li>결석<span>8</span></li>
                    <li>성적증감<span>-0.72</span></li>
                  </ul>
                </div>
                <div class="function">
                  <span>상담 1회</span>
                  <button type="button" class="btn_icon icon_only write">작성</button>
                  <button
                    type="button"
                    class="btn_icon icon_only add_person"
                    @click="addressAdd('나의 주소록에 등록 하시겠습니까?')"
                  >
                    추가
                  </button>
                </div>
              </li>
              <li>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex1.png" alt="예시" />
                </div>
                <div class="contents">
                  <strong class="name">
                    김지민
                    <span>교육학과&middot;1학년</span>
                  </strong>
                  <p>
                    안녕하세요, 저는 공학을 전공하는 대학 2학년 학생입니다. 팀 프로젝트를 통해 협업 능력을 키우고
                    싶습니다.
                  </p>
                  <ul>
                    <li>학점<span>3.72</span></li>
                    <li>마일리지<span>32,000</span></li>
                    <li>결석<span>8</span></li>
                    <li>성적증감<span>-0.72</span></li>
                  </ul>
                </div>
                <div class="function">
                  <span>상담 1회</span>
                  <button type="button" class="btn_icon icon_only write">작성</button>
                  <button type="button" class="btn_icon icon_only add_person">추가</button>
                </div>
              </li>
              <li>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex1.png" alt="예시" />
                </div>
                <div class="contents">
                  <strong class="name">
                    구혜선
                    <span>교육학과&middot;1학년</span>
                  </strong>
                  <p>
                    안녕하세요, 저는 컴퓨터 공학을 전공하는 대학 4학년 학생입니다. 새로운 프로그래밍 언어를 배우며
                    소프트웨어 개발에 도전하고 있습니다.
                  </p>
                  <ul>
                    <li>학점<span>3.72</span></li>
                    <li>마일리지<span>32,000</span></li>
                    <li>결석<span>8</span></li>
                    <li>성적증감<span>-0.72</span></li>
                  </ul>
                </div>
                <div class="function">
                  <span>상담 1회</span>
                  <button type="button" class="btn_icon icon_only write">작성</button>
                  <button type="button" class="btn_icon icon_only add_person">추가</button>
                </div>
              </li>
              <li>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <div class="contents">
                  <strong class="name">
                    이홍기
                    <span>교육학과&middot;1학년</span>
                  </strong>
                  <p>
                    안녕하세요, 저는 음악을 전공하는 대학 1학년 학생입니다. 피아노와 노래 부르기를 좋아하며 음악을 통해
                    감정을 전달하고 싶습니다.
                  </p>
                  <ul>
                    <li>학점<span>3.72</span></li>
                    <li>마일리지<span>32,000</span></li>
                    <li>결석<span>8</span></li>
                    <li>성적증감<span>-0.72</span></li>
                  </ul>
                </div>
                <div class="function">
                  <span>상담 1회</span>
                  <button type="button" class="btn_icon icon_only write">작성</button>
                  <button type="button" class="btn_icon icon_only add_person">추가</button>
                </div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="box guidance_list">
              <li>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <div class="contents">
                  <strong class="name">
                    이민기
                    <span>교육학과&middot;1학년</span>
                  </strong>
                  <p>
                    안녕하세요, 저는 언어학을 전공하는 대학 2학년 학생입니다. 다양한 언어를 배우며 문화를 이해하고
                    싶습니다.
                  </p>
                  <ul>
                    <li>학점<span>3.72</span></li>
                    <li>마일리지<span>32,000</span></li>
                    <li>결석<span>8</span></li>
                    <li>성적증감<span>-0.72</span></li>
                  </ul>
                </div>
                <div class="function">
                  <span>상담 1회</span>
                  <button type="button" class="btn_icon icon_only write">작성</button>
                  <button type="button" class="btn_icon icon_only add_person">추가</button>
                </div>
              </li>
              <li>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex1.png" alt="예시" />
                </div>
                <div class="contents">
                  <strong class="name">
                    강지나
                    <span>교육학과&middot;1학년</span>
                  </strong>
                  <p>
                    안녕하세요, 저는 미술을 전공하는 대학 3학년 학생입니다. 유화와 조각을 통해 내면의 감정을 표현하고
                    있습니다.
                  </p>
                  <ul>
                    <li>학점<span>3.72</span></li>
                    <li>마일리지<span>32,000</span></li>
                    <li>결석<span>8</span></li>
                    <li>성적증감<span>-0.72</span></li>
                  </ul>
                </div>
                <div class="function">
                  <span>상담 1회</span>
                  <button type="button" class="btn_icon icon_only write">작성</button>
                  <button type="button" class="btn_icon icon_only add_person">추가</button>
                </div>
              </li>
              <li>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex1.png" alt="예시" />
                </div>
                <div class="contents">
                  <strong class="name">
                    이혜연
                    <span>교육학과&middot;1학년</span>
                  </strong>
                  <p>
                    안녕하세요, 저는 체육을 전공하는 대학 2학년 학생입니다. 운동을 통해 건강한 생활을 유지하고 싶습니다.
                  </p>
                  <ul>
                    <li>학점<span>3.72</span></li>
                    <li>마일리지<span>32,000</span></li>
                    <li>결석<span>8</span></li>
                    <li>성적증감<span>-0.72</span></li>
                  </ul>
                </div>
                <div class="function">
                  <span>상담 1회</span>
                  <button type="button" class="btn_icon icon_only write">작성</button>
                  <button type="button" class="btn_icon icon_only add_person">추가</button>
                </div>
              </li>
              <li>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex1.png" alt="예시" />
                </div>
                <div class="contents">
                  <strong class="name">
                    신수정
                    <span>교육학과&middot;1학년</span>
                  </strong>
                  <p>
                    안녕하세요, 저는 경영학을 전공하는 대학 4학년 학생입니다. 비즈니스 전략과 경영 실무에 대해 공부하고
                    있습니다.
                  </p>
                  <ul>
                    <li>학점<span>3.72</span></li>
                    <li>마일리지<span>32,000</span></li>
                    <li>결석<span>8</span></li>
                    <li>성적증감<span>-0.72</span></li>
                  </ul>
                </div>
                <div class="function">
                  <span>상담 1회</span>
                  <button type="button" class="btn_icon icon_only write">작성</button>
                  <button type="button" class="btn_icon icon_only add_person">추가</button>
                </div>
              </li>
              <li>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex1.png" alt="예시" />
                </div>
                <div class="contents">
                  <strong class="name">
                    강민지
                    <span>교육학과&middot;1학년</span>
                  </strong>
                  <p>소개 멘트 들어갑니다. 소개 멘트 들어갑니다.</p>
                  <ul>
                    <li>학점<span>3.72</span></li>
                    <li>마일리지<span>32,000</span></li>
                    <li>결석<span>8</span></li>
                    <li>성적증감<span>-0.72</span></li>
                  </ul>
                </div>
                <div class="function">
                  <span>상담 1회</span>
                  <button type="button" class="btn_icon icon_only write">작성</button>
                  <button type="button" class="btn_icon icon_only add_person">추가</button>
                </div>
              </li>
            </ul>
          </swiper-slide>
          <swiper-slide>
            <ul class="box guidance_list">
              <li>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex1.png" alt="예시" />
                </div>
                <div class="contents">
                  <strong class="name">
                    이혜정
                    <span>교육학과&middot;1학년</span>
                  </strong>
                  <p>소개 멘트 들어갑니다. 소개 멘트 들어갑니다.</p>
                  <ul>
                    <li>학점<span>3.72</span></li>
                    <li>마일리지<span>32,000</span></li>
                    <li>결석<span>8</span></li>
                    <li>성적증감<span>-0.72</span></li>
                  </ul>
                </div>
                <div class="function">
                  <span>상담 1회</span>
                  <button type="button" class="btn_icon icon_only write">작성</button>
                  <button type="button" class="btn_icon icon_only add_person">추가</button>
                </div>
              </li>
              <li>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <div class="contents">
                  <strong class="name">
                    김민식
                    <span>교육학과&middot;1학년</span>
                  </strong>
                  <p>소개 멘트 들어갑니다. 소개 멘트 들어갑니다.</p>
                  <ul>
                    <li>학점<span>3.72</span></li>
                    <li>마일리지<span>32,000</span></li>
                    <li>결석<span>8</span></li>
                    <li>성적증감<span>-0.72</span></li>
                  </ul>
                </div>
                <div class="function">
                  <span>상담 1회</span>
                  <button type="button" class="btn_icon icon_only write">작성</button>
                  <button type="button" class="btn_icon icon_only add_person">추가</button>
                </div>
              </li>
              <li>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <div class="contents">
                  <strong class="name">
                    김현석
                    <span>교육학과&middot;1학년</span>
                  </strong>
                  <p>소개 멘트 들어갑니다. 소개 멘트 들어갑니다.</p>
                  <ul>
                    <li>학점<span>3.72</span></li>
                    <li>마일리지<span>32,000</span></li>
                    <li>결석<span>8</span></li>
                    <li>성적증감<span>-0.72</span></li>
                  </ul>
                </div>
                <div class="function">
                  <span>상담 1회</span>
                  <button type="button" class="btn_icon icon_only write">작성</button>
                  <button type="button" class="btn_icon icon_only add_person">추가</button>
                </div>
              </li>
              <li>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <div class="contents">
                  <strong class="name">
                    이현석
                    <span>교육학과&middot;1학년</span>
                  </strong>
                  <p>소개 멘트 들어갑니다. 소개 멘트 들어갑니다.</p>
                  <ul>
                    <li>학점<span>3.72</span></li>
                    <li>마일리지<span>32,000</span></li>
                    <li>결석<span>8</span></li>
                    <li>성적증감<span>-0.72</span></li>
                  </ul>
                </div>
                <div class="function">
                  <span>상담 1회</span>
                  <button type="button" class="btn_icon icon_only write">작성</button>
                  <button type="button" class="btn_icon icon_only add_person">추가</button>
                </div>
              </li>
            </ul>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>

  <PopupView v-model="isPopups[0]" class="medium">
    <template #title>한줄소개 작성하기</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(0)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl">저장</button>
    </template>
    <ul class="nofitarget_list">
      <li>
        <div class="info">
          <div class="img_wrap">
            <img src="@/assets/images/common/img_noimg.svg" alt="이미지 없음" />
          </div>
          <p class="detail">
            <strong>이진석</strong>
            <span>간호대학</span>
            <span>1학년</span>
          </p>
        </div>
        <div class="function text">최종 수정일<span class="medium ml_2">2024.05.01</span></div>
      </li>
    </ul>
    <div class="letter_count count40">
      <input type="search" class="form_style wd_p100" placeholder="한줄소개를 작성해주세요" />
      <p class="letter_counter"></p>
    </div>
  </PopupView>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import PopupView from "@/components/common/PopupView.vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
    PopupView,
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
      swiperOptions: {
        breakpoints: {
          1280: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
        },
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 8,
        navigation: true,
        pagination: {
          clickable: true,
        },
      },
    };
  },
  data: () => ({
    selectedOption: {
      value: "선택",
      options: [{ label: "항목추가" }],
    },
    isPopups: [false],
  }),
  methods: {
    popupShow(idx: number) {
      const vm = this;
      vm.isPopups[idx] = true;
    },
    popupHide(idx: number) {
      const vm = this;
      vm.isPopups[idx] = false;
    },
    addressAdd(_text: string) {
      const vm = this;
      vm.$confirm(_text, "", (isConfirm: boolean) => {
        if (isConfirm) {
          vm.$toast("등록되었습니다.", "success");
        }
      });
    },
  },
};
</script>
