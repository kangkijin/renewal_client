<template>
  <div class="main_section section1">
    <div class="grid_content">
      <div class="flex_wrap">
        <div class="box">
          <CnslrProfile />
        </div>
        <div class="box">
          <CnslPerformance :userInfo="userInfo" />
        </div>
        <div class="box">
          <Messenger />
        </div>
      </div>
      <div class="flex_wrap">
        <div class="box cnslr_box">
          <CnslListUnit :userInfo="userInfo" />
        </div>
        <div :class="'box cnslr_box' + (selDateLoaded ? '' : ' loading_md')">
          <div class="cnsl_date">
            <button type="button" class="prev" @click="weeks--">이전</button>
            <p>{{ selDate }}</p>
            <button type="button" class="next" @click="weeks++">다음</button>
          </div>
          <div class="cnsl_content">
            <DTimeTable :cnslrId="userInfo.userId" :cnslrNm="userInfo.userNm" :selSunDate="selSunDate" :cnslDiv="''" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DTimeTable from "@/components/common/DTimeTable.vue";
import CnslrProfile from "@/components/main/sections/cmmnDashboard/CnslrProfile.vue";
import Messenger from "@/components/main/sections/cmmnDashboard/Messenger.vue";
import CnslPerformance from "@/components/main/sections/cnslDashboard/cnslPerformance.vue";
import CnslListUnit from "@/components/main/sections/cnslDashboard/cnslListUnit.vue";

import { ref, getCurrentInstance, onMounted, watch } from "vue";

// VM
const instance = getCurrentInstance();
if (!instance) throw new Error("getCurrentInstance returned null");
const vm = instance.appContext.config.globalProperties;

// 로그인 정보
const userInfo = {
  userId: "staff1",
  userNm: "지도교수1",
  hakguaCd: "H00001",
};

// 상담사 일정 날짜정보 조회
const weeks = ref<number>(0);
const selDate = ref<string>("");
const selSunDate = ref<string>("");
const selDateLoaded = ref<boolean>(true);
const fnGetSelDate = () => {
  const params = {
    weeks: weeks.value,
  };
  vm.$axios
    .get("/api/counsel/common/counsel/getSelDate", { params: params })
    .then((res) => {
      const data = res.data.data;
      selDate.value = data.selDate;
      selSunDate.value = data.selSunDate;
    })
    .catch((e) => {
      console.error(e);
    })
    .finally(() => {
      selDateLoaded.value = true;
    });
};
watch(weeks, () => {
  fnGetSelDate();
  selDateLoaded.value = false;
});

const chartDataset = ref<object[]>([]);
const fnGetChartData = () => {
  chartDataset.value = [
    {
      name: "강의기본",
      2022: 2.5,
      2023: 2.5,
      2024: 2.1,
    },
    {
      name: "강의준비",
      2022: 2.6,
      2023: 2.7,
      2024: 2.2,
    },
    {
      name: "강의실행",
      2022: 2.8,
      2023: 2.9,
      2024: 2.4,
    },
    {
      name: "강의평가",
      2022: 2.8,
      2023: 2.9,
      2024: 2.4,
    },
    {
      name: "종합",
      2022: 2.8,
      2023: 2.9,
      2024: 2.4,
    },
  ];
};

onMounted(() => {
  fnGetChartData();
  fnGetSelDate();
});
</script>
