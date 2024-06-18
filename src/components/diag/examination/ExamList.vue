<template>
  <div class="search_box">
    <div class="search_section">
      <div class="search_toggle lg center flip">
        <div class="left">
          <p class="total_count"><strong>5</strong>개의 시험</p>
        </div>
        <div class="right">
          <div class="select_row lg">
            <vue-select class="select_box" :options="selectOption.year" v-model="selectOption.value"> </vue-select>
          </div>
          <div class="select_row md">
            <vue-select class="select_box" :options="selectOption.options" v-model="selectOption.value2"></vue-select>
          </div>
          <div class="search_row">
            <input type="search" class="form_style wd_p100" placeholder="시험을 찾아보세요" />
            <button type="button" class="btn_search btn_icon icon_only">검색</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 결과 없을 경우 표출 -->
  <!--  
  <div class="test_before">
    <div>
      <p>프로그램이 없습니다.</p>
    </div>
  </div>
  -->
  <div class="program_doublewrap other">
    <div class="program_viewbox">
      <button type="button" class="texter" @click="popupShow(0)">이어서<br />시험보기</button>
      <div class="cnt">
        <p class="title">기초능력진단 시험[학생]</p>
        <div class="labels">
          <span>국어시험지</span>
          <span>영어시험지</span>
          <span>수학시험지</span>
        </div>
        <ul class="function">
          <li class="icon calendar"><strong>응시기간</strong>24/01/05 09:30~24/01/15 18:30</li>
          <li class="icon person"><strong>조사지 수</strong>5개</li>
        </ul>
      </div>
    </div>
    <div class="program_viewbox">
      <button type="button" class="texter">시험<br />시작</button>
      <div class="cnt">
        <p class="title">기초능력진단 시험 [학생]</p>
        <div class="labels">
          <span>만족도조사1</span>
          <span>만족도조사2</span>
          <span>만족도조사3</span>
        </div>
        <ul class="function">
          <li class="icon calendar"><strong>응시기간</strong>24/01/05 09:30~24/01/15 18:30</li>
          <li class="icon person"><strong>조사지 수</strong>5개</li>
        </ul>
      </div>
    </div>
    <div class="program_viewbox">
      <button type="button" class="texter" disabled>참여<br />완료</button>
      <div class="cnt">
        <p class="title">기초능력진단 시험 [학생]</p>
        <div class="labels">
          <span>만족도조사1</span>
          <span>만족도조사2</span>
          <span>만족도조사3</span>
        </div>
        <ul class="function">
          <li class="icon calendar"><strong>응시기간</strong>24/01/05 09:30~24/01/15 18:30</li>
          <li class="icon person"><strong>조사지 수</strong>5개</li>
        </ul>
        <button type="button" class="view" @click="popupShow(1)">채점결과보기</button>
      </div>
    </div>
    <div class="program_viewbox">
      <!-- 기간 종료시 클래스 close 추가 -->
      <button type="button" class="texter close" disabled>참여<br />완료</button>
      <div class="cnt">
        <p class="title">효과적인 마케팅 방법을 알려주는 마케팅 지침서 5가지</p>
        <div class="labels">
          <span>만족도조사1</span>
          <span>만족도조사2</span>
          <span>만족도조사3</span>
        </div>
        <ul class="function">
          <li class="icon calendar"><strong>응시기간</strong>24/01/05 09:30~24/01/15 18:30</li>
          <li class="icon person"><strong>조사지 수</strong>5개</li>
        </ul>
        <button type="button" class="view">채점결과보기</button>
      </div>
    </div>
    <div class="program_viewbox">
      <button type="button" class="texter" disabled>참여<br />완료</button>
      <div class="cnt">
        <p class="title">효과적인 마케팅 방법을 알려주는 마케팅 지침서 5가지</p>
        <div class="labels">
          <span>만족도조사1</span>
          <span>만족도조사2</span>
          <span>만족도조사3</span>
        </div>
        <ul class="function">
          <li class="icon calendar"><strong>응시기간</strong>24/01/05 09:30~24/01/15 18:30</li>
          <li class="icon person"><strong>조사지 수</strong>5개</li>
        </ul>
        <button type="button" class="view">채점결과보기</button>
      </div>
    </div>
  </div>
  <PaginationUi />

  <PopupView v-model="isPopups[0]" class="xlarge">
    <template #title>시험 시작</template>
    <div class="diag_desc double">
      <div class="top">
        <div><strong>시험 비중</strong>100%</div>
        <div><strong>총 문제</strong>5</div>
        <div><strong>시험 시간</strong>10분</div>
        <div><strong>응시기간</strong>2014-03-13 12:00 ~ 2024-04-01 01:00</div>
        <div><strong>결과 공개</strong>점수 + 정답</div>
      </div>
      <div class="bottom score_view">
        <p class="test_title">1회차 사전테스트</p>
        <div class="editor_area">
          시험입니다. <br />
          편하게 봐주세요. 그렇다고 아무거나 누르지 마세요.
        </div>
        <div class="submit_wrap">
          <ul>
            <!-- [pp] 채점완료시 추가 -->
            <li class="score">
              <p>점수</p>
              <strong>-<span>점</span></strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="diag_wrapper">
      <div class="diag_timer_wrap">
        <div class="diag_timer">
          <div class="timer_header" :class="{ on: isOn }" @click="toggleTimer">
            <p class="timer">12 : 10</p>
            <p class="qus_counter"><span>60</span> / 100</p>
          </div>
          <ul class="timer_quslist">
            <!-- [pp] 체크 : checked / 미체크 : disabled / 취소 : cancel -->
            <li class="qus_item checked">
              <p>1</p>
              <strong>체크됨</strong>
            </li>
            <li class="qus_item disabled">
              <p>2</p>
              <strong>미체크</strong>
            </li>
            <li class="qus_item cancel">
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
            <button type="button" class="btn_round btn_lg btn_secondary">시험 제출하기</button>
          </div>
        </div>
      </div>
      <div class="diag_qus_wrap">
        <div class="diag_qus">
          <div class="qus_header">
            <strong class="qus_num">00.</strong>
            <p class="qus_tit">
              척도형 문제입니다
              <strong class="qus_score">20점</strong>
            </p>
          </div>
          <!-- [pp] Case: 척도형 문항-->
          <div class="qus_cnt">
            <div class="scale_qusbox">
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale1" />
                <label for="scale1"><span class="number">1</span>매우 불만족</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale2" />
                <label for="scale2"><span class="number">2</span>불만족</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale3" />
                <label for="scale3"><span class="number">3</span>보통</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale4" />
                <label for="scale4"><span class="number">4</span>만족</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale5" />
                <label for="scale5"><span class="number">5</span>매우 만족</label>
              </p>
            </div>
          </div>
        </div>
        <div class="diag_qus">
          <div class="qus_header">
            <strong class="qus_num">01.</strong>
            <p class="qus_tit">
              다음 중 지도 학습에 해당하지 않는 것은 무엇인가요?
              <strong class="qus_score">20점</strong>
            </p>
          </div>
          <!-- [pp] 힌트 -->
          <div class="hint_wrap">
            <strong>Hint</strong>지도 학습은 입력과 정답 쌍을 이용하여 학습하는 방법입니다. 지도 학습 알고리즘 중에서도
            어떤 알고리즘이 이러한 쌍을 사용하는지 고려해보세요.
          </div>
          <!-- [pp] Case 1: 객관식 문항-->
          <div class="qus_cnt">
            <div class="radio_row">
              <input type="radio" name="qus_radio1" id="qus1_1" class="hidden" />
              <label for="qus1_1">1. 선형 회귀</label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio1" id="qus1_2" class="hidden" />
              <label for="qus1_2">2. K-평균 군집화</label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio1" id="qus1_3" class="hidden" />
              <label for="qus1_3">3. 의사결정 트리</label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio1" id="qus1_4" class="hidden" />
              <label for="qus1_4">4. k-최근접 이웃</label>
            </div>
          </div>
        </div>
        <div class="diag_qus">
          <div class="qus_header">
            <strong class="qus_num">02.</strong>
            <p class="qus_tit">
              인공 신경망 구조 중 이미지 분류에 주로 사용되는 것은?
              <strong class="qus_score">20점</strong>
            </p>
          </div>
          <!-- [pp] 힌트 -->
          <div class="hint_wrap">
            <strong>Hint</strong>이미지 분류를 위해 주로 사용되는 인공 신경망은 어떤 구조를 가지고 있을까요? 특히
            이미지의 특성을 잘 추출하기 위한 구조를 고려해보세요.
          </div>
          <!-- [pp] Case 2: 선다형 문항-->
          <div class="qus_cnt">
            <div class="check_row">
              <input type="checkbox" name="qus_check" id="qus2_1" class="hidden" checked />
              <label for="qus2_1">1. MLP (다층 퍼셉트론)</label>
            </div>
            <div class="check_row">
              <input type="checkbox" name="qus_check" id="qus2_2" class="hidden" />
              <label for="qus2_2">2. RNN (순환 신경망)</label>
            </div>
            <div class="check_row">
              <input type="checkbox" name="qus_check" id="qus2_3" class="hidden" />
              <label for="qus2_3">3. CNN (합성곱 신경망)</label>
            </div>
            <div class="check_row">
              <input type="checkbox" name="qus_check" id="qus2_4" class="hidden" />
              <label for="qus2_4">4. GAN (적대적 생성 신경망)</label>
            </div>
          </div>
        </div>
        <div class="diag_qus">
          <div class="qus_header">
            <strong class="qus_num">03.</strong>
            <p class="qus_tit">
              자연어 처리에서 단어의 의미를 벡터 형태로 나타내는 기법은?
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
              강화 학습에서 에이전트가 행동을 선택할 때 사용되는 함수는?
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
              <label for="qus4_1">1. 보상 함수 </label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio2" id="qus4_2" class="hidden" />
              <label for="qus4_2">2. 가치 함수</label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio2" id="qus4_3" class="hidden" />
              <label for="qus4_3">3. 정책 함수</label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio2" id="qus4_4" class="hidden" />
              <label for="qus4_4">4. 비용 함수</label>
            </div>
          </div>
        </div>
        <div class="diag_qus">
          <div class="qus_header">
            <strong class="qus_num">05.</strong>
            <p class="qus_tit">
              클러스터링 알고리즘 중 데이터 포인트들을 미리 정해진 클러스터 수로 그룹화하는 알고리즘은?
              <strong class="qus_score">20점</strong>
            </p>
          </div>
          <!-- [pp] Case 5: 각 문항에 이미지가 제공되는 객관식 -->
          <div class="qus_cnt">
            <div class="radio_row">
              <input type="radio" name="qus_radio3" id="qus5_1" class="hidden" checked />
              <label for="qus5_1">
                1. K-평균
                <div class="qus_img">
                  <img src="@/assets/images/program/img_ex1.png" alt="이미지" />
                </div>
              </label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio3" id="qus5_2" class="hidden" />
              <label for="qus5_2">
                2. DBSCAN
                <div class="qus_img">
                  <img src="@/assets/images/program/img_ex2.png" alt="이미지" />
                </div>
              </label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio3" id="qus5_3" class="hidden" />
              <label for="qus5_3">
                3. 계층적 클러스터링
                <div class="qus_img">
                  <img src="@/assets/images/program/img_ex3.png" alt="이미지" />
                </div>
              </label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio3" id="qus5_4" class="hidden" />
              <label for="qus5_4">
                4. GMM (가우시안 혼합 모델)
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
              이상 탐지에서 사용되는 주요 알고리즘 중 하나인 지도 학습 기반의 방법은?
              <strong class="qus_score">20점</strong>
            </p>
          </div>
          <!-- [pp] Case 6: 각 문항에 이미지가 제공되는 선다형-->
          <div class="qus_cnt">
            <div class="check_row">
              <input type="checkbox" name="qus_check2" id="qus6_1" class="hidden" checked />
              <label for="qus6_1">
                1. Isolation Forest
                <div class="qus_img">
                  <img src="@/assets/images/program/img_ex1.png" alt="이미지" />
                </div>
              </label>
            </div>
            <div class="check_row">
              <input type="checkbox" name="qus_check2" id="qus6_2" class="hidden" />
              <label for="qus6_2">
                2. One-Class SVM
                <div class="qus_img">
                  <img src="@/assets/images/program/img_ex2.png" alt="이미지" />
                </div>
              </label>
            </div>
            <div class="check_row">
              <input type="checkbox" name="qus_check2" id="qus6_3" class="hidden" />
              <label for="qus6_3">
                3. K-평균 군집화
                <div class="qus_img">
                  <img src="@/assets/images/program/img_ex3.png" alt="이미지" />
                </div>
              </label>
            </div>
            <div class="check_row">
              <input type="checkbox" name="qus_check2" id="qus6_4" class="hidden" />
              <label for="qus6_4">
                4. t-SNE
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
              AI 윤리에 대한 논의에서 주로 다루는 내용은?
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
      <div class="diag_paging">
        <button type="button" class="prev" disabled>이전</button>
        <button type="button" class="next">다음</button>
      </div>
    </div>
  </PopupView>

  <PopupView v-model="isPopups[1]" class="xlarge">
    <template #title>만족도조사 제출내역</template>
    <template #footer>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="popupHide(1)">확인</button>
    </template>
    <div class="dp_flex al_center jc_end mb-4">
      <span class="bold mr-4">시험지 선택</span>
      <vue-select class="select_box wd_150" :options="selectOption2.options" v-model="selectOption2.value"></vue-select>
    </div>
    <div class="diag_desc double">
      <div class="top">
        <div><strong>시험 비중</strong>100%</div>
        <div><strong>총 문제</strong>5</div>
        <div><strong>시험 시간</strong>10분</div>
        <div><strong>응시기간</strong>2014-03-13 12:00 ~ 2024-04-01 01:00</div>
        <div><strong>결과 공개</strong>점수 + 정답</div>
      </div>
      <div class="bottom score_view">
        <p class="test_title">1회차 사전테스트</p>
        <div class="editor_area">
          시험입니다. <br />
          편하게 봐주세요. 그렇다고 아무거나 누르지 마세요.
        </div>
        <div class="submit_wrap">
          <ul>
            <!-- [pp] 채점완료시 추가 -->
            <li class="score">
              <p>점수</p>
              <strong>85<span>점</span></strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="diag_wrapper">
      <div class="diag_timer_wrap">
        <div class="diag_timer">
          <div class="timer_header" :class="{ on: isOn }" @click="toggleTimer">
            <p class="timer disabled">12:55</p>
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
            <strong class="qus_num">00.</strong>
            <p class="qus_tit">
              척도형 문제입니다
              <strong class="qus_score">20점</strong>
            </p>
          </div>
          <!-- [pp] Case: 척도형 문항-->
          <div class="qus_cnt">
            <div class="scale_qusbox">
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale1" disabled />
                <label for="scale1"><span class="number">1</span>매우 불만족</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale2" disabled />
                <label for="scale2"><span class="number">2</span>불만족</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale3" disabled />
                <label for="scale3"><span class="number">3</span>보통</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale4" disabled />
                <label for="scale4"><span class="number">4</span>만족</label>
              </p>
              <p class="radio_row">
                <input type="radio" name="scale_radio" id="scale5" checked disabled />
                <label for="scale5"><span class="number">5</span>매우 만족</label>
              </p>
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
          </div>
        </div>
        <div class="diag_qus wrong">
          <div class="qus_header">
            <strong class="qus_num">01.</strong>
            <p class="qus_tit">
              다음 중 지도 학습에 해당하지 않는 것은 무엇인가요?
              <strong class="qus_score">20점</strong>
            </p>
          </div>
          <!-- [pp] 힌트 -->
          <div class="hint_wrap">
            <strong>Hint</strong>지도 학습은 입력과 정답 쌍을 이용하여 학습하는 방법입니다. 지도 학습 알고리즘 중에서도
            어떤 알고리즘이 이러한 쌍을 사용하는지 고려해보세요.
          </div>
          <!-- [pp] Case 1: 객관식 문항-->
          <div class="qus_cnt">
            <div class="radio_row">
              <input type="radio" name="qus_radio1" id="qus1_1" class="hidden" checked disabled />
              <label for="qus1_1">1. 선형 회귀</label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio1" id="qus1_2" class="hidden" disabled />
              <label for="qus1_2">2. K-평균 군집화</label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio1" id="qus1_3" class="hidden" disabled />
              <label for="qus1_3">3. 의사결정 트리</label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio1" id="qus1_4" class="hidden" disabled />
              <label for="qus1_4">4. k-최근접 이웃</label>
            </div>
          </div>
          <div class="qus_ans">
            <div class="ans_row">
              <p>정답</p>
              <strong class="ans"
                >Galaxy Note is a little bigger, a little more colorful, and a little more powerful than all prior Note
                phones. Lorem ipsum dolor sit amet, at consectetur adipiscing elit. In a feugiat auctor egestas. Morbis
                ultricies vitae purus id sagittics. Lorem ipsum dolor sit amet, at consectetur adipiscing elit.</strong
              >
            </div>
            <div class="ans_row">
              <p>해설</p>
              <strong
                >The Samsung Galaxy Note 9 is a little bigger, a little more colorful, and a little more powerful than
                all prior Note phones.</strong
              >
            </div>
            <div class="ans_row">
              <p>첨삭</p>
              <strong
                >Morbis ultricies vitae purus id sagittics. Lorem ipsum dolor sit amet, at consectetur adipiscing elit.
                이런 문제는 좀 더 길게 쓰시면 좋을 것 같습니다.</strong
              >
            </div>
          </div>
        </div>
        <div class="diag_qus correct">
          <div class="qus_header">
            <strong class="qus_num">02.</strong>
            <p class="qus_tit">
              인공 신경망 구조 중 이미지 분류에 주로 사용되는 것은?
              <strong class="qus_score">20점</strong>
            </p>
          </div>
          <!-- [pp] 힌트 -->
          <div class="hint_wrap">
            <strong>Hint</strong>이미지 분류를 위해 주로 사용되는 인공 신경망은 어떤 구조를 가지고 있을까요? 특히
            이미지의 특성을 잘 추출하기 위한 구조를 고려해보세요.
          </div>
          <!-- [pp] Case 2: 선다형 문항-->
          <div class="qus_cnt">
            <div class="check_row">
              <input type="checkbox" name="qus_check" id="qus2_1" class="hidden" checked disabled />
              <label for="qus2_1">1. MLP (다층 퍼셉트론)</label>
            </div>
            <div class="check_row">
              <input type="checkbox" name="qus_check" id="qus2_2" class="hidden" disabled />
              <label for="qus2_2">2. RNN (순환 신경망)</label>
            </div>
            <div class="check_row">
              <input type="checkbox" name="qus_check" id="qus2_3" class="hidden" disabled />
              <label for="qus2_3">3. CNN (합성곱 신경망)</label>
            </div>
            <div class="check_row">
              <input type="checkbox" name="qus_check" id="qus2_4" class="hidden" disabled />
              <label for="qus2_4">4. GAN (적대적 생성 신경망)</label>
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
            <strong class="qus_num">03.</strong>
            <p class="qus_tit">
              자연어 처리에서 단어의 의미를 벡터 형태로 나타내는 기법은?
              <strong class="qus_score">20점</strong>
            </p>
          </div>
          <!-- [pp] Case 3: 주관식 문항-->
          <div class="qus_cnt">
            <input
              type="text"
              class="form_style wd_p100"
              value="생각과 에고로 소외된 영혼을 떨치고 지금 이 순간의 삶으로 다시 떠오르기"
              disabled
            />
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
              강화 학습에서 에이전트가 행동을 선택할 때 사용되는 함수는?
              <strong class="qus_score">20점</strong>
            </p>
          </div>
          <!-- [pp] Case 4: 이미지 제공 문항-->
          <div class="qus_cnt">
            <div class="qusimg_wrap">
              <img src="@/assets/images/program/img_program_thumbnail.png" alt="이미지" />
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio2" id="qus4_1" class="hidden" checked disabled />
              <label for="qus4_1">1. 보상 함수 </label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio2" id="qus4_2" class="hidden" disabled />
              <label for="qus4_2">2. 가치 함수</label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio2" id="qus4_3" class="hidden" disabled />
              <label for="qus4_3">3. 정책 함수</label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio2" id="qus4_4" class="hidden" disabled />
              <label for="qus4_4">4. 비용 함수</label>
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
          </div>
        </div>
        <div class="diag_qus correct">
          <div class="qus_header">
            <strong class="qus_num">05.</strong>
            <p class="qus_tit">
              클러스터링 알고리즘 중 데이터 포인트들을 미리 정해진 클러스터 수로 그룹화하는 알고리즘은?
              <strong class="qus_score">20점</strong>
            </p>
          </div>
          <!-- [pp] Case 5: 각 문항에 이미지가 제공되는 객관식 -->
          <div class="qus_cnt">
            <div class="radio_row">
              <input type="radio" name="qus_radio3" id="qus5_1" class="hidden" checked disabled />
              <label for="qus5_1">
                1. K-평균
                <div class="qus_img">
                  <img src="@/assets/images/program/img_ex1.png" alt="이미지" />
                </div>
              </label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio3" id="qus5_2" class="hidden" disabled />
              <label for="qus5_2">
                2. DBSCAN
                <div class="qus_img">
                  <img src="@/assets/images/program/img_ex2.png" alt="이미지" />
                </div>
              </label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio3" id="qus5_3" class="hidden" disabled />
              <label for="qus5_3">
                3. 계층적 클러스터링
                <div class="qus_img">
                  <img src="@/assets/images/program/img_ex3.png" alt="이미지" />
                </div>
              </label>
            </div>
            <div class="radio_row">
              <input type="radio" name="qus_radio3" id="qus5_4" class="hidden" disabled />
              <label for="qus5_4">
                4. GMM (가우시안 혼합 모델)
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
            <div class="ans_row">
              <p>해설</p>
              <strong>해설입니다 해설입니다 해설 입 니 다 .</strong>
            </div>
          </div>
        </div>
        <div class="diag_qus wrong">
          <div class="qus_header">
            <strong class="qus_num">06.</strong>
            <p class="qus_tit">
              이상 탐지에서 사용되는 주요 알고리즘 중 하나인 지도 학습 기반의 방법은?
              <strong class="qus_score">20점</strong>
            </p>
          </div>
          <!-- [pp] Case 6: 각 문항에 이미지가 제공되는 선다형-->
          <div class="qus_cnt">
            <div class="check_row">
              <input type="checkbox" name="qus_check2" id="qus6_1" class="hidden" checked disabled />
              <label for="qus6_1">
                1. Isolation Forest
                <div class="qus_img">
                  <img src="@/assets/images/program/img_ex1.png" alt="이미지" />
                </div>
              </label>
            </div>
            <div class="check_row">
              <input type="checkbox" name="qus_check2" id="qus6_2" class="hidden" disabled />
              <label for="qus6_2">
                2. One-Class SVM
                <div class="qus_img">
                  <img src="@/assets/images/program/img_ex2.png" alt="이미지" />
                </div>
              </label>
            </div>
            <div class="check_row">
              <input type="checkbox" name="qus_check2" id="qus6_3" class="hidden" disabled />
              <label for="qus6_3">
                3. K-평균 군집화
                <div class="qus_img">
                  <img src="@/assets/images/program/img_ex3.png" alt="이미지" />
                </div>
              </label>
            </div>
            <div class="check_row">
              <input type="checkbox" name="qus_check2" id="qus6_4" class="hidden" disabled />
              <label for="qus6_4">
                4. t-SNE
                <div class="qus_img">
                  <img src="@/assets/images/program/img_ex4.png" alt="이미지" />
                </div>
              </label>
            </div>
          </div>
          <div class="qus_ans">
            <div class="ans_row">
              <p>정답</p>
              <strong class="ans">2</strong>
            </div>
            <div class="ans_row">
              <p>해설</p>
              <strong>해설입니다 해설입니다 해설 입 니 다 .</strong>
            </div>
          </div>
        </div>
        <div class="diag_qus">
          <div class="qus_header correct">
            <strong class="qus_num">07.</strong>
            <p class="qus_tit">
              AI 윤리에 대한 논의에서 주로 다루는 내용은?
              <strong class="qus_score">20점</strong>
            </p>
          </div>
          <!-- [pp] Case 7: 주관식 + 이미지제공 문항-->
          <div class="qus_cnt">
            <div class="qusimg_wrap">
              <img src="@/assets/images/program/img_program_thumbnail.png" alt="이미지" />
            </div>
            <input
              type="text"
              class="form_style wd_p100"
              value="생각과 에고로 소외된 영혼을 떨치고 지금 이 순간의 삶으로 다시 떠오르기"
              disabled
            />
          </div>
          <div class="qus_ans">
            <div class="ans_row">
              <p>정답</p>
              <strong class="ans">생각과 에고로 소외된 영혼을 떨치고 지금 이 순간의 삶으로 다시 떠오르기</strong>
            </div>
            <div class="ans_row">
              <p>해설</p>
              <strong>해설입니다 해설입니다 해설 입 니 다 .</strong>
            </div>
          </div>
        </div>
      </div>
      <div class="diag_paging">
        <button type="button" class="prev" disabled>이전</button>
        <button type="button" class="next">다음</button>
      </div>
    </div>
  </PopupView>
</template>

<script lang="ts">
import PaginationUi from "@/components/common/PaginationUi.vue";
import PopupView from "@/components/common/PopupView.vue";

export default {
  components: {
    PaginationUi,
    PopupView,
  },
  props: {
    list: { type: Array, required: false },
  },
  data: () => ({
    selectOption: {
      value: "2024",
      value2: "참여여부 전체",
      year: [{ label: "2024" }, { label: "2023" }],
      options: [{ label: "이어서 시험보기" }, { label: "시험시작" }, { label: "참여완료" }, { label: "기간종료" }],
    },
    selectOption2: {
      value: "(시험지 1명)",
      options: [{ label: "(시험지 1명)" }, { label: "(시험지 2명)" }],
    },
    isPopups: [false, false],
    isOn: false,
  }),
  methods: {
    popupShow(idx: number) {
      const vm = this;
      vm.isPopups[idx] = true;
    },
    popupHide(idx: number) {
      const vm = this;
      vm.isPopups[idx] = false;
    },
    toggleTimer() {
      this.isOn = !this.isOn;
    },
  },
};
</script>
