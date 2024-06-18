<template>
  <div class="myclass_wrap">
    <div class="myclass_header">
      <div class="quick_move">
        <button @click="onClickPrevMenu(idx)" class="btn_icon icon_only arrow_prev_white">이전탭</button>
        <p class="tab_title">{{ menuName }}</p>
        <button @click="onClickNextMenu(idx)" class="btn_icon icon_only arrow_next_white">다음탭</button>
      </div>
      <div class="count">
        <p>{{ menuName }} 수</p>
        <!-- {{ totalCnt }} -->
        <strong>3</strong>
      </div>
      <div v-if="eccDivCd === 'QNA'" class="list_btn">
        <button type="button" class="btn_icon myprogram" @click="openPopFunc(true)">Q/A 등록</button>
      </div>
    </div>
    <div class="sub_section">
      <!--  -->
      <div v-if="eccDivCd === 'NOTICE'" class="myclass_listwrap">
        <ul class="refer_list">
          <li class="accordion">
            <div class="acd_tit">
              <div class="refer_tit">
                <div class="type">
                  <span class="lesson_label purple">공지 1</span>
                </div>
                <div class="name">
                  프로그램 시작일 변경 안내<span class="notice_fixed">고정</span>
                  <p class="date">2023.12.25 12:00 ~ 2023.12.26 12:00</p>
                </div>
              </div>
            </div>
            <div class="acd_cnt">
              <div class="qna_cnt">
                <div class="qna_wrap">
                  <div>
                    <div class="tit_wrap">
                      <strong class="title">제목</strong>
                      <div>강의 시작일 변경 안내</div>
                    </div>
                    <div class="cnt_wrap">
                      <strong class="title">내용</strong>
                      <div>
                        <p>
                          안녕하세요, "AI 알고리즘의 이해" 강의 시작일이 변경되었음을 알려드립니다. 새로운 시작일은
                          2024년 1월 1일로 변경되었습니다. 변경된 일정에 맞춰 준비를 해주시기 바랍니다. 문의사항이
                          있으시면 언제든지 연락주시기 바랍니다. 감사합니다.
                        </p>
                        <div class="file_list column">
                          <div class="filedown">
                            <a href="javascript:void(0);">
                              <div class="title">
                                <p>
                                  <strong class="float_label"><span>.png</span><span>115 MB</span></strong
                                  >시작일 변경 안내
                                </p>
                              </div>
                            </a>
                          </div>
                          <div class="filedown">
                            <a href="javascript:void(0);">
                              <div class="title">
                                <p>
                                  <strong class="float_label"><span>.ppt</span><span>115 MB</span></strong
                                  >시작일 변경 안내
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="accordion">
            <div class="acd_tit">
              <div class="refer_tit">
                <div class="type">
                  <span class="lesson_label purple">공지 2</span>
                </div>
                <div class="name">
                  추가 자료 제공
                  <p class="date">2024.02.10 12:00 ~ 2024.02.15 12:00</p>
                </div>
              </div>
            </div>
            <div class="acd_cnt">
              <div class="qna_cnt">
                <div class="qna_wrap">
                  <div>
                    <div class="tit_wrap">
                      <strong class="title">제목</strong>
                      <div>추가 자료 제공</div>
                    </div>
                    <div class="cnt_wrap">
                      <strong class="title">내용</strong>
                      <div>
                        <p>
                          안녕하세요, "AI 알고리즘의 이해" 추가 자료가 업데이트되었음을 안내드립니다. 강의에서 다루는
                          내용을 보다 깊이 있게 이해하고 학습하실 수 있도록 관련 자료를 제공해드리고자 합니다. 추가
                          자료는 밑에 업로드되었으니 참고하시기 바랍니다. 감사합니다.
                        </p>
                        <div class="file_list column">
                          <div class="filedown">
                            <a href="javascript:void(0);">
                              <div class="title">
                                <p>
                                  <strong class="float_label"><span>.png</span><span>115 MB</span></strong
                                  >강화학습_응용사례
                                </p>
                              </div>
                            </a>
                          </div>
                          <div class="filedown">
                            <a href="javascript:void(0);">
                              <div class="title">
                                <p>
                                  <strong class="float_label"><span>.ppt</span><span>115 MB</span></strong
                                  >군집화_실습자료
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="accordion">
            <div class="acd_tit">
              <div class="refer_tit">
                <div class="type">
                  <span class="lesson_label purple">공지 3</span>
                </div>
                <div class="name">
                  강의자 변경 안내
                  <p class="date">2024.04.10 12:00 ~ 2024.04.16 12:00</p>
                </div>
              </div>
            </div>
            <div class="acd_cnt">
              <div class="qna_cnt">
                <div class="qna_wrap">
                  <div>
                    <div class="tit_wrap">
                      <strong class="title">제목</strong>
                      <div>강의자 변경 안내</div>
                    </div>
                    <div class="cnt_wrap">
                      <strong class="title">내용</strong>
                      <div>
                        <p>
                          안녕하세요, "AI 알고리즘의 이해" 강의자 변경 안내를 드립니다. 이번 프로그램부터 강의자로서
                          활동하게 될 분은 김지영 선생님입니다. 김 선생님은 AI 및 머신러닝 분야에서 오랜 경력을 가지고
                          있으며 풍부한 경험을 공유해주실 것입니다. 새로운 강의자를 환영해주시고, 함께 프로그램을
                          진행해나가겠습니다. 감사합니다.
                        </p>
                        <div class="file_list column">
                          <div class="filedown">
                            <a href="javascript:void(0);">
                              <div class="title">
                                <p>
                                  <strong class="float_label"><span>.png</span><span>115 MB</span></strong
                                  >강의자변경안내
                                </p>
                              </div>
                            </a>
                          </div>
                          <div class="filedown">
                            <a href="javascript:void(0);">
                              <div class="title">
                                <p>
                                  <strong class="float_label"><span>.docx</span><span>115 MB</span></strong
                                  >강의자변경안내
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--  -->
      <div v-if="eccDivCd === 'QNA'" class="myclass_listwrap">
        <ul class="refer_list">
          <li class="accordion">
            <div class="acd_tit" @click="popupShow(2)">
              <div class="refer_tit">
                <div class="type">
                  <span class="lesson_label green">Q 1</span>
                </div>
                <div class="name">
                  개인적인 질문이 있어요~
                  <span class="qus_locked">고정</span>
                  <p class="date">2024.02.19 12:00 ~ 2024.03.01 12:00</p>
                </div>
              </div>
            </div>
            <div class="acd_cnt">
              <div class="qna_cnt">
                <div class="qna_wrap">
                  <div class="question_box">
                    <div class="tit_wrap">
                      <strong class="title">제목</strong>
                      <div>개인적인 질문이 있어요~</div>
                    </div>
                    <div class="cnt_wrap">
                      <strong class="title">내용</strong>
                      <div>
                        <p>
                          1.실습 시간에 사용할 프로그래밍 언어는 무엇인가요? <br />
                          2.프로그램 종료 후에도 강의 자료에 접근할 수 있는 방법이 있나요? <br />
                          3.강의에서 다루는 주제 중에서 특히 심화된 내용이나 추가 학습 자료가 있을까요?
                        </p>
                        <div class="file_list column">
                          <div class="filedown">
                            <a href="javascript:void(0);">
                              <div class="title">
                                <p>
                                  <strong class="float_label"><span>.png</span><span>115 MB</span></strong
                                  >질문 목록
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="answer_box">
                    <div class="tit_wrap">
                      <strong class="title">제목</strong>
                      <div>RE : 개인적인 질문이 있어요~</div>
                    </div>
                    <div class="cnt_wrap">
                      <strong class="title">내용</strong>
                      <div>
                        <p>
                          1. "AI 알고리즘의 이해" 프로그램에서는 Python을 주로 사용합니다. Python은 데이터 분석 및
                          머신러닝 분야에서 널리 사용되는 프로그래밍 언어이며, 강의와 실습에서도 이를 활용합니다.
                          <br />
                          2. 네, 프로그램 종료 후에도 강의 자료에 접근할 수 있는 방법이 있습니다. 우선, 강의 자료는
                          온라인 플랫폼에 업로드되어 있으며, 참가자들은 프로그램 종료 후에도 해당 플랫폼을 통해 접근할
                          수 있습니다. 또한, 강의 자료에 대한 다운로드 링크를 제공할 예정이니 이용하시면 됩니다. <br />
                          3. 강의에서 다루는 주제 중에는 심화된 내용도 다루고 있습니다. 추가로 심화된 내용이나 학습
                          자료가 필요하신 경우에는 개별적으로 상담하여 보다 특화된 자료를 제공해드릴 수 있습니다. 자세한
                          내용은 강의 중에 안내해드리겠습니다.
                          <br /><br />더 궁금한 사항이 있으시면 언제든지 문의해주세요. <br />
                          감사합니다.
                        </p>
                        <div class="file_list column">
                          <div class="filedown">
                            <a href="javascript:void(0);">
                              <div class="title">
                                <p>
                                  <strong class="float_label"><span>.png</span><span>115 MB</span></strong
                                  >답변 1번 추가 설명
                                </p>
                              </div>
                            </a>
                          </div>
                          <div class="filedown">
                            <a href="javascript:void(0);">
                              <div class="title">
                                <p>
                                  <strong class="float_label"><span>.hwp</span><span>115 MB</span></strong
                                  >답변 2번 추가 설명
                                </p>
                              </div>
                            </a>
                          </div>
                          <div class="filedown">
                            <a href="javascript:void(0);">
                              <div class="title">
                                <p>
                                  <strong class="float_label"><span>.hwp</span><span>115 MB</span></strong
                                  >답변 3번 추가 설명
                                </p>
                              </div>
                            </a>
                          </div>
                          <div class="filedown">
                            <a href="javascript:void(0);">
                              <div class="title">
                                <p>
                                  <strong class="float_label"><span>.hwp</span><span>115 MB</span></strong
                                  >강의 소개 및 안내
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="btn_wrap">
                  <button type="button" class="btn_round btn_white btn_sm" @click="popupShow(1)">수정</button>
                </div>
              </div>
            </div>
          </li>
          <li class="accordion">
            <div class="acd_tit">
              <div class="refer_tit">
                <div class="type">
                  <span class="lesson_label green">Q 2</span>
                </div>
                <div class="name">
                  인공지능심화 과정 개설이 되나요?
                  <p class="date">2024.09.10 12:00 ~ 2024.10.01 12:00</p>
                </div>
              </div>
            </div>
            <div class="acd_cnt">
              <div class="qna_cnt">
                <div class="qna_wrap">
                  <div class="question_box">
                    <div class="tit_wrap">
                      <strong class="title">제목</strong>
                      <div>인공지능심화 과정 개설이 되나요?</div>
                    </div>
                    <div class="cnt_wrap">
                      <strong class="title">내용</strong>
                      <div>
                        <p>
                          저는 인공지능에 대한 심화 과정 개설 여부에 대해 궁금합니다. 현재 기본적인 인공지능 개념과
                          알고리즘을 배운 상태이며, 더 깊은 내용을 학습하고자 합니다. 인공지능 심화 과정이 개설되는지에
                          대한 정보를 알고 싶습니다. 감사합니다.
                        </p>
                        <div class="file_list column">
                          <div class="filedown">
                            <a href="javascript:void(0);">
                              <div class="title">
                                <p>
                                  <strong class="float_label"><span>.docx</span><span>115 MB</span></strong
                                  >질문_인공지능심화과정개설
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="btn_wrap">
                  <button type="button" class="btn_round btn_white btn_sm">수정</button>
                </div>
              </div>
            </div>
          </li>
          <li class="accordion">
            <div class="acd_tit">
              <div class="refer_tit">
                <div class="type">
                  <span class="lesson_label green">Q 3</span>
                </div>
                <div class="name">
                  Deep Learning 알고리즘을 만들어보았어요, 평가좀 해주세요.
                  <p class="date">2024.03.10 12:00 ~ 2024.03.01 12:00</p>
                </div>
              </div>
            </div>
            <div class="acd_cnt">
              <div class="qna_cnt">
                <div class="qna_wrap">
                  <div class="question_box">
                    <div class="tit_wrap">
                      <strong class="title">제목</strong>
                      <div>Deep Learning 알고리즘을 만들어보왔어요, 평가좀 해주세요.</div>
                    </div>
                    <div class="cnt_wrap">
                      <strong class="title">내용</strong>
                      <div>
                        <p>
                          저는 최근에 Deep Learning 알고리즘을 직접 만들어보았습니다. 데이터셋을 사용하여 모델을
                          학습시키고, 예측 결과를 확인해보았습니다. 제가 만든 알고리즘에 대한 평가와 개선할 점에 대한
                          조언을 받고 싶습니다. 감사합니다.
                        </p>
                        <div class="file_list column">
                          <div class="filedown">
                            <a href="javascript:void(0);">
                              <div class="title">
                                <p>
                                  <strong class="float_label"><span>.docx</span><span>115 MB</span></strong
                                  >알고리즘_DeepLearning
                                </p>
                              </div>
                            </a>
                          </div>
                          <div class="filedown">
                            <a href="javascript:void(0);">
                              <div class="title">
                                <p>
                                  <strong class="float_label"><span>.png</span><span>115 MB</span></strong
                                  >알고리즘_DeepLearning
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--  -->
      <div v-if="eccDivCd === 'LEARN'" class="myclass_listwrap">
        <ul class="refer_list">
          <li class="accordion">
            <div class="acd_tit">
              <div class="refer_tit">
                <div class="type">
                  <span class="lesson_label green">자료</span>
                </div>
                <div class="name">PCA를 이용한 차원 축소</div>
              </div>
            </div>
            <div class="acd_cnt">
              <div class="refer_cnt">
                <div class="refer_header">
                  <div class="tip_label">
                    <strong>설명</strong>
                    <p>
                      이 자료는 차원 축소의 개념을 설명하는데 사용됩니다. 차원 축소는 고차원 데이터를 저차원 공간으로
                      변환하는 기법으로, 데이터 시각화나 계산 효율성을 높이는 데 사용됩니다. 주로 주성분 분석(PCA)과
                      같은 기법이 활용됩니다.
                    </p>
                  </div>
                </div>
                <div class="file_list column">
                  <div class="filedown">
                    <a href="javascript:void(0);">
                      <div class="title">
                        <p>
                          <strong class="float_label"><span>.png</span></strong
                          >자료설명_차원축소
                        </p>
                      </div>
                      <span>115 MB</span>
                    </a>
                  </div>
                  <div class="filedown">
                    <a href="javascript:void(0);">
                      <div class="title">
                        <p>
                          <strong class="float_label"><span>.png</span></strong
                          >이미지자료_차원축소
                        </p>
                      </div>
                      <span>115 MB</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="accordion">
            <div class="acd_tit">
              <div class="refer_tit">
                <div class="type">
                  <span class="lesson_label green">자료</span>
                </div>
                <div class="name">고객 데이터 클러스터링</div>
              </div>
            </div>
            <div class="acd_cnt">
              <div class="refer_cnt">
                <div class="refer_header">
                  <div class="tip_label">
                    <strong>설명</strong>
                    <p>
                      이 자료는 클러스터링의 개념을 설명하는데 사용됩니다. 클러스터링은 유사한 특성을 가진 데이터들을
                      그룹으로 묶는 비지도 학습 기법입니다. 이를 통해 고객 데이터 클러스터링을 예시로 들어 클러스터링의
                      원리를 이해할 수 있습니다.
                    </p>
                  </div>
                </div>
                <div class="file_list column">
                  <div class="filedown">
                    <a href="javascript:void(0);">
                      <div class="title">
                        <p>
                          <strong class="float_label"><span>.png</span></strong
                          >자료설명_클러스터링
                        </p>
                      </div>
                      <span>115 MB</span>
                    </a>
                  </div>
                  <div class="filedown">
                    <a href="javascript:void(0);">
                      <div class="title">
                        <p>
                          <strong class="float_label"><span>.png</span></strong
                          >이미지자료_클러스터링
                        </p>
                      </div>
                      <span>115 MB</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="accordion">
            <div class="acd_tit">
              <div class="refer_tit">
                <div class="type">
                  <span class="lesson_label green">자료</span>
                </div>
                <div class="name">이상 탐지 및 이벤트 감지</div>
              </div>
            </div>
            <div class="acd_cnt">
              <div class="refer_cnt">
                <div class="refer_header">
                  <div class="tip_label">
                    <strong>설명</strong>
                    <p>
                      이 자료는 이상 탐지 및 이벤트 감지에 관한 내용을 다루고 있습니다. 이상 탐지는 주어진 데이터에서
                      일반적인 패턴과는 다른 패턴을 감지하여 이상 상태를 식별하는 프로세스를 의미합니다. 이벤트 감지는
                      주어진 환경에서 발생하는 특정 이벤트를 탐지하고 인식하는 과정을 포함합니다. 이 자료에서는 주로
                      이러한 기술들의 개념, 알고리즘, 그리고 실제 응용 사례 등에 대해 다룹니다.
                    </p>
                  </div>
                </div>
                <div class="file_list column">
                  <div class="filedown">
                    <a href="javascript:void(0);">
                      <div class="title">
                        <p>
                          <strong class="float_label"><span>.png</span></strong
                          >이상탐지_데이터분석
                        </p>
                      </div>
                      <span>115 MB</span>
                    </a>
                  </div>
                  <div class="filedown">
                    <a href="javascript:void(0);">
                      <div class="title">
                        <p>
                          <strong class="float_label"><span>.png</span></strong
                          >이벤트감지_네트워크보안
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
                          >이벤트감지_응용사례
                        </p>
                      </div>
                      <span>125 MB</span>
                    </a>
                  </div>
                  <div class="filedown">
                    <a href="javascript:void(0);">
                      <div class="title">
                        <p>
                          <strong class="float_label"><span>.hwp</span></strong
                          >이상탐지_알고리즘
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
                          >이상탐지_신호처리
                        </p>
                      </div>
                      <span>105 MB</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <CommentList :eliId="eliId" :eccDivCd="eccDivCd"></CommentList>
  </div>
