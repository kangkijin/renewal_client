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
        <div class="stdlist_wrapper">
          <div class="setting_header">
            <div class="toggle_wrap">
              <div class="left">
                <h4 class="setting_tit">전체 수강자<strong>236</strong></h4>
                <div class="btn_wrap">
                  <button type="button" class="btn_sm btn_round btn_white">전체 알림</button>
                  <button type="button" class="btn_sm btn_round btn_white">알림 보내기</button>
                  <button type="button" class="btn_sm btn_round btn_white">이수 처리</button>
                </div>
              </div>
              <div class="right">
                <div class="select_row sm2">
                  <vue-select class="select_box md" :options="options" :placeholder="'전체 대상자'"></vue-select>
                </div>
                <div class="search_row">
                  <input type="search" class="form_style wd_p100" placeholder="검색해보세요" />
                  <button type="button" class="btn_search btn_icon icon_only">검색</button>
                </div>
              </div>
            </div>
          </div>
          <div class="tbl tbl_check tbl_col scrollx_tbl_xl">
            <table>
              <caption>
                수강자 목록
              </caption>
              <colgroup>
                <col style="width: 50px" />
                <col style="width: 11%" />
                <col style="width: 15.5%" />
                <col style="width: 5%" />
                <col style="width: auto" />
                <col style="width: auto" />
                <col style="width: 8%" />
                <col style="width: 8%" />
                <col style="width: 8.5%" />
                <col style="width: 7%" />
                <col style="width: 180px" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">
                    <p class="check_only">
                      <input type="checkbox" name="tbl_checkall" id="tbl_checkall" class="hidden" />
                      <label for="tbl_checkall">전체</label>
                    </p>
                  </th>
                  <th scope="col">대상자</th>
                  <th scope="col">대학/학과</th>
                  <th scope="col">학년</th>
                  <th scope="col">강의</th>
                  <th scope="col">과제</th>
                  <th scope="col">시험</th>
                  <th scope="col">종합점수</th>
                  <th scope="col">조건충족여부</th>
                  <th scope="col">이수여부</th>
                  <th scope="col">관리</th>
                </tr>
              </thead>
            </table>
            <div class="tbl_stdlist_body">
              <table>
                <caption>
                  수강자 목록
                </caption>
                <colgroup>
                  <col style="width: 50px" />
                  <col style="width: 11%" />
                  <col style="width: 15.5%" />
                  <col style="width: 5%" />
                  <col style="width: auto" />
                  <col style="width: auto" />
                  <col style="width: 8%" />
                  <col style="width: 8%" />
                  <col style="width: 8.5%" />
                  <col style="width: 7%" />
                  <col style="width: 180px" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row" colspan="11">내용이 없습니다</th>
                  </tr>
                  <tr>
                    <th scope="row">
                      <p class="check_only">
                        <input type="checkbox" name="tbl_check" id="tbl_check1_1" class="hidden" />
                        <label for="tbl_check1_1">선택</label>
                      </p>
                    </th>
                    <td>
                      <div class="std_profile">
                        <div class="img_wrap">
                          <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                        </div>
                        김강준
                      </div>
                    </td>
                    <td class="ta_l">공과대학/전자공학과</td>
                    <td>1</td>
                    <td class="font_blue">9/10(100.0)</td>
                    <td class="font_blue">1/2/3(24.0)</td>
                    <td class="font_blue">2/4(12.0)</td>
                    <td class="font_blue">81.0</td>
                    <td class="font_blue">충족</td>
                    <td class="font_blue">이수</td>
                    <td class="td_input">
                      <div class="btn_wrap">
                        <button type="button" class="btn_xs btn_white btn_round wd_80" @click="popupShow(0)">
                          출석 체크
                        </button>
                        <button type="button" class="btn_xs btn_white btn_round wd_80" @click="popupShow(1)">
                          시험 체크
                        </button>
                        <button type="button" class="btn_xs btn_white btn_round wd_80" @click="popupShow(2)">
                          과제 채점
                        </button>
                        <button type="button" class="btn_xs btn_white btn_round wd_80" @click="popupShow(3)">
                          과제 체크
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <p class="check_only">
                        <input type="checkbox" name="tbl_check" id="tbl_check1_2" class="hidden" />
                        <label for="tbl_check1_2">선택</label>
                      </p>
                    </th>
                    <td>
                      <div class="std_profile">
                        <div class="img_wrap">
                          <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                        </div>
                        김강준
                      </div>
                    </td>
                    <td class="ta_l">공과대학/전자공학과</td>
                    <td>1</td>
                    <td class="font_blue">9/10(100.0)</td>
                    <td class="font_blue">1/2/3(24.0)</td>
                    <td class="font_red">2/4(12.0)</td>
                    <td class="font_red">81.0</td>
                    <td class="font_red">미충족</td>
                    <td class="font_red">미이수</td>
                    <td class="td_input">
                      <div class="btn_wrap">
                        <button type="button" class="btn_xs btn_white btn_round wd_80" @click="popupShow(0)">
                          출석 체크
                        </button>
                        <button type="button" class="btn_xs btn_white btn_round wd_80" @click="popupShow(1)">
                          시험 체크
                        </button>
                        <button type="button" class="btn_xs btn_white btn_round wd_80" @click="popupShow(2)">
                          과제 채점
                        </button>
                        <button type="button" class="btn_xs btn_white btn_round wd_80" @click="popupShow(3)">
                          과제 체크
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <p class="check_only">
                        <input type="checkbox" name="tbl_check" id="tbl_check1_3" class="hidden" />
                        <label for="tbl_check1_3">선택</label>
                      </p>
                    </th>
                    <td>
                      <div class="std_profile">
                        <div class="img_wrap">
                          <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                        </div>
                        김강준
                      </div>
                    </td>
                    <td class="ta_l">공과대학/전자공학과</td>
                    <td>1</td>
                    <td class="font_blue">9/10(100.0)</td>
                    <td class="font_blue">1/2/3(24.0)</td>
                    <td class="font_blue">2/4(12.0)</td>
                    <td class="font_blue">81.0</td>
                    <td class="font_blue">충족</td>
                    <td class="font_blue">이수</td>
                    <td class="td_input">
                      <div class="btn_wrap">
                        <button type="button" class="btn_xs btn_white btn_round wd_80" @click="popupShow(0)">
                          출석 체크
                        </button>
                        <button type="button" class="btn_xs btn_white btn_round wd_80" @click="popupShow(1)">
                          시험 체크
                        </button>
                        <button type="button" class="btn_xs btn_white btn_round wd_80" @click="popupShow(2)">
                          과제 채점
                        </button>
                        <button type="button" class="btn_xs btn_white btn_round wd_80" @click="popupShow(3)">
                          과제 체크
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- [pp] 출석체크 팝업-->
  <PopupView v-model="isPopups[0]" class="large">
    <template #title>출석체크</template>
    <div class="setting_popup_header">
      <button type="button" class="btn_sm btn_round btn_white">일괄체크</button>
    </div>
    <div class="tbl tbl_attend tbl_check tbl_col scrollx_tbl_lg">
      <table>
        <caption>
          수강자 목록
        </caption>
        <colgroup>
          <col style="width: 50px" />
          <col style="width: 143px" />
          <col style="width: 108px" />
          <col style="width: auto" span="8" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">
              <p class="check_only">
                <input type="checkbox" name="tbl_checkall" id="tbl_checkall2" class="hidden" />
                <label for="tbl_checkall2">전체</label>
              </p>
            </th>
            <th scope="col">대상자</th>
            <th scope="col">출석회수</th>
            <th scope="col">1회차<br />(동영상)</th>
            <th scope="col">2회차<br />(유튜브)</th>
            <th scope="col">3회차<br />(Zoom)</th>
            <th scope="col">4회차<br />(오프라인)</th>
            <th scope="col">5회차<br />(오프라인)</th>
            <th scope="col">6회차<br />(동영상)</th>
            <th scope="col">7회차<br />(동영상)</th>
            <th scope="col" class="pd_r15">8회차<br />(동영상)</th>
          </tr>
        </thead>
      </table>
      <div class="tbl_attend_body">
        <table class="">
          <caption>
            수강자 목록
          </caption>
          <colgroup>
            <col style="width: 50px" />
            <col style="width: 143px" />
            <col style="width: 108px" />
            <col style="width: auto" span="8" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" colspan="11">내용이 없습니다</th>
            </tr>
            <tr>
              <th scope="row">
                <p class="check_only">
                  <input type="checkbox" name="tbl_check" id="tbl_check2_1" class="hidden" />
                  <label for="tbl_check2_1">선택</label>
                </p>
              </th>
              <td>
                <div class="std_profile">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                  </div>
                  김강준
                </div>
              </td>
              <td class="font_14">11/12</td>
              <!-- [pp] 동영상, 유튜브 강의 : 자동체크 -->
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <!-- [pp] Zoom, 오프라인 강의 : 직접체크 -->
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check1_1" class="hidden" />
                  <label for="attend_check1_1">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check1_2" class="hidden" />
                  <label for="attend_check1_2">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check1_3" class="hidden" />
                  <label for="attend_check1_3">출석여부</label>
                </p>
              </td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
            </tr>
            <tr>
              <th scope="row">
                <p class="check_only">
                  <input type="checkbox" name="tbl_check" id="tbl_check2_2" class="hidden" />
                  <label for="tbl_check2_2">선택</label>
                </p>
              </th>
              <td>
                <div class="std_profile">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                  </div>
                  김강준
                </div>
              </td>
              <td class="font_14">11/12</td>
              <!-- [pp] 동영상, 유튜브 강의 : 자동체크 -->
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <!-- [pp] Zoom, 오프라인 강의 : 직접체크 -->
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check2_1" class="hidden" />
                  <label for="attend_check2_1">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check2_2" class="hidden" />
                  <label for="attend_check2_2">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check2_3" class="hidden" />
                  <label for="attend_check2_3">출석여부</label>
                </p>
              </td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
            </tr>
            <tr>
              <th scope="row">
                <p class="check_only">
                  <input type="checkbox" name="tbl_check" id="tbl_check2_3" class="hidden" />
                  <label for="tbl_check2_3">선택</label>
                </p>
              </th>
              <td>
                <div class="std_profile">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                  </div>
                  김강준
                </div>
              </td>
              <td class="font_14">11/12</td>
              <!-- [pp] 동영상, 유튜브 강의 : 자동체크 -->
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <!-- [pp] Zoom, 오프라인 강의 : 직접체크 -->
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check3_1" class="hidden" />
                  <label for="attend_check3_1">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check3_2" class="hidden" />
                  <label for="attend_check3_2">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check3_3" class="hidden" />
                  <label for="attend_check3_3">출석여부</label>
                </p>
              </td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
            </tr>
            <tr>
              <th scope="row">
                <p class="check_only">
                  <input type="checkbox" name="tbl_check" id="tbl_check2_4" class="hidden" />
                  <label for="tbl_check2_4">선택</label>
                </p>
              </th>
              <td>
                <div class="std_profile">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                  </div>
                  김강준
                </div>
              </td>
              <td class="font_14">11/12</td>
              <!-- [pp] 동영상, 유튜브 강의 : 자동체크 -->
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <!-- [pp] Zoom, 오프라인 강의 : 직접체크 -->
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check4_1" class="hidden" />
                  <label for="attend_check4_1">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check4_2" class="hidden" />
                  <label for="attend_check4_2">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check4_3" class="hidden" />
                  <label for="attend_check4_3">출석여부</label>
                </p>
              </td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
            </tr>
            <tr>
              <th scope="row">
                <p class="check_only">
                  <input type="checkbox" name="tbl_check" id="tbl_check2_5" class="hidden" />
                  <label for="tbl_check2_5">선택</label>
                </p>
              </th>
              <td>
                <div class="std_profile">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                  </div>
                  김강준
                </div>
              </td>
              <td class="font_14">11/12</td>
              <!-- [pp] 동영상, 유튜브 강의 : 자동체크 -->
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <!-- [pp] Zoom, 오프라인 강의 : 직접체크 -->
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check5_1" class="hidden" />
                  <label for="attend_check5_1">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check5_2" class="hidden" />
                  <label for="attend_check5_2">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check5_3" class="hidden" />
                  <label for="attend_check5_3">출석여부</label>
                </p>
              </td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
            </tr>
            <tr>
              <th scope="row">
                <p class="check_only">
                  <input type="checkbox" name="tbl_check" id="tbl_check2_6" class="hidden" />
                  <label for="tbl_check2_6">선택</label>
                </p>
              </th>
              <td>
                <div class="std_profile">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                  </div>
                  김강준
                </div>
              </td>
              <td class="font_14">11/12</td>
              <!-- [pp] 동영상, 유튜브 강의 : 자동체크 -->
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <!-- [pp] Zoom, 오프라인 강의 : 직접체크 -->
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check6_1" class="hidden" />
                  <label for="attend_check6_1">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check6_2" class="hidden" />
                  <label for="attend_check6_2">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check6_3" class="hidden" />
                  <label for="attend_check6_3">출석여부</label>
                </p>
              </td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
            </tr>
            <tr>
              <th scope="row">
                <p class="check_only">
                  <input type="checkbox" name="tbl_check" id="tbl_check2_7" class="hidden" />
                  <label for="tbl_check2_7">선택</label>
                </p>
              </th>
              <td>
                <div class="std_profile">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                  </div>
                  김강준
                </div>
              </td>
              <td class="font_14">11/12</td>
              <!-- [pp] 동영상, 유튜브 강의 : 자동체크 -->
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <!-- [pp] Zoom, 오프라인 강의 : 직접체크 -->
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check7_1" class="hidden" />
                  <label for="attend_check7_1">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check7_2" class="hidden" />
                  <label for="attend_check7_2">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check7_3" class="hidden" />
                  <label for="attend_check7_3">출석여부</label>
                </p>
              </td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
            </tr>
            <tr>
              <th scope="row">
                <p class="check_only">
                  <input type="checkbox" name="tbl_check" id="tbl_check2_8" class="hidden" />
                  <label for="tbl_check2_8">선택</label>
                </p>
              </th>
              <td>
                <div class="std_profile">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                  </div>
                  김강준
                </div>
              </td>
              <td class="font_14">11/12</td>
              <!-- [pp] 동영상, 유튜브 강의 : 자동체크 -->
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <!-- [pp] Zoom, 오프라인 강의 : 직접체크 -->
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check8_1" class="hidden" />
                  <label for="attend_check8_1">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check8_2" class="hidden" />
                  <label for="attend_check8_2">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check8_3" class="hidden" />
                  <label for="attend_check8_3">출석여부</label>
                </p>
              </td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="mg_t15">
      <p class="font_gray font_12 medium lh_20">
        참고 1. 동영상/유튜브 유형 학습 수강 및 출석 여부가 자동체크됩니다. (검정폰트)
      </p>
      <p class="font_gray font_12 medium lh_20">
        참고 2. Zoom /오프라인 유형 운영자가 직접 출석여부를 체크해야 합니다. (파란색/붉은색폰트)
      </p>
      <p class="font_gray font_12 medium lh_20">
        참고 3. 출석체크방법 : 체크 박스 선택 후 일과체크 하거나, O/X 토글버튼으로 개별 체크 할 수 있습니다.
      </p>
    </div>
  </PopupView>
  <!-- [pp] //출석체크 팝업-->

  <!-- [pp] 시험체크 팝업-->
  <PopupView v-model="isPopups[1]" class="large">
    <template #title>시험체크</template>
    <div class="setting_popup_header toggle_wrap">
      <div class="left">
        <button type="button" class="btn_sm btn_round btn_white">일괄체크</button>
        <button type="button" class="btn_sm btn_round btn_white">알림발송</button>
      </div>
    </div>
    <div class="tbl tbl_attend tbl_check tbl_col scrollx_tbl_sm">
      <table>
        <caption>
          수강자 목록
        </caption>
        <colgroup>
          <col style="width: 50px" />
          <col style="width: 143px" />
          <col style="width: 108px" />
          <col style="width: auto" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">
              <p class="check_only">
                <input type="checkbox" name="tbl_checkall" id="tbl_checkall2" class="hidden" />
                <label for="tbl_checkall2">전체</label>
              </p>
            </th>
            <th scope="col">대상자</th>
            <th scope="col">출석회수</th>
            <th scope="col">1회차</th>
            <th scope="col">2회차</th>
            <th scope="col">3회차</th>
            <th scope="col">4회차</th>
          </tr>
        </thead>
      </table>
      <div class="tbl_attend_body">
        <table class="">
          <caption>
            수강자 목록
          </caption>
          <colgroup>
            <col style="width: 50px" />
            <col style="width: 143px" />
            <col style="width: 108px" />
            <col style="width: auto" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" colspan="7">내용이 없습니다</th>
            </tr>
            <tr>
              <th scope="row">
                <p class="check_only">
                  <input type="checkbox" name="tbl_check" id="tbl_check2_1" class="hidden" />
                  <label for="tbl_check2_1">선택</label>
                </p>
              </th>
              <td>
                <div class="std_profile">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                  </div>
                  김강준
                </div>
              </td>
              <td class="font_14">11/12</td>
              <!-- [pp] 동영상, 유튜브 강의 : 자동체크 -->
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check1_1" class="hidden" />
                  <label for="attend_check1_1">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check1_2" class="hidden" />
                  <label for="attend_check1_2">출석여부</label>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </PopupView>
  <!-- [pp] //시험체크 팝업-->

  <!-- [pp] 과제평가 팝업-->
  <PopupView v-model="isPopups[2]" class="large">
    <template #title>과제평가</template>
    <template #footer>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="popupHide(2)">평가 제출하기</button>
    </template>
    <div class="setting_popup_header ta_r">
      <div class="select_row sm2 dp_inline">
        <vue-select class="select_box md" :options="options2" :placeholder="'1회차'"></vue-select>
      </div>
    </div>
    <div class="stdlist_slide circlearrow_slide">
      <swiper v-bind="swiperOptions" :modules="modules">
        <swiper-slide>
          <div class="std_radio">
            <input type="radio" name="std_radio" id="std_radio1_1" class="hidden" value="" checked />
            <label for="std_radio1_1">
              <div class="std_profile">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                </div>
                김강준
              </div>
            </label>
          </div>
        </swiper-slide>
        <swiper-slide>
          <!-- [pp] 평가완료시 finished -->
          <div class="std_radio finished">
            <input type="radio" name="std_radio" id="std_radio1_2" class="hidden" value="" />
            <label for="std_radio1_2">
              <div class="std_profile">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                </div>
                김강준
              </div>
            </label>
          </div>
        </swiper-slide>
        <swiper-slide>
          <!-- [pp] 평가완료시 finished -->
          <div class="std_radio finished">
            <input type="radio" name="std_radio" id="std_radio1_3" class="hidden" value="" />
            <label for="std_radio1_3">
              <div class="std_profile">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                </div>
                김강준
              </div>
            </label>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="std_radio">
            <input type="radio" name="std_radio" id="std_radio1_4" class="hidden" value="" />
            <label for="std_radio1_4">
              <div class="std_profile">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                </div>
                김강준
              </div>
            </label>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="std_radio">
            <input type="radio" name="std_radio" id="std_radio1_5" class="hidden" value="" />
            <label for="std_radio1_5">
              <div class="std_profile">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                </div>
                김강준
              </div>
            </label>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="std_radio">
            <input type="radio" name="std_radio" id="std_radio1_6" class="hidden" value="" />
            <label for="std_radio1_6">
              <div class="std_profile">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                </div>
                김강준
              </div>
            </label>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="std_radio">
            <input type="radio" name="std_radio" id="std_radio1_7" class="hidden" value="" />
            <label for="std_radio1_7">
              <div class="std_profile">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                </div>
                김강준
              </div>
            </label>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="std_radio">
            <input type="radio" name="std_radio" id="std_radio1_8" class="hidden" value="" />
            <label for="std_radio1_8">
              <div class="std_profile">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                </div>
                김강준
              </div>
            </label>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="std_radio">
            <input type="radio" name="std_radio" id="std_radio1_9" class="hidden" value="" />
            <label for="std_radio1_9">
              <div class="std_profile">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                </div>
                김강준
              </div>
            </label>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="pd_t15">
      <div class="intro_wrapper">
        <div class="intro_list">
          <ul>
            <li>
              <strong>수료 기준</strong>
              <p>50점</p>
            </li>
            <li>
              <strong>결과 공개</strong>
              <p>점수 + 평가의견</p>
            </li>
            <li>
              <strong>응시 기간</strong>
              <p>2024 - 09 - 10 12 : 00 ~ 2024 - 10 - 01 01 : 00</p>
            </li>
            <li>
              <strong>팀과제 여부</strong>
              <p>팀과제</p>
            </li>
          </ul>
        </div>
        <div class="intro_cnt">
          <div class="wrap">
            <div class="cnt">
              <div class="editor_area">
                드론정비과정 프로그램 상세내용을 확인하고 시험을 풀어주세요. 드론정비과정 프로그램 상세내용을 확인하고
                시험을 풀어주세요. 드론정비과정 프로그램 상세내용을 확인하고 시험을 풀어주세요.
              </div>
            </div>
          </div>
          <div class="submit_wrap oprtr">
            <ul>
              <li class="score">
                <p>점수</p>
                <strong> <input type="number" class="form_style ta_r" /><span>점</span></strong>
              </li>
              <li class="status">
                <p>제출상태</p>
                <strong>제출</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="attached_filedown">
        <p class="title">첨부파일<span>4</span>개</p>
        <!-- [pp] 첨부파일 없을때 -->
        <!-- <div class="no_attachedfile">
              <p>첨부파일이 없습니다.</p>
            </div> -->
        <div class="file_list">
          <div class="filedown">
            <a href="javascript:void(0);">
              <div class="title">
                <p>
                  <strong class="float_label"><span>.hwp</span></strong
                  >과제 참고1
                </p>
              </div>
              <span>115 MB</span>
            </a>
          </div>
          <div class="filedown">
            <a href="javascript:void(0);">
              <div class="title">
                <p>
                  <strong class="float_label"><span>.hwp</span></strong
                  >과제 참고 과제 참고 과제 참고 과제 참고 과제 참고2
                </p>
              </div>
              <span>115 MB</span>
            </a>
          </div>
          <div class="filedown">
            <a href="javascript:void(0);">
              <div class="title">
                <p>
                  <strong class="float_label"><span>.hwp</span></strong
                  >과제 참고3
                </p>
              </div>
              <span>115 MB</span>
            </a>
          </div>
          <div class="filedown">
            <a href="javascript:void(0);">
              <div class="title">
                <p>
                  <strong class="float_label"><span>.hwp</span></strong
                  >과제 참고4
                </p>
              </div>
              <span>115 MB</span>
            </a>
          </div>
        </div>
      </div>
      <div class="result_cntwrap">
        <strong>제출 과제</strong>
        <div class="result_row">
          <strong>과제 제목</strong>
          <div class="cnt">
            <p class="medium">완료 과제 제목입니다</p>
          </div>
        </div>
        <div class="result_row">
          <strong>과제 내용</strong>
          <div class="cnt">
            <p>
              완료 과제 내용입니다 완료 과제 내용입니다 완료 과제 내용입니다 완료 과제 내용입니다 완료 과제 내용입니다
              완료 과제 내용입니다 완료 과제 내용입니다 완료 과제 내용입니다 완료 과제 내용입니다완료 과제 내용입니다
              완료 과제 내용입니다 완료 과제 내용입니다 완료 과제 내용입니다 완료 과제 내용입니다 완료 과제 내용입니다
              완료 과제 내용입니다 완료 과제 내용입니다 완료 과제 내용입니다
            </p>
          </div>
        </div>
        <div class="result_row">
          <strong>첨부파일</strong>
          <div class="cnt">
            <div class="file_list">
              <div class="filedown">
                <a href="javascript:void(0);">
                  <div class="title">
                    <p>
                      <strong class="float_label"><span>.hwp</span></strong
                      >과제 참고1
                    </p>
                  </div>
                  <span>115 MB</span>
                </a>
              </div>
              <div class="filedown">
                <a href="javascript:void(0);">
                  <div class="title">
                    <p>
                      <strong class="float_label"><span>.hwp</span></strong
                      >과제 참고 과제 참고 과제 참고 과제 참고 과제 참고2
                    </p>
                  </div>
                  <span>115 MB</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="result_row graded">
          <strong>평가 의견</strong>
          <textarea rows="4" class="form_style wd_p100"></textarea>
        </div>
      </div>
    </div>
  </PopupView>
  <!-- [pp] 과제평가 팝업-->

  <!-- [pp] 과제체크 팝업-->
  <PopupView v-model="isPopups[3]" class="large">
    <template #title>과제체크</template>
    <div class="setting_popup_header toggle_wrap">
      <div class="left">
        <button type="button" class="btn_sm btn_round btn_white">일괄체크</button>
        <button type="button" class="btn_sm btn_round btn_white">알림발송</button>
      </div>
    </div>
    <div class="tbl tbl_attend tbl_check tbl_col scrollx_tbl_sm">
      <table>
        <caption>
          수강자 목록
        </caption>
        <colgroup>
          <col style="width: 50px" />
          <col style="width: 143px" />
          <col style="width: 108px" />
          <col style="width: auto" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">
              <p class="check_only">
                <input type="checkbox" name="tbl_checkall" id="tbl_checkall2" class="hidden" />
                <label for="tbl_checkall2">전체</label>
              </p>
            </th>
            <th scope="col">대상자</th>
            <th scope="col">출석회수</th>
            <th scope="col">1회차</th>
            <th scope="col">2회차</th>
            <th scope="col">3회차</th>
            <th scope="col">4회차</th>
          </tr>
        </thead>
      </table>
      <div class="tbl_attend_body">
        <table class="">
          <caption>
            수강자 목록
          </caption>
          <colgroup>
            <col style="width: 50px" />
            <col style="width: 143px" />
            <col style="width: 108px" />
            <col style="width: auto" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row" colspan="7">내용이 없습니다</th>
            </tr>
            <tr>
              <th scope="row">
                <p class="check_only">
                  <input type="checkbox" name="tbl_check" id="tbl_check2_1" class="hidden" />
                  <label for="tbl_check2_1">선택</label>
                </p>
              </th>
              <td>
                <div class="std_profile">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                  </div>
                  김강준
                </div>
              </td>
              <td class="font_14">11/12</td>
              <!-- [pp] 동영상, 유튜브 강의 : 자동체크 -->
              <td><strong>O</strong></td>
              <td><strong>O</strong></td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check1_1" class="hidden" />
                  <label for="attend_check1_1">출석여부</label>
                </p>
              </td>
              <td>
                <p class="attend_check">
                  <input type="checkbox" name="attend_check" id="attend_check1_2" class="hidden" />
                  <label for="attend_check1_2">출석여부</label>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </PopupView>
  <!-- [pp] //과제체크 팝업-->
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { tblCheck } from "@/assets/js/common";
import PopupView from "@/components/common/PopupView.vue";

import "swiper/css";
import "swiper/css/navigation";

export default {
  components: {
    Swiper,
    SwiperSlide,
    PopupView,
  },
  setup() {
    return {
      modules: [Navigation],
      swiperOptions: {
        navigation: true,
        breakpoints: {
          1279: {
            slidesPerView: 7.15,
            spaceBetween: 6,
          },
          1024: {
            slidesPerView: 5.2,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 4.2,
            spaceBetween: 12,
          },
          600: {
            slidesPerView: 3.2,
            spaceBetween: 12,
          },
        },
        slidesPerView: 2.2,
        spaceBetween: 6,
        slideToClickedSlide: true,
      },
    };
  },
  data: () => ({
    isPopups: [false, false],
    options: [{ label: "대상자" }],
    options2: [{ label: "1회차" }],
  }),
  mounted: function () {
    tblCheck();
  },
  methods: {
    popupShow(idx: number) {
      const vm = this;
      vm.isPopups[idx] = true;
      vm.$nextTick(() => {
        tblCheck();
      });
    },
    popupHide(idx: number) {
      const vm = this;
      vm.isPopups[idx] = false;
    },
  },
};
</script>
