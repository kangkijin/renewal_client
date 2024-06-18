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
                <input type="radio" name="radio_tab_lg" id="radio1_1" class="hidden" value="" />
                <label for="radio1_1">강의실</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_2" class="hidden" value="" />
                <label for="radio1_2">시험</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_3" class="hidden" value="" checked />
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
                  <strong>과제 비중</strong>
                  <p>50%</p>
                </li>
                <li>
                  <strong>결과 공개</strong>
                  <p>점수 + 정답</p>
                </li>
                <li>
                  <strong>응시 기간</strong>
                  <p>2024 - 09 - 10 12 : 00 ~ 2024 - 10 - 01 01 : 00</p>
                </li>
              </ul>
            </div>
            <div class="intro_cnt">
              <div class="wrap">
                <div class="title">
                  <span>1회차</span>
                  준비과제
                </div>
                <div class="cnt">
                  <div class="editor_area">
                    드론정비과정 프로그램 상세내용을 확인하고 시험을 풀어주세요. 드론정비과정 프로그램 상세내용을
                    확인하고 시험을 풀어주세요.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="attached_filedown">
            <p class="title">첨부파일<span>5</span>개</p>
            <!-- [pp] 첨부파일 없을때 -->
            <!-- <div class="no_attachedfile">
              <p>첨부파일이 없습니다.</p>
            </div> -->
            <div class="file_list">
              <div class="filedown">
                <a href="javascript:void(0);">
                  <div class="title">
                    <p>
                      <strong class="float_label"><span>.hwp</span></strong
                      >과제 참고1
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
                      >과제 참고 과제 참고 과제 참고 과제 참고 과제 참고2
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
                      >과제 참고3
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
                      >과제 참고4
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
                      >과제 참고5
                    </p>
                  </div>
                  <span>115 MB</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
