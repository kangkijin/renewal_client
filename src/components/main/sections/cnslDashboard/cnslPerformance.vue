<template :class="chartLoaded ? '' : 'loading_md'">
  <div class="box_titlewrap">
    <h4>상담실적(건, 평균)</h4>
  </div>
  <!-- 역량진단 전일 경우 표출 -->
  <div v-if="!existStat" class="test_before">
    <div>
      <p>참여주세요!</p>
      아직 2024년 상담이 진행되지 않았습니다!
    </div>
  </div>
  <div v-if="existStat" class="case_graph">
    <BarChart
      v-if="chartLoaded"
      :dataset="chartDatasets"
      :colorset="chartDatasets2"
      :labels="chartDatasets3"
    ></BarChart>
    <p class="text">(건)</p>
  </div>
</template>

<script setup lang="ts">
// Components
import type { barChartDataset } from "@/types/chart/ChartTypes";
import BarChart from "@/components/chart/BarChart.vue";

import { onMounted, ref, getCurrentInstance, defineProps } from "vue";
import moment from "moment";

// VM
const instance = getCurrentInstance();
if (!instance) throw new Error("getCurrentInstance returned null");
const vm = instance.appContext.config.globalProperties;

const props = defineProps(["userInfo"]);
const userInfo = props.userInfo;

// 상담실적 차트
const chartLoaded = ref(false);
const existStat = ref(false);
const chartDatasets = ref<barChartDataset>({
  name: "건, 평균",
  data: [0, 0, 0],
});
const chartDatasets2 = ref<string[]>(["#B3C8E1", "#72C1E3", "#5186F1"]);
const chartDatasets3 = ref<string[]>(["나", "동일상담평균", "전체상담평균"]);

const fnGetCnslStat = () => {
  const cnslYear: number = Number(moment().format("YYYY"));
  const params = {
    cnslrId: userInfo.userId,
    cnslDiv: "CNSL001", // 지도교수
    cnslYear: cnslYear,
  };
  vm.$axios.get("/api/counsel/client/professor/getCnslPrfrmStat", { params: params }).then((res) => {
    const data = res.data.data;

    if (data.length > 0) {
      chartDatasets.value.data = [];
      chartDatasets.value.data.push(data.myPrfrm);
      chartDatasets.value.data.push(data.divPrfrm);
      chartDatasets.value.data.push(data.allPrfrm);
      existStat.value = true;

      setTimeout(() => {
        chartLoaded.value = true;
      }, 1500);
    } else {
      chartDatasets.value.data = [0, 0, 0];
      existStat.value = false;
    }
  });
};

onMounted(() => {
  fnGetCnslStat();
});
</script>
