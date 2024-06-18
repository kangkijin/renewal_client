<template>
  <div class="cnsl_table">
    <ul>
      <li class="psbl">예약가능</li>
      <li class="cmplt">예약완료</li>
      <li class="impsbl">예약불가</li>
      <li class="off">일정오프</li>
    </ul>
    <table>
      <caption>
        상담 스케줄 표
      </caption>
      <thead>
        <tr>
          <th scope="col">&nbsp;</th>
          <th scope="col" class="font_red">일</th>
          <th scope="col">월</th>
          <th scope="col">화</th>
          <th scope="col">수</th>
          <th scope="col">목</th>
          <th scope="col">금</th>
          <th scope="col" class="font_blue">토</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(trItem, trIdx) in trInfo" :key="trIdx">
          <template v-for="(tdItem, tdIdx) in trInfo[trIdx]" :key="tdIdx">
            <td v-if="tdIdx === 0">{{ tdItem.time }} ~ {{ tdItem.time + 1 }}</td>
            <td v-if="tdIdx === 0 || tdIdx === 6" class="off"></td>
            <td v-else :class="tdItem.classNm" @click="fnClickTd(tdItem)"></td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import moment from "moment";
import { ref, onMounted, getCurrentInstance, defineProps, watch } from "vue";
import Swal from "sweetalert2";
import type { CnslMng, CnslSchdl } from "../prfsncnsl/cnslReq/prfsncnsl";

// VM
const instance = getCurrentInstance();
if (!instance) throw new Error("getCurrentInstance returned null");
const vm = instance.appContext.config.globalProperties;

const model = defineModel(); // Model

interface tdType {
  selDate: string;
  weeks: string;
  time: number;
  classNm: string;
}

const trInfo = ref<tdType[][]>([]);
const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const props = defineProps(["cnslCnslrId", "cnslrId", "selSunDate"]);

async function fnDrawTable() {
  trInfo.value = [];
  const now = moment().format("YYYY-MM-DD");

  // 기본 값 세팅
  for (let i = 9; i < 18; i++) {
    let dtInfo: tdType[] = [];
    for (let j = 0; j < 7; j++) {
      let classNm = "psbl";
      const selDate = moment(props.selSunDate).add(j, "days").format("YYYY-MM-DD");
      if (moment(now).diff(new Date(selDate)) > 0) classNm = "impsbl";
      else if (i < 11 || i > 16) classNm = "impsbl";
      dtInfo.push({
        selDate: selDate,
        weeks: weeks[j],
        time: i,
        classNm: classNm,
      });
    }
    trInfo.value.push(dtInfo);
  }

  const params = {
    cnslrId: props.cnslrId,
    selSunDate: props.selSunDate,
  };

  const res = await vm.$axios.get("/api/counsel/common/counsel/getCnslrScheduled", { params: params });
  const cnslrScheduled: CnslSchdl[] = res.data.data;
  const res2 = await vm.$axios.get("/api/counsel/common/counsel/getCnslApplyList", { params: params });
  const cnslApplyList: CnslMng[] = res2.data.data; // 상담일정

  trInfo.value.forEach((tdItem) => {
    tdItem.forEach((item) => {
      // 상담사 일정
      cnslrScheduled.forEach((sceduledItem) => {
        if (item.selDate === sceduledItem.cnslDate && item.time === sceduledItem.cnslTime) {
          item.classNm = sceduledItem.cnslPsblYn === "Y" ? "psbl" : "impsbl";
          const now = moment().format("YYYY-MM-DD");
          if (moment(item.selDate).diff(now) < 0) item.classNm = "impsbl";
        }
      });

      // 예약된 일정 체크
      cnslApplyList.forEach((applyItem) => {
        const cnslDate = moment(applyItem.cnslDate).format("YYYY-MM-DD");
        const selDate = moment(item.selDate).format("YYYY-MM-DD");
        // 상담 취소는 체크 X
        if (selDate === cnslDate && item.time === applyItem.cnslStrTime && applyItem.cnslSts !== "CNSL_APRV006") {
          item.classNm = "cmplt";
        }
      });
    });
  });
}

const swalToast: any = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});

function fnClickTd(tdItem: tdType) {
  if (tdItem.classNm == "psbl") {
    // 선택 날짜 초기화
    trInfo.value.forEach((trItem: tdType[]) => {
      trItem.forEach((tdItem: tdType) => {
        if (tdItem.classNm == "bg_blue") {
          tdItem.classNm = "psbl";
        }
      });
    });
    tdItem.classNm = "bg_blue"; // 다시 선택
    model.value = tdItem;
  } else if (tdItem.classNm == "cmplt") {
    swalToast.fire({
      icon: "failed",
      title: "이미 예약된 시간입니다.",
    });
  }
}

watch(
  () => props.selSunDate,
  () => {
    fnDrawTable();
  },
);

onMounted(() => {
  fnDrawTable();
});
</script>
