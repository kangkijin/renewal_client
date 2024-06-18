<template>
  <div class="sub_section">
    <div class="oprtr_wrapper">
      <div class="setting_header">
        <h4 class="setting_tit">종합 기준 설정</h4>
      </div>
      <div class="tbl tbl_row scrollx_tbl_xs">
        <table>
          <caption>
            종합 기준 설정
          </caption>
          <colgroup>
            <col style="width: 194px" />
            <col style="width: auto" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">이수 기준 사용 여부</th>
              <td>
                <p class="radio_row">
                  <input type="radio" name="select_radio1" id="select1_1" class="hidden" checked />
                  <label for="select1_1">시스템 기준 적용</label>
                </p>
                <p class="radio_row">
                  <input type="radio" name="select_radio1" id="select1_2" class="hidden" />
                  <label for="select1_2">운영자 기준 적용</label>
                </p>
                <p class="info">
                  *운영자 기준 적용 시, 성적 및 진도 기준을 참고용이며, 운영 종료 후 운영자가 판단으로 이수처리됩니다.
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">종합 이수 점수</th>
              <td>
                <div class="input_section">
                  <div class="input_row wd_170">
                    <input type="text" class="form_style wd_p100 ta_r" />
                  </div>
                  <p class="input_end">점</p>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">평가요소 별 평가 비중</th>
              <td>
                <div class="input_flex">
                  <div class="input_section empty"></div>
                  <div class="input_section">
                    <p class="input_start">시험</p>
                    <div class="input_row wd_130">
                      <input type="text" class="form_style wd_p100 ta_r" />
                    </div>
                    <p class="input_end">%</p>
                  </div>
                  <div class="input_section">
                    <p class="input_start">과제</p>
                    <div class="input_row wd_130">
                      <input type="text" class="form_style wd_p100 ta_r" />
                    </div>
                    <p class="input_end">%</p>
                  </div>
                  <div class="input_section empty"></div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">평가요소 별 회차 수 설정</th>
              <td>
                <div class="input_flex">
                  <div class="input_section">
                    <p class="input_start">강의</p>
                    <div class="input_row wd_130">
                      <input type="text" class="form_style wd_p100 ta_r" />
                    </div>
                    <p class="input_end">회차</p>
                  </div>
                  <div class="input_section">
                    <p class="input_start">시험</p>
                    <div class="input_row wd_130">
                      <input type="text" class="form_style wd_p100 ta_r" />
                    </div>
                    <p class="input_end">회차</p>
                  </div>
                  <div class="input_section">
                    <p class="input_start">과제</p>
                    <div class="input_row wd_130">
                      <input type="text" class="form_style wd_p100 ta_r" />
                    </div>
                    <p class="input_end">회차</p>
                  </div>
                  <div class="input_section empty"></div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">평가요소 별 이수 기준 적용</th>
              <td>
                <div class="input_flex">
                  <div class="input_section">
                    <p class="input_start">강의</p>
                    <div class="input_row">
                      <p class="radio_row">
                        <input type="radio" name="select_radio2" id="select2_1" class="hidden" checked />
                        <label for="select2_1">예</label>
                      </p>
                      <p class="radio_row">
                        <input type="radio" name="select_radio2" id="select2_2" class="hidden" />
                        <label for="select2_2">아니오</label>
                      </p>
                    </div>
                  </div>
                  <div class="input_section">
                    <p class="input_start">시험</p>
                    <div class="input_row">
                      <p class="radio_row">
                        <input type="radio" name="select_radio3" id="select3_1" class="hidden" checked />
                        <label for="select3_1">예</label>
                      </p>
                      <p class="radio_row">
                        <input type="radio" name="select_radio3" id="select3_2" class="hidden" />
                        <label for="select3_2">아니오</label>
                      </p>
                    </div>
                  </div>
                  <div class="input_section">
                    <p class="input_start">과제</p>
                    <div class="input_row">
                      <p class="radio_row">
                        <input type="radio" name="select_radio4" id="select4_1" class="hidden" checked />
                        <label for="select4_1">예</label>
                      </p>
                      <p class="radio_row">
                        <input type="radio" name="select_radio4" id="select4_2" class="hidden" />
                        <label for="select4_2">아니오</label>
                      </p>
                    </div>
                  </div>
                  <div class="input_section empty"></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="btn_area">
      <button type="button" class="btn_round btn_secondary btn_xl">저장</button>
    </div>
  </div>
  <div class="sub_section">
    <div class="oprtr_wrapper">
      <h4 class="setting_tit">세부 기준 설정</h4>
      <div class="setting_section">
        <div class="setting_header">
          <div class="toggle_wrap">
            <div class="left">
              <div class="sub_tit">기준설정 <strong>강의</strong></div>
            </div>
            <div class="right">
              <p class="radio_row">
                <input type="radio" name="set1" id="set1_1" class="hidden" checked />
                <label for="set1_1">회차 별 균등 비중</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="set1" id="set1_2" class="hidden" />
                <label for="set1_2">회차 별 개별 비중</label>
              </p>
            </div>
          </div>
        </div>
        <div class="tbl tbl_row scrollx_tbl_xs">
          <table>
            <caption>
              강의 기준 설정
            </caption>
            <colgroup>
              <col style="width: 16%" />
              <col style="width: auto" />
              <col style="width: 16%" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">총 수강 회차</th>
                <td>
                  <div class="input_row wd_p100">
                    <input type="text" class="form_style wd_p100 ta_r" value="10" />
                  </div>
                </td>
                <th scope="row">비중 점수</th>
                <td>
                  <div class="input_row wd_p100">
                    <input type="text" class="form_style wd_p100 ta_r" value="10" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">최소 수강 회차</th>
                <td>
                  <div class="input_row wd_p100">
                    <input type="text" class="form_style wd_p100 ta_r" />
                  </div>
                </td>
                <th scope="row">이수 기준 점수</th>
                <td>
                  <div class="input_row wd_p100">
                    <input type="text" class="form_style wd_p100 ta_r" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">회차 별 비중</th>
                <td colspan="3">
                  <div class="input_section mr_6">
                    <p class="input_start">회차 공통</p>
                    <div class="input_row wd_130">
                      <input type="text" class="form_style wd_p100 ta_r" />
                    </div>
                    <p class="input_end">%</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="setting_section">
        <div class="setting_header">
          <div class="toggle_wrap">
            <div class="left">
              <div class="sub_tit">기준설정 <strong>시험</strong></div>
            </div>
            <div class="right">
              <p class="radio_row">
                <input type="radio" name="set2" id="set2_1" class="hidden" checked />
                <label for="set2_1">회차 별 균등 비중</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="set2" id="set2_2" class="hidden" />
                <label for="set2_2">회차 별 개별 비중</label>
              </p>
            </div>
          </div>
        </div>
        <div class="tbl tbl_row scrollx_tbl_xs">
          <table>
            <caption>
              시험 기준 설정
            </caption>
            <colgroup>
              <col style="width: 16%" />
              <col style="width: auto" />
              <col style="width: 16%" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">총 수강 회차</th>
                <td>
                  <div class="input_row wd_p100">
                    <input type="text" class="form_style wd_p100 ta_r" value="10" />
                  </div>
                </td>
                <th scope="row">비중 점수</th>
                <td>
                  <div class="input_row wd_p100">
                    <input type="text" class="form_style wd_p100 ta_r" value="10" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">최소 수강 회차</th>
                <td>
                  <div class="input_row wd_p100">
                    <input type="text" class="form_style wd_p100 ta_r" value="10" />
                  </div>
                </td>
                <th scope="row">이수 기준 점수</th>
                <td>
                  <div class="input_row wd_p100">
                    <input type="text" class="form_style wd_p100 ta_r" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">회차 별 비중</th>
                <td colspan="3">
                  <div class="input_section mr_6">
                    <p class="input_start">1회차</p>
                    <div class="input_row wd_130">
                      <input type="text" class="form_style wd_p100 ta_r" />
                    </div>
                    <p class="input_end">%</p>
                  </div>
                  <div class="input_section mr_6">
                    <p class="input_start">2회차</p>
                    <div class="input_row wd_130">
                      <input type="text" class="form_style wd_p100 ta_r" />
                    </div>
                    <p class="input_end">%</p>
                  </div>
                  <div class="input_section mr_6">
                    <p class="input_start">3회차</p>
                    <div class="input_row wd_130">
                      <input type="text" class="form_style wd_p100 ta_r" />
                    </div>
                    <p class="input_end">%</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="setting_section">
        <div class="setting_header">
          <div class="toggle_wrap">
            <div class="left">
              <div class="sub_tit">기준설정 <strong>과제</strong></div>
            </div>
            <div class="right">
              <p class="radio_row">
                <input type="radio" name="set3" id="set3_1" class="hidden" checked />
                <label for="set3_1">회차 별 균등 비중</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="set3" id="set3_2" class="hidden" />
                <label for="set3_2">회차 별 개별 비중</label>
              </p>
            </div>
          </div>
        </div>
        <div class="tbl tbl_row scrollx_tbl_xs">
          <table>
            <caption>
              과제 기준 설정
            </caption>
            <colgroup>
              <col style="width: 16%" />
              <col style="width: auto" />
              <col style="width: 16%" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">총 수강 회차</th>
                <td>
                  <div class="input_row wd_p100">
                    <input type="text" class="form_style wd_p100 ta_r" value="10" />
                  </div>
                </td>
                <th scope="row">비중 점수</th>
                <td>
                  <div class="input_row wd_p100">
                    <input type="text" class="form_style wd_p100 ta_r" value="10" />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">최소 수강 회차</th>
                <td>
                  <div class="input_row wd_p100">
                    <input type="text" class="form_style wd_p100 ta_r" disabled />
                  </div>
                </td>
                <th scope="row">이수 기준 점수</th>
                <td>
                  <div class="input_row wd_p100">
                    <input type="text" class="form_style wd_p100 ta_r" disabled />
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">회차 별 비중</th>
                <td colspan="3">
                  <div class="input_section mr_6">
                    <p class="input_start">1회차</p>
                    <div class="input_row wd_130">
                      <input type="text" class="form_style wd_p100 ta_r" />
                    </div>
                    <p class="input_end">%</p>
                  </div>
                  <div class="input_section mr_6">
                    <p class="input_start">2회차</p>
                    <div class="input_row wd_130">
                      <input type="text" class="form_style wd_p100 ta_r" />
                    </div>
                    <p class="input_end">%</p>
                  </div>
                  <div class="input_section mr_6">
                    <p class="input_start">3회차</p>
                    <div class="input_row wd_130">
                      <input type="text" class="form_style wd_p100 ta_r" />
                    </div>
                    <p class="input_end">%</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="btn_area">
      <button type="button" class="btn_round btn_secondary btn_xl">저장</button>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
