<template>
  <!-- 내용 없을때 표출 -->
  <div v-if="cnslTargetList.length === 0" class="no_notice">
    <p>상담 대상자 목록이 없습니다</p>
  </div>
  <div v-else class="arrow_slide paging">
    <swiper v-bind="swiperOptions" :modules="modules">
      <swiper-slide v-for="(slide, slideIdx) in slides" :key="slideIdx">
        <ul class="box guidance_list">
          <li v-for="(item, idx) in slide.cnslTargetList" :key="idx">
            <span v-if="item.cnslMethod === 'OFF'" class="interview_label">대면</span>
            <span v-if="item.cnslMethod === 'ON'" class="interview_label online">온라인</span>
            <div class="img_wrap">
              <img v-if="item.groupCnt > 0" src="@/assets/images/common/logo.svg" alt="예시" />
              <img v-else src="@/assets/images/common/img_ex1.png" alt="예시" />
            </div>
            <div class="contents" @click="fnGetSaveRsltPop(item)">
              <strong class="name">
                {{ item.userNm }}
                <template v-if="item.groupCnt > 0">외 {{ item.groupCnt }}명</template>
                <span v-else>{{ item.hakguaCdNm }}&middot;{{ item.gradeCdNm }}</span>
                <v-menu
                  v-if="item.groupCnt > 0"
                  class="tooltip_area"
                  transition="slide-y-transition"
                  :close-on-content-click="true"
                  v-model="groupUser[slideIdx * 5 + idx]"
                >
                  <template v-slot:activator="{ props }">
                    <button type="button" class="btn_tooltip" v-bind="props" style="top: 2px">버튼</button>
                  </template>
                  <div class="tooltip_cnt">
                    <div class="hover_title">집단상담 명단</div>
                    <ul class="nofitarget_list">
                      <li v-for="(user, userIdx) in item.groupUserList" :key="userIdx">
                        <div class="info">
                          <div class="img_wrap">
                            <img src="@/assets/images/common/img_ex1.png" alt="예시" />
                          </div>
                          <p class="detail">
                            <strong>{{ user.userNm }}</strong>
                            <span>{{ user.hakguaCdNm }}</span>
                            <span>{{ user.gradeCdNm }}</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </v-menu>
              </strong>
              <ul>
                <li v-for="(cnslReqKeyword, keywordIdx) in item.cnslReqKeywordArr" :key="keywordIdx">
                  {{ cnslReqKeyword }}
                </li>
              </ul>
              <p ref="moreTxt" class="more_txt">
                <span v-html="item.cnslReqCont"></span>
                <v-menu
                  class="tooltip_area"
                  transition="slide-y-transition"
                  :close-on-content-click="true"
                  v-model="tooltips[slideIdx * 5 + idx]"
                >
                  <template v-slot:activator="{ props }">
                    <button type="button" v-bind="props">전체보기</button>
                  </template>
                  <div class="tooltip_cnt">
                    <span v-html="item.cnslReqCont"></span>
                  </div>
                </v-menu>
              </p>
            </div>
            <div class="function_bottom">
              <div class="search_day">
                {{ item.cnslDate + " " + item.cnslStrTime + ":00~" + item.cnslEndTime + ":00" }}
              </div>
              <a href="javascript:void(0);" class="font_blue" @click="fnGetRsltPop(item)">상담내용보기</a>
              <div class="function_download">
                <div class="pop_check">
                  <v-menu
                    transition="slide-y-transition"
                    :close-on-content-click="true"
                    v-model="history[slideIdx * 5 + idx]"
                  >
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
                      <button type="button">핵심역량</button>
                      <button type="button">포트폴리오</button>
                      <button type="button" @click="fnGetCnslHisPop(item)">상담히스토리</button>
                    </div>
                  </v-menu>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </swiper-slide>
    </swiper>
  </div>

  <PopupView v-model="isPopups[0]" class="xlarge">
    <template #title>상담 결과</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(0)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="onClickHidePopup(0)">저장</button>
    </template>
    <div class="times_area">
      <div class="arrow">
        <p>{{ cnslRsltInfo.cnslRnd ?? 1 }}회차</p>
      </div>
      <div class="search_day">
        <input
          type="text"
          class="form_style"
          :value="cnslRsltInfo.cnslDate + ' ' + cnslRsltInfo.cnslStrTime + ':00~' + cnslRsltInfo.cnslEndTime + ':00'"
          readonly
        />
        <button type="button" class="calendar_open"></button>
      </div>
    </div>
    <div class="flex_form">
      <div>
        <strong>제목</strong>
        <div class="inner_flex">
          <div class="form_style">제목입니다</div>
        </div>
      </div>
      <div>
        <strong>키워드</strong>
        <div class="inner_flex">
          <v-combobox
            v-model="cnslRsltInfo.cnslRsltKeywordArr"
            chips
            multiple
            class="form_style"
            placeholder="키워드"
            disabled
          >
            <v-chip closable></v-chip>
          </v-combobox>
        </div>
      </div>
      <div>
        <strong>상담유형</strong>
        <div class="inner_flex">
          <div class="form_style">{{ cnslRsltInfo.cnslDivNm }}, {{ cnslRsltInfo.cnslTypeNm }}</div>
        </div>
      </div>
      <div>
        <strong>첨부파일</strong>
        <div class="">
          <div class="attach_filewrap pd_l0">
            <div class="attach_file_list">
              <div class="file_row">
                <div class="file_name">
                  <p>알고리즘수정.hwp</p>
                  <i>145KB</i>
                  <button type="button" class="btn_icon icon_only download">다운로드</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <strong>상담내용</strong>
        <div class="inner_flex">
          <div class="form_style ck-content">
            <span v-html="cnslRsltInfo.cnslRsltCont"></span>
          </div>
        </div>
      </div>
      <div>
        <strong>결과조치</strong>
        <div class="inner_flex">
          <div class="form_style ck-content"><span v-html="cnslRsltInfo.cnslRsltProc"></span></div>
        </div>
      </div>
      <div>
        <strong>상담처리</strong>
        <div class="inner_flex">
          <div class="form_style">{{ cnslRsltInfo.cnslStsNm }}</div>
        </div>
      </div>
    </div>
  </PopupView>

  <PopupView v-model="isPopups[1]" class="medium">
    <template #title>상담 히스토리</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(1)">닫기</button>
    </template>
    <ul class="nofitarget_list">
      <li>
        <div class="info">
          <div class="img_wrap">
            <img src="@/assets/images/common/img_noimg.svg" alt="이미지 없음" />
          </div>
          <p class="detail">
            <strong>{{ cnslRsltInfo.userNm ?? "-" }}</strong>
            <span>{{ cnslRsltInfo.hakguaCdNm ?? "-" }}</span>
            <span>{{ cnslRsltInfo.gradeCdNm ?? "-" }}</span>
          </p>
        </div>
        <div class="function select">
          <vue-select v-model="hisCnslDivVal" :options="hisCnslDivOptions" class="select_box" />
        </div>
      </li>
    </ul>
    <div class="keyword_div">
      <span>학생키워드</span>
      <span class="cnsl" @click="addBtn()">상담사키워드</span>
    </div>
    <div class="cnsl_history scroll_cnt">
      <div v-if="histroyInfo.length === 0" class="no_notice">
        <p>상담 히스토리가 없습니다</p>
      </div>
      <div v-else v-for="(hisItem, histroyIdx) in histroyInfo" :key="histroyIdx">
        <strong>
          {{ hisItem.cnslDivNm }} <span>{{ moment(hisItem.cnslDate).format("YYYY.MM.DD") }}</span>
        </strong>
        <div>
          <v-combobox v-model="hisItem.cnslReqKeywordArr" chips multiple class="form_style" disabled>
            <v-chip closable></v-chip>
          </v-combobox>
          <!-- 상담사 키워드 : cnsl 클래스 추가-->
          <v-combobox v-model="hisItem.cnslRsltKeywordArr" chips multiple class="form_style cnsl" disabled>
            <v-chip closable></v-chip>
          </v-combobox>
        </div>
      </div>
    </div>
  </PopupView>
