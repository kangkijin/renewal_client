<template>
  <div class="setting_popup_header ta_r">
    <div class="select_row sm2 dp_inline">
      <vue-select class="select_box md" :options="options2" :placeholder="'1회차'"></vue-select>
    </div>
  </div>
  <div class="stdlist_slide circlearrow_slide">
    <swiper v-bind="swiperOptions" :modules="modules">
      <swiper-slide>
        <div class="std_radio">
          <input type="radio" name="std_radio" id="std_radio1_1" class="hidden" value="" checked />
          <label for="std_radio1_1">
            <div class="std_profile">
              <div class="img_wrap">
                <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
              </div>
              김강준
            </div>
          </label>
        </div>
      </swiper-slide>
      <swiper-slide>
        <!-- [pp] 평가완료시 finished -->
        <div class="std_radio finished">
          <input type="radio" name="std_radio" id="std_radio1_2" class="hidden" value="" />
          <label for="std_radio1_2">
            <div class="std_profile">
              <div class="img_wrap">
                <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
              </div>
              김강준
            </div>
          </label>
        </div>
      </swiper-slide>
      <swiper-slide>
        <!-- [pp] 평가완료시 finished -->
        <div class="std_radio finished">
          <input type="radio" name="std_radio" id="std_radio1_3" class="hidden" value="" />
          <label for="std_radio1_3">
            <div class="std_profile">
              <div class="img_wrap">
                <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
              </div>
              김강준
            </div>
          </label>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="std_radio">
          <input type="radio" name="std_radio" id="std_radio1_4" class="hidden" value="" />
          <label for="std_radio1_4">
            <div class="std_profile">
              <div class="img_wrap">
                <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
              </div>
              김강준
            </div>
          </label>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="std_radio">
          <input type="radio" name="std_radio" id="std_radio1_5" class="hidden" value="" />
          <label for="std_radio1_5">
            <div class="std_profile">
              <div class="img_wrap">
                <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
              </div>
              김강준
            </div>
          </label>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="std_radio">
          <input type="radio" name="std_radio" id="std_radio1_6" class="hidden" value="" />
          <label for="std_radio1_6">
            <div class="std_profile">
              <div class="img_wrap">
                <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
              </div>
              김강준
            </div>
          </label>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="std_radio">
          <input type="radio" name="std_radio" id="std_radio1_7" class="hidden" value="" />
          <label for="std_radio1_7">
            <div class="std_profile">
              <div class="img_wrap">
                <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
              </div>
              김강준
            </div>
          </label>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="std_radio">
          <input type="radio" name="std_radio" id="std_radio1_8" class="hidden" value="" />
          <label for="std_radio1_8">
            <div class="std_profile">
              <div class="img_wrap">
                <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
              </div>
              김강준
            </div>
          </label>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="std_radio">
          <input type="radio" name="std_radio" id="std_radio1_9" class="hidden" value="" />
          <label for="std_radio1_9">
            <div class="std_profile">
              <div class="img_wrap">
                <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
              </div>
              김강준
            </div>
          </label>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <div class="pd_t15">
    <div class="intro_wrapper">
      <div class="intro_list">
        <ul>
          <li>
            <strong>수료 기준</strong>
            <p>50점</p>
          </li>
          <li>
            <strong>결과 공개</strong>
            <p>점수 + 평가의견</p>
          </li>
          <li>
            <strong>응시 기간</strong>
            <p>2024 - 09 - 10 12 : 00 ~ 2024 - 10 - 01 01 : 00</p>
          </li>
          <li>
            <strong>팀과제 여부</strong>
            <p>팀과제</p>
          </li>
        </ul>
      </div>
      <div class="intro_cnt">
        <div class="wrap">
          <div class="cnt">
            <div class="editor_area">
              본 과제는 인공지능 알고리즘에 대한 비교 분석을 진행하는 것입니다. 다양한 인공지능 알고리즘들이 존재하며,
              이들의 장단점을 파악하고 비교하여 어떤 상황에서 어떤 알고리즘이 뛰어나게 작동하는지에 대해 이해하는 것이
              목표입니다. 과제 제출 시 아래와 같은 내용을 포함해주세요: <br />
              1. 선택한 인공지능 알고리즘들의 소개 <br />
              2. 각 알고리즘의 동작 방식 및 특징 <br />
              3. 알고리즘들 간의 비교 분석 (정확도, 속도, 리소스 사용량 등) <br />
              4. 각 알고리즘의 활용 사례 및 적합한 상황
            </div>
          </div>
        </div>
        <div class="submit_wrap oprtr">
          <ul>
            <li class="score">
              <p>점수</p>
              <strong> <input type="number" class="form_style ta_r" /><span>점</span></strong>
            </li>
            <li class="status">
              <p>제출상태</p>
              <strong>제출</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="attached_filedown">
      <p class="title">첨부파일<span>4</span>개</p>
      <!-- [pp] 첨부파일 없을때 -->
      <!-- <div class="no_attachedfile">
            <p>첨부파일이 없습니다.</p>
          </div> -->
      <div class="file_list">
        <div class="filedown">
          <a href="javascript:void(0);">
            <div class="title">
              <p>
                <strong class="float_label"><span>.hwp</span></strong
                >참고_알고리즘_보고서
              </p>
            </div>
            <span>115 MB</span>
          </a>
        </div>
        <div class="filedown">
          <a href="javascript:void(0);">
            <div class="title">
              <p>
                <strong class="float_label"><span>.hwp</span></strong
                >참고_알고리즘_코드
              </p>
            </div>
            <span>115 MB</span>
          </a>
        </div>
        <div class="filedown">
          <a href="javascript:void(0);">
            <div class="title">
              <p>
                <strong class="float_label"><span>.hwp</span></strong
                >참고_알고리즘_데이터
              </p>
            </div>
            <span>115 MB</span>
          </a>
        </div>
        <div class="filedown">
          <a href="javascript:void(0);">
            <div class="title">
              <p>
                <strong class="float_label"><span>.hwp</span></strong
                >참고_알고리즘_시각자료
              </p>
            </div>
            <span>115 MB</span>
          </a>
        </div>
      </div>
    </div>
    <div class="result_cntwrap">
      <strong>제출 과제</strong>
      <div class="result_row">
        <strong>과제 제목</strong>
        <div class="cnt">
          <p class="medium">인공지능 알고리즘 비교 연구</p>
        </div>
      </div>
      <div class="result_row">
        <strong>과제 내용</strong>
        <div class="cnt">
          <p>
            안녕하세요 교수님, 저는 이번 학기에 듣고 있는 AI 비교과 강의의 학생입니다. 과제로 주어진 인공지능 알고리즘
            비교 연구를 수행했습니다. 제가 선택한 알고리즘은 딥러닝과 유전 알고리즘입니다. 두 알고리즘을 비교하고 분석한
            결과를 보고드립니다. 1. 딥러닝: 딥러닝은 심층 신경망을 기반으로 하는 알고리즘으로, 특히 이미지 인식 및
            자연어 처리와 같은 분야에서 뛰어난 성능을 보입니다. <br />
            2. 유전 알고리즘: 유전 알고리즘은 진화 이론을 기반으로 하는 최적화 알고리즘으로, 유전자를 통해 해를 발견하는
            방식으로 작동합니다. <br />
            이 두 알고리즘을 정확도, 학습 시간 및 리소스 사용량 등의 관점에서 비교하여 보고서에 작성했습니다. 또한, 각
            알고리즘의 활용 사례에 대해서도 조사하고 분석했습니다.
          </p>
        </div>
      </div>
      <div class="result_row">
        <strong>첨부파일</strong>
        <div class="cnt">
          <div class="file_list">
            <div class="filedown">
              <a href="javascript:void(0);">
                <div class="title">
                  <p>
                    <strong class="float_label"><span>.hwp</span></strong
                    >인공지능 알고리즘 비교 보고서
                  </p>
                </div>
                <span>115 MB</span>
              </a>
            </div>
            <div class="filedown">
              <a href="javascript:void(0);">
                <div class="title">
                  <p>
                    <strong class="float_label"><span>.hwp</span></strong
                    >딥러닝 및 유전 알고리즘 코드
                  </p>
                </div>
                <span>115 MB</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="result_row graded">
        <strong>평가 의견</strong>
        <textarea rows="4" class="form_style wd_p100"></textarea>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const modules = [Navigation];
const swiperOptions = {
  navigation: true,
  breakpoints: {
    1279: {
      slidesPerView: 7.15,
      spaceBetween: 6,
    },
    1024: {
      slidesPerView: 5.2,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 4.2,
      spaceBetween: 12,
    },
    600: {
      slidesPerView: 3.2,
      spaceBetween: 12,
    },
  },
  slidesPerView: 2.2,
  spaceBetween: 6,
  slideToClickedSlide: true,
};

import { onMounted } from "vue";
import { tblCheck } from "@/assets/js/common";
onMounted(() => {
  tblCheck();
});
</script>
