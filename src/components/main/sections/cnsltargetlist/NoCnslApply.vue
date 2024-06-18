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
                <input type="text" class="form_style" value="" readonly @click="fnGetCnslDatePop(item)" />
                <button type="button" class="calendar_open"></button>
              </div>
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

  <PopupView v-model="isPopups[0]">
    <template #title>상담 일시조정</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(1)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="fnSaveCnslDate()">등록</button>
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
            <th scope="row">상담일시</th>
            <td :class="selDateLoaded ? '' : 'loading_md'">
              <div class="cnslr_box">
                <div class="cnsl_date">
                  <button type="button" class="prev" @click="weeks--">이전</button>
                  <p>{{ selDate }}</p>
                  <button type="button" class="next" @click="weeks++">다음</button>
                </div>
                <div class="cnsl_content">
                  <DTimeTable
                    :cnslrId="userInfo.userId"
                    :cnslrNm="userInfo.userNm"
                    :selSunDate="selSunDate"
                    v-model="selectedDate"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="mt-4 font_gray medium">예약완료 및 일정오프 시간을 제외하고 조정 시간 선택 가능합니다.</p>
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
import DTimeTable from "@/components/common/DTimeTableForReq.vue";
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
const fnGetCnslCntInfo = inject("fnGetCnslCntInfo");

// 상담일시 팝업 호출
const cnslMngId = ref<number>();
const groupKeyId = ref<number>();
const fnGetCnslDatePop = (item: CnslMng) => {
  // 선택상담 키 값 저장
  cnslMngId.value = item.cnslMngId;
  groupKeyId.value = item.groupKeyId;
  popupShow(0);
};

// 상담일시 등록
const fnSaveCnslDate = () => {
  const params = {
    cnslMngId: cnslMngId.value,
    groupKeyId: groupKeyId.value,
    cnslDate: selectedDate.value.selDate,
    cnslStrTime: selectedDate.value.time,
    cnslEndTime: selectedDate.value.time + 1,
  };

  vm.$confirm("저장하시겠습니까?", "", (isConfrim: boolean) => {
    if (isConfrim) {
      vm.$loading.show();
      vm.$axios
        .post("/api/counsel/client/professor/modifyCnslDated", JSON.stringify(params))
        .then((res) => {
          if (res.status === 200) {
            vm.$toast("저장되었습니다.", "success");
            fnGetCnslTargetList();
            fnGetCnslCntInfo();
            popupHide(0);
          } else {
            vm.$toast("저장 중 문제가 발생하였습니다.\n 잠시후 다시시도해주세요.", "success");
          }
        })
        .catch((e) => {
          vm.$toast("저장 중 문제가 발생하였습니다.\n 잠시후 다시시도해주세요. (1)", "success");
          console.error(e);
        })
        .finally(() => {
          vm.$loading.hide();
        });
    }
  });
};

// 팝업관리
const isPopups = reactive<boolean[]>([false, false]);
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
    selectType: "target2",
  };

  vm.$axios
    .get("/api/counsel/client/professor/getTargetListForCnlsr", { params: params })
    .then((res) => {
      const data = res.data.data;

      // 집단상담은 처음 꺼 하나만 표시
      cnslTargetList.value = [];
      data.forEach((item) => {
        item.cnslReqKeywordArr = item.cnslReqKeyword.split(" ");
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
 * 상담사 일정 날짜정보 조회
 */
const weeks = ref<number>(0); // 현재 주차와 차이 저장
const selDate = ref<string>(""); // 선택 주자 (현재 주차 일요일 년월일 ~ 토요일 일자)
const selSunDate = ref<string>(""); // 현재주차 시작일(일요일)
const selDateLoaded = ref<boolean>(true); // 상담사 일정 캘린더 영역 로딩 관리
const selectedDate = ref({}); // 선택일자
const fnGetSelDate = () => {
  const params = {
    weeks: weeks.value,
  };
  vm.$axios
    .get("/api/counsel/common/counsel/getSelDate", { params: params })
    .then((res) => {
      const data = res.data.data;
      selDate.value = data.selDate;
      selSunDate.value = data.selSunDate;
    })
    .catch((e) => {
      console.error(e);
    })
    .finally(() => {
      selDateLoaded.value = true;
    });
};
// 상담주차 변경 시 캘린더 재조회
watch(weeks, () => {
  fnGetSelDate();
  selDateLoaded.value = false;
});

const cnslRsltInfo = ref<CnslMng>(new CnslMngInfo());

/**
 * 상담 히스토리 팝업 호출
 */
const histroyInfo = ref<CnslMng[]>([]); // 히스토리 조회 정보
const hisCnslDivOptions = ref<Options[]>([]); // 상담영역 (분류)
const hisCnslDivVal = ref<Options>({ label: "상담분류 (전체)", value: "" });
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
  fnGetSelDate();
});
</script>