</template>

<script setup lang="ts">
// components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";
import PopupView from "@/components/common/PopupView.vue";
import { ref, reactive, watch, inject } from "vue";
import moment from "moment";

// type
import { CnslMngInfo } from "@/components/prfsncnsl/cnslReq/prfsncnsl";
import type { Options, CnslMng } from "@/components/prfsncnsl/cnslReq/prfsncnsl";

// css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { onMounted } from "vue";
import { getCurrentInstance } from "vue";

// VM
const instance = getCurrentInstance();
if (!instance) throw new Error("getCurrentInstance returned null");
const vm = instance.appContext.config.globalProperties;

// Swiper
const modules = [Navigation, Pagination];
const swiperOptions = {
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
  },
  slidesPerView: 1,
  spaceBetween: 8,
  navigation: true,
  pagination: {
    clickable: true,
  },
};

// props
const userInfo = inject("userInfo");
const cnslYear = inject("cnslYear");

// 팝업관리
const isPopups = reactive<boolean[]>([false, false, false]);
const popupShow = (idx: number) => {
  isPopups[idx] = true;
};
const popupHide = (idx: number) => {
  isPopups[idx] = false;
};

/**
 * 상담신청 내역 조회
 */
const cnslTargetList = ref<CnslMng[]>([]); // 조회 결과
const tooltips = reactive<boolean[]>([]); // 상담 전체보기 툴팁
const history = reactive<boolean[]>([]); // 더보기 툴팁
const groupUser = reactive<boolean[]>([]); // 집단상담 명단 툴팁
const slides = ref([]); // 페이징 (Swiper)
const moreTxt = ref(); // 상담내용 영역 측정용
const fnGetCnslTargetList = () => {
  const params = {
    cnslrId: userInfo.userId,
    cnslYear: cnslYear,
    selectType: "target4",
  };

  vm.$axios
    .get("/api/counsel/client/professor/getTargetListForCnlsr", { params: params })
    .then((res) => {
      const data = res.data.data;

      // 집단상담은 처음 꺼 하나만 표시
      cnslTargetList.value = [];
      data.forEach((item) => {
        if (item.cnslReqKeyword != null) item.cnslReqKeywordArr = item.cnslReqKeyword.split(" ");
        if (item.cnslRsltKeyword != null) item.cnslRsltKeywordArr = item.cnslRsltKeyword.split(" ");
        cnslTargetList.value.push(item);
        // 컨텐츠 개수만큼 배열 툴팁 배열 크기 맞춤
        tooltips.push(false);
        history.push(false);
        groupUser.push(false);
      });
      slides.value = [];
      let tempList = [];
      // 페이징 (슬라이드에 5개씩 담기)
      for (let i = 0; i < cnslTargetList.value.length; i++) {
        const item = cnslTargetList.value[i];
        tempList.push(item);
        if (i % 5 === 4) {
          slides.value.push({ cnslTargetList: tempList });
          tempList = [];
        }
      }
      if (tempList.length > 0) slides.value.push({ cnslTargetList: tempList });
    })
    .catch((e) => {
      console.error(e);
    })
    .finally(() => {
      // 상담내용 영역 over 시 요약 및 전체보기 툴팁 생성
      if (typeof moreTxt.value !== "undefined") {
        moreTxt.value.forEach((txt) => {
          const scroll = txt.scrollHeight;
          const client = txt.clientHeight + 2;
          if (scroll > client) {
            txt.classList.add("add");
          }
        });
      }
    });
};

