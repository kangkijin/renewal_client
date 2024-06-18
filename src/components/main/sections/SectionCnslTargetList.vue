<template>
  <div class="main_section section2">
    <div class="grid_content">
      <div class="section_tit_wrap responsive_mob">
        <h3 class="section_subtit">상담 대상자 목록</h3>
      </div>
      <div class="search_box">
        <div class="search_section">
          <div class="search_toggle lg center">
            <div class="left">
              <div class="radio_text_wrap">
                <p class="radio_text">
                  <input type="radio" name="radio_text" id="radio_text1" v-model="radio" value="target1" checked />
                  <label for="radio_text1">
                    상담신청<span>{{ cnslCntInfo.aprvCnt ?? 0 }}</span> 건
                  </label>
                </p>
                <p class="radio_text">
                  <input type="radio" name="radio_text" id="radio_text2" v-model="radio" value="target2" />
                  <label for="radio_text2">
                    상담신청(시간미지정)<span>{{ cnslCntInfo.nonDateAprvCnt ?? 0 }}</span> 건
                  </label>
                </p>
                <p class="radio_text">
                  <input type="radio" name="radio_text" id="radio_text3" v-model="radio" value="target3" />
                  <label for="radio_text3">
                    상담완료(지도학생)<span>{{ cnslCntInfo.guideUserCmptCnt ?? 0 }}</span> 건
                  </label>
                </p>
                <p class="radio_text">
                  <input type="radio" name="radio_text" id="radio_text4" v-model="radio" value="target4" />
                  <label for="radio_text4">
                    상담완료(지도학생 외)<span>{{ cnslCntInfo.noGuideUserCmptCnt ?? 0 }}</span> 건
                  </label>
                </p>
                <p class="radio_text">
                  <input type="radio" name="radio_text" id="radio_text5" v-model="radio" value="target5" />
                  <label for="radio_text5">
                    지도학생<span>{{ cnslCntInfo.guideUserCnt ?? 0 }}</span> 명
                  </label>
                </p>
              </div>
            </div>
            <div class="right">
              <div class="select_row md">
                <vue-select class="select_box" v-model="yearVal" :options="yearOption" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <template v-if="radio == 'target1'">
        <cnsl-apply />
      </template>
      <template v-if="radio == 'target2'">
        <no-cnsl-apply />
      </template>
      <template v-if="radio == 'target3'">
        <cnsl-cmplt />
      </template>
      <template v-if="radio == 'target4'">
        <cnsl-cmplt-outside />
      </template>
      <template v-if="radio == 'target5'">
        <guide-student />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
// CSS
import "swiper/css";
import "swiper/css/navigation";

// Components
import CnslApply from "./cnsltargetlist/CnslApply.vue";
import NoCnslApply from "./cnsltargetlist/NoCnslApply.vue";
import CnslCmplt from "./cnsltargetlist/CnslCmplt.vue";
import CnslCmpltOutside from "./cnsltargetlist/CnslCmpltOutside.vue";
import GuideStudent from "./cnsltargetlist/GuideStudent.vue";

import { ref, onMounted, getCurrentInstance, provide } from "vue";
import moment from "moment";

import type { Options } from "@/components/prfsncnsl/cnslReq/prfsncnsl";

// VM
const instance = getCurrentInstance();
if (!instance) throw new Error("getCurrentInstance returned null");
const vm = instance.appContext.config.globalProperties;

// 로그인 정보 TODO :: 임시 로그인 정보
const userInfo = {
  userId: "staff1",
  userNm: "지도교수1",
  hakguaCd: "H00001",
};

// 년도 selectbox 구성
const thisYear = Number(moment().format("YYYY"));
const yearOption = ref<Options[]>([{ label: String(thisYear), value: String(thisYear) }]);
const yearVal = ref<Options>({ label: String(thisYear), value: String(thisYear) });
const fnGetYearOptions = () => {
  yearOption.value = [];
  for (let i = 2024; i <= thisYear; i++) {
    yearOption.value.push({ label: "" + i, value: "" + i });
  }
  if (yearOption.value.length > 0) yearVal.value = yearOption.value[0];
};

const radio = ref<string>("target1");

// 각 탭 상담 건수 조회
interface CnslCntInfo {
  aprvCnt: number;
  nonDateAprvCnt: number;
  guideUserCmptCnt: number;
  noGuideUserCmptCnt: number;
  guideUserCnt: number;
}
const cnslCntInfo = ref<CnslCntInfo>({
  aprvCnt: 0,
  nonDateAprvCnt: 0,
  guideUserCmptCnt: 0,
  noGuideUserCmptCnt: 0,
  guideUserCnt: 0,
});
const fnGetCnslCntInfo = () => {
  const params = {
    cnslrId: userInfo.userId,
    cnslYear: yearVal.value.value,
  };
  vm.$axios
    .get("/api/counsel/client/professor/getCnslCntInfo", { params: params })
    .then((res) => {
      cnslCntInfo.value = res.data.data;
    })
    .catch((e) => {
      console.error(e);
    });
};

onMounted(() => {
  fnGetYearOptions();
  fnGetCnslCntInfo();
});

provide("userInfo", userInfo);
provide("cnslYear", yearVal.value.value);
provide("fnGetCnslCntInfo", fnGetCnslCntInfo);
</script>
