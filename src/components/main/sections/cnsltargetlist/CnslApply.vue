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
                <input
                  type="text"
                  class="form_style"
                  :value="item.cnslDate + ' ' + item.cnslStrTime + ':00~' + item.cnslEndTime + ':00'"
                  readonly
                  @click="fnGetRebookPop(item)"
                />
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

  <PopupView v-model="isPopups[0]" class="xlarge">
    <template #title>상담결과 등록 및 조회</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(0)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="onClickSaveRsltBtn()">저장</button>
    </template>
    <div :class="cnslRsltPopLoaded ? '' : 'loading_md'">
      <div class="times_area">
        <div class="arrow">
          <button type="button" class="prev" @click="prevCnslRnd()">이전</button>
          <p>{{ cnslRsltInfo.cnslRnd ?? 1 }}회차</p>
          <button type="button" class="next" @click="nextCnslRnd()">다음</button>
        </div>
        <div class="search_day">
          <input
            type="text"
            class="form_style"
            :value="cnslRsltInfo.cnslDate + ' ' + cnslRsltInfo.cnslStrTime + ':00~' + cnslRsltInfo.cnslStrTime + ':00'"
            readonly
          />
          <button type="button" class="calendar_open"></button>
        </div>
      </div>
      <div class="flex_form">
        <div>
          <strong>제목</strong>
          <div class="inner_flex">
            <input
              ref="cnslRsltTitleRef"
              type="text"
              class="form_style"
              placeholder="제목"
              v-model="cnslRsltInfo.cnslRsltTitle"
            />
          </div>
        </div>
        <div>
          <strong>키워드</strong>
          <div class="inner_flex">
            <v-combobox
              ref="cnslRsltKeywordRef"
              v-model="cnslRsltKeyword"
              chips
              clearable
              multiple
              :delimiters="[' ']"
              class="form_style"
              placeholder="키워드를 입력해주세요(띄어쓰기하여 여러 키워드를 등록해보세요)"
            >
              <v-chip closable></v-chip>
            </v-combobox>
          </div>
        </div>
        <div>
          <strong>상담유형</strong>
          <div class="inner_flex">
            <vue-select ref="cnslDivRef" v-model="cnslDivVal" :options="cnslDivOptions" class="select_box" />
            <vue-select ref="cnslTypeRef" v-model="cnslTypeVal" :options="cnslTypeOptions" class="select_box" />
          </div>
        </div>
        <div>
          <strong>첨부파일</strong>
          <div class="">
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
          </div>
        </div>
        <div>
          <strong>상담내용</strong>
          <div class="inner_flex">
            <div class="letter_count count500">
              <textarea
                ref="cnslRsltContRef"
                rows="6"
                class="form_style wd_p100"
                placeholder="강의설명을 입력해주세요."
                v-model="cnslRsltInfo.cnslRsltCont"
              ></textarea>
              <p class="letter_counter"></p>
            </div>
          </div>
        </div>
        <div>
          <strong>결과조치</strong>
          <div class="inner_flex">
            <div class="letter_count count500">
              <textarea
                ref="cnslRsltProcRef"
                rows="6"
                class="form_style wd_p100"
                placeholder="강의설명을 입력해주세요."
                v-model="cnslRsltInfo.cnslRsltProc"
              ></textarea>
              <p class="letter_counter"></p>
            </div>
          </div>
        </div>
        <div>
          <strong>상담처리</strong>
          <div class="inner_flex">
            <vue-select ref="cnslStsRef" v-model="cnslStsVal" :options="cnslStsOptions" class="select_box" />
          </div>
        </div>
      </div>
    </div>
  </PopupView>

  <PopupView v-model="isPopups[1]">
    <template #title>상담 재예약</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(1)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="fnGetSaveRebook()">등록</button>
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
            <th scope="row">키워드</th>
            <td>
              <v-combobox
                ref="rebookKeywordRef"
                v-model="rebookKeyword"
                chips
                clearable
                multiple
                :delimiters="[' ']"
                class="form_style"
                placeholder="키워드를 입력해주세요(띄어쓰기하여 여러 키워드를 등록해보세요)"
              >
                <v-chip closable></v-chip>
              </v-combobox>
            </td>
          </tr>
          <tr>
            <th scope="row">신청내용</th>
            <td>
              <div class="letter_count count1000">
                <textarea
                  ref="rebookContRef"
                  rows="6"
                  class="form_style wd_p100"
                  placeholder="상담내용을 입력해주세요."
                  v-model="rebookInfo.cnslReqCont"
                ></textarea>
                <p class="letter_counter"></p>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">상담일시</th>
            <td>
              <div :class="'cnslr_box' + (selDateLoaded ? '' : 'loading_md')">
                <div class="cnsl_date">
                  <button type="button" class="prev" @click="weeks--">이전</button>
                  <p>{{ selDate }}</p>
                  <button type="button" class="next" @click="weeks++">다음</button>
                </div>
                <div class="cnsl_content">
                  <DTimeTable
                    ref="rebookdTRef"
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
  </PopupView>

  <PopupView v-model="isPopups[2]" class="medium">
    <template #title>상담 히스토리</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(2)">닫기</button>
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
          <div class="select_row sm2">
            <vue-select v-model="hisCnslDivVal" :options="hisCnslDivOptions" class="select_box" />
          </div>
        </div>
      </li>
    </ul>
    <div class="keyword_div">
      <span>학생키워드</span>
      <span class="cnsl">상담사키워드</span>
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
import type { Options, CnslMng, CodeMng } from "@/components/prfsncnsl/cnslReq/prfsncnsl";

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

