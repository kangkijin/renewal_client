<template>
  <div class="main_section section1">
    <div class="grid_content">
      <div class="flex_wrap">
        <div class="myinfo_box box">
          <div class="top">
            <div class="img_wrap">
              <img src="@/assets/images/common/img_ex1.png" alt="이미지 예시" />
            </div>
            <div class="info">
              <strong>황유림<span>학생</span></strong>
              <ul>
                <li>간호학부ㆍ간호학과</li>
                <li class="bold">3학년(휴학)</li>
              </ul>
            </div>
          </div>
          <div class="bottom">
            <div class="title">
              <strong>나의 일정(건)</strong>
              <span>2023/11/01</span>
            </div>
            <ul>
              <li>
                <p>교과</p>
                5
              </li>
              <li>
                <p>비교과</p>
                2
              </li>
              <li>
                <p>상담</p>
                1
              </li>
              <li>
                <p>조사/설문</p>
                1
              </li>
            </ul>
          </div>
          <div class="graph_info">
            <ul>
              <li>
                <div class="title">
                  <strong>이수학점</strong>
                  <p>
                    <span>56</span>
                    /140
                  </p>
                </div>
                <div class="progress">
                  <span class="essential wd_p30"><i>필수</i></span>
                  <span class="choice wd_p30"><i>선택</i></span>
                  <span class="average wd_p68"><i>평균 68</i></span>
                </div>
              </li>
              <li>
                <div class="title">
                  <strong>성적평점</strong>
                  <p>
                    <span>3.88</span>
                    /4.5
                  </p>
                </div>
                <div class="progress">
                  <span class="choice wd_p50"></span>
                  <span class="average wd_p68"><i>평균 4.3</i></span>
                </div>
              </li>
              <li>
                <div class="title">
                  <strong>졸업인증 마일리지</strong>
                  <p>
                    <span>88,600</span>
                    /500,000
                  </p>
                </div>
                <div class="progress">
                  <span class="choice wd_p30"></span>
                  <span class="average wd_p45"><i>140,600</i></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="box_wrap">
          <div class="box">
            <div class="arrow_slide mini">
              <swiper v-bind="swiperOptions" :modules="modules">
                <swiper-slide>
                  <img src="@/assets/images/main/img_mainbanner1.png" alt="예시" />
                </swiper-slide>
                <swiper-slide>
                  <img src="@/assets/images/main/img_mainbanner2.png" alt="예시" />
                </swiper-slide>
                <swiper-slide>
                  <img src="@/assets/images/main/img_mainbanner3.png" alt="예시" />
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="box">
            <div class="box_titlewrap">
              <h4>대학인증 <span class="number_sm">3건</span></h4>
              <div class="function">
                <router-link to="" class="direct_link">전체보기</router-link>
              </div>
            </div>
            <div class="main_certibox">
              <!-- 없을때 표출 -->
              <!-- <div class="no_notice">
                <p>대학인증이 없습니다</p>
              </div> -->
              <div class="paging_slide">
                <swiper v-bind="swiperOptions2" :modules="modules">
                  <swiper-slide>
                    <div class="certi_info">
                      <span class="mark">최우수</span>
                      <div class="cnt">
                        <strong>한국대학교 인증</strong>
                        <h4>최우수 인증</h4>
                        <ul>
                          <li>간호학부</li>
                          <li>간호학과</li>
                        </ul>
                        <p>황유림(20220123)</p>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="certi_info">
                      <span class="mark">최우수</span>
                      <div class="cnt">
                        <strong>한국대학교 인증</strong>
                        <h4>최우수 인증</h4>
                        <ul>
                          <li>간호학부</li>
                          <li>간호학과</li>
                        </ul>
                        <p>김재성(20210123)</p>
                      </div>
                    </div>
                  </swiper-slide>
                  <swiper-slide>
                    <div class="certi_info">
                      <span class="mark">최우수</span>
                      <div class="cnt">
                        <strong>한국대학교 인증</strong>
                        <h4>최우수 인증</h4>
                        <ul>
                          <li>간호학부</li>
                          <li>간호학과</li>
                        </ul>
                        <p>이황섭(20223456)</p>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
              <div class="function_download">
                <div class="pop_check">
                  <v-menu transition="slide-y-transition" :close-on-content-click="true" v-model="qrCheck">
                    <template v-slot:activator="{ props }">
                      <label v-bind="props">
                        <strong>
                          <span></span>
                          <span></span>
                          <span></span>
                        </strong>
                      </label>
                    </template>
                    <div class="pop_show">
                      <button type="button" @click="popupShow(4)">QR & URL</button>
                      <button type="button">Download</button>
                    </div>
                  </v-menu>
                </div>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="box_titlewrap">
              <h4>
                최신알림
                <ul class="alarm_list">
                  <li class="bell">2</li>
                  <li class="like">50</li>
                </ul>
              </h4>
              <div class="function">
                <div class="select_row wd_80">
                  <vue-select :options="selectedOption.options" v-model="selectedOption.value" class="select_box sm" />
                </div>
              </div>
            </div>
            <div class="newalarm_wrap">
              <!-- 알람 없을떄 -->
              <!-- <div class="no_alarm">
              <p>최근<span>1주일</span>간 수신된 알림이 없습니다.</p>
            </div> -->
              <div class="alarm">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex1.png" alt="이미지 예시" />
                </div>
                <div class="info">
                  <strong>황유림<span>간호학과ㆍ3학년</span></strong>
                  <p>교수님 지금 찾아봐도 될까요?</p>
                  <span class="date">2024.02.15 19:29</span>
                </div>
                <div class="function">
                  <p class="check_like">
                    <input type="checkbox" id="like1" name="like1" />
                    <label for="like1">좋아요</label>
                  </p>
                  <button type="button" class="btn_icon icon_only comment" @click="popupShow(0)">?</button>
                </div>
              </div>
              <div class="alarm reply">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="이미지 예시" />
                </div>
                <div class="info">
                  <strong>이형준<span>교육학과&middot;1학년</span></strong>
                  <p>교수님 지금 찾아봐도 될까요?</p>
                  <span class="date">2023.09.01 09:29</span>
                </div>
              </div>
              <div class="alarm reply">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="이미지 예시" />
                </div>
                <div class="info">
                  <strong>이형준<span>교육학과&middot;1학년</span></strong>
                  <p>교수님 지금 찾아봐도 될까요?</p>
                  <span class="date">2023.09.01 09:29</span>
                </div>
              </div>
            </div>
            <div class="alarm_footer">
              <button type="button" class="btn_icon note icon_only" @click="popupShow(1)">
                <span class="hover">발송내역</span>
              </button>
              <button type="button" class="btn_icon bell icon_only" @click="popupShow(2)">
                <span class="hover">알림발송</span>
              </button>
              <button type="button" class="btn_icon list icon_only" @click="popupShow(3)">
                <span class="hover">주소록</span>
              </button>
            </div>
            <!-- <div class="alarm_footer">
              <button type="button" class="btn_icon note icon_only" @click="this.$alert('ㅎㅇ')">발송내역</button>
              <button type="button" class="btn_icon bell icon_only" @click="this.$toast('저장되었습니다.', 'success')">
                알림발송
              </button>
              <button type="button" class="btn_icon list icon_only" @click="onClickConfirm('확인좀요')">주소록</button>
            </div> -->
          </div>
        </div>
      </div>
      <div class="flex_wrap">
        <div class="main_calendar">
          <div class="radio_tab_wrap">
            <p class="radio_tab">
              <input type="radio" id="radio_calendar1" name="radio_calendar" value="weekly" v-model="radio" />
              <label for="radio_calendar1">주간</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio_calendar2" name="radio_calendar" value="daily" v-model="radio" />
              <label for="radio_calendar2">일간</label>
            </p>
          </div>
          <button type="button" class="btn_sm btn_icon write2" @click="popupShow(5)">일정등록</button>
          <v-calendar :events="calendarEvents" />
          <p class="info_txt">※ 날짜를 선택하려면 길게 누르세요.</p>

          <!-- 주간 -->
          <div v-if="radio == 'weekly'">
            <div class="main_calendarlist">
              <div>
                <h3>1.18 (목)</h3>
                <ul>
                  <li class="normal">
                    <p class="title">교수님 미팅</p>
                    <span class="date">2024/01/15 17:29 ~ 2024/01/20 17:29</span>
                  </li>
                  <li class="normal">
                    <p class="title">서비스 산업 강의 수강</p>
                    <span class="date">2024/01/16 17:29 ~ 2024/01/20 17:29</span>
                  </li>
                  <li class="point">
                    <p class="title">디지털 마케팅 전략 플랫폼 마케팅 성공 요인 강의 수강</p>
                    <span class="date">2024/01/17 17:29 ~ 2024/01/20 17:29</span>
                  </li>
                  <li class="point">
                    <p class="title">챗 GPT와 함께하는 AI 채팅 수강 신청ㄴ</p>
                    <span class="date">2024/01/18 17:29 ~ 2024/01/20 17:29</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3>1.19 (금)</h3>
                <ul>
                  <li class="normal">
                    <p class="title">교수님 미팅</p>
                    <span class="date">2024/01/18 17:29 ~ 2024/01/20 17:29</span>
                  </li>
                  <li class="normal">
                    <p class="title">포트폴리오 작성</p>
                    <span class="date">2024/01/19 17:29 ~ 2024/01/20 17:29</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3>1.20 (토)</h3>
                <ul>
                  <li class="normal">
                    <p class="title">교수님 미팅</p>
                    <span class="date">2024/01/19 17:29 ~ 2024/01/22 18:29</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- 일간 -->
          <div v-if="radio == 'daily'">
            <div class="main_calendarlist">
              <div>
                <h3>1.18 (목)</h3>
                <ul>
                  <li class="normal">
                    <p class="title">교수님 미팅</p>
                    <span class="date">2023/11/15 17:29 ~ 2023/11/20 17:29</span>
                  </li>
                  <li class="point">
                    <p class="title">디지털 마케팅 전략 플랫폼 마케팅 성공 요인 강의 수강</p>
                    <span class="date">2023/11/15 17:29 ~ 2023/11/20 17:29</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="box" :class="chartLoaded ? '' : 'loading_md'">
          <div class="ability_chart">
            <div class="radio_tab_wrap">
              <p class="radio_tab">
                <input type="radio" id="radio_ability1" name="radio_ability" value="core" v-model="radio2" checked />
                <label for="radio_ability1">핵심역량</label>
              </p>
              <p class="radio_tab">
                <input type="radio" id="radio_ability2" name="radio_ability" value="major" v-model="radio2" />
                <label for="radio_ability2">전공능력</label>
              </p>
            </div>
            <div class="radio_sm_txt_wrap">
              <p class="radio_black_txt">
                <input type="radio" name="radio_core" id="radio_core1" />
                <label for="radio_core1">학과</label>
              </p>
              <p class="radio_black_txt">
                <input type="radio" name="radio_core" id="radio_core2" />
                <label for="radio_core2">학교</label>
              </p>
              <p class="radio_black_txt">
                <input type="radio" name="radio_core" id="radio_core3" checked />
                <label for="radio_core3">4년</label>
              </p>
            </div>
            <RadarChart
              v-if="chartLoaded"
              :class="chartLoaded ? '' : 'loading_md'"
              :dataset="chartDatasets"
              :colorset="chartDatasets2"
              :labels="chartDatasets3"
              :radarSize="110"
            ></RadarChart>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 팝업 -->
  <PopupView v-model="isPopups[0]">
    <template #title>알림보내기</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(0)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl">발송</button>
    </template>
    <div class="tbl tbl_row scrollx_tbl_xs">
      <table>
        <caption>
          작성
        </caption>
        <colgroup>
          <col style="width: 18%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">수신자</th>
            <td>
              박형식 외 15명
              <v-menu
                class="tooltip_area"
                transition="slide-y-transition"
                :close-on-content-click="false"
                v-model="tooltip"
              >
                <template v-slot:activator="{ props }">
                  <button type="button" class="btn_tooltip" v-bind="props">버튼</button>
                </template>
                <div class="tooltip_cnt">
                  <div class="hover_title">발송명단</div>
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <br />
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <br />
                  <span class="name">수신인</span>
                </div>
              </v-menu>
            </td>
          </tr>
          <tr>
            <th scope="row">제목</th>
            <td>
              <div class="letter_count count40">
                <input type="search" class="form_style wd_p100" placeholder="메시지 제목을 입력해주세요" />
                <p class="letter_counter"></p>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">내용</th>
            <td>
              <div class="letter_count count1000">
                <textarea class="form_style wd_p100" rows="5" placeholder="메시지 내용을 입력해주세요"></textarea>
                <p class="letter_counter"></p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </PopupView>

  <PopupView v-model="isPopups[1]" class="large">
    <template #title>발송내역</template>
    <template #footer></template>
    <div class="search_wrap responsive_mob">
      <div class="select_row sm flex_inherit">
        <vue-select class="select_box" :options="selectedOption.options" v-model="selectedOption.value" />
      </div>
      <div class="search_daywrap flex_fit">
        <VDateInput v-model="date"></VDateInput>
        <span>~</span>
        <VDateInput v-model="date"></VDateInput>
      </div>
      <div class="search_row">
        <input type="search" class="form_style wd_p100" placeholder="제목/내용/수신인으로 검색하세요" />
        <button type="button" class="btn_search btn_icon icon_only">검색</button>
      </div>
    </div>
    <p class="total_count dp_block ta_r pd_b15"><strong>34</strong>건 발송</p>
    <div class="scroll_cnt">
      <!-- 내용 없을때 표출 -->
      <!-- <div class="no_notice">
        <p>발송내역이 없습니다</p>
      </div> -->
      <ul class="senddetail_list">
        <li>
          <h3>발송내역 제목입니다. 15인 이상시 외 ? 명 처리</h3>
          <ul>
            <li>수신인1</li>
            <li>수신인2</li>
            <li>수신인3</li>
            <li>수신인4</li>
            <li>수신인5</li>
          </ul>
          <p class="date">발송일 2024.04.01 09:30</p>
          <div>
            우리 내일 꼭 보여서 함게 비교과 팀 모임해요, 장소는 강의실 102호 11시까지 모여요, 우리 내일 꼭 보여서 함게
            비교과 팀 모임해요, 장소는 강의실 102호 11시까지 모여요 우리 내일 꼭 보여서 함게 비교과 팀 모임해요, 장소는
            강의실 102호 11시까지 모여요, 우리 내일 꼭 보여서 함게 비교과 팀 모임해요, 장소는 강의실 102호 11시까지
            모여요
          </div>
        </li>
        <li>
          <h3>발송내역 제목입니다. 15인 이상시 외 ? 명 처리</h3>
          <ul>
            <li>
              수신인1 외 50명
              <v-menu
                class="tooltip_area"
                transition="slide-y-transition"
                :close-on-content-click="false"
                v-model="tooltip2"
              >
                <template v-slot:activator="{ props }">
                  <button type="button" class="btn_tooltip" v-bind="props">버튼</button>
                </template>
                <div class="tooltip_cnt">
                  수신인 수신인 수신인 수신인 수신인<br />
                  수신인 수신인 수신인 수신인 수신인<br />
                  수신인 수신인 수신인 수신인 수신인
                </div>
              </v-menu>
            </li>
          </ul>
          <p class="date">발송일 2024.04.01 09:30</p>
          <div>
            우리 내일 꼭 보여서 함게 비교과 팀 모임해요, 장소는 강의실 102호 11시까지 모여요, 우리 내일 꼭 보여서 함게
            비교과 팀 모임해요, 장소는 강의실 102호 11시까지 모여요 우리 내일 꼭 보여서 함게 비교과 팀 모임해요, 장소는
            강의실 102호 11시까지 모여요, 우리 내일 꼭 보여서 함게 비교과 팀 모임해요, 장소는 강의실 102호 11시까지
            모여요
          </div>
        </li>
        <li>
          <h3>발송내역 제목입니다. 15인 이상시 외 ? 명 처리</h3>
          <ul>
            <li>
              수신인1 외 50명
              <v-menu
                class="tooltip_area"
                transition="slide-y-transition"
                :close-on-content-click="false"
                v-model="tooltip3"
              >
                <template v-slot:activator="{ props }">
                  <button type="button" class="btn_tooltip" v-bind="props">버튼</button>
                </template>
                <div class="tooltip_cnt">
                  수신인 수신인 수신인 수신인 수신인<br />
                  수신인 수신인 수신인 수신인 수신인<br />
                  수신인 수신인 수신인 수신인 수신인
                </div>
              </v-menu>
            </li>
          </ul>
          <p class="date">발송일 2024.04.01 09:30</p>
          <div>
            우리 내일 꼭 보여서 함게 비교과 팀 모임해요, 장소는 강의실 102호 11시까지 모여요, 우리 내일 꼭 보여서 함게
            비교과 팀 모임해요, 장소는 강의실 102호 11시까지 모여요 우리 내일 꼭 보여서 함게 비교과 팀 모임해요, 장소는
            강의실 102호 11시까지 모여요, 우리 내일 꼭 보여서 함게 비교과 팀 모임해요, 장소는 강의실 102호 11시까지
            모여요
          </div>
        </li>
        <li>
          <h3>발송내역 제목입니다. 15인 이상시 외 ? 명 처리</h3>
          <ul>
            <li>
              수신인1 외 50명
              <v-menu
                class="tooltip_area"
                transition="slide-y-transition"
                :close-on-content-click="false"
                v-model="tooltip4"
              >
                <template v-slot:activator="{ props }">
                  <button type="button" class="btn_tooltip" v-bind="props">버튼</button>
                </template>
                <div class="tooltip_cnt">
                  수신인 수신인 수신인 수신인 수신인<br />
                  수신인 수신인 수신인 수신인 수신인<br />
                  수신인 수신인 수신인 수신인 수신인
                </div>
              </v-menu>
            </li>
          </ul>
          <p class="date">발송일 2024.04.01 09:30</p>
          <div>
            우리 내일 꼭 보여서 함게 비교과 팀 모임해요, 장소는 강의실 102호 11시까지 모여요, 우리 내일 꼭 보여서 함게
            비교과 팀 모임해요, 장소는 강의실 102호 11시까지 모여요 우리 내일 꼭 보여서 함게 비교과 팀 모임해요, 장소는
            강의실 102호 11시까지 모여요, 우리 내일 꼭 보여서 함게 비교과 팀 모임해요, 장소는 강의실 102호 11시까지
            모여요
          </div>
        </li>
      </ul>
    </div>
    <!-- <div class="paging_wrap">
      <router-link to="" title="이전페이지" class="page_con prev_page">이전페이지</router-link>
      <router-link to="" class="active"><p>1</p></router-link>
      <router-link to=""><p>2</p></router-link>
      <router-link to=""><p>3</p></router-link>
      <router-link to=""><p>4</p></router-link>
      <router-link to=""><p>5</p></router-link>
      <router-link to="" title="다음페이지" class="page_con next_page active">다음페이지</router-link>
    </div> -->
  </PopupView>

  <PopupView v-model="isPopups[2]">
    <template #title>알림대상자 검색</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="onClickHidePopup(2)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl">초대</button>
    </template>
    <div class="divide_search">
      <div class="left flex2">
        <div class="divide_header">
          <div class="toggle_wrap">
            <div class="left mg_b0">
              <div class="divide_radio_wrap">
                <p class="radio_line">
                  <input type="radio" name="alarm_radio" id="alarm_radio1" checked />
                  <label for="alarm_radio1">학생</label>
                </p>
                <p class="radio_line">
                  <input type="radio" name="alarm_radio" id="alarm_radio2" />
                  <label for="alarm_radio2">교수</label>
                </p>
                <p class="radio_line">
                  <input type="radio" name="alarm_radio" id="alarm_radio3" />
                  <label for="alarm_radio3">상담사</label>
                </p>
              </div>
            </div>
            <div class="right">
              <vue-select
                class="select_box wd_150"
                :options="selectedOption.groups"
                :placeholder="'알림 그룹'"
              ></vue-select>
            </div>
          </div>
        </div>
        <div class="divide_cnt">
          <div class="search_wrap">
            <div class="search_row">
              <input type="search" class="form_style wd_p100" placeholder="이름 또는 아이디로 검색하세요" />
              <button type="button" class="btn_search btn_icon icon_only">검색</button>
            </div>
          </div>
          <!-- 내용 없을때 표출 -->
          <!-- <div class="no_notice">
            <p>알림대상자가 없습니다</p>
          </div> -->
          <ul class="nofitarget_list">
            <li>
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_noimg.svg" alt="이미지 없음" />
                </div>
                <p class="detail">
                  <strong>이현우이현우이현우 이현우이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <span class="like">999+</span>
                <button
                  type="button"
                  class="btn_icon icon_only add_person"
                  @click="addressAdd('나의 주소록에 등록 하시겠습니까?')"
                >
                  선택
                </button>
                <button type="button" class="btn_round btn_icon btn_xs btn_white icon_only plus" title="추가">
                  추가
                </button>
              </div>
            </li>
            <li>
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <p class="detail">
                  <strong>이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <span class="like">12</span>
                <button type="button" class="btn_icon icon_only add_person">선택</button>
                <button type="button" class="btn_round btn_icon btn_xs btn_white icon_only plus" title="추가">
                  추가
                </button>
              </div>
            </li>
            <li class="disabled">
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <p class="detail">
                  <strong>이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <span class="like">100</span>
                <button type="button" class="btn_icon icon_only add_person">선택</button>
                <p class="font_red">추가됨</p>
              </div>
            </li>
            <li>
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <p class="detail">
                  <strong>이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <span class="like">50</span>
                <button type="button" class="btn_icon icon_only add_person">선택</button>
                <button type="button" class="btn_round btn_icon btn_xs btn_white icon_only plus" title="추가">
                  추가
                </button>
              </div>
            </li>
            <li>
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <p class="detail">
                  <strong>이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <span class="like">122</span>
                <button type="button" class="btn_icon icon_only add_person">선택</button>
                <button type="button" class="btn_round btn_icon btn_xs btn_white icon_only plus" title="추가">
                  추가
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="divide_header">
          <h4>선택된 대상자 <span>4</span></h4>
        </div>
        <div class="divide_cnt">
          <ul class="nofitarget_list">
            <li>
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_noimg.svg" alt="이미지 없음" />
                </div>
                <p class="detail">
                  <strong>이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <button type="button" class="btn_round btn_icon btn_xs btn_white icon_only minus">추가</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </PopupView>

  <PopupView v-model="isPopups[3]">
    <template #title>나의 주소록 알림대상자 검색</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(3)">취소</button>
      <button
        type="button"
        class="btn_round btn_secondary btn_xl"
        @click="[popupHide(3), this.$toast('초대완료.', 'success')]"
      >
        초대
      </button>
    </template>
    <div class="divide_search">
      <div class="left flex2">
        <div class="divide_header">
          <div class="toggle_wrap">
            <div class="left mg_b0">
              <div class="divide_radio_wrap">
                <p class="radio_line">
                  <input type="radio" name="alarm_radio" id="alarm_radio1" checked />
                  <label for="alarm_radio1">학생</label>
                </p>
                <p class="radio_line">
                  <input type="radio" name="alarm_radio" id="alarm_radio2" />
                  <label for="alarm_radio2">교수</label>
                </p>
                <p class="radio_line">
                  <input type="radio" name="alarm_radio" id="alarm_radio3" />
                  <label for="alarm_radio3">상담사</label>
                </p>
              </div>
            </div>
            <div class="right">
              <vue-select
                class="select_box wd_150"
                :options="selectedOption.groups"
                :placeholder="'알림 그룹'"
              ></vue-select>
            </div>
          </div>
        </div>
        <div class="divide_cnt">
          <div class="search_wrap">
            <div class="search_row">
              <input type="search" class="form_style wd_p100" placeholder="이름 또는 아이디로 검색하세요" />
              <button type="button" class="btn_search btn_icon icon_only">검색</button>
            </div>
          </div>
          <!-- 내용 없을때 표출 -->
          <!-- <div class="no_notice">
            <p>알림대상자가 없습니다</p>
          </div> -->
          <ul class="nofitarget_list">
            <li>
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_noimg.svg" alt="이미지 없음" />
                </div>
                <p class="detail">
                  <strong>이현우이현우이현우 이현우이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <span class="like">999+</span>
                <button
                  type="button"
                  class="btn_icon icon_only add_person"
                  @click="addressAdd('나의 주소록에 등록 하시겠습니까?')"
                >
                  선택
                </button>
                <button type="button" class="btn_round btn_icon btn_xs btn_white icon_only plus" title="추가">
                  추가
                </button>
              </div>
            </li>
            <li>
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <p class="detail">
                  <strong>이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <span class="like">12</span>
                <button type="button" class="btn_icon icon_only add_person">선택</button>
                <button type="button" class="btn_round btn_icon btn_xs btn_white icon_only plus" title="추가">
                  추가
                </button>
              </div>
            </li>
            <li class="disabled">
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <p class="detail">
                  <strong>이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <span class="like">100</span>
                <button type="button" class="btn_icon icon_only add_person">선택</button>
                <p class="font_red">추가됨</p>
              </div>
            </li>
            <li>
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <p class="detail">
                  <strong>이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <span class="like">50</span>
                <button type="button" class="btn_icon icon_only add_person">선택</button>
                <button type="button" class="btn_round btn_icon btn_xs btn_white icon_only plus" title="추가">
                  추가
                </button>
              </div>
            </li>
            <li>
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <p class="detail">
                  <strong>이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <span class="like">122</span>
                <button type="button" class="btn_icon icon_only add_person">선택</button>
                <button type="button" class="btn_round btn_icon btn_xs btn_white icon_only plus" title="추가">
                  추가
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="divide_header">
          <h4>선택된 대상자 <span>4</span></h4>
        </div>
        <div class="divide_cnt">
          <!-- 내용 없을떄 
          <div class="no_notice">
            <p>선택된 대상자가 없습니다</p>
          </div>
          -->
          <ul class="nofitarget_list">
            <li>
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_noimg.svg" alt="이미지 없음" />
                </div>
                <p class="detail">
                  <strong>이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <button type="button" class="btn_round btn_icon btn_xs btn_white icon_only minus">추가</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </PopupView>

  <PopupView v-model="isPopups[4]" class="small">
    <template #title>QR & URL</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(4)">닫기</button>
    </template>
    <div class="tbl tbl_row">
      <table>
        <caption>
          QR & URL
        </caption>
        <colgroup>
          <col style="width: 30%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scoper="row">QR</th>
            <td>
              <img src="@/assets/images/common/img_qrcode.png" class="dp_block" />
              <button type="button" class="btn_round btn_sm btn_white mt_2">QR 다운로드</button>
            </td>
          </tr>
          <tr>
            <th scoper="row">URL</th>
            <td>
              <button type="button" class="btn_round btn_sm btn_white mg_5 mg_l0">URL 전달</button>
              <button type="button" class="btn_round btn_sm btn_white mg_5">URL 복사</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </PopupView>

  <PopupView v-model="isPopups[5]">
    <template #title>일정등록</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(5)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="popupHide(5)">저장</button>
    </template>
    <ul class="nofitarget_list mb_4">
      <li class="pd_0">
        <div class="info">
          <div class="img_wrap">
            <img src="/src/assets/images/common/img_noimg.svg" alt="이미지 없음" />
          </div>
          <p class="detail"><strong>황유림</strong><span>간호대학</span><span>1학년</span></p>
        </div>
      </li>
    </ul>
    <div class="letter_count count20 mb_2">
      <input type="search" class="form_style wd_p100" placeholder="일정 제목을 입력해주세요" />
      <p class="letter_counter"></p>
    </div>
    <div class="letter_count count40">
      <input type="search" class="form_style wd_p100" placeholder="일정 내용을 입력해주세요" />
      <p class="letter_counter"></p>
    </div>
    <div class="calendar_reg">
      <div>
        <strong>년월일</strong>
        <v-date-picker color="info">
          <template v-slot:title></template>
          <template v-slot:header></template>
        </v-date-picker>
      </div>
      <div>
        <strong>시작시간</strong>
        <div class="timeset_box">
          <div class="time_result">
            <span>{{ hourNumber[0] }}</span>
            :
            <span>{{ minuteNumber[0] }}</span>
          </div>
          <div class="setting">
            <div class="hours">
              <button type="button" class="plus" @click="hourPlus(0)">Plus</button>
              <input type="number" class="form_style ta_c" v-model="hourNumber[0]" readonly />
              <button type="button" class="minus" @click="hourMinus(0)">Minus</button>
            </div>
            <div class="minutes">
              <button type="button" class="plus" @click="minutePlus(0)">Plus</button>
              <input type="number" class="form_style ta_c" v-model="minuteNumber[0]" readonly />
              <button type="button" class="minus" @click="minuteMinus(0)">Minus</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <strong>종료시간</strong>
        <div class="timeset_box">
          <div class="time_result">
            <span>{{ hourNumber[1] }}</span>
            :
            <span>{{ minuteNumber[1] }}</span>
          </div>
          <div class="setting">
            <div class="hours">
              <button type="button" class="plus" @click="hourPlus(1)">Plus</button>
              <input type="number" class="form_style ta_c" v-model="hourNumber[1]" readonly />
              <button type="button" class="minus" @click="hourMinus(1)">Minus</button>
            </div>
            <div class="minutes">
              <button type="button" class="plus" @click="minutePlus(1)">Plus</button>
              <input type="number" class="form_style ta_c" v-model="minuteNumber[1]" readonly />
              <button type="button" class="minus" @click="minuteMinus(1)">Minus</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PopupView>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import VCalendar from "@/components/common/fullcalendar/VueFullcalendar.vue";