/**
 * 상담결과 팝업 호출
 */
const cnslRsltInfo = ref<CnslMng>(new CnslMngInfo());
const fnGetRsltPop = (_item) => {
  // 선택 상담 정보 담기
  cnslRsltInfo.value = _item;
  popupShow(0);
};

// 핵심역량 > 핵심역량 팝업 호출 TODO : 핵심역량 로직 대기중
// 포트폴리오 > 포트폴리오 팝업 호출 TODO : 포트폴리오 로직 대기중

/**
 * 상담 히스토리 팝업 호출
 */
const histroyInfo = ref<CnslMng[]>([]); // 히스토리 조회 정보
const hisCnslDivOptions = ref<Options[]>([]); // 상담영역 (분류)
const hisCnslDivVal = ref<Options>({ label: "전체(상담분류)", value: "" });
const fnGetCnslHisPop = (item) => {
  cnslRsltInfo.value = item; // 선택 값 저장
  fnGetHisCnslDiv(); // 히스토리로 구분 값 추출
  popupShow(1); // 팝업 노출
};

/**
 * 상담 히스토리용 상담구분 SELECTBOX 호출
 */
const fnGetHisCnslDiv = () => {
  const params = {
    cnslrId: userInfo.userId,
    userId: cnslRsltInfo.value.userId,
  };

  vm.$axios
    .get("/api/counsel/client/professor/getCsnlHisDiv", { params: params })
    .then((res) => {
      const data = res.data.data;
      hisCnslDivOptions.value = [{ label: "상담분류 (전체)", value: "" }];
      data.forEach((item) => {
        hisCnslDivOptions.value.push({
          label: item.cnslDivNm,
          value: item.cnslDiv,
        });
        hisCnslDivVal.value = hisCnslDivOptions.value[0];
      });
    })
    .catch((e) => {
      console.error(e);
    });
};

/**
 * 상담 히스토리 검색
 */
const fnGetCnslHis = (_cnslDiv) => {
  const params = {
    cnslrId: userInfo.userId,
    userId: cnslRsltInfo.value.userId,
    cnslDiv: _cnslDiv,
  };
  vm.$axios
    .get("/api/counsel/client/professor/getCnslHistory", { params: params })
    .then((res) => {
      const data = res.data.data;

      // 상담 키워드 배열로
      data.forEach((item) => {
        if (item.cnslReqKeyword != null) item.cnslReqKeywordArr = item.cnslReqKeyword.split(" ");
        if (item.cnslRsltKeyword != null) item.cnslRsltKeywordArr = item.cnslRsltKeyword.split(" ");
      });
      histroyInfo.value = data;
    })
    .catch((e) => {
      console.error(e);
    });
};
// 구분 선택 변경 시 재조회
watch(hisCnslDivVal, (val) => {
  fnGetCnslHis(val.value);
});

onMounted(() => {
  fnGetCnslTargetList();
});
</script>
