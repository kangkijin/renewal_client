<template>
  <!-- 결과 없을 경우 표출 -->
  <!--  
  <div class="test_before">
    <div>
      <p>프로그램이 없습니다.</p>
    </div>
  </div>
  -->
  <div class="program_listwrap">
    <div v-for="(program, idx) in list" :key="program.비교과_키" class="program_listbox">
      <p class="btn_like">
        <input type="checkbox" :id="`programlike${idx}`" v-model="program.내_찜_여부" true-value="Y" false-value="N" />
        <label :for="`programlike${idx}`">좋아요</label>
      </p>
      <router-link :to="`/user/program/detail/${program.비교과_키}`" class="program_contents">
        <div class="img_wrap">
          <img :src="program.썸네일_경로" @error="onErrorReplaceDefaultImg" alt="비교과 이미지" />
        </div>
        <span class="team_label" v-if="program.팀_여부 === 'Y'">TEAM</span>
        <p class="title">
          <span class="float_label status_label" :class="statusClass[program.모집_구분].class">
            {{ statusClass[program.모집_구분].name }}
          </span>
          {{ program.비교과_제목 }}
        </p>
        <p class="capa">{{ program.비교과_역량 }}</p>
        <div class="contents_bottom">
          <ul class="info">
            <li>
              <strong>모집</strong>
              {{ moment(program.모집_시작_기간).format("YY/MM/DD") }} ~
              {{ moment(program.모집_종료_기간).format("YY/MM/DD") }}
            </li>
            <li>
              <strong>운영</strong> {{ moment(program.운영_시작_기간).format("YY/MM/DD") }} ~
              {{ moment(program.운영_종료_기간).format("YY/MM/DD") }}
            </li>
            <li><strong>대상</strong>{{ program.비교과_대상.split("|").join(" · ") }}</li>
          </ul>
          <ul class="label">
            <li class="likes">{{ program.총_찜_수 >= 1000 ? "999+" : program.총_찜_수 }}</li>
            <li class="mileage" v-if="program.비교과_마일리지 > 0">
              {{ vm.$format.numberWithComma(program.비교과_마일리지) }}
            </li>
            <li class="apply">
              <strong>{{ program.신청자_수 }}</strong>
              /{{ program.모집자_수 }}
            </li>
            <li class="waiting">{{ program.대기신청_수 }}/{{ program.대기모집_수 }}</li>
          </ul>
        </div>
      </router-link>
    </div>
  </div>
  <PaginationUi />
</template>
<script setup lang="ts">
import PaginationUi from "@/components/common/PaginationUi.vue";
import moment from "moment";
import type { ProgramListTypes } from "@/types/program/ProgramTypes";
import noImg from "@/assets/images/common/img_logo_noimg.png";
import { getCurrentInstance } from "vue";

defineProps({
  list: Array<ProgramListTypes>,
});

const instance = getCurrentInstance();
if (!instance) {
  throw new Error("getCurrentInstance returned null");
}

const vm = instance.appContext.config.globalProperties;

const statusClass = {
  ing: { class: "blue", name: "모집중" },
  plan: { class: "pink", name: "모집예정" },
};

const onErrorReplaceDefaultImg = (e: Event) => {
  const event: any = e.target;
  if (event) {
    event.src = noImg;
  }
};
</script>
