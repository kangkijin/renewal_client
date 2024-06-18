<template>
  <div id="chart" class="col_chart">
    <VueApexCharts
      type="line"
      class="col_chart"
      :height="chartHeight"
      :options="chartOptions"
      :series="props.dataset"
    ></VueApexCharts>
  </div>
</template>
<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
import type { barChartDataset } from "@/types/chart/ChartTypes";

interface Props {
  chartId?: string;
  chartHeight?: number;
  colorset: string[];
  labels: string[];
  dataset: barChartDataset;
  strokeColor: string[];
  // labels: barChartLabel[];
}
const props = withDefaults(defineProps<Props>(), {
  chartId: "chart",
  // chartHeight: 225,
});
console.log(props);

const chartOptions = {
  chart: {
    type: "line",
    offsetY: -15,
    toolbar: {
      show: false,
    },
    height: props.chartHeight,
  },
  // colors: ["#8ABFFB", "#5FADCF", "#5175BE"],
  colors: props.colorset,
  legend: {
    position: "top",
    offsetY: 15,
    horizontalAlign: "right",
    fontSize: "11px",
    labels: {
      colors: "#222",
    },
    markers: {
      width: 8,
      height: 8,
      radius: 0,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "70%",
    },
  },
  stroke: {
    width: [6, 6, 6, 1],
    dashArray: [0, 0, 0, 4],
    colors: props.strokeColor,
  },
  grid: {
    strokeDashArray: 2,
  },
  xaxis: {
    // categories: ["강의기본", "강의준비", "강의실행", "강의평가", "종합"],
    categories: props.labels,
    labels: {
      style: {
        colors: "#898D9C",
        fontSize: "12px",
        fontWeight: 500,
      },
    },
    axisBorder: {
      height: 0,
    },
    axisTicks: {
      height: 0,
    },
  },
  yaxis: {
    min: 0,
    max: 100,
    stepSize: 25,
    tickAmount: 4,
    labels: {
      style: {
        colors: "#898D9C",
        fontSize: "12px",
        fontWeight: 500,
      },
    },
  },
};
</script>