interface UserInfo {
  userId: string;
  userNm: string;
  hakguaCd: string;
}

const notFoundFunc = () => {
  console.error("not Found function");
};

// props
const userInfo: UserInfo = inject("userInfo") ?? { userId: "", userNm: "", hakguaCd: "" };
const cnslYear: number = inject("cnslYear") ?? 2024;
const fnGetCnslCntInfo = inject<Function>("fnGetCnslCntInfo") ?? null;

const fnCallInjectFunc = (fn: Function | null) => {
  if (fn === null) {
    notFoundFunc();
  } else {
    fn();
  }
};

// 팝업관리
const isPopups = reactive<boolean[]>([false, false, false]);
const popupShow = (idx: number) => {
  isPopups[idx] = true;
};
const popupHide = (idx: number) => {
  isPopups[idx] = false;
};

//////////// SELECT BOX /////////////
/**
 * 상담구분 SELECTBOX 구성
 */
const cnslDivOptions = ref<Options[]>([]);
const cnslDivVal = ref<Options>({ label: "", value: "" });
const fnGetCnslDiv = () => {
  const params = {
    cdCategory: "CNSL_DIV",
  };

  vm.$axios
    .get("/api/counsel/common/counsel/getCodeList", { params: params })
    .then((res) => {
      cnslDivOptions.value = []; // options 초기화
      const data = res.data.data;
      const options: Options[] = [];

      // option 구성에 맞게 값 세팅
      if (data.length > 0) {
        data.forEach((item: CodeMng) => {
          options.push({
            label: item.cdNm,
            value: item.cdId,
          });
        });
        cnslDivOptions.value = options;
        cnslDivVal.value = options[0];
      }
    })
    .catch((e) => {
      console.error(e);
    });
};

/**
 * 상담유형 SELECTBOX 구성
 */
const cnslTypeOptions = ref<Options[]>([]);
const cnslTypeVal = ref<Options>({ label: "", value: "" });
const fnGetCnslType = (_upCdId: string) => {
  const params = {
    cdCategory: "CNSL_TYPE",
    upCdId: _upCdId,
    cnslDiv: cnslTypeVal.value.value,
  };

  vm.$axios
    .get("/api/counsel/common/counsel/getCodeList", { params: params })
    .then((res) => {
      cnslTypeOptions.value = [];
      const data = res.data.data;
      const options: Options[] = [];
      if (data.length > 0) {
        data.forEach((item: CodeMng) => {
          options.push({
            label: item.cdNm,
            value: item.cdId,
          });
        });
        cnslTypeOptions.value = options;
        cnslTypeVal.value = options[0];
      }
    })
    .catch((e) => {
      console.error(e);
    });
};

/**
 * 상담처리 SELECTBOX 구성
 */
