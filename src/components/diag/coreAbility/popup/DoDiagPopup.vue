<template>
  <PopupView class="xlarge" v-model="model" :loading="!loaded">
    <template #title>핵심역량진단 응시</template>
    <div class="diag_desc">
      <div class="top">
        <div><strong>진단명</strong>{{ diagInfo.damTitle }}</div>
        <div><strong>문항수</strong>{{ diagInfo.daqTotalCnt }}</div>
        <div>
          <strong>응시기간</strong>
          {{ moment(diagInfo.damStrDate).format("YYYY-MM-DD hh:mm") }} ~
          {{ moment(diagInfo.damEndDate).format("YYYY-MM-DD hh:mm") }}
        </div>
      </div>
      <div class="bottom editor_area">
        {{ diagInfo.dapGuide }}
      </div>
    </div>
    <div class="diag_wrapper">
      <DiagWbs v-model:dialog="model" :qusList="wbsQusList" :resCnt="resList.length">
        <button type="button" @click="onClickTempSave()" class="btn_round btn_lg btn_white">임시저장</button>
        <button type="button" @click="onClickSave()" class="btn_round btn_lg btn_secondary">진단 제출하기</button>
      </DiagWbs>

      <div v-for="(page, pageCnt) in qusPages" :key="pageCnt" v-show="pageCnt === activePage">
        <div class="diag_qus_wrap" v-for="item in page" :key="item.daqId">
          <div class="diag_qus">
            <ScaleOutput
              v-if="item.qusType === 'SCALE'"
              :order="item.daqOrder + 1"
              :title="item.daqTitle"
              :ansInfo="ansInfo"
              v-model="resList[item.daqOrder]"
            ></ScaleOutput>
          </div>
        </div>
      </div>

      <div class="diag_paging">
        <button type="button" class="prev" :disabled="activePage === 0" @click="onClickMovePage('prev')">이전</button>
        <button type="button" class="next" :disabled="activePage === maxPage" @click="onClickMovePage('next')">
          다음
        </button>
      </div>
    </div>
  </PopupView>
</template>
<script setup lang="ts">
import moment from "moment";
import PopupView from "@/components/common/PopupView.vue";
import ScaleOutput from "@/components/diag/IO/ScaleOutput.vue";
import DiagWbs from "./DiagWbs.vue";
import { ref, onMounted, getCurrentInstance, computed } from "vue";
import type { AnsOuput } from "@/types/diag/DiagIOTypes";
import type { CoreDiagTypes, CoreDiagQusTypes, CoreDiagResTypes } from "@/types/diag/DiagTypes";

onMounted(() => {
  fnGetQusList();
  fnGetResList();
});

/** 팝업 True / False */
const model = defineModel({ type: Boolean });

const props = defineProps<{
  /** 역량 진단 키 */
  keyId: string;
}>();

const instance = getCurrentInstance();
if (!instance) {
  throw new Error("getCurrentInstance returned null");
}
const vm = instance.appContext.config.globalProperties;

/** 문항 로딩 여부 */
const loaded = ref(false);

/** 진단 계획, 진단지 정보 */
const diagInfo = ref({} as CoreDiagTypes);
/** 문항 답변 정보 */
const ansInfo = ref([] as AnsOuput[]);

/** 문항 정보 */
const qusList = ref([] as CoreDiagQusTypes[]);
const qusPages = ref([] as CoreDiagQusTypes[][]);

/** 현재 페이지 */
const activePage = ref(0);
/** 최대 페이지 */
const maxPage = ref(0);

/** 문항 응답 정보 */
const resList = ref([] as string[]);

/** 문항 리스트 가져오기 */
const fnGetQusList = () => {
  const param = {
    damId: props.keyId,
  };

  vm.$axios
    .get("/api/client/diag/user/coreAbility/getCoreDiagInfo", { params: param })
    .then((res) => {
      const resData = res.data;

      /* 진단 계획, 진단지 정보 */
      diagInfo.value = resData.data;

      /* 진단지, 문항 가공 */
      let dapViewCnt = diagInfo.value.dapViewCnt;
      if (dapViewCnt < 0) {
        dapViewCnt = diagInfo.value.daqInfo.length;
      }
      const daqInfo = diagInfo.value.daqInfo;
      qusList.value = daqInfo;
      // resList.value = Array(daqInfo.length).fill(null);

      qusPages.value = fnConvertR2Arr(daqInfo, dapViewCnt);

      maxPage.value = qusPages.value.length - 1; // 총 페이지 수

      /* 문항 답변 정보 가공 */
      const ansTitle = diagInfo.value.daqAnsTitle.split("|");
      const ansScore = diagInfo.value.daqAnsScore.split("|");

      for (let i = 0; i < diagInfo.value.dapAnsCnt; i++) {
        ansInfo.value.push({
          title: ansTitle[i],
          score: parseInt(ansScore[i]),
        });
      }

      // 로딩 완료
      loaded.value = true;
    })
    .catch((e) => {
      console.error(e);
    });
};