</template>
<!-- <div v-if="totalCnt > 0" class="myclass_listwrap">
        &lt;!&ndash; 목록 내용 있을때 : 길이 > 0  &ndash;&gt;
        <ul class="refer_list">
          <li class="accordion" v-for="(data, idx) in dataList" :key="data.keyId">
            <div class="acd_tit" @click="selectedEntity(data.keyId)">
              <div class="refer_tit">
                <div class="type">
                  <span class="lesson_label" :class="fnDivClass(data.typeCd)">
                    {{ data.typeCdNm }}
                    {{ data.typeCdNm === "QnA" ? idx + 1 : undefined }}
                  </span>
                </div>
                <div class="name">
                  {{ data.title }}
                  <span v-if="data.privateYn === 'Y'" :class="fnIconClass()"></span>
                  <span v-if="data.fixedYn === 'Y'" :class="fnIconClass()"></span>
                  <p v-if="eccDivCd != 'LEARN'" class="date">{{ data.dateInfo }}</p>
                </div>
              </div>
            </div>
            <div class="acd_cnt">
              <CmmnCommuDetail
                v-if="selectedId === data.keyId"
                :selectKeyId="data.keyId"
                :openPopFunc="openPopFunc"
                :deleteFunc="deleteFunc"
                :detailFunc="detailFunc"
              >
              </CmmnCommuDetail>
            </div>
          </li>
        </ul>
        &lt;!&ndash; // 목록 내용 있을때 : 길이 > 0  &ndash;&gt;
      </div>-->
