<template>
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
                  <button
                    type="button"
                    class="btn_xs btn_white btn_round wd_80"
                    @click="onClickPopupShow('AttendCheck')"
                  >
                    출석 체크
                  </button>
                  <button type="button" class="btn_xs btn_white btn_round wd_80" @click="onClickPopupShow('ExamCheck')">
                    시험 체크
                  </button>
                  <button
                    type="button"
                    class="btn_xs btn_white btn_round wd_80"
                    @click="onClickPopupShow('ReportMark')"
                  >
                    과제 채점
                  </button>
                  <button
                    type="button"
                    class="btn_xs btn_white btn_round wd_80"
                    @click="onClickPopupShow('ReportCheck')"
                  >
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
                  <button
                    type="button"
                    class="btn_xs btn_white btn_round wd_80"
                    @click="onClickPopupShow('AttendCheck')"
                  >
                    출석 체크
                  </button>
                  <button type="button" class="btn_xs btn_white btn_round wd_80" @click="onClickPopupShow('ExamCheck')">
                    시험 체크
                  </button>
                  <button
                    type="button"
                    class="btn_xs btn_white btn_round wd_80"
                    @click="onClickPopupShow('ReportMark')"
                  >
                    과제 채점
                  </button>
                  <button
                    type="button"
                    class="btn_xs btn_white btn_round wd_80"
                    @click="onClickPopupShow('ReportCheck')"
                  >
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
                  <button
                    type="button"
                    class="btn_xs btn_white btn_round wd_80"
                    @click="onClickPopupShow('AttendCheck')"
                  >
                    출석 체크
                  </button>
                  <button type="button" class="btn_xs btn_white btn_round wd_80" @click="onClickPopupShow('ExamCheck')">
                    시험 체크
                  </button>
                  <button
                    type="button"
                    class="btn_xs btn_white btn_round wd_80"
                    @click="onClickPopupShow('ReportMark')"
                  >
                    과제 채점
                  </button>
                  <button
                    type="button"
                    class="btn_xs btn_white btn_round wd_80"
                    @click="onClickPopupShow('ReportCheck')"
                  >
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
  <PopupView v-model="isPopup" class="large">
    <template #title>
      {{ popupInfo[popupId] }}
    </template>
    <div v-if="isPopup">
      <component :is="ClassMngComponent[popupId]" />
    </div>
  </PopupView>
</template>
<script setup lang="ts">
import { ref } from "vue";
import * as ClassMngComponent from "./popup/classMngImport";

const options = ref([{ label: "대상자" }]);

import PopupView from "@/components/common/PopupView.vue";
const isPopup = ref(false);

const popupId = ref(null);
const popupInfo = {
  AttendCheck: "출석 체크",
  ExamCheck: "시험 체크",
  ReportMark: "과제 채점",
  ReportCheck: "과제 체크",
};

const onClickPopupShow = (id: String) => {
  popupId.value = id;
  isPopup.value = true;
};
</script>