const fnGetResList = () => {
  const param = {
    damId: props.keyId,
  };

  vm.$axios
    .get("/api/client/diag/user/coreAbility/getCoreDiagResList", { params: param })
    .then((res) => {
      const resData = res.data;
      const resListData: CoreDiagResTypes[] = resData.data;
      if (resListData.length > 0) {
        vm.$alert("임시저장된 정보를 불러옵니다.", "알림", () => {
          resListData.forEach((item: CoreDiagResTypes) => {
            resList.value[item.daqOrder] = String(item.darScore);
          });
        });
      }
    })
    .catch((e) => {
      console.error(e);
    });
};

/** 페이지 이동 */
const onClickMovePage = (_dir: string) => {
  if (_dir === "next") {
    activePage.value = activePage.value + 1;
  } else if (_dir === "prev") {
    activePage.value = activePage.value - 1;
  }
};

/** 1차원배열을 2차원 배열로 변환 */
const fnConvertR2Arr = <T,>(arr: T[], n: number) => {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += n) {
    res.push(arr.slice(i, i + n));
  }
  return res;
};

/** DiagWbs 전용 데이터 가공 */
const wbsQusList = computed(() => {
  const list = qusList.value;

  for (let i = 0; i < list.length; i++) {
    const resValue = resList.value[i];
    if (!vm.$StringUtil.isEmpty(resValue)) {
      list[i].ansSts = "checked";
    }
  }
  return list;
});

/** 임시저장 버튼 */
const onClickTempSave = () => {
  const param = {
    damId: diagInfo.value.damId,
    dapId: diagInfo.value.dapId,
    qusList: qusList.value,
    resList: resList.value,
  };

  vm.$confirm("작성하신 답안을 임시저장 하시겠습니까?", "확인", (isConfirm: Boolean) => {
    if (isConfirm) {
      vm.$loading.show();

      vm.$axios
        .post("/api/client/diag/user/coreAbility/createTempSaveCoreDiag", JSON.stringify(param))
        .then((res) => {
          vm.$loading.hide();

          const resData = res.data;
          if (resData.data.result > 0) {
            vm.$alert("임시저장 되었습니다", "알림", () => {
              vm.$router.go(0);
            });
          } else {
            vm.$alert("정상적으로 저장되지 않았습니다.<br />관리자에게 문의해주세요", "알림", () => {
              vm.$router.go(0);
            });
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }
  });
};

/** 저장 버튼 */
const onClickSave = () => {
  const param = {
    damId: diagInfo.value.damId,
    dapId: diagInfo.value.dapId,
    qusList: qusList.value,
    resList: resList.value,
  };

  if (qusList.value.length !== countNotNull(resList.value)) {
    vm.$alert("답을 체크하지 않은 문항이 있습니다.", "알림");
    return;
  }

  vm.$confirm("작성하신 답안을 제출하시겠습니까?", "확인", (isConfirm: Boolean) => {
    if (isConfirm) {
      vm.$loading.show();

      vm.$axios
        .post("/api/client/diag/user/coreAbility/createSaveCoreDiag", JSON.stringify(param))
        .then((res) => {
          const resData = res.data;
          if (resData.data.result > 0) {
            vm.$alert("답안이 제출되었습니다", "알림", () => {
              vm.$router.go(0);
            });
          } else {
            vm.$alert("정상적으로 저장되지 않았습니다.<br />관리자에게 문의해주세요", "알림", () => {
              vm.$router.go(0);
            });
          }
        })
        .catch((e) => {
          console.error(e);
        });
    }
  });
};

/** 답변 배열 길이 체크용 메서드 */
const countNotNull = (arr: Array<string>) => {
  let cnt = 0;
  arr.forEach((item) => {
    if (item !== null) cnt++;
  });
  return cnt;
};
</script>
