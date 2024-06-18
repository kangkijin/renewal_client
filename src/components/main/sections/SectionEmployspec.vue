<template>
  <div class="main_section section4">
    <div class="grid_content">
      <div class="section_tit_wrap">
        <h3 class="section_subtit">취업생과 비교하는 나의 취업 스펙</h3>
      </div>
      <div class="box">
        <div class="employspec_wrap">
          <div class="info">
            <h4>
              <span>황유림</span>님은,<br />
              해외경험에서 평균을 상회합니다.
            </h4>
            <div class="counsel_statis">
              <ul>
                <li class="wd_p100">
                  <div class="credit">
                    학점
                    <p class="font_gray"><span>3.7</span><i>/</i>4.5</p>
                  </div>
                  <div>
                    토익
                    <p><span class="mg_r0">940</span></p>
                  </div>
                  <div>
                    OPIc
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
                    교내/사회봉사
                    <p class="font_gray"><span>1.5</span>개월</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="graph" :class="chartLoaded ? '' : 'loading_md'">
            <RadarChart
              v-if="chartLoaded"
              :class="chartLoaded ? '' : 'loading_md'"
              :dataset="chartDatasets"
              :colorset="chartDatasets2"
              :labels="chartDatasets3"
              :radarSize="95"
              :legendOffsetY="10"
            ></RadarChart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import RadarChart from "@/components/chart/RadarChart.vue";
// import type { RadarChartDataset } from "@/types/chart/ChartTypes";

export default {
  components: {
    RadarChart,
  },
  data: () => ({
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
  mounted: function () {
    const vm = this;
    setTimeout(() => {
      vm.chartLoaded = true;
    }, 1500);
  },
};
</script>
