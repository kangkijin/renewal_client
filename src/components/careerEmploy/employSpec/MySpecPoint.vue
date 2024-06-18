<template>
  <div class="section_tit_wrap spec_title">
    <h3 class="section_subtit">취업생과 비교하는 나의 취업 스펙</h3>
    <div class="title_function">
      <div class="spec_score">
        점수산출기준
        <button type="button" class="btn_tooltip" @click="popupShow(0)">버튼</button>
      </div>
    </div>
  </div>
  <div class="box employspec_main">
    <div class="employspec_wrap">
      <div class="info">
        <h4>
          <strong>오대학</strong>님의 취업 지수는<span>789</span>점 입니다.
          <v-menu
            class="tooltip_area"
            transition="slide-y-transition"
            :close-on-content-click="false"
            v-model="tooltip2"
          >
            <template v-slot:activator="{ props }">
              <button type="button" class="btn_tooltip" v-bind="props">버튼</button>
            </template>
            <div class="tooltip_cnt">
              <span class="name"
                >*취업 지수는, 각 항목별 취업생의 평균을 100점으로 설정하고,<br />
                본인의 달성도에 따라 각 영역별로 달성한 점수의 합입니다.</span
              >
            </div>
          </v-menu>
        </h4>
        <p class="info_txt">
          학점, 해외경험,토익/토플/텝스, OPIc/토익스피킹, 자격증, 수상횟수, 인턴경험 , 해외경험, 봉사활동 에서 평균을
          상회 합니다.
        </p>
        <div class="counsel_statis mb_3">
          <ul>
            <li class="wd_p100">
              <div class="credit">
                학점
                <p class="font_gray"><span>3.7</span><i>/</i>4.5</p>
              </div>
              <div>
                토익·토플·텝스
                <p><span class="mg_r0">940</span></p>
              </div>
              <div>
                OPIc·토익스피킹
                <p><span class="mg_r0">IH</span></p>
              </div>
              <div>
                자격증
                <p class="font_gray"><span>3</span>개</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="counsel_statis">
          <ul>
            <li class="wd_p100">
              <div>
                수상내역
                <p class="font_gray"><span>10</span>회</p>
              </div>
              <div>
                인턴
                <p class="font_gray"><span>12</span>개월</p>
              </div>
              <div>
                해외경험
                <p class="font_gray"><span>1.5</span>개월</p>
              </div>
              <div>
                봉사활동
                <p class="font_gray"><span>1.5</span>개월</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="graph_wrap">
        <div class="top_row">
          <div class="radio_sm_txt_wrap">
            <p class="radio_black_txt">
              <input type="radio" name="radio_sm_txt" id="radio_1" />
              <label for="radio_1">학과</label>
            </p>
            <p class="radio_black_txt">
              <input type="radio" name="radio_sm_txt" id="radio_2" checked />
              <label for="radio_2">학년</label>
            </p>
          </div>
          <vue-select class="select_box" :options="selectOption.spec4" v-model="selectOption.value4"></vue-select>
        </div>
        <div class="graph" :class="chartLoaded ? '' : 'loading_md'">
          <RadarChart
            v-if="chartLoaded"
            :class="chartLoaded ? '' : 'loading_md'"
            :dataset="chartDatasets"
            :colorset="chartDatasets2"
            :labels="chartDatasets3"
            :radarSize="100"
            :legendOffsetY="10"
          ></RadarChart>
        </div>
      </div>
    </div>
  </div>

  <PopupView v-model="isPopups[0]" class="medium">
    <template #title>취업지수 및 그래프점수 산출기준</template>
    <template #footer>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="popupHide(0)">확인</button>
    </template>
    <div class="radio_tab_lg_wrap">
      <p class="radio_tab_lg">
        <input type="radio" name="spec_score_lg" id="spec_score_1" v-model="radio" value="graphscore" />
        <label for="spec_score_1">그래프점수 산출기준</label>
      </p>
      <p class="radio_tab_lg">
        <input type="radio" name="spec_score_lg" id="spec_score_2" v-model="radio" value="employscore" />
        <label for="spec_score_2">취업지수 산출기준</label>
      </p>
    </div>
    <div class="scroll_cnt">
      <div v-if="radio == 'graphscore'">
        <div class="stnrd_graph">
          <!-- [pp] 도표 디자인이 아직 안 나와서 추후에 추가예정입니다 -->
        </div>
        <div class="spec_stnrd">
          <strong class="tit">학점 (0~5점)</strong>
          <p>학사정보의 학점을 5.00점 만점 기준으로, 비율로 자동 제공(학사데이터 연동)</p>
        </div>
        <div class="spec_stnrd">
          <strong class="tit">토익/토플/텝스 (0점 1점 2점 3점 4점 5점) </strong>
          <p>토익 : 없음 / 593점 이하 / 765점 이하 / 860점 이하 / 935점 이하 / 936점 이상</p>
          <p>토플 : 없음 / 25점 이하 / 41점 이하 / 72점 이하 / 95점 이하 / 96점 이상</p>
          <p>텝스 : 없음 / 211점 이하 / 326점 이하 / 452점 이하 / 525점 이하 / 526점 이상</p>
        </div>
        <div class="spec_stnrd">
          <strong class="tit">OPIc/토익스피킹 (0점 1점 2점 3점 4점 5점) </strong>
          <p>공통 : 없음 / NLorNM / LHorIL / IM1orIM2orIM3 / IH / AL 이상</p>
        </div>
        <div class="spec_stnrd">
          <strong class="tit">자격증 (0점 1점 2점 3점 4점 5점)</strong>
          <p>없음 / 1개 / 2개 / 3개 / 4개 / 5개 이상</p>
        </div>
        <div class="spec_stnrd">
          <strong class="tit">수상횟수 (0점 1점 2점 3점 4점 5점)</strong>
          <p>없음 / 1회 / 2회 / 3회 / 4회 / 5회 이상</p>
        </div>
        <div class="spec_stnrd">
          <strong class="tit">인턴경험 (0점 1점 2점 3점 4점 5점)</strong>
          <p>없음 / 1개월 이하 / 3개월 이하 / 6개월 이하 / 12개월 미만 / 12개월 이상</p>
        </div>
        <div class="spec_stnrd">
          <strong class="tit">해외경험 (0점 1점 2점 3점 4점 5점) </strong>
          <p>없음 / 3개월 이하 / 6개월 이하 / 12개월 이하 / 24개월 미만 / 24개월 이상</p>
        </div>
        <div class="spec_stnrd">
          <strong class="tit">봉사활동 (0점 1점 2점 3점 4점 5점) </strong>
          <p>없음 / 50시간 이하 / 100시간 이하 / 150시간 이하 / 200시간 미만 / 200시간 이상</p>
        </div>
      </div>
      <div v-if="radio == 'employscore'">
        <div class="spec_stnrd">
          <strong class="tit">취업지수</strong>
          <p>= (항목1본인점수/항목1취업생평균 * 100 * 항목1가중치</p>
          <p>+ 항목2본인점수/항목2취업생평균 * 100 * 항목2가중치</p>
          <p>+ 항목3본인점수/항목3취업생평균 * 100 * 항목3가중치</p>
          <p>+ 항목4본인점수/항목4취업생평균 * 100 * 항목4가중치</p>
          <p>+ 항목5본인점수/항목5취업생평균 * 100 * 항목5가중치</p>
          <p>+ 항목6본인점수/항목6취업생평균 * 100 * 항목6가중치</p>
          <p>+ 항목7본인점수/항목7취업생평균 * 100 * 항목7가중치</p>
          <p>+ 항목8본인점수/항목8취업생평균 * 100 * 항목8가중치)</p>
        </div>
        <div class="spec_stnrd_info">
          <p>*참고1. 항목 가중치는, 1로 통일 (이후, 지수고도화 개발 시 변경 가능)</p>
          <p>*참고2. 지수 빨간색 &#60; 100점*항목1가중치 + ... + 100점*항목8가중치 &#60; 지수 파란색</p>
        </div>
      </div>
    </div>
  </PopupView>
