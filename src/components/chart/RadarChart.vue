<template>
  <VueApexCharts
    :height="chartHeight"
    class="radar_chart"
    :options="chartOptions"
    :series="props.dataset"
  ></VueApexCharts>
</template>
<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
import type { RadarChartDataset } from "@/types/chart/ChartTypes";

interface Props {
  chartHeight?: number;
  dataset: RadarChartDataset;
  colorset: string[];
  labels: string[];
  radarSize: number;
  legendOffsetY: number;
}
const props = withDefaults(defineProps<Props>(), {
  chartHeight: 310,
  legendOffsetY: -6,
});
const chartOptions = {
  chart: {
    type: "radar",
    toolbar: {
      show: false,
    },
    offsetY: -15,
  },
  // colors: ["#8ABFFB", "#5FADCF", "#5175BE"],
  colors: props.colorset,
  legend: {
    position: "top",
    offsetY: props.legendOffsetY,
    horizontalAlign: "right",
    fontSize: "12px",
    labels: {
      colors: "#222",
    },
    markers: {
      width: 8,
      height: 8,
      radius: 0,
    },
  },
  fill: {
    opacity: 0.5,
  },
  stroke: {
    show: true,
    curve: "straight",
    colors: undefined,
    width: 1,
    dashArray: [0, 2],
  },
  xaxis: {
    // categories: ["종합적사고력", "자원정보기술", "자기관리", "의사소통", "대인관계", "글로컬"],
    categories: props.labels,
    labels: {
      style: {
        colors: "#898D9C",
        fontSize: "12px",
        fontWeight: 500,
      },
      offsetY: 4,
    },
  },
  yaxis: {
    // min: 0,
    // max: 5,
    stepSize: 1,
    tickAmount: 5,
    labels: {
      style: {
        colors: "#898D9C",
        fontSize: "12px",
        fontWeight: 500,
      },
    },
  },
  plotOptions: {
    radar: {
      size: props.radarSize,
      polygons: {
        strokeColors: "#D6DBE2",
      },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        plotOptions: {
          radar: {
            size: 80,
          },
        },
      },
    },
    // {
    //   breakpoint: 350,
    //   options: {
    //     xaxis: {
    //       labels: {
    //         formatter: (value: any) => {
    //           var len = value.length;
    //           return len > 5 ? value.substring(0, 5) + "..." : value;
    //         },
    //       },
    //     },
    //   },
    // },
  ],
};
</script>
