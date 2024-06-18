<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">비교과 운영</h2>
        <div class="title_function">
          <div class="radio_tab_wrap">
            <p class="radio_tab">
              <input type="radio" id="radio1" name="radio_program" />
              <label for="radio1">비교과신청</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio2" name="radio_program" />
              <label for="radio2">나의 비교과</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio3" name="radio_program" checked />
              <label for="radio3">비교과 운영</label>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid_content">
      <div class="sub_section top">
        <div class="section_tit_wrap">
          <h3 class="section_subtit">Class</h3>
        </div>
        <div class="toggle_wrap">
          <div class="left wd_p100">
            <div class="radio_tab_lg_wrap">
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_1" class="hidden" value="" />
                <label for="radio1_1">강의실</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_2" class="hidden" value="" />
                <label for="radio1_2">시험</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_3" class="hidden" value="" checked />
                <label for="radio1_3">과제</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_4" class="hidden" value="" />
                <label for="radio1_4">학습자료</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_5" class="hidden" value="" />
                <label for="radio1_5">Q&A</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_6" class="hidden" value="" />
                <label for="radio1_6">공지사항</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_7" class="hidden" value="" />
                <label for="radio1_7">출석&성적</label>
              </p>
            </div>
          </div>
        </div>
        <div class="sub_section">
          <div class="oprtr_wrapper">
            <div class="setting_header">
              <h4 class="setting_tit">과제등록</h4>
            </div>
            <div>
              <div class="regist_section" v-for="(hmwrk, index) in hmwrkInfo" :key="index">
                <h5 class="setting_tit">{{ index + 1 }}회차</h5>
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
                            v-model="hmwrk.ecrTitle"
                            name="title"
                            :id="`title_${index}`"
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
                              <input type="number" v-model="hmwrk.ecrPer" class="form_style wd_p100 ta_r" disabled />
                            </div>
                            <p class="input_end">%</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">제출기간</th>
                        <td>
                          <div class="dp_inline">
                            <div class="input_section">
                              <VDateInput v-model="hmwrk.ecrSubmitStrDay"></VDateInput>
                            </div>
                            <div class="input_section">
                              <div class="input_row wd_90">
                                <input
                                  type="number"
                                  @input="handleStrHour(index)"
                                  v-model="hmwrk.ecrSubmitStrHour"
                                  class="form_style wd_p100 ta_r"
                                />
                              </div>
                              <p class="input_end">시</p>
                            </div>
                            <div class="input_section">
                              <div class="input_row wd_90">
                                <input
                                  type="number"
                                  @input="handleStrMin(index)"
                                  v-model="hmwrk.ecrSubmitStrMin"
                                  class="form_style wd_p100 ta_r"
                                />
                              </div>
                              <p class="input_end">분</p>
                            </div>
                          </div>
                          <div class="input_tilde">~</div>
                          <div class="dp_inline">
                            <div class="input_section">
                              <VDateInput v-model="hmwrk.ecrSubmitEndDay"></VDateInput>
                            </div>
                            <div class="input_section">
                              <div class="input_row wd_90">
                                <input
                                  type="number"
                                  @input="handleEndHour(index)"
                                  v-model="hmwrk.ecrSubmitEndHour"
                                  class="form_style wd_p100 ta_r"
                                />
                              </div>
                              <p class="input_end">시</p>
                            </div>
                            <div class="input_section">
                              <div class="input_row wd_90">
                                <input
                                  type="number"
                                  @input="handleEndMin(index)"
                                  v-model="hmwrk.ecrSubmitEndMin"
                                  class="form_style wd_p100 ta_r"
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
                              v-model="hmwrk.ecrDesc"
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
                                v-model="hmwrk.ecrTeamReportYn"
                                value="solo"
                                type="radio"
                                :name="`select_radio${index}`"
                                :id="`select${index}_1`"
                                class="hidden"
                                checked
                              />
                              <label :for="`select${index}_1`">개별과제</label>
                            </p>
                            <p class="radio_row">
                              <input
                                v-model="hmwrk.ecrTeamReportYn"
                                value="Y"
                                type="radio"
                                :name="`select_radio${index}`"
                                :id="`select${index}_2`"
                                class="hidden"
                              />
                              <label :for="`select${index}_2`">팀과제</label>
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
              <button type="button" class="btn_round btn_white btn_xl">취소</button>
              <button type="button" @click="onClickSave" class="btn_round btn_secondary btn_xl">저장</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VDateInput from "@/components/common/VDateInput.vue";
import { letterCount } from "@/assets/js/common";
import type { AxiosResponse } from "axios";

