<template>
  <div class="diag_wrapper">
    <div class="diag_timer_wrap">
      <div class="diag_timer">
        <div class="timer_header" :class="{ on: isOn }" @click="toggleTimer">
          <p class="timer">12 : 10</p>
          <p class="qus_counter"><span>60</span> / 100</p>
        </div>
        <ul class="timer_quslist">
          <!-- [pp] 체크 : checked / 미체크 : disabled -->
          <li class="qus_item checked">
            <p>1</p>
            <strong>체크됨</strong>
          </li>
          <li class="qus_item disabled">
            <p>2</p>
            <strong>미체크</strong>
          </li>
          <li class="qus_item checked">
            <p>3</p>
            <strong>체크됨</strong>
          </li>
          <li class="qus_item checked">
            <p>4</p>
            <strong>체크됨</strong>
          </li>
          <li class="qus_item checked">
            <p>5</p>
            <strong>체크됨</strong>
          </li>
          <li class="qus_item checked">
            <p>6</p>
            <strong>체크됨</strong>
          </li>
        </ul>
        <div class="btn_area">
          <button type="button" class="btn_round btn_lg btn_white">임시저장</button>
          <button type="button" class="btn_round btn_lg btn_secondary" @click="submit()">시험 제출하기</button>
        </div>
      </div>
    </div>
    <div class="diag_qus_wrap">
      <div class="diag_qus">
        <div class="qus_header">
          <strong class="qus_num">01.</strong>
          <p class="qus_tit">
            Which one of the five is least like the other four? 객관식 문항입니다.
            <strong class="qus_score">20점</strong>
          </p>
        </div>
        <!-- [pp] 힌트 -->
        <div class="hint_wrap"><strong>Hint</strong>시험 힌트 25자까지 제공</div>
        <!-- [pp] Case 1: 객관식 문항-->
        <div class="qus_cnt">
          <div class="radio_row">
            <input type="radio" name="qus_radio1" id="qus1_1" class="hidden" checked />
            <label for="qus1_1">1. 첫번째 답변입니다</label>
          </div>
          <div class="radio_row">
            <input type="radio" name="qus_radio1" id="qus1_2" class="hidden" />
            <label for="qus1_2">2. 두번째 답변입니다</label>
          </div>
          <div class="radio_row">
            <input type="radio" name="qus_radio1" id="qus1_3" class="hidden" />
            <label for="qus1_3">3. 세번째 답변입니다</label>
          </div>
          <div class="radio_row">
            <input type="radio" name="qus_radio1" id="qus1_4" class="hidden" />
            <label for="qus1_4">4. 네번째 답변입니다</label>
          </div>
        </div>
      </div>
      <div class="diag_qus">
        <div class="qus_header">
          <strong class="qus_num">02.</strong>
          <p class="qus_tit">
            Which one of the five is least like the other four? 선다형 문항입니다.
            <strong class="qus_score">20점</strong>
          </p>
        </div>
        <!-- [pp] 힌트 -->
        <div class="hint_wrap"><strong>Hint</strong>시험 힌트 25자까지 제공</div>
        <!-- [pp] Case 2: 선다형 문항-->
        <div class="qus_cnt">
          <div class="check_row">
            <input type="checkbox" name="qus_check" id="qus2_1" class="hidden" checked />
            <label for="qus2_1">1. AAA</label>
          </div>
          <div class="check_row">
            <input type="checkbox" name="qus_check" id="qus2_2" class="hidden" />
            <label for="qus2_2">2. BBB</label>
          </div>
          <div class="check_row">
            <input type="checkbox" name="qus_check" id="qus2_3" class="hidden" />
            <label for="qus2_3">3. CCC</label>
          </div>
          <div class="check_row">
            <input type="checkbox" name="qus_check" id="qus2_4" class="hidden" />
            <label for="qus2_4">4. DDD</label>
          </div>
        </div>
      </div>
      <div class="diag_qus">
        <div class="qus_header">
          <strong class="qus_num">03.</strong>
          <p class="qus_tit">
            Which one of the five is least like the other four? 주관식 문항입니다.
            <strong class="qus_score">20점</strong>
          </p>
        </div>
        <!-- [pp] Case 3: 주관식 문항-->
        <div class="qus_cnt">
          <input type="text" class="form_style wd_p100" placeholder="입력해주세요" />
        </div>
      </div>
      <div class="diag_qus">
        <div class="qus_header">
          <strong class="qus_num">04.</strong>
          <p class="qus_tit">
            Which one of the five is least like the other four? <br />
            문제에 이미지가 제공되는 문항입니다.
            <strong class="qus_score">20점</strong>
          </p>
        </div>
        <!-- [pp] Case 4: 이미지 제공 문항-->
        <div class="qus_cnt">
          <div class="qusimg_wrap">
            <img src="@/assets/images/program/img_program_thumbnail.png" alt="이미지" />
          </div>
          <div class="radio_row">
            <input type="radio" name="qus_radio2" id="qus4_1" class="hidden" checked />
            <label for="qus4_1">1. 첫번째 답변입니다</label>
          </div>
          <div class="radio_row">
            <input type="radio" name="qus_radio2" id="qus4_2" class="hidden" />
            <label for="qus4_2">2. 두번째 답변입니다</label>
          </div>
          <div class="radio_row">
            <input type="radio" name="qus_radio2" id="qus4_3" class="hidden" />
            <label for="qus4_3">3. 세번째 답변입니다</label>
          </div>
          <div class="radio_row">
            <input type="radio" name="qus_radio2" id="qus4_4" class="hidden" />
            <label for="qus4_4">4. 네번째 답변입니다</label>
          </div>
        </div>
      </div>
      <div class="diag_qus">
        <div class="qus_header">
          <strong class="qus_num">05.</strong>
          <p class="qus_tit">
            Which one of the five is least like the other four? 각 문항에 이미지가 제공되는 객관식입니다.
            <strong class="qus_score">20점</strong>
          </p>
        </div>
        <!-- [pp] Case 5: 각 문항에 이미지가 제공되는 객관식 -->
        <div class="qus_cnt">
          <div class="radio_row">
            <input type="radio" name="qus_radio3" id="qus5_1" class="hidden" checked />
            <label for="qus5_1">
              1. 첫번째 답변입니다
              <div class="qus_img">
                <img src="@/assets/images/program/img_ex1.png" alt="이미지" />
              </div>
            </label>
          </div>
          <div class="radio_row">
            <input type="radio" name="qus_radio3" id="qus5_2" class="hidden" />
            <label for="qus5_2">
              2. 두번째 답변입니다
              <div class="qus_img">
                <img src="@/assets/images/program/img_ex2.png" alt="이미지" />
              </div>
            </label>
          </div>
          <div class="radio_row">
            <input type="radio" name="qus_radio3" id="qus5_3" class="hidden" />
            <label for="qus5_3">
              3. 세번째 답변입니다
              <div class="qus_img">
                <img src="@/assets/images/program/img_ex3.png" alt="이미지" />
              </div>
            </label>
          </div>
          <div class="radio_row">
            <input type="radio" name="qus_radio3" id="qus5_4" class="hidden" />
            <label for="qus5_4">
              4. 네번째 답변입니다
              <div class="qus_img">
                <img src="@/assets/images/program/img_ex4.png" alt="이미지" />
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="diag_qus">
        <div class="qus_header">
          <strong class="qus_num">06.</strong>
          <p class="qus_tit">
            Which one of the five is least like the other four? 각 문항에 이미지가 제공되는 선다형입니다.
            <strong class="qus_score">20점</strong>
          </p>
        </div>
        <!-- [pp] Case 6: 각 문항에 이미지가 제공되는 선다형-->
        <div class="qus_cnt">
          <div class="check_row">
            <input type="checkbox" name="qus_check2" id="qus6_1" class="hidden" checked />
            <label for="qus6_1">
              1. AAA
              <div class="qus_img">
                <img src="@/assets/images/program/img_ex1.png" alt="이미지" />
              </div>
            </label>
          </div>
          <div class="check_row">
            <input type="checkbox" name="qus_check2" id="qus6_2" class="hidden" />
            <label for="qus6_2">
              2. BBB
              <div class="qus_img">
                <img src="@/assets/images/program/img_ex2.png" alt="이미지" />
              </div>
            </label>
          </div>
          <div class="check_row">
            <input type="checkbox" name="qus_check2" id="qus6_3" class="hidden" />
            <label for="qus6_3">
              3. CCC
              <div class="qus_img">
                <img src="@/assets/images/program/img_ex3.png" alt="이미지" />
              </div>
            </label>
          </div>
          <div class="check_row">
            <input type="checkbox" name="qus_check2" id="qus6_4" class="hidden" />
            <label for="qus6_4">
              4. DDD
              <div class="qus_img">
                <img src="@/assets/images/program/img_ex4.png" alt="이미지" />
              </div>
            </label>
          </div>
        </div>
      </div>
      <div class="diag_qus">
        <div class="qus_header">
          <strong class="qus_num">07.</strong>
          <p class="qus_tit">
            Which one of the five is least like the other four? 이미지가 첨부된 주관식 문항입니다.
            <strong class="qus_score">20점</strong>
          </p>
        </div>
        <!-- [pp] Case 7: 주관식 + 이미지제공 문항-->
        <div class="qus_cnt">
          <div class="qusimg_wrap">
            <img src="@/assets/images/program/img_program_thumbnail.png" alt="이미지" />
          </div>
          <input type="text" class="form_style wd_p100" placeholder="입력해주세요" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject } from "vue";

const moveExamListPage = inject("moveExamListPage");
function submit() {
  if (confirm("답안을 제출 하시겠습니까?")) {
    alert("제출되었습니다.");
    moveExamListPage();
  }
}
</script>
