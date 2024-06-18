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
                <input type="radio" name="radio_tab_lg" id="radio1_1" class="hidden" value="" checked />
                <label for="radio1_1">강의실</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_2" class="hidden" value="" />
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
        <div class="operator_tab_wrap">
          <p class="operator_tab">
            <input type="radio" name="operator_tab" id="operator1_1" class="hidden" value="" />
            <label for="operator1_1">사용 메뉴 설정</label>
          </p>
          <p class="operator_tab">
            <input type="radio" name="operator_tab" id="operator1_2" class="hidden" value="" checked />
            <label for="operator1_2">이수 기준 설정</label>
          </p>
          <p class="operator_tab">
            <input type="radio" name="operator_tab" id="operator1_3" class="hidden" value="" />
            <label for="operator1_3">운영자 권한 공유</label>
          </p>
        </div>
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
                        *운영자 기준 적용 시, 성적 및 진도 기준을 참고용이며, 운영 종료 후 운영자가 판단으로
                        이수처리됩니다.
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
      </div>
    </div>
  </div>
</template>
