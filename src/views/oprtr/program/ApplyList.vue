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
                <h4 class="setting_tit">전체 신청자<strong>236</strong></h4>
                <div class="btn_wrap">
                  <button type="button" class="btn_sm btn_round btn_white">승인</button>
                  <button type="button" class="btn_sm btn_round btn_white">미승인</button>
                  <button type="button" class="btn_sm btn_round btn_white">관리자취소</button>
                  <button type="button" class="btn_sm btn_round btn_white btn_icon download">
                    신청서 일괄 다운로드
                  </button>
                </div>
              </div>
              <div class="right ecp_aplcn">
                <div class="select_row sm2">
                  <vue-select class="select_box md" :options="options" :placeholder="'전체 신청자'"></vue-select>
                </div>
                <div class="search_row">
                  <input type="search" class="form_style wd_p100" placeholder="검색해보세요" />
                  <button type="button" class="btn_search btn_icon icon_only">검색</button>
                </div>
              </div>
            </div>
          </div>
          <div class="tbl tbl_check tbl_col scrollx_tbl_lg">
            <table>
              <caption>
                수강자 목록
              </caption>
              <colgroup>
                <col style="width: 50px" />
                <col style="width: 12%" />
                <col style="width: 16.5%" />
                <col style="width: auto" />
                <col style="width: 11.5%" />
                <col style="width: 11.5%" />
                <col style="width: 11.5%" />
                <col style="width: 14%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">
                    <p class="check_only">
                      <input type="checkbox" name="tbl_checkall" id="tbl_checkall" class="hidden" />
                      <label for="tbl_checkall">전체</label>
                    </p>
                  </th>
                  <th scope="col">팀</th>
                  <th scope="col">대상자</th>
                  <th scope="col">대학/학과</th>
                  <th scope="col">학년</th>
                  <th scope="col">신청일</th>
                  <th scope="col">입과상태</th>
                  <th scope="col">신청서</th>
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
                  <col style="width: 12%" />
                  <col style="width: 16.5%" />
                  <col style="width: auto" />
                  <col style="width: 11.5%" />
                  <col style="width: 11.5%" />
                  <col style="width: 11.5%" />
                  <col style="width: 14%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row" colspan="8">내용이 없습니다</th>
                  </tr>
                  <tr>
                    <th scope="row">
                      <p class="check_only">
                        <input type="checkbox" name="tbl_check" id="tbl_check1_1" class="hidden" />
                        <label for="tbl_check1_1">선택</label>
                      </p>
                    </th>
                    <td class="ta_l">A팀</td>
                    <td>
                      <div class="std_profile">
                        <div class="img_wrap">
                          <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                        </div>
                        김강준(팀장)
                      </div>
                    </td>
                    <td class="ta_l">공과대학/전자공학과</td>
                    <td>1</td>
                    <td>1</td>
                    <td>승인대기</td>
                    <td class="td_input">
                      <div class="btn_wrap">
                        <button type="button" class="btn_md btn_white btn_round btn_icon download font_12">
                          다운로드
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <p class="check_only">
                        <input type="checkbox" name="tbl_check" id="tbl_check1_2" class="hidden" disabled />
                        <label for="tbl_check1_2">선택</label>
                      </p>
                    </th>
                    <td class="ta_l">A팀</td>
                    <td>
                      <div class="std_profile">
                        <div class="img_wrap">
                          <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                        </div>
                        김팀원
                      </div>
                    </td>
                    <td class="ta_l">공과대학/전자공학과</td>
                    <td>1</td>
                    <td>1</td>
                    <td class="font_red">미승인</td>
                    <td class="td_input">
                      <div class="btn_wrap">
                        <button type="button" class="btn_md btn_white btn_round btn_icon download font_12">
                          다운로드
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <p class="check_only">
                        <input type="checkbox" name="tbl_check" id="tbl_check1_3" class="hidden" disabled />
                        <label for="tbl_check1_3">선택</label>
                      </p>
                    </th>
                    <td class="ta_l">A팀</td>
                    <td>
                      <div class="std_profile">
                        <div class="img_wrap">
                          <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                        </div>
                        송은석
                      </div>
                    </td>
                    <td class="ta_l">공과대학/전자공학과</td>
                    <td>1</td>
                    <td>1</td>
                    <td>승인대기</td>
                    <td class="td_input">
                      <div class="btn_wrap">
                        <button type="button" class="btn_md btn_white btn_round btn_icon download font_12">
                          다운로드
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <p class="check_only">
                        <input type="checkbox" name="tbl_check" id="tbl_check1_4" class="hidden" />
                        <label for="tbl_check1_4">선택</label>
                      </p>
                    </th>
                    <td class="ta_l">BBB팀</td>
                    <td>
                      <div class="std_profile">
                        <div class="img_wrap">
                          <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                        </div>
                        김강준(팀장)
                      </div>
                    </td>
                    <td class="ta_l">공과대학/전자공학과</td>
                    <td>1</td>
                    <td>1</td>
                    <td>승인</td>
                    <td class="td_input">
                      <div class="btn_wrap">
                        <button type="button" class="btn_md btn_white btn_round btn_icon download font_12">
                          다운로드
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <p class="check_only">
                        <input type="checkbox" name="tbl_check" id="tbl_check1_4" class="hidden" disabled />
                        <label for="tbl_check1_4">선택</label>
                      </p>
                    </th>
                    <td class="ta_l">BBB팀</td>
                    <td>
                      <div class="std_profile">
                        <div class="img_wrap">
                          <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                        </div>
                        홍길동
                      </div>
                    </td>
                    <td class="ta_l">공과대학/전자공학과</td>
                    <td>1</td>
                    <td>1</td>
                    <td>승인대기</td>
                    <td class="td_input">
                      <div class="btn_wrap">
                        <button type="button" class="btn_md btn_white btn_round btn_icon download font_12">
                          다운로드
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <p class="check_only">
                        <input type="checkbox" name="tbl_check" id="tbl_check1_4" class="hidden" disabled />
                        <label for="tbl_check1_4">선택</label>
                      </p>
                    </th>
                    <td class="ta_l">BBB팀</td>
                    <td>
                      <div class="std_profile">
                        <div class="img_wrap">
                          <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                        </div>
                        이민호
                      </div>
                    </td>
                    <td class="ta_l">공과대학/전자공학과</td>
                    <td>1</td>
                    <td>1</td>
                    <td>승인대기</td>
                    <td class="td_input">
                      <div class="btn_wrap">
                        <button type="button" class="btn_md btn_white btn_round btn_icon download font_12">
                          다운로드
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
</template>

<script lang="ts">
import { tblCheck } from "@/assets/js/common";

export default {
  data: () => ({
    options: [{ label: "신청자" }],
  }),
  mounted: function () {
    tblCheck();
  },
};
</script>
