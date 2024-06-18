<template>
  <div class="flex_wrap diag_testwrap prof">
    <div>
      <div class="section_tit_wrap">
        <h4 class="section_tit2">교수역량진단응시</h4>
      </div>
      <div class="box test_start">
        <!-- 역량진단 전일 경우 표출 -->
        <!--  
          <div class="test_before">
            <div>
              <p>올해 교수역량진단 준비중입니다.</p>
            </div>
          </div>
        -->
        <!-- 운영종료일때 oprt_close 추가 -->
        <div class="test_stare prof">
          <p class="title">
            <!-- 상태에 따른 클래스 변경 : 
              진행중 : blue
              진행전 : pink
              진행종료 : gray
            -->
            <span class="status_label blue">진행중</span>
            2024학년도 교수역량진단 2024학년도 교수역량진단 2024학년도 교수역량진단 2024학년도 교수역량진단
          </p>
          <span class="date">2024.01.01~2024.08.25</span>
          <div class="btn_area">
            <button type="button" class="btn_round btn_md btn_primary" @click="popupShow(0)">진단시작</button>
            <!-- 진단 불가, 진단완료, 기간만료 : 
            <button type="button" class="btn_round btn_md btn_primary" disabled>진단시작</button>
            -->
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="section_tit_wrap">
        <h4 class="section_tit2">교수역량진단 결과</h4>
      </div>
      <div class="box test_result">
        <!-- 결과 없을 경우 표출 -->
        <!--  
          <div class="test_before">
            <div>
              <p>교수역량진단 결과가 없습니다.</p>
            </div>
          </div>
        -->
        <ul class="testresult_list">
          <li>
            <div>
              <p class="title">2024학년도 교수역량진단 (1차)<span class="label">미응시</span></p>
              <div class="function">
                <p class="date">응시일<span>예정</span></p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <p class="title">2024학년도 교수역량진단 (1차)<span class="label">미응시</span></p>
              <div class="function">
                <p class="date">응시일<span>예정</span></p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <p class="title">2024학년도 교수역량진단 (1차)</p>
              <div class="function">
                <p class="date">응시일<span>2024.04.11</span></p>
                <span class="label">응시완료</span>
                <button type="button" @click="popupShow(1)">결과보기</button>
              </div>
            </div>
          </li>
          <li>
            <div>
              <p class="title">2024학년도 교수역량진단 (1차)</p>
              <div class="function">
                <p class="date">응시일<span>2024.04.11</span></p>
                <span class="label">응시완료</span>
                <button type="button" @click="popupShow(1)">결과보기</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="section_tit_wrap">
        <h4 class="section_tit2">교수역량진단 비교그래프</h4>
      </div>
      <div class="box graph_box" :class="chartLoaded2 ? '' : 'loading_md'">
        <!-- 결과 없을 경우 표출 -->
        <!--  
          <div class="test_before">
            <div>
              <p>교수역량진단 결과가 없습니다.</p>
            </div>
          </div>
        -->
        <div class="radio_sm_txt_wrap">
          <p class="radio_black_txt">
            <input type="radio" name="radio_sm_txt" id="radio_1" />
            <label for="radio_1">학과</label>
          </p>
          <p class="radio_black_txt">
            <input type="radio" name="radio_sm_txt" id="radio_2" />
            <label for="radio_2">학교</label>
          </p>
          <p class="radio_black_txt">
            <input type="radio" name="radio_sm_txt" id="radio_3" checked />
            <label for="radio_3">4년</label>
          </p>
        </div>
        <ColumnLineChart
          v-if="chartLoaded2"
          :class="chartLoaded2 ? '' : 'loading_md'"
          :dataset="chart2Datasets"
          :colorset="chart2Datasets2"
          :labels="chart2Datasets3"
          :chartHeight="293"
          :strokeColor="strokeColor"
        ></ColumnLineChart>
      </div>
    </div>
  </div>

  <PopupView v-model="isPopups[0]" class="xlarge">
    <template #title>교수역량진단 응시</template>
    <div class="diag_desc">
      <div class="top">
        <div><strong>진단명</strong>(교수역량진단실시계획명)</div>
        <div><strong>문항수</strong>76</div>
        <div><strong>응시기간</strong>2014-03-13 12:00 ~ 2024-04-01 01:00</div>
      </div>
      <div class="bottom editor_area">
        교수역량진단입니다. <br />
        편하게 봐주세요. 그렇다고 아무거나 누르지 마세요.
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
            <button type="button" class="btn_round btn_lg btn_secondary">진단 제출하기</button>
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
    <template #title>교수역량진단 결과</template>
    <template #footer>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="popupHide(1)">확인</button>
    </template>
    <div class="diag_desc">
      <div class="top">
        <div><strong>진단명</strong>(교수역량진단실시계획명)</div>
        <div><strong>문항수</strong>76</div>
        <div><strong>응시기간</strong>2014-03-13 12:00 ~ 2024-04-01 01:00</div>
      </div>
      <div class="bottom editor_area">
        교수역량진단입니다. <br />
        편하게 봐주세요. 그렇다고 아무거나 누르지 마세요.
      </div>
    </div>
    <div class="sm_section">
      <div class="section_tit_wrap">
        <h5 class="section_tit_sm">강점역량·약점역량·중간역량</h5>
        <div class="title_function">
          <span class="bold">교수역량진단 선택</span>
          <vue-select class="select_box wd_150" :options="selectedOption.groups" :placeholder="'선택'"></vue-select>
          <button type="button" class="btn_md btn_round btn_white">다운로드</button>
        </div>
      </div>
      <div :class="chartLoaded ? '' : 'loading_md'">
        <TextBarChart v-if="chartLoaded" :dataset="chartDatasets" :colorset="chartDatasets2" :labels="chartDatasets3">
        </TextBarChart>
      </div>
    </div>
  </PopupView>
