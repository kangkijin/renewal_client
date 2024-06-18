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
                <input type="radio" name="radio_tab_lg" id="radio1_2" class="hidden" value="" checked />
                <label for="radio1_2">시험</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_3" class="hidden" value="" />
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
              <h4 class="setting_tit">시험등록</h4>
            </div>
            <div>
              <div class="regist_section">
                <h5 class="setting_tit">1회차</h5>
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
                            <vue-select
                              class="select_box"
                              :options="selectOption.test"
                              :placeholder="'시험을 선택해주세요.'"
                            ></vue-select>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">시험명</th>
                        <td class="regist_input">
                          <input type="text" class="form_style" placeholder="시험선택 시 자동 입력 됩니다." disabled />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">시험비중</th>
                        <td>
                          <div class="input_section">
                            <div class="input_row wd_130">
                              <input type="number" class="form_style wd_p100 ta_r" />
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
                              <VDateInput></VDateInput>
                            </div>
                            <div class="input_section">
                              <div class="input_row wd_90">
                                <input type="number" class="form_style wd_p100 ta_r" />
                              </div>
                              <p class="input_end">시</p>
                            </div>
                            <div class="input_section">
                              <div class="input_row wd_90">
                                <input type="number" class="form_style wd_p100 ta_r" />
                              </div>
                              <p class="input_end">분</p>
                            </div>
                          </div>
                          <div class="input_tilde">~</div>
                          <div class="dp_inline">
                            <div class="input_section">
                              <VDateInput></VDateInput>
                            </div>
                            <div class="input_section">
                              <div class="input_row wd_90">
                                <input type="number" class="form_style wd_p100 ta_r" />
                              </div>
                              <p class="input_end">시</p>
                            </div>
                            <div class="input_section">
                              <div class="input_row wd_90">
                                <input type="number" class="form_style wd_p100 ta_r" />
                              </div>
                              <p class="input_end">분</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">시험설명</th>
                        <td>
                          <div class="letter_count count200 letter_count_wrap">
                            <textarea
                              rows="4"
                              class="form_style wd_p100"
                              placeholder="시험설명을 입력해주세요."
                            ></textarea>
                            <p class="letter_counter"></p>
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
              <button type="button" class="btn_round btn_secondary btn_xl">저장</button>
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

export default {
  components: {
    VDateInput,
  },
  setup() {
    return {
      selectOption: {
        test: [{ label: "시험명" }],
      },
    };
  },
  mounted: function () {
    letterCount();
  },
};
</script>
