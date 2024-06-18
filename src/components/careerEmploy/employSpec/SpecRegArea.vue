<template>
  <div class="flex_wrap career_flex">
    <div class="flex_wrap spec_flex">
      <div class="box">
        <div class="box_titlewrap">
          <h4>나의 취업스펙 등록</h4>
        </div>
        <div class="spec_select">
          <vue-select class="select_box" :options="selectOption.spec1" v-model="selectOption.value1"></vue-select>
          <vue-select
            class="select_box"
            :options="selectOption.spec3"
            v-model="selectOption.value3"
            disabled
          ></vue-select>
          <input type="number" class="form_style wd_p100" placeholder="입력 (점수/개/회/개월/시간)" />
        </div>
        <div class="spec_select_footer">
          <div class="attach_filewrap">
            <label class="btn_round btn_white btn_sm">
              파일 추가
              <input type="file" class="hidden" />
            </label>
            <div class="attach_file_list">
              <v-menu
                class="tooltip_area"
                transition="slide-y-transition"
                :close-on-content-click="false"
                v-model="tooltip1"
              >
                <template v-slot:activator="{ props }">
                  <button type="button" class="btn_tooltip" v-bind="props">버튼</button>
                </template>
                <div class="tooltip_cnt">
                  <span class="name">*여러개의 첨부자료의 경우 1개의 이미지 파일로 만들어서 등록해주세요.</span>
                </div>
              </v-menu>
              <!-- [pp] 파일등록 전 문구-->
              <!-- <p>취업스펙을 등록해주세요.</p> -->
              <!-- [pp] 파일등록시 위 문구삭제-->
              <div class="file_row">
                <div class="file_name">
                  <p>나의취업스펙이력서.hwp</p>
                  <i>145KB</i>
                </div>
                <button type="button" class="btn_icon icon_only delete">삭제</button>
              </div>
            </div>
          </div>
          <button type="button" class="btn_round btn_md btn_primary">등록</button>
        </div>
        <p class="info">*이미지 파일만 등록가능합니다.</p>
      </div>
    </div>
    <RecrtSlideBanner />
  </div>
</template>
<script lang="ts">
import RecrtSlideBanner from "@/components/careerEmploy/RecrtSlideBanner.vue";
export default {
  components: {
    RecrtSlideBanner,
  },
  data: () => ({
    tooltip1: false,
    selectOption: {
      value1: "스펙항목",
      value3: "등급선택",
      spec1: [
        { label: "학점" },
        { label: "토익·토플·텝스" },
        { label: "OPIc·토익스피킹" },
        { label: "자격증" },
        { label: "수상횟수" },
        { label: "인턴경험" },
        { label: "해외활동" },
        { label: "봉사활동" },
      ],
      spec3: [
        { label: "없음" },
        { label: "NLorNL" },
        { label: "LHorIL" },
        { label: "IM1orIM2orIM3" },
        { label: "IH" },
        { label: "AL 이상" },
      ],
    },
  }),
};
</script>