type hmwrkType = {
  ecrTitle: string;
  ecrPer: string;
  eliId: number;
  ecmId: number;
  ecsId: number;
  ecrSubmitStrDate: string;
  ecrSubmitStrHour: string;
  ecrSubmitStrMin: string;
  ecrSubmitEndDate: string;
  ecrSubmitEndHour: string;
  ecrSubmitEndMin: string;
  ecrSubmitEndDay: string;
  ecrSubmitStrDay: string;
  ecrDesc: string;
  ecrTeamReportYn: string;
};
export default {
  components: {
    VDateInput,
  },
  setup() {
    return {
      selectOption: {
        lesson: [{ label: "동영상" }, { label: "Zoom" }, { label: "유튜브" }, { label: "오프라인" }],
      },
    };
  },
  data: () => ({
    dataList: {},
    hmwrkInfo: [] as hmwrkType[],
  }),
  mounted: function () {
    letterCount();
    this.fnGetOptrData();
  },
  methods: {
    fnGetOptrData() {
      var vm = this;
      vm.$axios.get("http://localhost:4000/api/v1/user/ecpHmwrk", { params: { eliId: "1" } }).then(function (
        res: AxiosResponse,
      ) {
        var percent;
        var curPer;
        vm.dataList = res.data.data;
        for (var i = 0; vm.dataList.ecsHmwrkCnt > i; i++) {
          if (vm.dataList.essHmwrkEvenYn == "Y") {
            percent = vm.dataList.ecsHmwrkPercent / vm.dataList.ecsHmwrkCnt;
            curPer = percent;
          } else {
            percent = vm.dataList.essHmwrkEachPercent.split("|");
            curPer = percent[i];
          }
          var ecpHmwrkData = {
            ecrTitle: "",
            ecrPer: curPer,
            eliId: "1",
            ecmId: vm.dataList.ecmId,
            ecsId: vm.dataList.ecsId,
            ecrSubmitStrDay: "",
            ecrSubmitStrHour: "",
            ecrSubmitStrMin: "",
            ecrSubmitEndDay: "",
            ecrSubmitEndHour: "",
            ecrSubmitEndMin: "",
            ecrDesc: "",
            ecrTeamReportYn: "N",
          };
          vm.hmwrkInfo.push(ecpHmwrkData);
        }
      });
    },
    handleStrHour(index: number) {
      if (this.hmwrkInfo[index].ecrSubmitStrHour > 24 || this.hmwrkInfo[index].ecrSubmitStrHour < 0) {
        this.hmwrkInfo[index].ecrSubmitStrHour = 0;
      }
    },
    handleStrMin(index: number) {
      if (this.hmwrkInfo[index].ecrSubmitStrMin > 60 || this.hmwrkInfo[index].ecrSubmitStrMin < 0) {
        this.hmwrkInfo[index].ecrSubmitStrMin = 0;
      }
    },
    handleEndHour(index: number) {
      if (this.hmwrkInfo[index].ecrSubmitEndHour > 24 || this.hmwrkInfo[index].ecrSubmitEndHour < 0) {
        this.hmwrkInfo[index].ecrSubmitEndHour = 0;
      }
    },
    handleEndMin(index: number) {
      if (this.hmwrkInfo[index].ecrSubmitEndMin > 60 || this.hmwrkInfo[index].ecrSubmitEndMin < 0) {
        this.hmwrkInfo[index].ecrSubmitEndMin = 0;
      }
    },
    onClickSave() {
      const vm = this;
      vm.hmwrkInfo.forEach(function (x: any) {
        var strDate = new Date(x.ecrSubmitStrDay);
        strDate.setHours(x.ecrSubmitStrHour);
        strDate.setMinutes(x.ecrSubmitStrMin);

        var endDate = new Date(x.ecrSubmitEndDay);
        endDate.setHours(x.ecrSubmitEndHour);
        endDate.setMinutes(x.ecrSubmitEndMin);

        const strYear = strDate.getFullYear();
        const strMonth = String(strDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
        const strDay = String(strDate.getDate()).padStart(2, "0");
        const strHours = String(strDate.getHours()).padStart(2, "0");
        const strMinutes = String(strDate.getMinutes()).padStart(2, "0");
        const strSeconds = String(strDate.getSeconds()).padStart(2, "0");

        const endYear = endDate.getFullYear();
        const endMonth = String(endDate.getMonth() + 1).padStart(2, "0"); // Months are zero-based
        const endDay = String(endDate.getDate()).padStart(2, "0");
        const endHours = String(endDate.getHours()).padStart(2, "0");
        const endMinutes = String(endDate.getMinutes()).padStart(2, "0");
        const endSeconds = String(endDate.getSeconds()).padStart(2, "0");

        x.ecrSubmitStrDate = `${strYear}-${strMonth}-${strDay} ${strHours}:${strMinutes}:${strSeconds}`;
        x.ecrSubmitEndDate = `${endYear}-${endMonth}-${endDay} ${endHours}:${endMinutes}:${endSeconds}`;
        //날짜 먼저 로직 확인
        if (strDate.getTime() > endDate.getTime()) {
          vm.$alert("시작 기간은 종료기간보다 느릴 수 없습니다.");
          x.ecrSubmitStrDay.focus();
          return false;
        }
        for (var a in x) {
          if (x[a] == null || x[a] == "") {
            vm.$alert("모든 값을 입력해야합니다.");
            return false;
          }
        }
      });
      vm.$axios.post("http://localhost:4000/api/v1/user/regEcpHmwrk", JSON.stringify(vm.hmwrkInfo)).then(function (
        res: AxiosResponse,
      ) {
        console.log(res.data.code);
      });
      vm.$router.push({ path: `/prof/program/operation/class`, query: { keyId: "ReportList" } });
    },
  },
};
</script>
