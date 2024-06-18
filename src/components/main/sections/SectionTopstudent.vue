<template>
  <div class="main_section section5">
    <div class="grid_content">
      <div class="flex_wrap">
        <div>
          <div class="section_tit_wrap responsive_mob">
            <h3 class="section_subtit">
              학습 우수자 Top5
              <v-menu
                class="tooltip_area"
                transition="slide-y-transition"
                :close-on-content-click="false"
                v-model="tooltip"
              >
                <template v-slot:activator="{ props }">
                  <button type="button" class="btn_tooltip" v-bind="props">버튼</button>
                </template>
                <div class="tooltip_cnt">
                  안내영역입니다.<br />
                  안내영역입니다.
                </div>
              </v-menu>
            </h3>
            <div class="title_function">
              <div class="select_row sm">
                <vue-select :options="selectOption" v-model="eduSelected" :placeholder="'선택'" class="select_box" />
              </div>
            </div>
          </div>
          <div class="box" :class="chartLoaded ? '' : 'loading_md'">
            <!-- 내역 없을때 :
            <div class="no_notice"><p class="font_gray">내역이 없습니다</p></div>
            -->
            <ImageBarChart
              v-if="chartLoaded"
              :chartId="'EduChart'"
              :chartHeight="310"
              :labels="chartLabels"
              :dataset="chartDataset1"
            />
          </div>
        </div>
        <div>
          <div class="section_tit_wrap responsive_mob">
            <h3 class="section_subtit">
              독려 대상자 Top5
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
                  안내영역입니다.<br />
                  안내영역입니다.
                </div>
              </v-menu>
              <span class="subtit_info">*상담건수링크를 누르면 상담예약을 할 수 있습니다.</span>
            </h3>
            <div class="title_function">
              <div class="select_row sm">
                <vue-select :options="selectOption" v-model="encrgSelected" :placeholder="'선택'" class="select_box" />
              </div>
            </div>
          </div>
          <div class="box" :class="chartLoaded ? '' : 'loading_md'">
            <!-- 내역 없을때 :
            <div class="no_notice"><p class="font_gray">내역이 없습니다</p></div>
            -->
            <ImageBarChart
              v-if="chartLoaded"
              :chartId="'EncrgChart'"
              :chartHeight="310"
              :labels="chartLabels"
              :dataset="chartDataset2"
            >
              <template v-slot:[`user${idx}`] v-for="(labels, idx) in chartLabels" :key="idx">
                <span class="cnsl_count">
                  <!-- {{ idx }} -->
                  <b class="font_red">{{ cnslCount[idx] }}</b>
                  <i>건</i>
                </span>
              </template>
            </ImageBarChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageBarChart from "@/components/chart/ImageBarChart.vue";
import type { barChartLabel, barChartDataset } from "@/types/chart/ChartTypes";
import { ref, onMounted, getCurrentInstance } from "vue";
import type { Ref } from "vue";

const instance = getCurrentInstance();
if (!instance) {
  throw new Error("getCurrentInstance returned null");
}

const vm = instance.appContext.config.globalProperties;
console.log(vm);

const selectOption = [
  { label: "마일리지(누적)", code: "M" },
  { label: "평점(누적평균)", code: "A" },
  { label: "장학금횟수(전학년)", code: "S" },
  { label: "성적상승(직전학기)", code: "I" },
];
const eduSelected = ref(null);
const encrgSelected = ref(null);

const tooltip = ref(false);
const tooltip2 = ref(false);

const chartLoaded = ref(false);
const chartLabels: Ref<barChartLabel[]> = ref([]);
const chartDataset1: Ref<barChartDataset> = ref({ name: "", data: [] });
const chartDataset2: Ref<barChartDataset> = ref({ name: "", data: [] });

const fnGetChartData = () => {
  chartLabels.value = [
    { name: "나형식", img: "/images/img_ex1.png" },
    { name: "오길동", img: "/images/img_ex2.png" },
    { name: "김길동", img: "/images/img_ex3.png" },
    { name: "최길동", img: "/images/img_ex1.png" },
    { name: "박형식", img: "/images/img_ex2.png" },
  ];
  chartDataset1.value = {
    name: "마일리지",
    data: [400, 430, 448, 470, 540],
  };
  chartDataset2.value = {
    name: "마일리지",
    data: [40, 30, 48, 47, 54],
  };

  chartLoaded.value = true;
};

//상담 갯수
const cnslCount = [2, 3, 4, 5, 40];

onMounted(() => {
  fnGetChartData();
});
</script>
