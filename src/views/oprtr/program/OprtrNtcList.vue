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
                <input type="radio" name="radio_tab_lg" id="radio1_6" class="hidden" value="" checked />
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
                  <router-link to="/program/programOprt/qna" class="btn_icon icon_only arrow_prev_white"
                    >이전탭</router-link
                  >
                  <p class="tab_title">공지사항</p>
                  <router-link to="" class="btn_icon icon_only arrow_next_white">다음탭</router-link>
                </div>
                <div class="count">
                  <p>공지사항</p>
                  <strong>12</strong>
                </div>
                <div class="list_btn">
                  <button class="btn_icon myprogram" @click="popupShow(0)">공지사항 등록</button>
                </div>
              </div>
              <div class="sub_section">
                <!-- [pp] 내용 없을때 -->
                <!-- <div class="no_lesson">
                  <p class="font_gray">등록된 공지사항이 없습니다.</p>
                </div> -->
                <!--  -->
                <div class="myclass_listwrap">
                  <ul class="refer_list">
                    <li class="accordion">
                      <div class="acd_tit">
                        <div class="refer_tit">
                          <div class="type">
                            <span class="lesson_label purple">공지 1</span>
                          </div>
                          <div class="name">
                            드론 학술/논문 자료 <span class="notice_fixed">고정</span>
                            <p class="date">2024.09.10 12:00 ~ 2024.10.01 12:00</p>
                          </div>
                        </div>
                      </div>
                      <div class="acd_cnt">
                        <div class="qna_cnt">
                          <div class="btn_wrap">
                            <button type="button" class="btn_round btn_white btn_sm">삭제</button>
                            <button type="button" class="btn_round btn_white btn_sm" @click="popupShow(1)">수정</button>
                          </div>
                          <div class="qna_wrap">
                            <div>
                              <div class="tit_wrap">
                                <strong class="title">제목</strong>
                                <div>Deep Learning 알고리즘을 만들어보왔어요, 평가좀 해주세요.</div>
                              </div>
                              <div class="cnt_wrap">
                                <strong class="title">내용</strong>
                                <div>
                                  <p>
                                    Deep Learning 알고리즘을 만들어보왔어요, 평가좀 해주세요. 가능하시면 첨석
                                    부탁드려용~^^
                                  </p>
                                  <div class="file_list column">
                                    <div class="filedown">
                                      <a href="javascript:void(0);">
                                        <div class="title">
                                          <p>
                                            <strong class="float_label"><span>.png</span><span>115 MB</span></strong
                                            >인공기능 알고리증
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                    <div class="filedown">
                                      <a href="javascript:void(0);">
                                        <div class="title">
                                          <p>
                                            <strong class="float_label"><span>.ppt</span><span>115 MB</span></strong
                                            >인공기능 알고리증 구성도인공기능 알고리증 구성도인공기
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
                            드론 이미지 자료
                            <p class="date">2024.09.10 12:00 ~ 2024.10.01 12:00</p>
                          </div>
                        </div>
                      </div>
                      <div class="acd_cnt">
                        <div class="qna_cnt">
                          <div class="btn_wrap">
                            <button type="button" class="btn_round btn_white btn_sm">삭제</button>
                            <button type="button" class="btn_round btn_white btn_sm">수정</button>
                          </div>
                          <div class="qna_wrap">
                            <div>
                              <div class="tit_wrap">
                                <strong class="title">제목</strong>
                                <div>Deep Learning 알고리즘을 만들어보왔어요, 평가좀 해주세요.</div>
                              </div>
                              <div class="cnt_wrap">
                                <strong class="title">내용</strong>
                                <div>
                                  <p>
                                    Deep Learning 알고리즘을 만들어보왔어요, 평가좀 해주세요. 가능하시면 첨석
                                    부탁드려용~^^
                                  </p>
                                  <div class="file_list column">
                                    <div class="filedown">
                                      <a href="javascript:void(0);">
                                        <div class="title">
                                          <p>
                                            <strong class="float_label"><span>.png</span><span>115 MB</span></strong
                                            >인공기능 알고리증
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                    <div class="filedown">
                                      <a href="javascript:void(0);">
                                        <div class="title">
                                          <p>
                                            <strong class="float_label"><span>.ppt</span><span>115 MB</span></strong
                                            >인공기능 알고리증 구성도인공기능 알고리증 구성도인공기
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
                            학습 자료 제목은 길어지면 말줄임 없이 밑으로 떨어집니다 학습 자료 제목은 길어지면 말줄임
                            없이 밑으로 떨어집니다 학습 자료 제목은 길어지면 말줄임 없이 밑으로 떨어집니다
                            <p class="date">2024.09.10 12:00 ~ 2024.10.01 12:00</p>
                          </div>
                        </div>
                      </div>
                      <div class="acd_cnt">
                        <div class="qna_cnt">
                          <div class="btn_wrap">
                            <button type="button" class="btn_round btn_white btn_sm">삭제</button>
                            <button type="button" class="btn_round btn_white btn_sm">수정</button>
                          </div>
                          <div class="qna_wrap">
                            <div>
                              <div class="tit_wrap">
                                <strong class="title">제목</strong>
                                <div>Deep Learning 알고리즘을 만들어보왔어요, 평가좀 해주세요.</div>
                              </div>
                              <div class="cnt_wrap">
                                <strong class="title">내용</strong>
                                <div>
                                  <p>
                                    Deep Learning 알고리즘을 만들어보왔어요, 평가좀 해주세요. 가능하시면 첨석
                                    부탁드려용~^^
                                  </p>
                                  <div class="file_list column">
                                    <div class="filedown">
                                      <a href="javascript:void(0);">
                                        <div class="title">
                                          <p>
                                            <strong class="float_label"><span>.png</span><span>115 MB</span></strong
                                            >인공기능 알고리증
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                    <div class="filedown">
                                      <a href="javascript:void(0);">
                                        <div class="title">
                                          <p>
                                            <strong class="float_label"><span>.ppt</span><span>115 MB</span></strong
                                            >인공기능 알고리증 구성도인공기능 알고리증 구성도인공기
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
              </div>
              <div class="comment_wrapper">
                <!-- [pp] 댓글 없을시 strong 삭제, my_comment만 보이게 -->
                <strong>댓글<span>34</span></strong>
                <div class="my_comment">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_ex2.png" alt="프로필 이미지" />
                  </div>
                  <div class="letter_count count100">
                    <input type="search" class="form-control" placeholder="댓글을 입력해주세요" />
                    <p class="letter_counter"></p>
                  </div>
                </div>
                <div class="comment_box">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_ex1.png" alt="프로필 이미지" />
                  </div>
                  <div class="name">
                    이하나
                    <p>1분 전</p>
                  </div>
                  <p class="comment">
                    강의가 너무 좋아요, 다음학기에도 꼭 듣고 싶은 비교과 프로그램이에요 강의가 너무 좋아요, 다음학기에도
                    꼭 듣고 싶은 비교과 프로그램이에요
                  </p>
                  <div class="iconbtn_wrap">
                    <div>
                      <p class="check_like">
                        <input type="checkbox" id="like1" name="like1" />
                        <label for="like1">좋아요</label>
                      </p>
                      <p class="count">120</p>
                    </div>
                    <div>
                      <p class="check_comment">
                        <input type="checkbox" id="comment1" name="comment1" />
                        <label for="comment1">댓글</label>
                      </p>
                      <p class="count">0</p>
                    </div>
                    <div>
                      <button type="button" class="btn_icon bell icon_only">알림</button>
                    </div>
                  </div>
                </div>
                <div class="comment_box">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_ex1.png" alt="프로필 이미지" />
                  </div>
                  <div class="name">
                    이하나
                    <p>1분 전</p>
                  </div>
                  <p class="comment">처음에는 어렵지만 점점 귀에 들어옵니다. 좌절하지 마시고 파이팅!</p>
                  <div class="iconbtn_wrap">
                    <div>
                      <p class="check_like">
                        <input type="checkbox" id="like2" name="like2" />
                        <label for="like2">좋아요</label>
                      </p>
                      <p class="count">120</p>
                    </div>
                    <div>
                      <p class="check_comment">
                        <input type="checkbox" id="comment2" name="comment2" />
                        <label for="comment2">댓글</label>
                      </p>
                      <p class="count">0</p>
                    </div>
                    <div>
                      <button type="button" class="btn_icon bell icon_only">알림</button>
                    </div>
                  </div>
                </div>
                <div class="comment_box">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_ex1.png" alt="프로필 이미지" />
                  </div>
                  <div class="name">
                    이하나
                    <p>1분 전</p>
                  </div>
                  <p class="comment">
                    처음에는 어렵지만 점점 귀에 들어옵니다. 좌절하지 마시고 파이팅! 처음에는 어렵지만 점점 귀에
                    들어옵니다. 좌절하지 마시고 파이팅! 처음에는 어렵지만 점점 귀에 들어옵니다. 좌절하지 마시고 파이팅!
                    처음에는 어렵지만 점점 귀에 들어옵니다. 좌절하지 마시고 파이팅!
                  </p>
                  <div class="iconbtn_wrap">
                    <div>
                      <p class="check_like">
                        <input type="checkbox" id="like3" name="like3" />
                        <label for="like3">좋아요</label>
                      </p>
                      <p class="count">120</p>
                    </div>
                    <div>
                      <p class="check_comment">
                        <input type="checkbox" id="comment3" name="comment3" />
                        <label for="comment3">댓글</label>
                      </p>
                      <p class="count">0</p>
                    </div>
                    <div>
                      <button type="button" class="btn_icon bell icon_only">알림</button>
                    </div>
                  </div>
                  <div class="reply_wrap">
                    <div class="my_comment">
                      <div class="img_wrap">
                        <img src="@/assets/images/common/img_ex2.png" alt="프로필 이미지" />
                      </div>
                      <div class="letter_count count100">
                        <input type="search" class="form-control" placeholder="답글을 입력해주세요" />
                        <p class="letter_counter"></p>
                      </div>
                    </div>
                    <div class="comment_box">
                      <div class="img_wrap">
                        <img src="@/assets/images/common/img_ex1.png" alt="프로필 이미지" />
                      </div>
                      <div class="name">
                        이하나
                        <p>1분 전</p>
                      </div>
                      <p class="comment">일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이</p>
                    </div>
                  </div>
                </div>
                <div class="comment_box">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_ex1.png" alt="프로필 이미지" />
                  </div>
                  <div class="name">
                    이하나
                    <p>1분 전</p>
                  </div>
                  <p class="comment">처음에는 어렵지만 점점 귀에 들어옵니다. 좌절하지 마시고 파이팅!</p>
                  <div class="iconbtn_wrap">
                    <div>
                      <p class="check_like">
                        <input type="checkbox" id="like4" name="like4" />
                        <label for="like4">좋아요</label>
                      </p>
                      <p class="count">120</p>
                    </div>
                    <div>
                      <p class="check_comment">
                        <input type="checkbox" id="comment4" name="comment4" />
                        <label for="comment4">댓글</label>
                      </p>
                      <p class="count">0</p>
                    </div>
                    <div>
                      <button type="button" class="btn_icon bell icon_only">알림</button>
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

  <PopupView v-model="isPopups[0]">
    <template #title>공지사항 등록</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(0)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="popupHide(0)">저장</button>
    </template>
    <div class="tbl tbl_row scrollx_tbl_xs">
      <table>
        <caption>
          공지사항 등록
        </caption>
        <colgroup>
          <col style="width: 16.5%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">상단고정</th>
            <td>
              <p class="toggle_switch">
                <input type="checkbox" id="toggle_switch" name="toggle_switch" />
                <label for="toggle_switch">
                  <span>스위치</span>
                </label>
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">제목</th>
            <td>
              <div class="letter_count count40">
                <input type="text" class="form_style wd_p100" placeholder="학습자료명을 입력해주세요." />
                <p class="letter_counter"></p>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">설명</th>
            <td>
              <div class="letter_count count1000">
                <textarea rows="4" class="form_style wd_p100" placeholder="학습자료 설명을 입력해주세요."></textarea>
                <p class="letter_counter"></p>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">파일첨부</th>
            <td>
              <div class="attach_filewrap">
                <label class="btn_round btn_white btn_sm">
                  파일 추가
                  <input type="file" class="hidden" />
                </label>
                <div class="attach_file_list">
                  <div class="file_row">
                    <div class="file_name">
                      <p>알고리즘수정.hwp</p>
                      <i>145KB</i>
                      <button type="button" class="btn_icon icon_only download">다운로드</button>
                      <button type="button" class="btn_icon icon_only delete">삭제</button>
                    </div>
                  </div>
                  <div class="file_row">
                    <div class="file_name">
                      <p>알고리즘수정.hwp</p>
                      <i>145KB</i>
                      <button type="button" class="btn_icon icon_only download">다운로드</button>
                      <button type="button" class="btn_icon icon_only delete">삭제</button>
                    </div>
                  </div>
                  <p class="info font_red">*최대 5개 등록 가능합니다.</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </PopupView>
  <PopupView v-model="isPopups[1]">
    <template #title>공지사항 수정</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(1)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="popupHide(1)">저장</button>
    </template>
    <div class="tbl tbl_row scrollx_tbl_xs">
      <table>
        <caption>
          공지사항 수정
        </caption>
        <colgroup>
          <col style="width: 16.5%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">상단고정</th>
            <td>
              <p class="toggle_switch">
                <input type="checkbox" id="toggle_switch" name="toggle_switch" checked />
                <label for="toggle_switch">
                  <span>스위치</span>
                </label>
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">제목</th>
            <td>
              <div class="letter_count count40">
                <input type="text" class="form_style wd_p100" value="딥러닝에 대한 공지사항입니다." />
                <p class="letter_counter"></p>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">설명</th>
            <td>
              <div class="letter_count count1000">
                <textarea
                  rows="4"
                  class="form_style wd_p100"
                  value="딥러닝에 대한 공지사항입니다. 자세한 내용은 첨부파일 확인 바람
"
                ></textarea>
                <p class="letter_counter"></p>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">파일첨부</th>
            <td>
              <div class="attach_filewrap">
                <label class="btn_round btn_white btn_sm">
                  파일 추가
                  <input type="file" class="hidden" />
                </label>
                <div class="attach_file_list">
                  <div class="file_row">
                    <div class="file_name">
                      <p>알고리즘수정.hwp</p>
                      <i>145KB</i>
                      <button type="button" class="btn_icon icon_only download">다운로드</button>
                      <button type="button" class="btn_icon icon_only delete">삭제</button>
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </PopupView>
</template>

<script lang="ts">
import { accordion, letterCount } from "@/assets/js/common";
import PopupView from "@/components/common/PopupView.vue";

export default {
  components: {
    PopupView,
  },
  data: () => ({
    isPopups: [false, false],
  }),
  mounted: function () {
    accordion();
    letterCount();
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
  },
};
</script>
