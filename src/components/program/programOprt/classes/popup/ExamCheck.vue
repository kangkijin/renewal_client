<template>
  <div class="setting_popup_header toggle_wrap">
    <div class="left">
      <button type="button" class="btn_sm btn_round btn_white">일괄체크</button>
      <button type="button" class="btn_sm btn_round btn_white">알림발송</button>
    </div>
  </div>
  <div class="tbl tbl_attend tbl_scroll tbl_check tbl_col scrollx_tbl_sm">
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
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { tblCheck } from "@/assets/js/common";

onMounted(() => {
  tblCheck();
});
</script>