const cnslStsOptions = ref<Options[]>([]);
const cnslStsVal = ref<Options>({ label: "", value: "" });
const fnGetCnslSts = () => {
  const params = {
    cdCategory: "CMSL_APRV_STS",
    userdef1: "CNSL_RSLT",
  };

  vm.$axios
    .get("/api/counsel/common/counsel/getCodeList", { params: params })
    .then((res) => {
      cnslStsOptions.value = [];
      const data = res.data.data;
      const options: Options[] = [];
      if (data.length > 0) {
        data.forEach((item: CodeMng) => {
          options.push({
            label: item.cdNm,
            value: item.cdId,
          });
        });
        cnslStsOptions.value = options;
        cnslStsVal.value = options[0];
      }
    })
    .catch((e) => {
      console.error(e);
    });
};
//////////// SELECT BOX /////////////

/**
 * 상담구분 값 변동 시 이벤트
 */
watch(cnslDivVal, (item: Options) => {
  fnGetCnslType(item.value); // 상담유형 selectbox 재구성
});

/**
 * 상담신청 내역 조회
 */
interface Slide {
  cnslTargetList: CnslMng[];
}

const cnslTargetList = ref<CnslMng[]>([]); // 조회 결과
const tooltips = reactive<boolean[]>([]); // 상담 전체보기 툴팁
const history = reactive<boolean[]>([]); // 더보기 툴팁
const groupUser = reactive<boolean[]>([]); // 집단상담 명단 툴팁
const cnslRsltKeyword = ref<string[]>([]); // 상담결과 키워드
const slides = ref<Slide[]>([]); // 페이징 (Swiper)
const moreTxt = ref(); // 상담내용 영역 측정용
const fnGetCnslTargetList = () => {
  const params = {
    cnslrId: userInfo.userId,
    cnslYear: cnslYear,
    selectType: "target1",
  };

  vm.$axios
    .get("/api/counsel/client/professor/getTargetListForCnlsr", { params: params })
    .then((res) => {
      const data = res.data.data;

      // 집단상담은 처음 꺼 하나만 표시
      cnslTargetList.value = [];
      data.forEach((item: CnslMng) => {
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
        moreTxt.value.forEach((txt: Element) => {
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
 * 상담답변 저장 및 조회 팝업 호출
 */
const fnGetSaveRsltPop = (_item: CnslMng) => {
  // 선택 상담 정보 담기
  cnslRsltInfo.value = _item;
  cnslRnd.value = _item.cnslRnd;
  if (_item.cnslRsltKeyword != null) cnslRsltKeyword.value = _item.cnslRsltKeyword.split(" ");
  else cnslRsltKeyword.value = [];
  cnslTypeVal.value = { label: "", value: "" };
  cnslStsVal.value = { label: "전체", value: "" };
  cnslDivOptions.value.forEach((option) => {
    if (option.value === _item.cnslDiv) cnslDivVal.value = option;
  });
  cnslTypeOptions.value.forEach((option) => {
    if (option.value === _item.cnslType) cnslTypeVal.value = option;
  });
  cnslStsOptions.value.forEach((option) => {
    if (option.value === _item.cnslSts) cnslStsVal.value = option;
  });
  popupShow(0);
};

/**
 * 상담답변 저장 버튼 클릭 시 이벤트
 */
// 상담결과 등록 필수 요소
const cnslRsltTitleRef = ref();
const cnslDivRef = ref();
const cnslTypeRef = ref();
const cnslRsltContRef = ref();
const cnslStsRef = ref();
const cnslRsltKeywordRef = ref();
const cnslRsltProcRef = ref();
// 재예약 등록 필수 요소
const rebookKeywordRef = ref();
const rebookContRef = ref();
const rebookdTRef = ref();
const cnslRsltInfo = ref<CnslMng>(new CnslMngInfo()); // 상담 답변정보
const onClickSaveRsltBtn = () => {
  const cnslSts = cnslStsVal.value.value;
  // 상담완료 or 상담연계 시 validate
  if (cnslSts === "CNSL_APRV002" || cnslSts === "CNSL_APRV004") {
    // validate
    if (cnslRsltInfo.value.cnslRsltTitle === null || cnslRsltInfo.value.cnslRsltTitle == "") {
      vm.$toast("제목을 입력해주세요.", "error");
      cnslRsltTitleRef.value.focus();
      return false;
    }
    if (cnslRsltInfo.value.cnslDiv === null || cnslRsltInfo.value.cnslDiv == "") {
      vm.$toast("상담구분을 선택해주세요.", "error");
      cnslDivRef.value.focus();
      return false;
    }
    if (cnslRsltInfo.value.cnslType === null || cnslRsltInfo.value.cnslType == "") {
      vm.$toast("상담유형을 선택해주세요.", "error");
      cnslTypeRef.value.focus();
      return false;
    }
    if (cnslRsltKeyword.value.length === 0) {
      vm.$toast("키워드를 입력해주세요.", "error");
      cnslRsltKeywordRef.value.focus();
      return false;
    }
    if (cnslRsltInfo.value.cnslRsltCont === null || cnslRsltInfo.value.cnslRsltCont == "") {
      vm.$toast("상담내용을 입력해주세요.", "error");
      cnslRsltContRef.value.focus();
      return false;
    }
    if (cnslRsltInfo.value.cnslRsltProc === null || cnslRsltInfo.value.cnslRsltProc == "") {
      vm.$toast("결과조치를 입력해주세요.", "error");
      cnslRsltProcRef.value.focus();
      return false;
    }
    if (cnslRsltInfo.value.cnslSts === null || cnslRsltInfo.value.cnslSts == "") {
      vm.$toast("내용을 입력해주세요.", "error");
      cnslStsRef.value.focus();
      return false;
    }
  }

  if (cnslSts === "CNSL_APRV002") {
    // 상담완료 > 저장
    vm.$confirm("상담내용을 저장하시겠습니까?", "", (isConfrim: boolean) => {
      if (isConfrim) fnSaveCnslRslt("저장되었습니다.");
    });
  } else if (cnslSts === "CNSL_APRV003") {
    // 재예약 > 재예약 등록 + 저장
    fnGetRebookPop(new CnslMngInfo());
  } else if (cnslSts === "CNSL_APRV004") {
    // 상담연계 > 알림 등록 + 저장
    vm.$confirm("연계안내 및 저장 처리 / 상담내용을 저장하시고 연계처리하시겠습니까?", "", (isConfrim: boolean) => {
      if (isConfrim) fnSendAlrnm();
    });
  } else if (cnslSts === "CNSL_APRV005") {
    // 상담불참 > 저장 (해당 학생 나의 상담내역에, 상담상태를 불참으로 표시)
    vm.$confirm("상담 불참 상태로 저장 하시겠습니까?", "", (isConfrim: boolean) => {
      if (isConfrim) fnSaveCnslRslt("저장되었습니다.");
    });
  } else {
    // 상담처리 미선택
    vm.$toast("상담처리를 선택해주세요.", "error");
  }
};

/**
 * 상담답변 저장
 */
const fnSaveCnslRslt = (_msg: string) => {
  let cnslRsltKeywordStr = cnslRsltKeyword.value != null ? cnslRsltKeyword.value.join(" ") : "";
  let cnslRsltCont = "";
  let cnslRsltProc = "";
  if (cnslRsltInfo.value.cnslRsltCont != null)
    cnslRsltCont = cnslRsltInfo.value.cnslRsltCont.replaceAll(/(\n|\r\n)/g, "<br />");
  if (cnslRsltInfo.value.cnslRsltProc != null)
    cnslRsltProc = cnslRsltInfo.value.cnslRsltProc.replaceAll(/(\n|\r\n)/g, "<br />");
  const params = {
    cnslMngId: cnslRsltInfo.value.cnslMngId,
    groupKeyId: cnslRsltInfo.value.groupKeyId,
    cnslRsltTitle: cnslRsltInfo.value.cnslRsltTitle ?? "",
    cnslRsltKeyword: cnslRsltKeywordStr,
    cnslDiv: cnslDivVal.value.value ?? "",
    cnslType: cnslTypeVal.value.value ?? "",
    cnslRsltCont: cnslRsltCont,
    cnslRsltProc: cnslRsltProc,
    cnslSts: cnslStsVal.value.value,
  };
  vm.$loading.show();
  vm.$axios
    .post("/api/counsel/client/professor/createCnslRslt", JSON.stringify(params))
    .then((res) => {
      if (res.status === 200) {
        // 성공 시
        vm.$toast(_msg, "success");
        fnGetCnslTargetList(); // 리스트 재조회
        fnCallInjectFunc(fnGetCnslCntInfo); // 건수 재조회
        popupHide(0);
      } else {
        // 실패 시
        vm.$toast("저장하는 중 문제가 발생하였습니다. \n잠시후 다시시도해주세요.", "error");
      }
    })
    .catch((e) => {
      vm.$toast("저장하는 중 문제가 발생하였습니다. \n잠시후 다시시도해주세요. (1)", "error");
      console.error(e);
    })
    .finally(() => {
      vm.$loading.hide();
    });
};
/**
 * 상담사 일정 날짜정보 조회
 */
interface tdType {
  selDate: string;
  weeks: string;
  time: number;
  classNm: string;
}
const weeks = ref<number>(0); // 현재 주차와 차이 저장
const selDate = ref<string>(""); // 선택 주자 (현재 주차 일요일 년월일 ~ 토요일 일자)
const selSunDate = ref<string>(""); // 현재주차 시작일(일요일)
const selDateLoaded = ref<boolean>(true); // 상담사 일정 캘린더 영역 로딩 관리
const selectedDate = ref<tdType>({
  selDate: "",
  weeks: "",
  time: -1,
  classNm: "",
}); // 선택일자
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

/**
 * 재예약 팝업 호출
 */
const fnGetRebookPop = (_item: CnslMng) => {
  rebookInfo.value = new CnslMngInfo();
  selectedDate.value = {
    selDate: "",
    weeks: "",
    time: -1,
    classNm: "",
  };
  if (typeof _item !== "undefined") cnslRsltInfo.value = _item;
  // 재예약 > 재예약 등록 + 저장
  let userIds: string[] = [cnslRsltInfo.value.userId];
  let userNms: string[] = [cnslRsltInfo.value.userNm];
  if (cnslRsltInfo.value.groupUserList != null) {
    cnslRsltInfo.value.groupUserList.forEach((item) => {
      userIds.push(item.userId);
      userNms.push(item.userNm);
    });
  }
  rebookInfo.value.userId = userIds.join("^");
  rebookInfo.value.userNm = userNms.join("^");
  popupShow(1);
};

/**
 * 재예약 저장
 */
const rebookInfo = ref<CnslMng>(new CnslMngInfo()); // 상담 재예약정보
const rebookKeyword = ref<string[]>([]); // 재예약 키워드
const fnGetSaveRebook = () => {
  // validate
  if (rebookKeyword.value.length === 0) {
    vm.$toast("키워드를 입력해주세요", "error");
    rebookKeywordRef.value.focus();
    return false;
  }
  if (rebookInfo.value.cnslReqCont === null || rebookInfo.value.cnslReqCont === "") {
    vm.$toast("상담내용을 입력해주세요", "error");
    rebookContRef.value.focus();
    return false;
  }
  if (selectedDate.value === null || selectedDate.value.selDate === "") {
    vm.$toast("상담일시를 선택해주세요.", "error");
    rebookdTRef.value.focus();
    return false;
  }

  // 저장 시 필요한 값만 rebookInfo에 저장
  rebookInfo.value.cnslMethod = cnslRsltInfo.value.cnslMethod;
  rebookInfo.value.cnslReqTitle = cnslRsltInfo.value.cnslReqTitle;
  rebookInfo.value.cnslReqCont = rebookInfo.value.cnslReqCont.replaceAll(/(\n|\r\n)/g, "<br />");
  rebookInfo.value.cnslDiv = cnslRsltInfo.value.cnslDiv;
  rebookInfo.value.cnslType = cnslRsltInfo.value.cnslType;
  rebookInfo.value.cnslrId = userInfo.userId;
  rebookInfo.value.cnslrNm = userInfo.userNm;
  rebookInfo.value.cnslDate = selectedDate.value.selDate;
  rebookInfo.value.cnslStrTime = selectedDate.value.time;
  rebookInfo.value.cnslEndTime = selectedDate.value.time + 1;
  rebookInfo.value.cnslReqKeyword = rebookKeyword.value.join(" ");

  vm.$loading.show();
  vm.$axios
    .post("/api/counsel/client/professor/counselRequest/createCnslMng", JSON.stringify(rebookInfo.value))
    .then((res) => {
      if (res.status === 200) {
        // 성공 시
        cnslStsVal.value = { label: "재예약", value: "CNSL_APRV003" };
        fnSaveCnslRslt("저장되었습니다.");
        popupHide(1);
      } else {
        // 실패 시
        vm.$toast("상담 재예약 중 문제가 발생하였습니다. \n잠시후 다시시도해주세요", "error");
      }
    })
    .catch((e) => {
      vm.$toast("상담 재예약 중 문제가 발생하였습니다. \n잠시후 다시시도해주세요 (1)", "error");
      console.error(e);
    })
    .finally(() => {
      vm.$loading.hide();
    });
};

/**
 * 상담 회차 조회
 */
const cnslRnd = ref<number>(0);
const cnslRsltPopLoaded = ref<boolean>(true);
const fnGetCnslInfoByRnd = (round: number) => {
  const params = {
    cnslrId: userInfo.userId,
    userId: cnslRsltInfo.value.userId,
    cnslRnd: round,
  };
  cnslRsltPopLoaded.value = false;
  vm.$axios
    .get("/api/counsel/client/professor/getCsnlRsltByRnd", { params: params })
    .then((res) => {
      const data = res.data.data;
      if (data != null) {
        cnslRsltInfo.value = data;

        // SELECTBOX 정보 저장
        if (data.cnslRsltKeyword != null) cnslRsltKeyword.value = data.cnslRsltKeyword.split(" ");
        else cnslRsltKeyword.value = [];
        cnslTypeVal.value = { label: "", value: "" };
        cnslStsVal.value = { label: "전체", value: "" };
        cnslDivOptions.value.forEach((option) => {
          if (option.value === data.cnslDiv) cnslDivVal.value = option;
        });
        cnslTypeOptions.value.forEach((option) => {
          if (option.value === data.cnslDiv) cnslTypeVal.value = option;
        });
        cnslStsOptions.value.forEach((option) => {
          if (option.value === data.cnslDiv) cnslStsVal.value = option;
        });
        cnslRnd.value = round;
      } else {
        vm.$toast("마지막 회차입니다.", "error");
      }
    })
    .catch((e) => {
      console.error(e);
    })
    .finally(() => {
      cnslRsltPopLoaded.value = true;
    });
};
// 상담회차 변경 시 이벤트
const prevCnslRnd = () => {
  if (cnslRnd.value == 1) {
    vm.$toast("첫번째 회차입니다.", "error");
  } else {
    fnGetCnslInfoByRnd(cnslRnd.value - 1);
  }
};
const nextCnslRnd = () => {
  fnGetCnslInfoByRnd(cnslRnd.value + 1);
};

/**
 * 연계상담처리 시 안내 알림 전송
 * TODO :: 알림 발송 로직 완성 시 연결
 */
const fnSendAlrnm = () => {
  // TODO :: 알림발송 로직 만들어지면 연결
  fnSaveCnslRslt("저장되었으며, 연계처리되었습니다.");
};

// 핵심역량 > 핵심역량 팝업 호출 TODO : 핵심역량 로직 대기중
// 포트폴리오 > 포트폴리오 팝업 호출 TODO : 포트폴리오 로직 대기중

/**
 * 상담 히스토리 팝업 호출
 */
const histroyInfo = ref<CnslMng[]>([]); // 히스토리 조회 정보
const hisCnslDivOptions = ref<Options[]>([]); // 상담영역 (분류)
const hisCnslDivVal = ref<Options>({ label: "전체(상담분류)", value: "" });
const fnGetCnslHisPop = (item: CnslMng) => {
  cnslRsltInfo.value = item; // 선택 값 저장
  fnGetHisCnslDiv(); // 히스토리로 구분 값 추출
  popupShow(2); // 팝업 노출
};

/**
 * 상담 히스토리용 상담구분 SELECTBOX 호출
 */
interface HisDiv {
  cnslDivNm: string;
  cnslDiv: string;
}

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
      data.forEach((item: HisDiv) => {
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
const fnGetCnslHis = (_cnslDiv: string) => {
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
      data.forEach((item: CnslMng) => {
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
  fnGetCnslDiv();
  fnGetCnslSts();
  fnGetSelDate();
});
</script>
