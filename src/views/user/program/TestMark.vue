<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">비교과 프로그램</h2>
        <div class="title_function">
          <div class="radio_tab_wrap">
            <p class="radio_tab">
              <input type="radio" id="radio1" name="radio_program" />
              <label for="radio1">비교과신청</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio2" name="radio_program" checked />
              <label for="radio2">나의 비교과</label>
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
          <div class="intro_wrapper">
            <div class="intro_list">
              <ul>
                <li>
                  <strong>시험 비중</strong>
                  <p>10%</p>
                </li>
                <li>
                  <strong>시험 시간</strong>
                  <p>10분</p>
                </li>
                <li>
                  <strong>결과 공개</strong>
                  <p>점수 + 정답</p>
                </li>
                <li>
                  <strong>총 문제</strong>
                  <p>10</p>
                </li>
                <li>
                  <strong>응시 기간</strong>
                  <p>2024 - 09 - 10 12 : 00 ~ 2024 - 10 - 01 01 : 00</p>
                </li>
              </ul>
            </div>
            <div class="intro_cnt">
              <div>
                <div class="title">
                  <span>1회차</span>
                  사전 테스트
                </div>
                <div class="cnt">
                  <div class="editor_area">드론정비과정 프로그램 상세내용을 확인하고 시험을 풀어주세요.</div>
                </div>
              </div>
            </div>
          </div>
          <div class="diag_wrapper">
            <div class="diag_timer_wrap">
              <div class="diag_timer">
                <div class="timer_header" :class="{ on: isOn }" @click="toggleTimer">
                  <p class="timer disabled">12 : 10</p>
                  <p class="qus_counter"><span>60</span> / 100</p>
                </div>
                <ul class="timer_quslist">
                  <!-- [pp] 정답 : correct / 오답 : wrong -->
                  <li class="qus_item correct">
                    <p>1</p>
                    <strong>정답</strong>
                  </li>
                  <li class="qus_item wrong">
                    <p>2</p>
                    <strong>틀림</strong>
                  </li>
                  <li class="qus_item correct">
                    <p>3</p>
                    <strong>정답</strong>
                  </li>
                  <li class="qus_item correct">
                    <p>4</p>
                    <strong>정답</strong>
                  </li>
                  <li class="qus_item correct">
                    <p>5</p>
                    <strong>정답</strong>
                  </li>
                  <li class="qus_item correct">
                    <p>6</p>
                    <strong>정답</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div class="diag_qus_wrap">
              <!-- [pp] 정답 : correct / 오답 : wrong -->
              <div class="diag_qus correct">
                <div class="qus_header">
                  <strong class="qus_num">01.</strong>
                  <p class="qus_tit">
                    Which one of the five is least like the other four? 객관식 문항입니다.
                    <strong class="qus_score"><span>20</span>20점</strong>
                  </p>
                </div>
                <!-- [pp] Case 1: 객관식 문항-->
                <div class="qus_cnt">
                  <div class="radio_row">
                    <input type="radio" name="qus_radio1" id="qus1_1" class="hidden" checked disabled />
                    <label for="qus1_1">1. 첫번째 답변입니다</label>
                  </div>
                  <div class="radio_row">
                    <input type="radio" name="qus_radio1" id="qus1_2" class="hidden" disabled />
                    <label for="qus1_2">2. 두번째 답변입니다</label>
                  </div>
                  <div class="radio_row">
                    <input type="radio" name="qus_radio1" id="qus1_3" class="hidden" disabled />
                    <label for="qus1_3">3. 세번째 답변입니다</label>
                  </div>
                  <div class="radio_row">
                    <input type="radio" name="qus_radio1" id="qus1_4" class="hidden" disabled />
                    <label for="qus1_4">4. 네번째 답변입니다</label>
                  </div>
                </div>
                <div class="qus_ans">
                  <div class="ans_row">
                    <p>정답</p>
                    <strong class="ans">1</strong>
                  </div>
                  <div class="ans_row">
                    <p>해설</p>
                    <strong>해설입니다 해설입니다 해설 입 니 다 .</strong>
                  </div>
                  <div class="ans_row">
                    <p>첨삭</p>
                    <strong>첨삭내용이에용</strong>
                  </div>
                </div>
              </div>
              <div class="diag_qus wrong">
                <div class="qus_header">
                  <strong class="qus_num">02.</strong>
                  <p class="qus_tit">
                    Which one of the five is least like the other four? 선다형 문항입니다.
                    <strong class="qus_score"><span>20</span>20점</strong>
                  </p>
                </div>
                <!-- [pp] Case 2: 선다형 문항-->
                <div class="qus_cnt">
                  <div class="check_row">
                    <input type="checkbox" name="qus_check" id="qus2_1" class="hidden" checked disabled />
                    <label for="qus2_1">1. AAA</label>
                  </div>
                  <div class="check_row">
                    <input type="checkbox" name="qus_check" id="qus2_2" class="hidden" disabled />
                    <label for="qus2_2">2. BBB</label>
                  </div>
                  <div class="check_row">
                    <input type="checkbox" name="qus_check" id="qus2_3" class="hidden" disabled />
                    <label for="qus2_3">3. CCC</label>
                  </div>
                  <div class="check_row">
                    <input type="checkbox" name="qus_check" id="qus2_4" class="hidden" disabled />
                    <label for="qus2_4">4. DDD</label>
                  </div>
                </div>
                <div class="qus_ans">
                  <div class="ans_row">
                    <p>정답</p>
                    <strong class="ans"
                      >Galaxy Note is a little bigger, a little more colorful, and a little more powerful than all prior
                      Note phones. Lorem ipsum dolor sit amet, at consectetur adipiscing elit. In a feugiat auctor
                      egestas. Morbis ultricies vitae purus id sagittics. Lorem ipsum dolor sit amet, at consectetur
                      adipiscing elit.</strong
                    >
                  </div>
                  <div class="ans_row">
                    <p>해설</p>
                    <strong
                      >The Samsung Galaxy Note 9 is a little bigger, a little more colorful, and a little more powerful
                      than all prior Note phones.</strong
                    >
                  </div>
                  <div class="ans_row">
                    <p>첨삭</p>
                    <strong
                      >Morbis ultricies vitae purus id sagittics. Lorem ipsum dolor sit amet, at consectetur adipiscing
                      elit. 이런 문제는 좀 더 길게 쓰시면 좋을 것 같습니다.</strong
                    >
                  </div>
                </div>
              </div>
              <div class="diag_qus correct">
                <div class="qus_header">
                  <strong class="qus_num">03.</strong>
                  <p class="qus_tit">
                    Which one of the five is least like the other four? 주관식 문항입니다.
                    <strong class="qus_score"><span>20</span>20점</strong>
                  </p>
                </div>
                <!-- [pp] Case 3: 주관식 문항-->
                <div class="qus_cnt">
                  <p class="input_ans">생각과 에고로 소외된 영혼을 떨치고 지금 이 순간의 삶으로 다시 떠오르기</p>
                </div>
                <div class="qus_ans">
                  <div class="ans_row">
                    <p>정답</p>
                    <strong class="ans">생각과 에고로 소외된 영혼을 떨치고 지금 이 순간의 삶으로 다시 떠오르기</strong>
                  </div>
                </div>
              </div>
              <div class="diag_qus correct">
                <div class="qus_header">
                  <strong class="qus_num">04.</strong>
                  <p class="qus_tit">
                    Which one of the five is least like the other four? <br />
                    문제에 이미지가 제공되는 문항입니다.
                    <strong class="qus_score"><span>20</span>20점</strong>
                  </p>
                </div>
                <!-- [pp] Case 4: 이미지 제공 문항-->
                <div class="qus_cnt">
                  <div class="qusimg_wrap">
                    <img src="@/assets/images/program/img_program_thumbnail.png" alt="이미지" />
                  </div>
                  <div class="radio_row">
                    <input type="radio" name="qus_radio2" id="qus4_1" class="hidden" checked disabled />
                    <label for="qus4_1">1. 첫번째 답변입니다</label>
                  </div>
                  <div class="radio_row">
                    <input type="radio" name="qus_radio2" id="qus4_2" class="hidden" disabled />
                    <label for="qus4_2">2. 두번째 답변입니다</label>
                  </div>
                  <div class="radio_row">
                    <input type="radio" name="qus_radio2" id="qus4_3" class="hidden" disabled />
                    <label for="qus4_3">3. 세번째 답변입니다</label>
                  </div>
                  <div class="radio_row">
                    <input type="radio" name="qus_radio2" id="qus4_4" class="hidden" disabled />
                    <label for="qus4_4">4. 네번째 답변입니다</label>
                  </div>
                </div>
                <div class="qus_ans">
                  <div class="ans_row">
                    <p>정답</p>
                    <strong class="ans">1</strong>
                  </div>
                </div>
              </div>
              <div class="diag_qus correct">
                <div class="qus_header">
                  <strong class="qus_num">05.</strong>
                  <p class="qus_tit">
                    Which one of the five is least like the other four? 각 문항에 이미지가 제공되는 객관식입니다.
                    <strong class="qus_score"><span>20</span>20점</strong>
                  </p>
                </div>
                <!-- [pp] Case 5: 각 문항에 이미지가 제공되는 객관식 -->
                <div class="qus_cnt">
                  <div class="radio_row">
                    <input type="radio" name="qus_radio3" id="qus5_1" class="hidden" checked disabled />
                    <label for="qus5_1">
                      1. 첫번째 답변입니다
                      <div class="qus_img">
                        <img src="@/assets/images/program/img_ex1.png" alt="이미지" />
                      </div>
                    </label>
                  </div>
                  <div class="radio_row">
                    <input type="radio" name="qus_radio3" id="qus5_2" class="hidden" disabled />
                    <label for="qus5_2">
                      2. 두번째 답변입니다
                      <div class="qus_img">
                        <img src="@/assets/images/program/img_ex2.png" alt="이미지" />
                      </div>
                    </label>
                  </div>
                  <div class="radio_row">
                    <input type="radio" name="qus_radio3" id="qus5_3" class="hidden" disabled />
                    <label for="qus5_3">
                      3. 세번째 답변입니다
                      <div class="qus_img">
                        <img src="@/assets/images/program/img_ex3.png" alt="이미지" />
                      </div>
                    </label>
                  </div>
                  <div class="radio_row">
                    <input type="radio" name="qus_radio3" id="qus5_4" class="hidden" disabled />
                    <label for="qus5_4">
                      4. 네번째 답변입니다
                      <div class="qus_img">
                        <img src="@/assets/images/program/img_ex4.png" alt="이미지" />
                      </div>
                    </label>
                  </div>
                </div>
                <div class="qus_ans">
                  <div class="ans_row">
                    <p>정답</p>
                    <strong class="ans">1</strong>
                  </div>
                </div>
              </div>
              <div class="diag_qus correct">
                <div class="qus_header">
                  <strong class="qus_num">06.</strong>
                  <p class="qus_tit">
                    Which one of the five is least like the other four? 각 문항에 이미지가 제공되는 선다형입니다.
                    <strong class="qus_score"><span>20</span>20점</strong>
                  </p>
                </div>
                <!-- [pp] Case 6: 각 문항에 이미지가 제공되는 선다형-->
                <div class="qus_cnt">
                  <div class="check_row">
                    <input type="checkbox" name="qus_check2" id="qus6_1" class="hidden" checked disabled />
                    <label for="qus6_1">
                      1. AAA
                      <div class="qus_img">
                        <img src="@/assets/images/program/img_ex1.png" alt="이미지" />
                      </div>
                    </label>
                  </div>
                  <div class="check_row">
                    <input type="checkbox" name="qus_check2" id="qus6_2" class="hidden" disabled />
                    <label for="qus6_2">
                      2. BBB
                      <div class="qus_img">
                        <img src="@/assets/images/program/img_ex2.png" alt="이미지" />
                      </div>
                    </label>
                  </div>
                  <div class="check_row">
                    <input type="checkbox" name="qus_check2" id="qus6_3" class="hidden" disabled />
                    <label for="qus6_3">
                      3. CCC
                      <div class="qus_img">
                        <img src="@/assets/images/program/img_ex3.png" alt="이미지" />
                      </div>
                    </label>
                  </div>
                  <div class="check_row">
                    <input type="checkbox" name="qus_check2" id="qus6_4" class="hidden" disabled />
                    <label for="qus6_4">
                      4. DDD
                      <div class="qus_img">
                        <img src="@/assets/images/program/img_ex4.png" alt="이미지" />
                      </div>
                    </label>
                  </div>
                </div>
                <div class="qus_ans">
                  <div class="ans_row">
                    <p>정답</p>
                    <strong class="ans">1</strong>
                  </div>
                </div>
              </div>
              <div class="diag_qus correct">
                <div class="qus_header">
                  <strong class="qus_num">07.</strong>
                  <p class="qus_tit">
                    Which one of the five is least like the other four? 이미지가 첨부된 주관식 문항입니다.
                    <strong class="qus_score"><span>20</span>20점</strong>
                  </p>
                </div>
                <!-- [pp] Case 7: 주관식 + 이미지제공 문항-->
                <div class="qus_cnt">
                  <div class="qusimg_wrap">
                    <img src="@/assets/images/program/img_program_thumbnail.png" alt="이미지" />
                  </div>
                  <p class="input_ans">생각과 에고로 소외된 영혼을 떨치고 지금 이 순간의 삶으로 다시 떠오르기</p>
                </div>
                <div class="qus_ans">
                  <div class="ans_row">
                    <p>정답</p>
                    <strong class="ans">생각과 에고로 소외된 영혼을 떨치고 지금 이 순간의 삶으로 다시 떠오르기</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      isOn: false,
    };
  },
  methods: {
    toggleTimer() {
      this.isOn = !this.isOn;
    },
  },
};
</script>
