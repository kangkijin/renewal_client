<template>
  <div class="topfive_chart">
    <ul class="ranking_list">
      <li v-for="(item, idx) in labels" :key="idx">
        <slot :name="slotName(idx)"></slot>

        <div class="img_wrap">
          <!-- * src Alias (@) 금지 -->
          <img :src="item.img" alt="이미지 없음" />
        </div>
        <p>{{ item.name }}</p>
      </li>
    </ul>
    <div :id="chartId">
      <VueApexCharts type="bar" :height="chartHeight" :options="chartOptions" :series="series"></VueApexCharts>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
import type { barChartLabel, barChartDataset } from "@/types/chart/ChartTypes";

interface Props {
  chartId?: string;
  chartHeight?: number;
  labels: barChartLabel[];
  dataset: barChartDataset;
}
const props = withDefaults(defineProps<Props>(), {
  chartId: "chart",
  chartHeight: 300,
});

const slotName = (idx: number) => {
  return `user${idx}`;
};

const series = [props.dataset];
const chartOptions = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
    offsetX: -12,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: "end",
      horizontal: true,
      barHeight: "8px",
      dataLabels: {
        hideOverflowingLabels: false,
        orientation: "horizontal",
      },
    },
  },
  xaxis: {
    categories: props.labels.map((item) => item.name),
    labels: {
      style: {
        colors: "#898D9C",
        fontSize: "12px",
        fontWeight: 500,
      },
    },
    axisTicks: {
      height: 0,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    borderColor: "#D6DBE2",
    strokeDashArray: 0,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  legend: {
    showForSingleSeries: true,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: "top",
    horizontalAlign: "right",
    offsetY: 18,
    fontSize: "14px",
    fontWeight: 500,
    markers: {
      offsetX: -4,
      offsetY: 1,
    },
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        chart: {
          offsetX: -20,
        },
      },
    },
  ],
};
</script>