</template>

<script lang="ts">
import PopupView from "@/components/common/PopupView.vue";
import TextBarChart from "@/components/chart/TextBarChart.vue";
import ColumnLineChart from "@/components/chart/ColumnLineChart.vue";

export default {
  components: {
    PopupView,
    TextBarChart,
    ColumnLineChart,
  },
  data: () => ({
    isPopups: [false, false],
    isOn: false,
    selectedOption: {
      value: "1개월",
      groups: [{ label: "진단1" }, { label: "진단2" }, { label: "진단3" }],
    },
    chartLoaded: false,
    chartLoaded2: false,
    chartDatasets: [
      {
        name: "역량1",
        data: [4.88, 3.6, 3.0],
        color: "#5F7AD1",
      },
      {
        name: "역량2",
        data: [5.2, 4.2, 3],
        color: "#B0C3D5",
      },
      {
        name: "약점역량",
        data: [2.5, 4.67, 2.76],
        color: "#FD8991",
      },
    ] as Array<Object>,
    chartDatasets2: ["#5F7AD1", "#B0C3D5", "#FD8991"],
    chartDatasets3: ["강점역량", "중간역량", "약점역량"],
    chart2Datasets: [
      {
        name: "2022",
        type: "column",
        data: [44, 55, 57, 56, 61],
      },
      {
        name: "2023",
        type: "column",
        data: [76, 85, 11, 88, 87],
      },
      {
        name: "2024",
        type: "column",
        data: [35, 41, 36, 26, 45],
      },
    ],
    chart2Datasets2: ["#8ABFFB", "#5FADCF", "#5175BE"],
    chart2Datasets3: ["강의기본", "강의준비", "강의실행", "강의평가", "종합"],
    strokeColor: ["transparent", "transparent", "transparent", "transparent"],
  }),
  mounted: function () {
    const vm = this;
    setTimeout(() => {
      vm.chartLoaded = true;
    }, 1500);
    setTimeout(() => {
      vm.chartLoaded2 = true;
    }, 1500);
  },
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
