<template>
  <div class="sub_section">
    <div class="oprtr_wrapper">
      <div class="setting_header">
        <h4 class="setting_tit">시험등록</h4>
      </div>
      <div class="regist_section" v-for="idx in examRound" :key="idx">
        <h5 class="setting_tit">{{ idx }}회차</h5>
        <div class="tbl tbl_row scrollx_tbl_sm">
          <table>
            <caption>
              시험등록
            </caption>
            <colgroup>
              <col style="width: 16%" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">시험종류</th>
                <td class="regist_input">
                  <div class="select_row mg_b0">
                    <vue-select class="select_box" :options="readyExamInfo" v-model="refArr[idx - 1]" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">시험비중</th>
                <td>
                  <div class="input_section">
                    <div class="input_row wd_130">
                      <input
                        type="number"
                        class="form_style wd_p100 ta_r"
                        :value="refArr[idx - 1].ratio"
                        disabled="true"
                      />
                    </div>
                    <p class="input_end">%</p>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">응시기간</th>
                <td>
                  <div class="dp_inline">
                    <div class="input_section">
                      <VDateInput :placeholder="refArr[idx - 1].date" disabled="true"></VDateInput>
                    </div>
                    <div class="input_section">
                      <div class="input_row wd_90">
                        <input
                          type="number"
                          class="form_style wd_p100 ta_r"
                          :value="refArr[idx - 1].strHour"
                          disabled="true"
                        />
                      </div>
                      <p class="input_end" disabled="true">시</p>
                    </div>
                    <div class="input_section">
                      <div class="input_row wd_90">
                        <input
                          type="number"
                          class="form_style wd_p100 ta_r"
                          :value="refArr[idx - 1].strMinute"
                          disabled="true"
                        />
                      </div>
                      <p class="input_end">분</p>
                    </div>
                  </div>
                  <div class="input_tilde">~</div>
                  <div class="dp_inline">
                    <div class="input_section">
                      <div class="input_row wd_90">
                        <input
                          type="number"
                          class="form_style wd_p100 ta_r"
                          :value="refArr[idx - 1].endHour"
                          disabled="true"
                        />
                      </div>
                      <p class="input_end">시</p>
                    </div>
                    <div class="input_section">
                      <div class="input_row wd_90">
                        <input
                          type="number"
                          class="form_style wd_p100 ta_r"
                          :value="refArr[idx - 1].endMinute"
                          disabled="true"
                        />
                      </div>
                      <p class="input_end">분</p>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">시험설명</th>
                <td>
                  <div class="letter_count count200">
                    <textarea
                      rows="4"
                      class="form_style wd_p100"
                      placeholder="시험설명을 입력해주세요."
                      :value="refArr[idx - 1].desc"
                      @change="insertText(idx - 1, $event)"
                    ></textarea>
                    <p class="letter_count_wrap letter_counter"></p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="btn_area">
        <button type="button" class="btn_round btn_white btn_xl" @click="moveExamListPage()">취소</button>
        <button type="button" class="btn_round btn_secondary btn_xl" @click="submit()">저장</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject, onMounted, readonly, ref } from "vue";
import VDateInput from "@/components/common/VDateInput.vue";
import { letterCount } from "@/assets/js/common";
import axios, { type AxiosResponse } from "axios";
/** prop / 변수 모음 */
const refArr = ref<object[]>([{ value: undefined }, { value: undefined }, { value: undefined }, { value: undefined }]);
const examRound = inject<number>("examRound");
const readyExamInfo = readonly([
  {
    label: "테스트 시험 명 11",
    value: 100,
    ratio: 25,
    date: "2024-05-04",
    strHour: 12,
    strMinute: 11,
    endHour: 15,
    endMinute: 31,
    desc: "시험을 설명하는 시험입니다1",
  },
  {
    label: "테스트 시험 명 21",
    value: 200,
    ratio: 25,
    date: "2024-05-04",
    strHour: 12,
    strMinute: 11,
    endHour: 15,
    endMinute: 31,
    desc: "시험을 설명하는 시험입니다1",
  },
  {
    label: "테스트 시험 명 31",
    value: 300,
    ratio: 25,
    date: "2024-05-04",
    strHour: 12,
    strMinute: 11,
    endHour: 15,
    endMinute: 31,
    desc: "시험을 설명하는 시험입니다1",
  },
]);
/** 훅의 영역 */
onMounted(() => {
  letterCount();
});

/** 메소드 영역 */
const moveExamListPage = inject<Function>("moveExamListPage");
/** R: 계획중인 시험 정보 조회 */
const getReadyExamInfo = () => {
  const _url: string = "";
  const param: object = {};
  /** Axios 통신 */
  /*axios
    .get(_url, { params: param })
    .then((response: AxiosResponse) => {
      const stsCd = response.data.code;
      /!** 상태코드가 200이 아니면 (예: 300 류) 에러호출 *!/
      if (stsCd != 200) {
        throw new Error();
      }
      readyExamInfo.value = response.data.data;
      for (let i = 0; i < response.data.data.length; i++) {
        examList.value.push({}); /!** 설정 차수에 따른 오브젝트 개수 설정 *!/
      }
    })
    .catch((error: Error) => {
      alert(JSON.stringify(error));
    })
    .finally(() => {});*/
};
/** C: 비교과 시험 등록 */
function submit() {
  if (confirm("시험을 등록 하시겠습니까?")) {
    let checkEpt = true;
    const _url: string = "/api/prof/EcpExam/createExam";
    const param = refArr.value.map((obj: object) => {
      if (!obj.value) {
        checkEpt = false;
      }
      return { testId: obj.value, desc: obj.desc };
    });
    if (!checkEpt) {
      alert("유효성 걸러짐");
      return;
    }
    /** Axios 통신 */
    axios
      .post(_url, param)
      .then((response: AxiosResponse) => {
        const stsCd = response.data.code;
        /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
        if (stsCd != 200) {
          throw new Error();
        }
      })
      .catch((error: Error) => {
        alert(JSON.stringify(error));
      });
    //alert("등록되었습니다.");
    //moveExamListPage();
  }
}

function insertText(idx: number, event) {
  refArr.value[idx] = { ...refArr.value[idx], desc: event.target.value };
}
</script>
