<template>
  <div class="sub_section" :class="loaded ? '' : 'loading_md'">
    <div class="oprtr_wrapper">
      <div class="setting_header">
        <h4 class="setting_tit">과제등록</h4>
      </div>
      <div>
        <div v-for="idx in reportRound" :key="idx" class="regist_section">
          <h5 class="setting_tit">{{ idx }}회차</h5>
          <div class="tbl tbl_row scrollx_tbl_sm">
            <table>
              <caption>
                과제등록
              </caption>
              <colgroup>
                <col style="width: 16%" />
                <col style="width: auto" />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">과제명</th>
                  <td class="regist_input">
                    <input
                      v-model="reportArr[idx - 1].ecrTitle"
                      type="text"
                      class="form_style"
                      placeholder="과제명을 입력해주세요."
                    />
                  </td>
                </tr>
                <tr></tr>
                <tr>
                  <th scope="row">과제비중</th>
                  <td>
                    <div class="input_section">
                      <div class="input_row wd_130">
                        <input
                          v-model="reportArr[idx - 1].ecrPer"
                          type="number"
                          class="form_style wd_p100 ta_r"
                          @input="checkVal($event, 'Ratio', 'ecrPer', idx - 1)"
                        />
                      </div>
                      <p class="input_end">%</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">제출기간{{ reportArr[idx - 1].ecrSubmitStrDate }}</th>
                  <td>
                    <div class="dp_inline">
                      <div class="input_section">
                        <VDateInput v-model="reportArr[idx - 1].ecrSubmitStrDate"></VDateInput>
                      </div>
                      <div class="input_section">
                        <div class="input_row wd_90">
                          <input
                            v-model="reportArr[idx - 1].ecrSubmitStrHour"
                            type="number"
                            class="form_style wd_p100 ta_r"
                            @input="checkVal($event, 'Time', 'ecrSubmitStrHour', idx - 1)"
                          />
                        </div>
                        <p class="input_end">시</p>
                      </div>
                      <div class="input_section">
                        <div class="input_row wd_90">
                          <input
                            v-model="reportArr[idx - 1].ecrSubmitStrMinute"
                            type="number"
                            class="form_style wd_p100 ta_r"
                            @input="checkVal($event, 'Minute', 'ecrSubmitStrMinute', idx - 1)"
                          />
                        </div>
                        <p class="input_end">분</p>
                      </div>
                    </div>
                    <div class="input_tilde">~</div>
                    <div class="dp_inline">
                      <div class="input_section">
                        <VDateInput v-model="reportArr[idx - 1].ecrSubmitEndDate"></VDateInput>
                      </div>
                      <div class="input_section">
                        <div class="input_row wd_90">
                          <input
                            v-model="reportArr[idx - 1].ecrSubmitEndHour"
                            type="number"
                            class="form_style wd_p100 ta_r"
                            @input="checkVal($event, 'Time', 'ecrSubmitEndHour', idx - 1)"
                          />
                        </div>
                        <p class="input_end">시</p>
                      </div>
                      <div class="input_section">
                        <div class="input_row wd_90">
                          <input
                            v-model="reportArr[idx - 1].ecrSubmitEndMinute"
                            type="number"
                            class="form_style wd_p100 ta_r"
                            @input="checkVal($event, 'Minute', 'ecrSubmitEndMinute', idx - 1)"
                          />
                        </div>
                        <p class="input_end">분</p>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">파일첨부</th>
                  <td>
                    <div class="attach_filewrap">
                      <label class="btn_round btn_white btn_sm">
                        파일 추가
                        <input type="file" class="hidden" />
                      </label>
                      <div class="attach_file_list">
                        <div class="file_row">
                          <div class="file_name">
                            <p>알고리즘수정.hwp</p>
                            <i>145KB</i>
                            <button type="button" class="btn_icon icon_only download">다운로드</button>
                            <button type="button" class="btn_icon icon_only delete">삭제</button>
                          </div>
                        </div>
                        <div class="file_row">
                          <div class="file_name">
                            <p>알고리즘수정.hwp</p>
                            <i>145KB</i>
                            <button type="button" class="btn_icon icon_only download">다운로드</button>
                            <button type="button" class="btn_icon icon_only delete">삭제</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="info_wrap">
                      <p class="info font_red">
                        * 파일 갯수 최대 5개, HWP, DOC, PPT, XSXL , PDF, TXT 문서 파일만 등록 가능합니다.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">과제설명</th>
                  <td>
                    <div class="letter_count count200 letter_count_wrap">
                      <textarea
                        v-model="reportArr[idx - 1].ecrDesc"
                        rows="4"
                        class="form_style wd_p100"
                        placeholder="과제설명을 입력해주세요."
                      ></textarea>
                      <p class="letter_counter"></p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">팀 과제 여부</th>
                  <td>
                    <div class="input_row">
                      <p class="radio_row">
                        <input
                          v-model="reportArr[idx - 1].ecrTeamReportYn"
                          type="radio"
                          :name="'select_radio' + idx"
                          :id="'select' + idx + '_1'"
                          class="hidden"
                          value="N"
                        />
                        <label :for="'select' + idx + '_1'">개별과제</label>
                      </p>
                      <p class="radio_row">
                        <input
                          v-model="reportArr[idx - 1].ecrTeamReportYn"
                          type="radio"
                          :name="'select_radio' + idx"
                          :id="'select' + idx + '_2'"
                          value="Y"
                          class="hidden"
                        />
                        <label :for="'select' + idx + '_2'">팀과제</label>
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="btn_area">
        <button type="button" class="btn_round btn_white btn_xl" @click="returnToList()">취소</button>
        <button type="button" class="btn_round btn_secondary btn_xl" @click="saveReportData()" :disabled="saveBtnSts">
          저장
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import VDateInput from "@/components/common/VDateInput.vue";
import { inject, onBeforeMount, readonly, ref } from "vue";
import moment from "moment";
import { letterCount } from "@/assets/js/common";
import type { AxiosResponse } from "axios";
import type Report from "@/types/extraCurricular/Report";
/** prop / 변수 모음 */
/* 작성할 과제 정보를 담을 배열변수 */
const prop = defineProps({
  existDataList: { type: Array<Report>, require: true },
});
const emit = defineEmits(["moveExamListPage"]);
const reportArr = ref<Report[]>([]);
/* 부모 컴포넌트로부터 받을 차수 정보 */
const reportRound = inject<number>("examRound");
/* 인터페이스 초기화 변수 */
const resetReport: Report = readonly({
  ecrHmwrkCnt: undefined,
  ecrTitle: undefined,
  ecrPer: undefined,
  ecrSubmitStrDate: undefined,
  ecrSubmitStrHour: undefined,
  ecrSubmitStrMinute: undefined,
  ecrSubmitEndDate: undefined,
  ecrSubmitEndHour: undefined,
  ecrSubmitEndMinute: undefined,
  ecrDesc: undefined,
  ecrTeamReportYn: undefined,
  regId: undefined,
});
/* 저장 버튼 중복 서브밋 방지용 상태변수 */
const saveBtnSts = ref<boolean>(false);
const updateStsChk = ref<boolean>(false);
const loaded = ref<boolean>(true);
const vm = inject<object>("vm");
const eliId = inject<number>("eliId");
const ecmId = inject<number>("ecmId");
const ecsId = inject<number>("ecsId");
/** 훅의 영역 */
/* 마운트 전 : 레터 카운트와 과제정보 배열의 사이즈 결정 */
onBeforeMount(() => {
  letterCount();
  getSavedReportListAxios();
});
/** 메소드 / 함수 영역 */
/* emit 사용 메소드: 목록으로 이동 */
const returnToList = () => {
  emit("moveExamListPage");
};
/* R: 저장된 과제 목록 조회 */
const getSavedReportListAxios = () => {
  const _url: string = "/api/prof/EcpReport/getSavedReportDataList";
  const param: object = {
    eliId: eliId,
    ecmId: ecmId,
    ecsId: ecsId,
  }; //나중에 강의실 키나 차수 키 같은거 넣어야함
  vm.$loading = false;
  /* Axios 통신 */
  vm.$axios
    .get(_url, { params: param })
    .then((response: AxiosResponse) => {
      const stsCd = response.data.code;
      /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
      if (stsCd != 200) {
        throw new Error();
      }
      reportArr.value = response.data.data;
      reportArr.value.forEach((obj) => {
        obj.regId = "DAIN";
        if (obj.ecrSubmitStrDate) {
          const tempDate = new Date(obj.ecrSubmitStrDate);
          obj.ecrSubmitStrDate = moment(tempDate).format("YYYY-MM-DD");
          obj.ecrSubmitStrHour = tempDate.getHours();
          obj.ecrSubmitStrMinute = tempDate.getMinutes();
        }
        if (obj.ecrSubmitEndDate) {
          const tempDate = new Date(obj.ecrSubmitEndDate);
          obj.ecrSubmitEndDate = moment(tempDate).format("YYYY-MM-DD");
          obj.ecrSubmitEndHour = tempDate.getHours();
          obj.ecrSubmitEndMinute = tempDate.getMinutes();
        }
      });
      if (reportArr.value === undefined || reportArr.value.length === 0) {
        initObject();
        updateStsChk.value = false;
      } else {
        updateStsChk.value = true;
      }
    })
    .catch((error: Error) => {
      vm.$alert(JSON.stringify(error));
    })
    .finally(() => {
      vm.$loading = true;
    });
};
/* 유효성 검사 및 날짜 정보 조정 */
function validationAndCvsDate(): boolean {
  let rslt: boolean = false;
  for (let obj of reportArr.value) {
    const keys = Object.keys(obj);
    for (let key of keys) {
      /* obj[key]로 체크 시 0도 false로 취급하여 typeof로 체크 */
      if (typeof obj[key] === "undefined") {
        return !rslt;
      } else {
        if (key === "ecrSubmitStrMinute") {
          const dateArr = moment(obj.ecrSubmitStrDate).format("YYYY-MM-DD").split("-").map(Number);
          /* 자바스크립트에서는 월계산이 + 1 되기 때문에 - 1 해야함 */
          obj.ecrSubmitStrDate = new Date(
            dateArr[0],
            dateArr[1] - 1,
            dateArr[2],
            obj.ecrSubmitStrHour,
            obj.ecrSubmitStrMinute,
          );
        }
        if (key === "ecrSubmitEndMinute") {
          const dateArr = moment(obj.ecrSubmitEndDate).format("YYYY-MM-DD").split("-").map(Number);
          /* 자바스크립트에서는 월계산이 + 1 되기 때문에 - 1 해야함 */
          obj.ecrSubmitEndDate = new Date(
            dateArr[0],
            dateArr[1] - 1,
            dateArr[2],
            obj.ecrSubmitEndHour,
            obj.ecrSubmitEndMinute,
          );
        }
      }
    }
  }
  return rslt;
}
/* 작성한 과제 저장 */
const saveReportData = () => {
  saveBtnSts.value = true;
  vm.$confirm("과제를 등록 하시겠습니까?", "확인", (isConfirm: boolean) => {
    if (isConfirm) {
      const resultSts: boolean = validationAndCvsDate();
      if (resultSts) {
        vm.$alert("등록하시려면 모든 정보를 입력해야합니다.");
        return;
      }
      const _url: string = updateStsChk.value
        ? "/api/prof/EcpReport/updateReportData"
        : "/api/prof/EcpReport/addReportData";
      const param: Report[] = reportArr.value;
      loaded.value = false;
      /* Axios 통신 */
      vm.$axios
        .post(_url, param)
        .then((response: AxiosResponse) => {
          const stsCd = response.data.code;
          /* 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
          if (stsCd != 200) {
            throw new Error();
          }
          const success = response.data.data;
          if (success) {
            vm.$alert("과제저장을 성공하였습니다.");
            returnToList();
          } else {
            vm.$alert("과제저장을 실패하였습니다.");
          }
        })
        .catch((error: Error) => {
          vm.$alert(JSON.stringify(error));
        });
      //moveExamListPage();
      loaded.value = true;
    }
  });
  saveBtnSts.value = false;
};

/* 과제정보 배열의 사이즈 세팅 함수 */
const initObject = () => {
  for (let i = 1; i <= (reportRound ? reportRound : 0); i++) {
    /* 초기화용 과제 객체 이용해 코드 줄임 */
    const object: Report = {
      ...resetReport,
      ecrHmwrkCnt: i,
      ecrTeamReportYn: "N",
      regId: "DAIN",
    };
    reportArr.value.push(object);
  }
};
/* 입력값 범위 유효성 체크 함수 */
const checkVal = (event, type: string, key: string, idx: number) => {
  let incomeVal: number = event.target.value;
  if (type === "Ratio" && (incomeVal > 100 || incomeVal < 0)) {
    incomeVal > 100
      ? vm.$alert("과제 비중은 100%를 넘길 수 없습니다")
      : vm.$alert("과제 비중은 0%보다 낮을 수 없습니다");
    reportArr.value[idx][key] = undefined;
  } else if (type === "Time" && (incomeVal > 23 || incomeVal < 0)) {
    incomeVal > 23 ? vm.$alert("시간은 23시를 넘길 수 없습니다") : vm.$alert("시간은 0시보다 낮을 수 없습니다");
    reportArr.value[idx][key] = undefined;
  } else if (type === "Minute" && (incomeVal > 59 || incomeVal < 0)) {
    incomeVal > 59 ? vm.$alert("분은 59분을 넘길 수 없습니다") : vm.$alert("분은 0분보다 낮을 수 없습니다");
    reportArr.value[idx][key] = undefined;
  }
};
</script>
