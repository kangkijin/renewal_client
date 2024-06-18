<template>
  <div class="search_box">
    <div class="search_section">
      <div class="search_toggle lg center flip">
        <div class="left">
          <p class="total_count">
            <strong>{{ cnslList.length }}</strong
            >개의 상담
          </p>
        </div>
        <div class="right">
          <div class="select_row xs2">
            <vue-select class="select_box" :options="yearOptions" v-model="yearVal"></vue-select>
          </div>
          <div class="select_row md">
            <vue-select class="select_box" :options="methodsOptions" v-model="methodsVal"></vue-select>
          </div>
          <div class="select_row md">
            <vue-select class="select_box" :options="cnslDivOptions" v-model="cnslDivValItem"></vue-select>
          </div>
          <div class="search_row">
            <input
              type="search"
              class="form_style wd_p100"
              v-model="keyword"
              placeholder="상담제목/키워드로 검색해주세요."
            />
            <button type="button" class="btn_search btn_icon icon_only" @click="fnGetCnslList()">검색</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 결과 없을 경우 표출 -->
  <div v-if="cnslList.length === 0" class="test_before">
    <div>
      <p>나의 상담내역이 없습니다.</p>
    </div>
  </div>

  <div v-if="cnslList.length > 0" :class="'program_doublewrap cnsl' + (searchLoading ? ' loading_md' : '')">
    <div v-for="(item, idx) in cnslList" :key="idx" class="program_viewbox">
      <span v-if="item.cnslSts === 'CNSL_APRV006'" class="interview_label">상담사 취소</span>
      <span v-else-if="item.cnslMethod === 'OFF'" class="interview_label">대면</span>
      <span v-else-if="item.cnslMethod === 'ON'" class="interview_label online">온라인</span>
      <p class="texter">
        {{ item.cnslDivNm.substr(0, item.cnslDivNm.length - 2) }}<br />{{
          item.cnslDivNm.substr(item.cnslDivNm.length - 2)
        }}
      </p>
      <div class="cnt">
        <p class="title">
          <strong>/ {{ item.cnslrNm }}</strong> {{ item.cnslRsltTitle ?? item.cnslReqTitle }}
        </p>
        <ul class="keywords">
          <li>
            <strong>학생키워드</strong>
            <div class="labels">
              <template v-if="item.cnslReqKeyword != null">
                <span v-for="(chips, idx2) in item.cnslReqKeyword.split(' ')" :key="idx2">{{ chips }} </span>
              </template>
            </div>
          </li>
          <li>
            <strong class="cnsl">상담사키워드</strong>
            <div class="labels">
              <template v-if="item.cnslRsltKeyword != null">
                <span v-for="(chips, idx2) in item.cnslRsltKeyword.split(' ')" :key="idx2">{{ chips }}</span>
              </template>
            </div>
          </li>
        </ul>
        <ul class="function">
          <li class="icon calendar">
            <strong>상담일시</strong>
            <span v-if="item.cnslDate">
              {{ item.cnslDate }} {{ item.cnslStrTime }}:00~{{ item.cnslDate }} {{ item.cnslEndTime }}:00
            </span>
            <span v-else>미지정</span>
          </li>
        </ul>
      </div>
      <button
        v-if="item.cnslDiv === 'CNSL006' && item.cnslRsltCont != null"
        type="button"
        class="btn_white btn_sm btn_round btn_cnsl"
        @click="fnShowPopup('WRITE', item)"
      >
        글쓰기 피드백
      </button>
      <button
        v-else-if="item.cnslMethod === 'ON' && item.cnslRsltCont != null"
        type="button"
        class="btn_white btn_sm btn_round btn_cnsl"
        @click="fnShowPopup('ONLINE', item)"
      >
        온라인 상담 답변
      </button>
    </div>
  </div>
  <PaginationUi />

  <PopupView v-model="isPopups[0]">
    <template #title>글쓰기 피드백</template>
    <template #footer>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="popupHide(0)">확인</button>
    </template>
    <div class="cnsl_popup">
      <div class="section">
        <h4>상담 등록 내용</h4>
        <div class="tbl tbl_row scrollx_tbl_xs">
          <table>
            <caption>
              상담 등록 내용
            </caption>
            <colgroup>
              <col style="width: 16.5%" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">제목</th>
                <td>{{ detail.cnslReqTitle }}</td>
              </tr>
              <tr>
                <th scope="row">내용</th>
                <td><span v-html="detail.cnslReqCont"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="section">
        <h4>상담 답변 내용</h4>
        <div class="tbl tbl_row scrollx_tbl_xs">
          <table>
            <caption>
              상담 답변 내용
            </caption>
            <colgroup>
              <col style="width: 16.5%" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">제목</th>
                <td>{{ detail.cnslRsltTitle }}</td>
              </tr>
              <tr>
                <th scope="row">내용</th>
                <td><span v-html="detail.cnslReqCont"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="section">
        <h4>첨부파일</h4>
        <div class="attach_file_list">
          <div class="file_row">
            <div class="file_name">
              <p>글쓰기피드백.docx</p>
              <i>145KB</i><button type="button" class="btn_icon icon_only download">다운로드</button
              ><button type="button" class="btn_icon icon_only delete">삭제</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PopupView>
  <PopupView v-model="isPopups[1]">
    <template #title>온라인 상담 답변</template>
    <template #footer>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="popupHide(1)">확인</button>
    </template>
    <div class="cnsl_popup">
      <div class="section">
        <h4>상담 등록 내용</h4>
        <div class="tbl tbl_row scrollx_tbl_xs">
          <table>
            <caption>
              상담 등록 내용
            </caption>
            <colgroup>
              <col style="width: 16.5%" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">제목</th>
                <td>{{ detail.cnslRsltTitle }}</td>
              </tr>
              <tr>
                <th scope="row">내용</th>
                <td><span v-html="detail.cnslReqCont"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="section">
        <h4>상담 답변 내용</h4>
        <div class="tbl tbl_row scrollx_tbl_xs">
          <table>
            <caption>
              상담 답변 내용
            </caption>
            <colgroup>
              <col style="width: 16.5%" />
              <col style="width: auto" />
            </colgroup>
            <tbody>
              <tr>
                <th scope="row">제목</th>
                <td>{{ detail.cnslRsltTitle }}</td>
              </tr>
              <tr>
                <th scope="row">내용</th>
                <td><span v-html="detail.cnslReqCont"></span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="section">
        <h4>첨부파일</h4>
        <div class="attach_file_list">
          <div class="file_row">
            <div class="file_name">
              <p>글쓰기피드백.docx</p>
              <i>145KB</i><button type="button" class="btn_icon icon_only download">다운로드</button
              ><button type="button" class="btn_icon icon_only delete">삭제</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PopupView>
