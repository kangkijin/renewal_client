<template>
  <VueApexCharts type="bar" :height="chartHeight" :options="chartOptions" :series="props.dataset"></VueApexCharts>
</template>

<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
import type { barChartDataset } from "@/types/chart/ChartTypes";

interface Props {
  chartHeight?: number;
  dataset: barChartDataset;
  colorset: string[];
  labels: string[];
}
const props = withDefaults(defineProps<Props>(), {
  chartHeight: 300,
});

const chartOptions = {
  series: [
    {
      name: "핵심역량 1",
      data: [5.0, 4.88, 4.096],
    },
    {
      name: "일이삼사오육칠팔구십",
      data: [4.35, 3.94, 4.56],
    },
  ],
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
    offsetX: -12,
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      distributed: false,
      horizontal: true,
    },
  },
  xaxis: {
    categories: props.labels,
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
    tickAmount: 6,
    labels: {
      show: false,
    },
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
  colors: props.colorset,
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
