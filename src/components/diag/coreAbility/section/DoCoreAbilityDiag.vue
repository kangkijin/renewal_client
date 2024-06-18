<template>
  <div>
    <div class="section_tit_wrap">
      <h4 class="section_tit2">핵심역량진단응시</h4>
    </div>
    <div class="box test_start" :class="loaded ? '' : 'loading_md'">
      <div v-if="vm.$ObjectUtil.isEmpty(diagInfo) && loaded" class="test_before">
        <div>
          <p>올해 핵심역량진단 준비중입니다.</p>
        </div>
      </div>

      <div v-else class="test_stare">
        <p class="title">
          <span v-if="diagSts === 'I'" class="status_label blue">진행중</span>
          <span v-else-if="diagSts === 'E'" class="status_label gray">진행종료</span>
          <span v-else-if="diagSts === 'B'" class="status_label pink">진행전</span>

          {{ diagInfo.damTitle }}
        </p>
        <span class="date">
          {{ moment(diagInfo.damStrDate).format("YYYY.MM.DD") }}~
          {{ moment(diagInfo.damEndDate).format("YYYY.MM.DD") }}
        </span>
        <div class="btn_area">
          <!-- 진단 진행 전 -->
          <button
            v-if="diagSts === 'B'"
            type="button"
            class="btn_round btn_md disabled"
            @click="vm.$alert('아직 핵심역량진단 진행기간이 아닙니다.', '알림')"
          >
            진단시작
          </button>
          <!-- 진단 진행 중 / 미실시 -->
          <button
            v-else-if="diagSts === 'I' && userSts !== 'Y'"
            type="button"
            class="btn_round btn_md btn_primary"
            @click="onClickActiveDiagPopup()"
          >
            진단시작
          </button>
          <!-- 진단 진행 중 / 실시 -->
          <button
            v-else-if="diagSts === 'I' && userSts === 'Y'"
            type="button"
            class="btn_round btn_md disabled"
            @click="vm.$alert('이미 핵심역량진단을 수행했습니다', '알림')"
          >
            진단완료
          </button>
          <!-- 진단 종료 -->
          <button
            v-else-if="diagSts === 'E'"
            type="button"
            class="btn_round btn_md disabled"
            @click="vm.$alert('핵심역량진단 진행기간이 종료되었습니다', '알림')"
          >
            기간만료
          </button>
        </div>
      </div>
    </div>
  </div>

  <DoDiagPopup v-if="isPopup" v-model="isPopup" :type="'core'" :keyId="String(diagInfo.damId)"></DoDiagPopup>
</template>
<script setup lang="ts">
import { ref, getCurrentInstance, onMounted, computed } from "vue";
import moment from "moment";
import DoDiagPopup from "@/components/diag/coreAbility/popup/DoDiagPopup.vue";
import type { UserDiagInfoTypes } from "@/types/diag/DiagTypes";

onMounted(() => {
  fnGetLatestCoreDiagMng();
});

const instance = getCurrentInstance();
if (!instance) {
  throw new Error("getCurrentInstance returned null");
}
const vm = instance.appContext.config.globalProperties;

const diagInfo = ref({} as UserDiagInfoTypes);

const isPopup = ref(false);
const loaded = ref(true);

/**
 * 진단 상태 값
 * I (ing): 진행 중 / E (end): 진행 종료 / B (before): 진행 전
 */

const diagSts = computed(() => {
  let sts = "I";
  if (moment().diff(diagInfo.value.damEndDate, "minutes") > 0) {
    sts = "E";
  } else if (moment().diff(diagInfo.value.damStrDate, "minutes") < 0) {
    sts = "B";
  }
  return sts;
});

/**
 * 유저 상태 값
 * N: 미실시 / I: 실시 중 / Y: 실시
 */
const userSts = computed(() => {
  let sts = "N";
  const darResCnt = diagInfo.value.darResCnt;
  const datCmpltYn = diagInfo.value.datCmpltYn;

  if (datCmpltYn === "Y") {
    sts = "Y";
  } else if (datCmpltYn === "N" && darResCnt > 0) {
    sts = "I";
  }

  return sts;
});

/**
 * 진단 실시 팝업 열기
 */
const onClickActiveDiagPopup = () => {
  isPopup.value = true;
};

/**
 * 학년도 기준 가장 최신의 핵심역량진단 가져오기
 */
const fnGetLatestCoreDiagMng = () => {
  vm.$axios
    .get("/api/client/diag/user/coreAbility/getLatestCoreDiagMng")
    .then((res) => {
      const resData = res.data;
      diagInfo.value = resData.data;

      loaded.value = true;
    })
    .catch((e) => {
      console.error(e);
    });
};
</script>
