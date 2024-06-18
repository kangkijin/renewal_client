<template>
  <div class="grades_wrapper">
    <div class="grades_header">
      <h4>출석&성적</h4>
      <div class="right_wrap">
        <p class="satisfy">
          이수 기준 충족 :
          <span class="font_red">미충족</span>
          <!-- <span class="font_navy">충족</span> -->
        </p>
        <button type="button" class="btn_round btn_sm btn_white" @click="popupShow(0)">이수조건</button>
      </div>
    </div>
    <div class="grades_tbl tbl tbl_col scrollx_tbl_sm">
      <table>
        <caption>
          출석&성적
        </caption>
        <colgroup>
          <col style="width: 13.2%" />
          <col style="width: 13.2%" />
          <col style="width: 13.2%" />
          <col style="width: auto" />
          <col style="width: 13.2%" />
          <col style="width: auto" />
          <col style="width: 13.2%" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col">회차</th>
            <th scope="col">강의(50%)</th>
            <th scope="col">시험(20%)</th>
            <th scope="col">시험성적</th>
            <th scope="col">과제(30%)</th>
            <th scope="col">과제성적</th>
            <th scope="col">합계성적</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1회차</th>
            <td>O</td>
            <td>시험(20%)</td>
            <td>4.0<br />(80*0.25*0.2)</td>
            <td>O</td>
            <td>12.0<br />(80*0.25*0.3)</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">2회차</th>
            <td>O</td>
            <td>시험(20%)</td>
            <td>4.0<br />(80*0.25*0.2)</td>
            <td>X</td>
            <td>12.0<br />(80*0.25*0.3)</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">3회차</th>
            <td>O</td>
            <td>시험(20%)</td>
            <td>4.0<br />(80*0.25*0.2)</td>
            <td>O</td>
            <td>12.0<br />(80*0.25*0.3)</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">4회차</th>
            <td>O</td>
            <td>시험(20%)</td>
            <td>4.0<br />(80*0.25*0.2)</td>
            <td>O</td>
            <td>12.0<br />(80*0.25*0.3)</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">5회차</th>
            <td>O</td>
            <td>시험(20%)</td>
            <td>4.0<br />(80*0.25*0.2)</td>
            <td>X</td>
            <td>12.0<br />(80*0.25*0.3)</td>
            <td>-</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">합계</th>
            <td>5/5</td>
            <td>5/5</td>
            <td>-</td>
            <td>3/5</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <th scope="row">점수</th>
            <td>40.0</td>
            <td>-</td>
            <td>12.0</td>
            <td>-</td>
            <td>12.0</td>
            <!-- [pp] 미충족시 font_red / 충족시 font_blue -->
            <td class="font_red">64.0</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <PopupView v-model="isPopups[0]" class="medium">
    <template #title>이수조건</template>
    <template #footer>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="popupHide(0)">확인</button>
    </template>
    <div class="require_header">
      <div class="profile_wrap">
        <div class="img_wrap">
          <img src="/src/assets/images/common/img_ex1.png" alt="프로필 이미지" />
        </div>
        <p class="name">이예솔<strong>학생</strong></p>
        <p class="part">간호학부 · 간호학과<strong>3학년(휴학)</strong></p>
      </div>
      <!-- [pp] 미충족: font_red / 충족 : font_blue -->
      <!-- [pp] 운영자기준 적용시 삭제 -->
      <div class="require_state font_red">미충족</div>
    </div>
    <div class="scroll_cnt require_wrap">
      <div class="require_box">
        <div class="total_score">
          <p>강의 총 배점</p>
          <strong><span>50</span>점</strong>
        </div>
        <ul class="require_list">
          <li>
            <p class="font_gray">최소 수강 회차</p>
            <p class="require">8회 이상</p>
            <p class="myscore font_blue">9회</p>
          </li>
          <li>
            <p class="font_gray">이수 기준 점수</p>
            <p class="require">40점 이상</p>
            <p class="myscore font_blue">45.0점</p>
          </li>
        </ul>
      </div>
      <div class="require_box">
        <div class="total_score">
          <p>시험 총 배점</p>
          <strong><span>20</span>점</strong>
        </div>
        <ul class="require_list">
          <li>
            <p class="font_gray">최소 수강 회차</p>
            <p class="require">2회 이상</p>
            <p class="myscore font_red">1회</p>
          </li>
          <li>
            <p class="font_gray">이수 기준 점수</p>
            <p class="require">16점 이상</p>
            <p class="myscore font_red">12.0점</p>
          </li>
        </ul>
      </div>
      <div class="require_box">
        <div class="total_score">
          <p>과제 총 배점</p>
          <strong><span>30</span>점</strong>
        </div>
        <ul class="require_list">
          <li>
            <p class="font_gray">최소 수강 회차</p>
            <p class="require">8회 이상</p>
            <p class="myscore font_blue">9회</p>
          </li>
          <li>
            <p class="font_gray">이수 기준 점수</p>
            <p class="require">40점 이상</p>
            <p class="myscore font_blue">45.0점</p>
          </li>
        </ul>
      </div>
      <!-- [pp] Case 2 : 운영자 기준 적용 -->
      <!-- <div class="require_box">
        <div class="total_score">
          <p>과제 총 배점</p>
          <strong><span>30</span>점</strong>
        </div>
        <ul class="require_list">
          <li>
            <p class="font_gray">최소 수강 회차</p>
            <p class="require">8회</p>
          </li>
          <li>
            <p class="font_gray">이수 기준 점수</p>
            <p class="require">40점</p>
          </li>
        </ul>
      </div> -->
      <!-- [pp] //Case 2 : 운영자 기준 적용 -->
      <div class="require_footer">
        <div class="total_score">
          <p>합계 총 배점</p>
          <strong><span>100</span>점</strong>
        </div>
        <ul class="require_list">
          <li>
            <p class="font_gray">이수기준점수(종합)</p>
            <p class="require">80점 이상</p>
            <p class="myscore font_blue">82점</p>
          </li>
        </ul>
      </div>
      <!-- [pp] Case 2 : 운영자 기준 적용 -->
      <!-- <div class="require_footer">
        <div class="total_score">
          <p>합계 총 배점</p>
          <strong><span>100</span>점</strong>
        </div>
        <ul class="require_list">
          <li>
            <p class="font_gray">이수기준점수(종합)</p>
            <p class="require">80점</p>
          </li>
        </ul>
      </div> -->
      <!-- [pp] //Case 2 : 운영자 기준 적용 -->
    </div>
    <p class="font_gray lh_22 medium pd_t15 pd_b15">
      * 참고. 평가요소 별 세부기준 및 종합점수가 기준 충족 여부를 충족(파란색) / 미충족(빨간색)으로 확인 할 수 있습니다.
    </p>
  </PopupView>
</template>
<script setup lang="ts">
import PopupView from "@/components/common/PopupView.vue";

let isPopups = [false, false];

function popupShow(idx: number) {
  isPopups[idx] = true;
}
function popupHide(idx: number) {
  isPopups[idx] = false;
}
</script>
