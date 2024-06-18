<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">비교과 운영</h2>
        <div class="title_function">
          <div class="radio_tab_wrap">
            <p class="radio_tab">
              <input type="radio" id="radio1" name="radio_program" />
              <label for="radio1">비교과신청</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio2" name="radio_program" />
              <label for="radio2">나의 비교과</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio3" name="radio_program" checked />
              <label for="radio3">비교과 운영</label>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid_content">
      <div class="search_wrap">
        <div class="select_row sm">
          <vue-select class="select_box" :options="selectOption.year" :placeholder="'년도 전체'"></vue-select>
        </div>
        <div class="select_row sm">
          <vue-select class="select_box" :options="selectOption.capa" :placeholder="'핵심역량 전체'"></vue-select>
        </div>
        <div class="select_row sm">
          <vue-select class="select_box" :options="selectOption.category" :placeholder="'카테고리 전체'"></vue-select>
        </div>
        <div class="select_row sm">
          <vue-select class="select_box" :options="selectOption.stat" :placeholder="'운영상태 전체'"></vue-select>
        </div>
        <div class="search_row lg">
          <input type="search" class="form_style wd_p100" placeholder="보고 싶은 비교과 프로그램을 찾아보세요" />
          <button type="button" class="btn_search btn_icon icon_only">검색</button>
        </div>
      </div>
    </div>
    <div class="sub_section">
      <div class="grid_content">
        <div class="toggle_wrap">
          <div class="left">
            <p class="total_count"><strong>545</strong>개의 비교과 프로그램</p>
          </div>
        </div>
        <div class="circlearrow_slide operator">
          <swiper v-bind="swiperOptions" :modules="modules">
            <swiper-slide>
              <div class="myprogram_box">
                <div class="program_contents">
                  <div class="img_wrap">
                    <img src="@/assets/images/program/img_program_thumbnail2.png" alt="비교과 이미지" />
                  </div>
                  <p class="btn_like">
                    <input type="checkbox" id="programlike1" name="programlike" />
                    <label for="programlike1">좋아요</label>
                  </p>
                  <div class="text_wrap">
                    <span class="team_label">TEAM</span>
                    <p class="title">
                      비교과 프로그램 안내 두줄까지 비교과 프로그램 안내 두줄까지 길어지면 두줄 비교과 프로그램 안내
                    </p>
                    <p class="capa">종합적 사고력ㆍ대인관계</p>
                    <ul class="info">
                      <li><strong>대상</strong>재학생 · 휴학생</li>
                    </ul>
                    <ul class="label">
                      <li class="likes">999+</li>
                      <li class="mileage">100,000</li>
                    </ul>
                  </div>
                </div>
                <div class="label_area">
                  <!-- 상태에 따른 클래스 변경 : 
                  모집중 : blue
                  모집예정 : pink
                  운영중 : green
                  운영종료 : gray
                  -->
                  <span class="status_label blue">모집중</span>
                  <!-- 상태에 따른 클래스 변경 : 
                  승인대기 : bluegray
                  승인 : green
                  운영중 : blue
                  취소 : red
                  미승인, 본인취소, 관리자취소, 운영완료 : gray
                  -->
                  <span class="status_label2 bluegray">승인대기</span>
                </div>
                <p class="date">2024.01.01~2024.08.28</p>
                <div class="btn_wrap">
                  <router-link to="/program/programOprt/menuSetting" class="btn_bo_primary btn_round"
                    >운영바로가기</router-link
                  >
                </div>
                <!-- [pp] 운영종료시 closed -->
                <div class="oprt_close">
                  <strong>관리운영종료일</strong>
                  <p>
                    2024년 8월 20일<br /><br />
                    운영 종료일은 운영 기간 종료일 + 30일입니다
                  </p>
                </div>
              </div>
              <div class="myprogram_box">
                <div class="program_contents">
                  <div class="img_wrap">
                    <img src="@/assets/images/program/img_program_thumbnail3.png" alt="비교과 이미지" />
                  </div>
                  <p class="btn_like">
                    <input type="checkbox" id="programlike2" name="programlike" />
                    <label for="programlike2">좋아요</label>
                  </p>
                  <div class="text_wrap">
                    <span class="team_label">TEAM</span>
                    <p class="title">비교과 프로그램 안내 두줄까지</p>
                    <p class="capa">종합적 사고력ㆍ대인관계</p>
                    <ul class="info">
                      <li><strong>대상</strong>재학생 · 휴학생</li>
                    </ul>
                    <ul class="label">
                      <li class="likes">999+</li>
                      <li class="mileage">100,000</li>
                    </ul>
                  </div>
                </div>
                <div class="label_area">
                  <!-- 상태에 따른 클래스 변경 : 
                  모집중 : blue
                  모집예정 : pink
                  운영중 : green
                  운영종료 : gray
                  -->
                  <span class="status_label blue">모집중</span>
                  <!-- 상태에 따른 클래스 변경 : 
                  승인대기 : bluegray
                  승인 : green
                  운영중 : blue
                  취소 : red
                  미승인, 본인취소, 관리자취소, 운영완료 : gray
                  -->
                  <span class="status_label2 green">승인</span>
                </div>
                <p class="date">2024.01.01~2024.08.28</p>
                <div class="btn_wrap">
                  <router-link to="/program/programOprt/menuSetting" class="btn_bo_primary btn_round"
                    >운영바로가기</router-link
                  >
                </div>
                <!-- [pp] 운영종료시 closed -->
                <div class="oprt_close">
                  <strong>관리운영종료일</strong>
                  <p>
                    2024년 8월 20일<br /><br />
                    운영 종료일은 운영 기간 종료일 + 30일입니다
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="myprogram_box">
                <div class="program_contents">
                  <div class="img_wrap">
                    <img src="@/assets/images/program/img_program_thumbnail4.png" alt="비교과 이미지" />
                  </div>
                  <p class="btn_like">
                    <input type="checkbox" id="programlike3" name="programlike" />
                    <label for="programlike3">좋아요</label>
                  </p>
                  <div class="text_wrap">
                    <span class="team_label">TEAM</span>
                    <p class="title">
                      비교과 프로그램 안내 두줄까지 비교과 프로그램 안내 두줄까지 길어지면 두줄 비교과 프로그램 안내
                    </p>
                    <p class="capa">종합적 사고력ㆍ대인관계</p>
                    <ul class="info">
                      <li><strong>대상</strong>재학생 · 휴학생</li>
                    </ul>
                    <ul class="label">
                      <li class="likes">999+</li>
                      <li class="mileage">100,000</li>
                    </ul>
                  </div>
                </div>
                <div class="label_area">
                  <!-- 상태에 따른 클래스 변경 : 
                  모집중 : blue
                  모집예정 : pink
                  운영중 : green
                  운영종료 : gray
                  -->
                  <span class="status_label gray">운영종료</span>
                  <!-- 상태에 따른 클래스 변경 : 
                  승인대기 : bluegray
                  승인 : green
                  운영중 : blue
                  취소 : red
                  미승인, 본인취소, 관리자취소, 운영완료 : gray
                  -->
                  <span class="status_label2 gray">미승인</span>
                </div>
                <p class="date">2024.01.01~2024.08.28</p>
                <div class="btn_wrap">
                  <router-link to="/program/programOprt/menuSetting" class="btn_bo_primary btn_round"
                    >운영바로가기</router-link
                  >
                </div>
                <!-- [pp] 운영종료시 closed -->
                <div class="oprt_close closed">
                  <strong>관리운영종료일</strong>
                  <p>
                    2024년 8월 20일<br /><br />
                    운영 종료일은 운영 기간 종료일 + 30일입니다
                  </p>
                </div>
              </div>
              <div class="myprogram_box">
                <div class="program_contents">
                  <div class="img_wrap">
                    <img src="@/assets/images/program/img_program_thumbnail5.png" alt="비교과 이미지" />
                  </div>
                  <p class="btn_like">
                    <input type="checkbox" id="programlike4" name="programlike" />
                    <label for="programlike4">좋아요</label>
                  </p>
                  <div class="text_wrap">
                    <span class="team_label">TEAM</span>
                    <p class="title">비교과 프로그램 안내 두줄까지</p>
                    <p class="capa">종합적 사고력ㆍ대인관계</p>
                    <ul class="info">
                      <li><strong>대상</strong>재학생 · 휴학생</li>
                    </ul>
                    <ul class="label">
                      <li class="likes">999+</li>
                      <li class="mileage">100,000</li>
                    </ul>
                  </div>
                </div>
                <div class="label_area">
                  <!-- 상태에 따른 클래스 변경 : 
                  모집중 : blue
                  모집예정 : pink
                  운영중 : green
                  운영종료 : gray
                  -->
                  <span class="status_label blue">모집중</span>
                  <!-- 상태에 따른 클래스 변경 : 
                  승인대기 : bluegray
                  승인 : green
                  운영중 : blue
                  취소 : red
                  미승인, 본인취소, 관리자취소, 운영완료 : gray
                  -->
                  <span class="status_label2 blue">운영중</span>
                </div>
                <p class="date">2024.01.01~2024.08.28</p>
                <div class="btn_wrap">
                  <router-link to="/program/programOprt/menuSetting" class="btn_bo_primary btn_round"
                    >운영바로가기</router-link
                  >
                </div>
                <!-- [pp] 운영종료시 closed -->
                <div class="oprt_close">
                  <strong>관리운영종료일</strong>
                  <p>
                    2024년 8월 20일<br /><br />
                    운영 종료일은 운영 기간 종료일 + 30일입니다
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="myprogram_box">
                <div class="program_contents">
                  <div class="img_wrap">
                    <img src="@/assets/images/program/img_program_thumbnail6.png" alt="비교과 이미지" />
                  </div>
                  <p class="btn_like">
                    <input type="checkbox" id="programlike5" name="programlike" />
                    <label for="programlike5">좋아요</label>
                  </p>
                  <div class="text_wrap">
                    <span class="team_label">TEAM</span>
                    <p class="title">
                      비교과 프로그램 안내 두줄까지 비교과 프로그램 안내 두줄까지 길어지면 두줄 비교과 프로그램 안내
                    </p>
                    <p class="capa">종합적 사고력ㆍ대인관계</p>
                    <ul class="info">
                      <li><strong>대상</strong>재학생 · 휴학생</li>
                    </ul>
                    <ul class="label">
                      <li class="likes">999+</li>
                      <li class="mileage">100,000</li>
                    </ul>
                  </div>
                </div>
                <div class="label_area">
                  <!-- 상태에 따른 클래스 변경 : 
                  모집중 : blue
                  모집예정 : pink
                  운영중 : green
                  운영종료 : gray
                  -->
                  <span class="status_label blue">모집중</span>
                  <!-- 상태에 따른 클래스 변경 : 
                  승인대기 : bluegray
                  승인 : green
                  운영중 : blue
                  취소 : red
                  미승인, 본인취소, 관리자취소, 운영완료 : gray
                  -->
                  <span class="status_label2 red">취소</span>
                </div>
                <p class="date">2024.01.01~2024.08.28</p>
                <div class="btn_wrap">
                  <router-link to="/program/programOprt/menuSetting" class="btn_bo_primary btn_round"
                    >운영바로가기</router-link
                  >
                </div>
                <!-- [pp] 운영종료시 closed -->
                <div class="oprt_close">
                  <strong>관리운영종료일</strong>
                  <p>
                    2024년 8월 20일<br /><br />
                    운영 종료일은 운영 기간 종료일 + 30일입니다
                  </p>
                </div>
              </div>
              <div class="myprogram_box">
                <div class="program_contents">
                  <div class="img_wrap">
                    <img src="@/assets/images/program/img_program_thumbnail7.png" alt="비교과 이미지" />
                  </div>
                  <p class="btn_like">
                    <input type="checkbox" id="programlike6" name="programlike" />
                    <label for="programlike6">좋아요</label>
                  </p>
                  <div class="text_wrap">
                    <span class="team_label">TEAM</span>
                    <p class="title">비교과 프로그램 안내 두줄까지</p>
                    <p class="capa">종합적 사고력ㆍ대인관계</p>
                    <ul class="info">
                      <li><strong>대상</strong>재학생 · 휴학생</li>
                    </ul>
                    <ul class="label">
                      <li class="likes">999+</li>
                      <li class="mileage">100,000</li>
                    </ul>
                  </div>
                </div>
                <!-- 상태에 따른 클래스 변경 : 
                  모집중 : blue
                  모집예정 : pink
                  운영중 : green
                  운영종료 : gray
                -->
                <span class="status_label blue">모집중</span>
                <p class="date">2024.01.01~2024.08.28</p>
                <div class="btn_wrap">
                  <router-link to="/program/programOprt/menuSetting" class="btn_bo_primary btn_round"
                    >운영바로가기</router-link
                  >
                </div>
                <!-- [pp] 운영종료시 closed -->
                <div class="oprt_close">
                  <strong>관리운영종료일</strong>
                  <p>
                    2024년 8월 20일<br /><br />
                    운영 종료일은 운영 기간 종료일 + 30일입니다
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
      swiperOptions: {
        navigation: true,
        breakpoints: {
          1279: {
            slidesPerView: 2.26,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 1.8,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 1.4,
            spaceBetween: 12,
          },
          600: {
            slidesPerView: 1.1,
            spaceBetween: 12,
          },
        },
        slidesPerView: 1.2,
        spaceBetween: 12,
      },
      selectOption: {
        year: [{ label: "2025" }],
        capa: [{ label: "핵심역량 가" }, { label: "핵심역량 나" }],
        category: [{ label: "카테고리 가" }, { label: "카테고리 나" }],
        selectType: [{ label: "이수" }, { label: "미이수" }],
        stat: [
          { label: "운영중" },
          { label: "승인" },
          { label: "승인대기" },
          { label: "미승인" },
          { label: "본인취소" },
          { label: "관리자취소" },
          { label: "운영완료" },
        ],
      },
    };
  },
};
</script>
