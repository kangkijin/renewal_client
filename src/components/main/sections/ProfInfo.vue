<template>
  <div class="main_section section1">
    <div class="grid_content">
      <div class="flex_wrap">
        <div class="box">
          <div class="myinfo_box">
            <div class="top">
              <div class="img_wrap">
                <!-- 이미지 없음 -->
                <!-- <img src="@/assets/images/common/img_empty.svg" alt="이미지 없음" /> XX 이거 아님-->
                <img src="@/assets/images/common/img_ex1.png" alt="예시" />
              </div>
              <div class="info">
                <strong>초이당<span>교육학과ㆍ조교수</span></strong>
                <ul>
                  <li>교육대학ㆍ교육학과</li>
                  <li>재직기간 <span>5년 6개월</span></li>
                </ul>
              </div>
            </div>
            <div class="bottom">
              <ul>
                <li>
                  <p>상담실적</p>
                  310
                </li>
                <li>
                  <p>교수역량진단</p>
                  4.75
                  <!-- 진단 전 표출 -->
                  <!-- <span class="font_red">(진단 전)</span> -->
                </li>
                <li>
                  <p>학생비교과</p>
                  4
                </li>
                <li>
                  <p>교수비교과</p>
                  6
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="box" :class="chartLoaded ? '' : 'loading_md'">
          <div class="box_titlewrap">
            <h4>교수역량진단</h4>
            <div class="function">
              <router-link to="" class="direct_link">전체보기</router-link>
            </div>
          </div>
          <!-- 역량진단 전일 경우 표출 -->
          <!-- <div class="test_before">
            <div>
              <p>참여주세요!</p>
              2024년 교수역량진단이 시작되었습니다.
            </div>
          </div> -->
          <!-- <div class="capa_chart" :class="chartLoaded ? '' : 'loading_md'" id="chartdiv"></div> -->

          <ColumnLineChart
            v-if="chartLoaded"
            :class="chartLoaded ? '' : 'loading_md'"
            :dataset="chartDatasets"
            :colorset="chartDatasets2"
            :labels="chartDatasets3"
            :chartHeight="225"
            :strokeColor="strokeColor"
          ></ColumnLineChart>
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
                <img src="@/assets/images/common/img_ex2.png" alt="이미지 예시" />
              </div>
              <div class="info">
                <strong>이형준<span>교육학과ㆍ1학년</span></strong>
                <p>교수님 지금 찾아봐도 될까요?</p>
                <span class="date">2023.09.01 19:29</span>
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
                <img src="@/assets/images/common/img_ex1.png" alt="이미지 예시" />
              </div>
              <div class="info">
                <strong>이형준<span>교육학과&middot;1학년</span></strong>
                <p>교수님 지금 찾아봐도 될까요?</p>
                <span class="date">2023.09.01 09:29</span>
              </div>
            </div>
            <div class="alarm reply">
              <div class="img_wrap">
                <img src="@/assets/images/common/img_ex1.png" alt="이미지 예시" />
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
              <!-- 인원 적을시 : 
              <span class="mr_4 medium">홍길동</span>
              <span class="mr_4 medium">홍길동</span>
              <span class="mr_4 medium">홍길동</span>
              <span class="mr_4 medium">홍길동</span>
              <span class="mr_4 medium">홍길동</span>
              <span class="mr_4 medium">홍길동</span>
              -->
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
                  수신인 수신인 수신인 수신인 수신인<br />
                  수신인 수신인 수신인 수신인 수신인<br />
                  수신인 수신인 수신인 수신인 수신인
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
</template>

<script lang="ts">
import PopupView from "@/components/common/PopupView.vue";
import VDateInput from "@/components/common/VDateInput.vue";

import ColumnLineChart from "@/components/chart/ColumnLineChart.vue";

export default {
  components: {
    PopupView,
    VDateInput,
    ColumnLineChart,
  },
  data: () => ({
    date: "",
    loaded: false,
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
    isPopups: [false, false, false, false],
    //tooltip
    tooltip: false,
    tooltip2: false,
    tooltip3: false,
    tooltip4: false,

    chartLoaded: false,
    chartDatasets: [
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
      {
        name: "평균",
        type: "line",
        data: [35, 41, 36, 26, 45],
      },
    ],
    chartDatasets2: ["#8ABFFB", "#5FADCF", "#5175BE", "#B0C3D5"],
    chartDatasets3: ["강의기본", "강의준비", "강의실행", "강의평가", "종합"],
    strokeColor: ["transparent", "transparent", "transparent", "#B0C3D5"],
  }),
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
  },
};
</script>