</template>

<script lang="ts">
import RadarChart from "@/components/chart/RadarChart.vue";
import PopupView from "@/components/common/PopupView.vue";

export default {
  components: {
    RadarChart,
    PopupView,
  },
  data: () => ({
    tooltip2: false,
    isPopups: [false],
    radio: "",
    selectOption: {
      value4: "졸업(예정)년도 전체",
      spec4: [{ label: "졸업년도" }, { label: "졸업년도" }],
    },
    chartLoaded: false,
    chartDatasets: [
      {
        name: "본인",
        data: [2, 1, 3, 2, 1, 2, 3, 5, 4, 2],
      },
      {
        name: "취업생",
        data: [1, 3, 4, 1, 4, 3, 2, 5, 1, 2],
      },
    ] as Array<Object>,
    chartDatasets2: ["#F8B492", "#71E2DB"],
    chartDatasets3: [
      "학점",
      "토익",
      "토익스피킹",
      "OPIC",
      "외국어(기타)",
      "자격증",
      "해외경험",
      "인턴",
      "수상내역",
      "교내/사회/봉사",
    ],
  }),
  created: function () {
    const vm = this;
    vm.fnActivePage();
  },
  mounted: function () {
    const vm = this;
    setTimeout(() => {
      vm.chartLoaded = true;
    }, 1500);
  },
  methods: {
    popupShow(idx: number) {
      const vm = this;
      vm.isPopups[idx] = true;
    },
    popupHide(idx: number) {
      const vm = this;
      vm.isPopups[idx] = false;
    },
    fnActivePage() {
      const vm = this;
      vm.radio = vm.value ?? "graphscore";
    },
  },
};
</script>
