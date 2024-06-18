<template>
  <div class="grid_content">
    <div class="toggle_wrap">
      <div class="left">
        <p class="total_count">
          <strong>{{ props.list.length }}</strong
          >개의 비교과 프로그램
        </p>
      </div>
    </div>
    <div class="circlearrow_slide" :class="oprt ? 'operator' : ''">
      <swiper v-bind="swiperOptions" :modules="modules">
        <swiper-slide v-for="(items, idx) in computedList" :key="idx">
          <div class="myprogram_box" v-for="item in items" :key="item.eliId">
            <div class="program_contents">
              <div class="img_wrap">
                <img :src="item.etiUrl" alt="비교과 이미지" />
              </div>
              <p class="btn_like">
                <input type="checkbox" id="programlike1" name="programlike" />
                <label for="programlike1">좋아요</label>
              </p>
              <div class="text_wrap">
                <span class="team_label" v-if="item.eliPartiCd === 'TEAM'">TEAM</span>
                <p class="title">{{ item.eliTitle }}</p>
                <p class="capa">{{ item.ability }}</p>
                <ul class="info">
                  <li><strong>대상</strong>{{ item.elsApplyTargetNm }}</li>
                </ul>
                <ul class="label">
                  <li class="likes">{{ 5 >= 1000 ? "999+" : 5 }}</li>
                  <li class="mileage">{{ vm.$format.numberWithComma(item.totalMileage) }}</li>
                </ul>
              </div>
            </div>
            <div class="label_area">
              <span :class="colorClass(item.optSts)">{{
                item.optSts == "OPT_STS1" ? "운영중" : item.optSts == "OPT_STS2" ? "운영 전" : "운영종료"
              }}</span>
              <span :class="colorClass(item.etiSts)">{{ item.etiStsNm }}</span>
              <button class="status_label pink" v-if="item.etiSts === 'ETI001'" @click="props.cancleAttnt(item.etiId)">
                취소
              </button>
            </div>
            <p class="date">
              {{ moment(item.eliOprtStrDate).format("YYYY.MM.DD") }}~
              {{ moment(item.eliOprtEndDate).format("YYYY.MM.DD") }}
            </p>

            <!-- 비교과 학생 Part -->
            <div class="btn_wrap" v-if="props.user">
              <button
                type="button"
                @click="onClickGoClass(item.eliId)"
                :disabled="item.배너_비교과_CLASS === 'N'"
                class="btn_bo_primary btn_round"
              >
                Class 바로가기
              </button>
              <button class="btn_bo_primary btn_round" :disabled="item.eciPreYn === 'N'">사전조사</button>
              <button class="btn_bo_primary btn_round" :disabled="item.eciAfterYn === 'N'">사후조사</button>
              <button class="btn_bo_primary btn_round" :disabled="item.eciSatisYn === 'N'">만족도조사</button>
              <button class="btn_bo_primary btn_round" :disabled="item.eciCertiYn === 'N'">이수증</button>
            </div>

            <!-- 비교과 운영자 Part -->
            <div class="btn_wrap" v-if="props.oprt">
              <button
                @click="onClickGoClassOprt(item.eliId)"
                class="btn_bo_primary btn_round"
                :disabled="moment().diff(moment(item.eliOprtEndDate), 'days') > 30"
              >
                운영바로가기
              </button>
            </div>

            <div
              class="oprt_close"
              :class="moment().diff(moment(item.eliOprtEndDate), 'days') > 30 ? 'closed' : ''"
              v-if="props.oprt"
            >
              <strong>관리운영종료일</strong>
              <p>
                {{ moment(item.eliOprtEndDate).add(30, "days").format("YYYY년 MM월 DD일") }}
                <br /><br />
                운영 종료일은 운영 기간 종료일 + 30일입니다
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script setup lang="ts">
import moment from "moment";
import { useRouter } from "vue-router";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getCurrentInstance, computed } from "vue";

const instance = getCurrentInstance();
if (!instance) {
  throw new Error("getCurrentInstance returned null");
}

const vm = instance.appContext.config.globalProperties;

const modules = [Navigation];
const swiperOptions = {
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
};

const props = defineProps({
  list: { type: Array, required: true },
  user: { type: Boolean, default: false },
  oprt: { type: Boolean, default: false },
  cancleAttnt: Function,
});

const customOption = {
  cardPerSlide: 2,
};

const computedList = computed(() => {
  const list = [];
  for (let i = 0; i < props.list?.length; i += customOption.cardPerSlide) {
    list.push(props.list?.slice(i, i + customOption.cardPerSlide));
  }
  return list;
});

const router = useRouter();
const onClickGoClass = (_key: string) => {
  router.push({ path: "/user/program/myProgram/class", state: { npsKeyId: _key } });
};

const onClickGoClassOprt = (_key: string) => {
  router.push({ path: "/prof/program/operation/class", state: { npsKeyId: _key } });
};

function colorClass(state: string) {
  const classname =
    state == "ETI001" || state == "OPT_STS2"
      ? "status_label lightgray"
      : state == "ETI002"
        ? "status_label green"
        : state == "ETI004" || state == "OPT_STS1"
          ? "status_label blue"
          : "status_label gray";
  return classname;
}
</script>
