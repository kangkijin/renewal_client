<template>
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
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { tblCheck } from "@/assets/js/common";

onMounted(() => {
  tblCheck();
});
</script>