import moment from "moment";
import PopupView from "@/components/common/PopupView.vue";
import VDateInput from "@/components/common/VDateInput.vue";

import RadarChart from "@/components/chart/RadarChart.vue";
// import type { RadarChartDataset } from "@/types/chart/ChartTypes";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
    VCalendar,
    PopupView,
    VDateInput,
    RadarChart,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation, Pagination],
      swiperOptions: {
        slidesPerView: 1,
        navigation: true,
        pagination: {
          clickable: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
      },
      swiperOptions2: {
        slidesPerView: 1,
        pagination: {
          clickable: true,
        },
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        loop: true,
      },
    };
  },
  data: () => ({
    selectedOption: {
      value: "1개월",
      options: [
        { label: "1개월", code: "a" },
        { label: "2개월", code: "b" },
        { label: "3개월 3개월 3개월", code: "c" },
      ],
      groups: [
        { label: "나의 주소록" },
        { label: "학과학생" },
        { label: "학과교수" },
        { label: "1학년" },
        { label: "2학년" },
        { label: "3학년" },
        { label: "4학년" },
      ],
    },
    calendarEvents: [
      //moment()._d
      { title: "Meeting", start: moment().format(), className: "normal" },
      { title: "Meeting2", start: new Date(), className: "point" },
      { title: "Meeting3", start: moment("2024-02-29").format(), className: "normal" },
      // { title: "Meeting", start: new Date() },
    ],
    date: "",
    isPopups: [false, false, false, false, false, false],
    radio: "",
    radio2: "",
    //qr download
    qrCheck: false,
    //tooltip
    tooltip: false,
    tooltip2: false,
    tooltip3: false,
    tooltip4: false,
    //일정등록 팝업 버튼
    hourNumber: [0, 0],
    minuteNumber: ["00", "00"],
    minuteStep: 30,
    chartLoaded: false,
    chartDatasets: [
      {
        name: "학과",
        data: [2, 6, 2, 2, 5, 6],
      },
      {
        name: "학년 ",
        data: [3, 1, 2, 3, 3, 3.5],
      },
      {
        name: "학교",
        data: [4, 2, 1, 5, 2, 2.5],
      },
      {
        name: "3년",
        data: [1, 3, 4, 6, 1, 3.5],
      },
    ] as Array<Object>,
    chartDatasets2: ["#8ABFFB", "#5FADCF", "#5175BE", "#606578"],
    chartDatasets3: ["종합적사고력", "자원정보기술", "자기관리", "의사소통", "대인관계", "글로벌"],
  }),
  watch: {
    value(newVal) {
      const vm = this;
      vm.radio = newVal;
    },
  },
  created: function () {
    const vm = this;
    vm.fnActivePage();
  },
  mounted: function () {
    const vm = this;
    setTimeout(() => {
      vm.chartLoaded = true;
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
    onClickConfirm(_text: string) {
      const vm = this;
      vm.$confirm(_text, "", (isConfirm: boolean) => {
        if (isConfirm) {
          vm.$toast("확인되었습니다.", "success");
        } else {
          vm.$toast("취소되었습니다.", "error");
        }
      });
    },
    onClickHidePopup(popupIdx: number) {
      const vm = this;
      vm.$confirm("취소하시겠습니까?", "알림", (isConfrim: boolean) => {
        if (isConfrim) {
          vm.popupHide(popupIdx);
        }
      });
    },
    fnActivePage() {
      const vm = this;
      vm.radio = vm.value ?? "weekly";
    },

    //일정등록 팝업 버튼
    pad(value: number, width: number) {
      return value.toString().padStart(width, "0");
    },
    hourPlus(idx: number) {
      if (parseInt(this.hourNumber[idx]) < 23) {
        this.hourNumber[idx] = parseInt(this.hourNumber[idx]) + 1;
      }
    },
    hourMinus(idx: number) {
      if (parseInt(this.hourNumber[idx]) > 0) {
        this.hourNumber[idx] = parseInt(this.hourNumber[idx]) - 1;
      }
    },
    minutePlus(idx: number) {
      if (parseInt(this.minuteNumber[idx]) < 30) {
        this.minuteNumber[idx] = this.pad(parseInt(this.minuteNumber[idx]) + this.minuteStep, 2);
      }
    },
    minuteMinus(idx: number) {
      if (parseInt(this.minuteNumber[idx]) > 0) {
        this.minuteNumber[idx] = this.pad(Math.max(parseInt(this.minuteNumber[idx]) - this.minuteStep, 0), 2);
      }
    },
    addressAdd(_text: string) {
      const vm = this;
      vm.$confirm(_text, "", (isConfirm: boolean) => {
        if (isConfirm) {
          vm.$toast("등록되었습니다.", "success");
        }
      });
    },
    // onClickConfirm(_text: string) {
    //   const vm = this;
    //   vm.$confirm(_text, "", (isConfirm: boolean) => {
    //     if (isConfirm) {
    //       vm.$toast("확인되었습니다.", "success");
    //     } else {
    //       vm.$toast("취소되었습니다.", "error");
    //     }
    //   });
    // },
  },
};
</script>