<!-- 목록 내용 없을때 : 길이 = 0 -->
<!-- <div v-else class="no_lesson">
  <p class="font_gray">등록된 자료가 없습니다.</p>
</div>-->
<!-- // 목록 내용 없을때 : 길이 = 0 -->
<script setup lang="ts">
import CommentList from "@/components/program/myProgram/classes/CommentList.vue";
import CmmnCommuDetail from "@/components/program/myProgram/classes/CmmnCommuDetail.vue";
import { inject, onMounted, ref, watch } from "vue";
import { accordion } from "@/assets/js/common";

/** 인터페이스 영역 */
interface cmmnDataFormat {
  keyId: number;
  typeCd: string;
  typeCdNm: string;
  title: string;
  content: string;
  fixedYn: string;
  privateYn: string;
  privatePw: string;
  referKeyId: string;
  dateInfo: string;
  applyKeyId: string;
  applyTitle: string;
  applyContent: string;
}
/** prop / 변수 모음 */
// eslint-disable-next-line no-unused-vars
const prop = defineProps({
  idx: { type: Number, required: true },
  menuName: { type: String, required: true },
  eliId: { type: Number, required: true },
  dataList: { type: Array<cmmnDataFormat>, required: true },
  totalCnt: { type: Number, required: true },
  openPopFunc: { type: Function, required: false },
  deleteFunc: { type: Function, required: false },
  detailFunc: { type: Function, required: true },
  eccDivCd: { type: String, required: true },
  onClickNextMenu: { type: Function, required: true },
  onClickPrevMenu: { type: Function, required: true },
});

//const eccDivCd = inject<String>("eccDivCd");
const eccDivCd = prop.eccDivCd;
let selectedId = ref<number>();

onMounted(() => {
  accordion();
});

watch(selectedId, (newVal) => {
  selectedId.value = newVal;
});

/** 메소드(깊) : 코드값 별로 클래스 색 입히기 */
function fnDivClass(_div: string) {
  let className = "";
  switch (_div) {
    case "LEARN":
      className = "green";
      break;
    case "QNA":
      className = "green";
      break;
    case "NOTICE":
      className = "blue";
      break;
    case "V":
      className = "gray";
      break;
    case "Y":
      className = "red";
      break;
    case "Z":
      className = "blue";
      break;
    case "F":
      className = "navy";
      break;
    default:
      className = "red";
  }
  return className;
}

/** 메소드(깊) : 메뉴 별 아이콘 클래스 추가 */
function fnIconClass() {
  let className = "";
  if (prop.eccDivCd === "QNA") {
    className = "qus_locked";
  } else if (prop.eccDivCd === "NOTICE") {
    className = "notice_fixed";
  }
  return className;
}

function selectedEntity(keyId: number) {
  selectedId.value = keyId;
}
</script>
