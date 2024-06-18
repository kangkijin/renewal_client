<template>
  <div class="cnsl_table">
    <ul>
      <li class="psbl">예약가능</li>
      <li class="cmplt">예약완료</li>
      <li class="impsbl">예약불가</li>
      <li class="off">일정오프</li>
    </ul>
    <table :class="tableLoaded ? '' : 'loading_md'">
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
// 상담스케쥴 참고 : cnslrClick 개발자분들이 자유롭게 js 수정하셔도 됩니다.
// import { cnslrClick } from "@/assets/js/cnslSchedule";
import moment from "moment";
import { getCurrentInstance, onMounted, ref, watch } from "vue";
import type { CnslMng, CnslSchdl } from "../prfsncnsl/cnslReq/prfsncnsl";

// VM
const instance = getCurrentInstance();
if (!instance) throw new Error("getCurrentInstance returned null");
const vm = instance.appContext.config.globalProperties;

// model
// const model = defineModel();
const tableLoaded = ref<boolean>(true);

// drawTable
interface tdType {
  selDate: string;
  weeks: string;
  time: number;
  classNm: string;
}

const trInfo = ref<tdType[][]>([]);
const weeks = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const props = defineProps(["cnslCnslrId", "cnslrId", "cnslrNm", "selSunDate"]);

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
  tableLoaded.value = false;
  const res = await vm.$axios.get("/api/counsel/common/counsel/getCnslrScheduled", { params: params });
  const cnslrScheduled: CnslSchdl[] = res.data.data;
  const res2 = await vm.$axios.get("/api/counsel/common/counsel/getCnslApplyList", { params: params });
  const cnslApplyList: CnslMng[] = res2.data.data; // 상담일정
  tableLoaded.value = true;

  trInfo.value.forEach((tdItem) => {
    tdItem.forEach((item) => {
      // 상담사 일정
      cnslrScheduled.forEach((sceduledItem) => {
        if (item.selDate === sceduledItem.cnslDate && item.time === sceduledItem.cnslTime) {
          item.classNm = sceduledItem.cnslPsblYn === "Y" ? "psbl" : "impsbl";
          const now = moment().format("YYYY-MM-DD");
          if (moment(new Date(item.selDate)).diff(new Date(now)) < 0) item.classNm = "impsbl";
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

function fnClickTd(tdItem: tdType) {
  const now = moment(moment().format("YYYY-MM-DD"));
  const selDate = moment(tdItem.selDate);
  if (moment(selDate).diff(now) < 0) {
    vm.$toast("지난 일정은 변경할 수 없습니다.", "error");
    return false;
  }

  let classNm = "";
  if (tdItem.classNm == "cmplt") {
    const _text = "이미 상담 신청이 완료된 시간입니다." + `<br />` + "상담을 취소하시겠습니까?";
    const _text2 = "정말 상담을 취소하시겠습니까?";
    vm.$confirm(_text, "", (result) => {
      if (result) {
        vm.$confirm(_text2, "", (result2) => {
          if (result2) {
            classNm = "impsbl";
            const params = {
              cnslrId: props.cnslrId,
              cnslrNm: props.cnslrNm,
              cnslDate: tdItem.selDate,
              cnslDays: tdItem.weeks,
              cnslTime: tdItem.time,
              cnslPsblYn: "N",
              userId: props.cnslrId,
            };
            tableLoaded.value = false;
            vm.$axios
              .post("/api/counsel/client/professor/modifyCancelScheduled", JSON.stringify(params))
              .then((res) => {
                if (res.status === 200) {
                  tdItem.classNm = classNm;
                  vm.$toast("상담이 취소되었습니다.", "success");
                } else {
                  vm.$toast("일정 변경 중 문제가 발생하였습니다. \n잠시 후 다시시도해 주세요.", "error");
                }
              })
              .catch((e) => {
                console.error(e);
                vm.$toast("일정 변경 중 문제가 발생하였습니다. \n잠시 후 다시시도해 주세요. (1)", "error");
              })
              .finally(() => {
                tableLoaded.value = true;
              });
            return true;
          }
        });
      }
    });
  } else {
    let cnslPsblYn = "Y";
    if (tdItem.classNm == "impsbl") {
      classNm = "psbl";
      cnslPsblYn = "Y";
    } else if (tdItem.classNm == "psbl") {
      classNm = "impsbl";
      cnslPsblYn = "N";
    }

    const params = {
      cnslrId: props.cnslrId,
      cnslrNm: props.cnslrNm,
      cnslDate: tdItem.selDate,
      cnslDays: tdItem.weeks,
      cnslTime: tdItem.time,
      cnslPsblYn: cnslPsblYn,
      userId: props.cnslrId,
    };
    tableLoaded.value = false;
    vm.$axios
      .post("/api/counsel/client/professor/modifyScheduled", JSON.stringify(params))
      .then((res) => {
        if (res.status === 200) {
          tdItem.classNm = classNm;
        } else {
          vm.$toast("일정 변경 중 문제가 발생하였습니다. \n잠시 후 다시시도해 주세요.", "error");
        }
      })
      .catch((e) => {
        console.error(e);
        vm.$toast("일정 변경 중 문제가 발생하였습니다. \n잠시 후 다시시도해 주세요. (1)", "error");
      })
      .finally(() => {
        tableLoaded.value = true;
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