</template>

<script setup lang="ts">
import PaginationUi from "@/components/common/PaginationUi.vue";
import PopupView from "@/components/common/PopupView.vue";

import { onMounted, ref, getCurrentInstance } from "vue";
import moment from "moment";

import type { CodeMng, CnslMng, Options } from "@/components/prfsncnsl/cnslReq/prfsncnsl";
import { CnslMngInfo } from "@/components/prfsncnsl/cnslReq/prfsncnsl";
import UserInfo from "@/components/prfsncnsl/cnslReq/userInfo.json";

// VM
const instance = getCurrentInstance();
if (!instance) throw new Error("getCurrentInstance returned null");
const vm = instance.appContext.config.globalProperties;

// fliter
// 년도 selectbox 구성
const yearOptions = ref<Options[]>([]);
const yearVal = ref<Options>({ label: "전체", value: "" });
const fnGetYearOptions = () => {
  const thisYear: number = Number(moment().format("YYYY"));
  yearOptions.value.push({ label: "전체", value: "" });
  for (let i = 2024; i <= thisYear; i++) {
    yearOptions.value.push({ label: i + "", value: i + "" });
  }
};

const methodsOptions = [
  { label: "전체", value: "" },
  { label: "대면", value: "OFF" },
  { label: "온라인", value: "ON" },
];
const methodsVal = ref({ label: "전체", value: "" });

// 상담구분 selectbox 구성
const cnslDivOptions = ref<Options[]>([]);
const cnslDivValItem = ref<Options>({ label: "전체", value: "" });
const fnGetCnslDiv = () => {
  const params = {
    cdCategory: "CNSL_DIV",
  };
  vm.$axios
    .get("/api/counsel/common/counsel/getCodeList", { params: params })
    .then((res) => {
      const data = res.data.data;
      cnslDivOptions.value.push({ label: "전체", value: "" });
      data.forEach((item: CodeMng) => {
        cnslDivOptions.value.push({ label: item.cdNm, value: item.cdId });
      });
      cnslDivValItem.value = cnslDivOptions.value[0];
    })
    .catch((e) => {
      console.error(e);
    });
};

const keyword = ref<string>("");

// 나의 상담내역 전체
const searchLoading = ref<boolean>(false);
const cnslList = ref<CnslMng[]>([]);
const fnGetCnslList = () => {
  const params = {
    userId: UserInfo.userInfo.userId,
    cnslYear: yearVal.value.value,
    cnslMethod: methodsVal.value.value,
    cnslDiv: cnslDivValItem.value.value,
    keyword: keyword.value,
  };
  searchLoading.value = true;
  vm.$axios
    .get("/api/counsel/client/user/myCounselList/getUserCnslList", { params: params })
    .then((res) => {
      cnslList.value = res.data.data;
    })
    .catch((e) => {
      console.error(e);
    })
    .finally(() => {
      searchLoading.value = false;
    });
};

// 팝업관리
const isPopups = ref<boolean[]>([false, false]);
const popupShow = (idx: number) => {
  isPopups.value[idx] = true;
};
const popupHide = (idx: number) => {
  isPopups.value[idx] = false;
};

const detail = ref<CnslMng>(new CnslMngInfo());
const fnShowPopup = (type: string, item: CnslMng) => {
  detail.value = item;
  if (type === "WRITE") {
    popupShow(0);
  } else if (type === "ONLINE") {
    popupShow(1);
  }
};

onMounted(() => {
  fnGetYearOptions();
  fnGetCnslDiv();
  fnGetCnslList();
});
</script>
