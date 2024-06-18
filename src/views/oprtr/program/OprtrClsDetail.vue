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
        <div class="myprogram_wrapper">
          <div class="myclassroom_wrapper">
            <div class="mystatus_wrap">
              <div class="mystatus_box">
                <h4>현재 프로그램 <br />운영 중입니다.</h4>
                <p class="date">운영기간 : 2024.01.01~2024.08.28</p>
                <div class="oprtr_status">
                  <div class="profile_wrap">
                    <div class="img_wrap">
                      <img src="/src/assets/images/common/img_ex1.png" alt="프로필 이미지" />
                    </div>
                    <p class="name">나교수<strong>교수</strong></p>
                    <p class="part">간호학부 · 간호학과</p>
                  </div>
                </div>
              </div>
              <div class="btn_area">
                <router-link to="/program/programOprt" class="btn_round btn_secondary btn_icon btn_xl myprogram"
                  >비교과 운영 목록</router-link
                >
              </div>
            </div>
            <div class="myclass_wrap">
              <div class="myclass_header">
                <div class="quick_move">
                  <router-link to="" class="btn_icon icon_only arrow_prev_white">이전탭</router-link>
                  <p class="tab_title">강의실</p>
                  <router-link to="/program/programOprt/test" class="btn_icon icon_only arrow_next_white"
                    >다음탭</router-link
                  >
                </div>
                <div class="list_btn">
                  <router-link to="/program/programOprt/class" class="btn_icon myprogram">강의목록</router-link>
                </div>
              </div>
              <div class="sub_section">
                <div class="lesson_wrapper">
                  <div class="video_wrap">
                    <!-- 동영상 영역 -->
                  </div>
                  <div class="lesson_cnt">
                    <div class="title">
                      <p>
                        <span>1회차</span>
                        AI 알고리즘의 이해1회차 AI 알고리즘의 이해 1회차 AI 알고리즘의 이해 1회차 AI 알고리즘의이해1회차
                      </p>
                      <div class="iconbtn_wrap">
                        <div>
                          <p class="check_like2">
                            <input type="checkbox" id="like1" name="like1" />
                            <label for="like1">좋아요</label>
                          </p>
                          <p class="count">120</p>
                        </div>
                      </div>
                    </div>
                    <div class="cnt">
                      <div class="editor_area">
                        새로운 드론 수리방법을 알려주는 강의입니다. 새로운 드론 수리방법을 알려주는 강의입니다. 새로운
                        드론 수리방법을 알려주는 강의입니다. 새로운 드론 수리방법을 알려주는 강의입니다. 새로운 드론
                        수리방법을 알려주는 강의입니다. 새로운 드론 수리방법을 알려주는 강의입니다. 새로운 드론 수리방법
                        을 알려주는 강의입니다. 새로운 드론 수리방법을 알려주는 강의입니다. 새로운 드론 수리방법을
                        알려주는 강의입니다.
                      </div>
                    </div>
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
