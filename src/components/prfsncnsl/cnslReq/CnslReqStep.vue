<template>
  <div class="section_tit_wrap">
    <h3 class="section_subtit">상담신청</h3>
  </div>
  <div class="flex_wrap cnsl_step">
    <!-- case 1 -->
    <div class="box step1">
      <div class="section_tit_wrap">
        <h4 class="section_tit">신청 STEP 1</h4>
      </div>
      <div class="cnsl_input_step">
        <strong>상담방법</strong>
        <div>
          <p class="radio_row">
            <input type="radio" id="cnsl_step1" v-model="cnslReqInfo.cnslMethod" value="OFF" />
            <label for="cnsl_step1">대면</label>
          </p>
          <p class="radio_row">
            <input type="radio" id="cnsl_step2" v-model="cnslReqInfo.cnslMethod" value="ON" />
            <label for="cnsl_step2">온라인</label>
          </p>
        </div>
      </div>
      <div class="cnsl_input_step">
        <strong>상담구분</strong>
        <div>
          <vue-select
            class="select_box"
            v-model="cnslDivValItem"
            :options="cnslDivOptions"
            :placeholder="'선택'"
          ></vue-select>
        </div>
      </div>
      <div class="cnsl_input_step">
        <strong>상담유형</strong>
        <div>
          <vue-select
            class="select_box"
            v-model="cnslTypeValItem"
            :options="cnslTypeOptions"
            :placeholder="'선택'"
          ></vue-select>
        </div>
      </div>
      <!-- case1-1 : 지도교수 자동 입력 -->
      <div v-if="cnslReqInfo.cnslDiv === 'CNSL001'" class="cnsl_input_step">
        <strong>상담사</strong>
        <div>
          <input
            type="text"
            class="form_style white"
            :value="cnslReqInfo.cnslrNm"
            :placeholder="cnslrPlaceholder"
            readonly
          />
        </div>
      </div>

      <!-- case1-2 : 교수 검색 창 제공 -->
      <div v-else-if="cnslReqInfo.cnslDiv === 'CNSL002'" class="cnsl_input_step">
        <strong>상담사</strong>
        <div>
          <div class="search_row">
            <input
              type="search"
              class="form_style"
              placeholder="교수님을 검색해주세요"
              v-model="cnslReqInfo.cnslrNm"
              @click="popupShow(0)"
            />
            <button type="button" class="btn_search btn_icon icon_only">검색</button>
          </div>
        </div>
      </div>

      <!-- case1-3 : 그 외 상담 -->
      <div v-else class="cnsl_input_step">
        <strong>상담사</strong>
        <div>
          <vue-select
            class="select_box"
            v-model="cnslrValItem"
            :options="cnslrOptions"
            :placeholder="'선택'"
          ></vue-select>
        </div>
      </div>
    </div>

    <!-- case 2 -->
    <div class="box step2">
      <div class="section_tit_wrap">
        <h4 class="section_tit">신청 STEP 2</h4>
      </div>
      <!-- 신청 step 작성 전일때 -->
      <!-- <div class="no_notice">
        <p>이전 상담신청을 작성해주세요.</p>
      </div> -->
      <!-- case 2-1: 글쓰기 상담(개인정보동의만  있는 팝업 출력) -->
      <div v-if="cnslReqInfo.cnslDiv === 'CNSL006'" class="cnsl_input_step">
        <strong>
          글쓰기 상담 안내
          <button type="button" class="btn_tooltip" @click="popupShow(1)">버튼</button>
        </strong>
        <div>
          <div class="program_filewrap">
            <div class="file_row download">
              <div class="file_name">
                <p>비교과프로그램참여신청서.hwp</p>
                <i>115KB</i>
              </div>
              <button type="button" class="btn_icon icon_only filedown">다운로드</button>
            </div>
            <div class="bottom_wrap">
              <label class="btn_round btn_white btn_sm"> 파일추가 <input type="file" class="hidden" /></label>
              <div class="file_row add">
                <div class="file_name">
                  <p>비교과프로그램참여신청서.hwp</p>
                  <i>115KB</i><button type="button" class="btn_icon icon_only delete">삭제</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cnsl_input_step">
        <strong>개인정보 동의 민감정보동의 상세보기 및 동의</strong>
        <div>
          <div class="step_checkbox">
            <p class="check_row">
              <input type="checkbox" id="privacy1" v-model="privacys" disabled />
              <label for="privacy1" class="cursor" @click="popupShow(2)">개인정보 수집/이용에 대한 동의</label>
            </p>
            <p v-if="cnslReqInfo.cnslDiv === 'CNSL003'" class="check_row">
              <input type="checkbox" id="privacy2_2" v-model="sensitives" disabled />
              <label for="privacy2_2" class="cursor" @click="popupShow(2)">민감정보 처리에 대한 동의</label>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="box step3">
      <div class="section_tit_wrap">
        <h4 class="section_tit">신청 STEP 3</h4>
      </div>
      <!-- 신청 step 작성 전일때 -->
      <!-- <div class="no_notice">
        <p>이전 상담신청을 작성해주세요.</p>
      </div> -->
      <div class="cnsl_input_step flex">
        <strong>상담일시</strong>
        <div>
          <div class="search_day">
            <input type="text" class="form_style white" readonly v-model="cnslDate" @click="fnSchdlPop()" />
            <button type="button" class="calendar_open"></button>
          </div>
        </div>
      </div>
      <div class="cnsl_input_step flex">
        <strong>키워드</strong>
        <div>
          <v-combobox
            v-model="chips"
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
      <div class="cnsl_input_step flex">
        <strong>제목</strong>
        <div>
          <input type="text" class="form_style" placeholder="제목을 입력해주세요" v-model="cnslReqInfo.cnslReqTitle" />
        </div>
      </div>
      <div class="cnsl_input_step flex">
        <strong>상담내용</strong>
        <div>
          <div class="letter_count count500">
            <textarea
              rows="4"
              class="form_style"
              placeholder="상담신청 내용을 입력해주세요."
              v-model="cnslReqInfo.cnslReqCont"
            ></textarea>
            <p class="letter_counter"></p>
          </div>
        </div>
      </div>
      <div class="btn_area">
        <button type="button" class="btn_round btn_lg btn_primary" @click="fnApplyCnsl()">상담 신청하기</button>
      </div>
    </div>
  </div>

  <PopupView v-model="isPopups[0]" class="medium">
    <template #title>교수님 검색</template>
    <div class="divide_search">
      <div class="left flex2">
        <div class="divide_header">
          <div class="toggle_wrap">
            <div class="left mg_b0">
              <div class="divide_radio_wrap">
                <p class="radio_line fix_width">
                  <input type="radio" name="alarm_radio" id="alarm_radio1" checked />
                  <label for="alarm_radio1">교수님</label>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="divide_cnt">
          <div class="search_wrap">
            <div class="search_row">
              <input type="search" class="form_style wd_p100" placeholder="이름 또는 학과로 검색하세요" />
              <button type="button" class="btn_search btn_icon icon_only">검색</button>
            </div>
          </div>
          <!-- 내용 없을때 표출 -->
          <div v-if="stafList.length === 0" class="no_notice">
            <p>검색하신 교수님이 없습니다</p>
          </div>
          <ul v-if="stafList.length > 0" class="nofitarget_list other_bg">
            <li v-for="(item, idx) in stafList" :key="idx">
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_noimg.svg" alt="이미지 없음" />
                </div>
                <p class="detail">
                  <strong>{{ item.cnslrNm }}</strong>
                  <span>{{ item.colgNm }}</span>
                  <span>{{ item.sustNm }}</span>
                </p>
              </div>
              <div class="function right">
                <button type="button" class="btn_round btn_xs btn_white wd_60" title="선택" @click="fnSelStaff(item)">
                  선택
                </button>
              </div>
            </li>
          </ul>
          <PaginationUi />
        </div>
      </div>
    </div>
  </PopupView>

  <PopupView v-model="isPopups[1]">
    <template #title>글쓰기 클리닉 안내</template>
    <template #footer>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="popupHide(1)">확인</button>
    </template>
    <div class="cnsl_popup">
      <div class="section">
        <h4>글쓰기 클리닉 안내</h4>
        <p class="text">
          ‘글쓰기 클리닉’은 대학생의 핵심역량으로서 글쓰기 능력을 증진하기 위해, 글쓰기의 문제점을 진단하고 피드백을
          제공하는 글쓰기 지도 프로그램입니다.<br />
          자기소개서, 보고서, 전공글쓰기, 서평, 연구계획서 등 상담을 받고 싶은 글을 ‘글쓰기상담’ 통해 제출하면, 글쓰기
          클리닉 전문위원들이 개별 피드백을 제공하여 완성도 높은 글을 작성할 수 있습니다.
        </p>
      </div>
      <div class="section">
        <h4>글쓰기 클리닉 운영 절차</h4>
        <ul class="write_steplist">
          <li>
            <div>
              <strong>STEP1</strong>
              <p>글쓰기 상담<br />신청접수</p>
            </div>
          </li>
          <li>
            <div>
              <strong>STEP2</strong>
              <p>1차 피드백<br />(글쓰기 상담사)</p>
            </div>
          </li>
          <li>
            <div>
              <strong>STEP3</strong>
              <p>2차 피드백<br />(글쓰기 자문위원)</p>
            </div>
          </li>
          <li>
            <div>
              <strong>STEP4</strong>
              <p>방문<br />상담</p>
            </div>
          </li>
        </ul>
        <p class="text">
          글쓰기 클리닉 피드백은 학생들의 글을 직접 수정해주지 않는 것을 원칙으로 하며, 해당 글의 개선을 위한
          체계적이고, 긍정적인 방향 제시를 통해 학생 스스로가 자신의 글을 수정할 수 있도록 운영되고 있습니다.<br />
          1차 피드백 후 학문 분야별 특성을 고려한 전문적인 피드백이 필요한 경우, 글쓰기 클리닉 자문위원과 매칭하여 2차
          피드백 실시합니다.<br />
          온라인 피드백에 대한 문의나 보다 심층적인 피드백을 원할 경우 사전 예약제로 운영되는 학습상담(상담사 :
          글쓰기)을 신청하시면 됩니다.
        </p>
      </div>
      <div class="section">
        <h4>글쓰기 클리닉 이용 안내</h4>
        <p class="text">
          글쓰기 클리닉을 통해서 상담받고 싶은 글(자기소개서, 보고서, 서평, 연구계획서 등)을 첨부 신청서에 작성하여
          아래에서 신청해주십시오. 상담이 완료된 글은 「나의 상담 이력 - 글쓰기 상담」에서 확인할 수 있습니다.
        </p>
      </div>
    </div>
  </PopupView>
  <PopupView v-model="isPopups[2]">
    <template #title v-if="cnslReqInfo.cnslDiv === 'CNSL003'">개인정보동의/민감정보동의</template>
    <template #title v-else>개인정보동의</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(2)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="[privacyCheck(), popupHide(2)]">확인</button>
    </template>
    <div class="cnsl_popup">
      <div class="section">
        <h4>개인정보 수집·이용에 대한 동의</h4>
        <div class="privacy_box mb-6">
          수집·이용하는 개인정보 항목<br />
          성명/생년월일/성별/학사정보/주소/이메일/휴대폰번호<br /><br />
          개인정보의 수집 및 이용목적<br />
          심리검사 및 심리상담을 제공하는데 있어 본인 확인 및 연락 등의 절차에 이용<br />
          상담실 이용 현황 파악을 위한 통계분석(개인정보가 노출되지 않습니다.)<br /><br />
          개인정보의 보유 및 이용기간<br />
          보유 이유: 향후 내방 시 효과적 심리상담 진행 및 편의 제공을 위함<br />
          동의일로부터 졸업 시까지 보관 후 폐기(학생상담센터 내부규정에 따름)
        </div>
        <div class="privacy_check">
          <p class="title">
            귀하는 이에 대한 동의를 거부할 수 있으며, 다만 동의가 없을 경우 원활한 심리검사 및 심리상담의 진행이 불가능
            할 수 있음을 알려드립니다.
          </p>
          <div class="choice">
            <strong>개인정보 수집·이용에 동의하십니까?</strong>
            <div>
              <p class="radio_row">
                <input type="radio" id="privacyChoice1_1" v-model="privacyChoice" value="Y" />
                <label for="privacyChoice1_1">예</label>
              </p>
              <p class="radio_row">
                <input type="radio" id="privacyChoice1_2" v-model="privacyChoice" value="N" />
                <label for="privacyChoice1_2">아니오</label>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <template v-if="cnslReqInfo.cnslDiv === 'CNSL003'">
          <h4>민감정보 처리에 대한 동의</h4>
          <div class="privacy_box mb-6">
            수집·이용하는 개인정보 항목<br />
            상담 및 검사경험/ 현재의 어려움/ 가족관계 및 친밀도/ 심리검사 결과<br /><br />
            민감정보의 수집 및 이용목적<br />
            심리검사 및 심리상담을 제공하는데 있어 본인을 이해하는데 이용<br />
            상담실 이용 현황 파악을 위한 통계 분석(개인 정보가 노출되지 않습니다.)<br /><br />
            민감정보의 보유 및 이용기간<br />
            보유 이유: 향후 내방 시 효과적 심리상담 진행 및 편의 제공을 위함<br />
            동의일로부터 졸업 시까지 보관 후 폐기동의일로부터 졸업 시까지 보관 후 폐기(학생상담센터 내부규정에 따름)
          </div>
          <div class="privacy_check">
            <p class="title">
              귀하는 이에 대한 동의를 거부할 수 있으며, 다만 동의가 없을 경우 원활한 심리검사 및 심리상담의 진행이
              불가능 할 수 있음을 알려드립니다.
            </p>
            <div class="choice">
              <strong>민감정보 수집·이용에 동의하십니까?</strong>
              <div>
                <p class="radio_row">
                  <input type="radio" id="sensitiveChoice1_1" v-model="sensitiveChoice" value="Y" />
                  <label for="sensitiveChoice1_1">예</label>
                </p>
                <p class="radio_row">
                  <input type="radio" id="sensitiveChoice1_2" v-model="sensitiveChoice" value="N" />
                  <label for="sensitiveChoice1_2">아니오</label>
                </p>
              </div>
            </div>
          </div>
        </template>
        <div class="privacy_check">
          <p class="title">
            개인정보 제공자가 동의한 내용 외의 다른 목적으로 활용하지 않으며, 제공된 개인정보의 이용을 거부하고자 할
            때에는 개인정보 관리책임자를 통해 열람, 정정, 삭제를 요구할 수 있음.
          </p>
          <div class="choice dp_block ta_c">
            <strong class="dp_block mb-4"
              >개인정보보호법, 동법 시행령, 동법 시행규칙에 의거하여 상기 본인은 위와 같이 개인정보 수집 및 활용에
              동의합니다.</strong
            >
            <div>
              <p class="radio_row">
                <input type="radio" id="privacyChoice2_1" v-model="privacyChoice2" value="Y" />
                <label for="privacyChoice2_1">예</label>
              </p>
              <p class="radio_row">
                <input type="radio" id="privacyChoice2_2" v-model="privacyChoice2" value="N" />
                <label for="privacyChoice2_2">아니오</label>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PopupView>
  <PopupView v-model="isPopups[4]">
    <template #title>상담일시 조정</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(4)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="fnSelDate()">등록</button>
    </template>
    <div class="tbl tbl_row scrollx_tbl_xs">
      <table>
        <caption>
          상담일시 조정
        </caption>
        <colgroup>
          <col style="width: 20%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">상담일시 조정</th>
            <td>
              <div class="cnslr_box">
                <div class="cnsl_date">
                  <button type="button" class="prev" @click="prevWeeks()">이전</button>
                  <p>{{ selDate }}</p>
                  <button type="button" class="next" @click="nextWeeks()">다음</button>
                </div>
                <div class="cnsl_content">
                  <DTimeTable
                    :cnslrId="cnslReqInfo.cnslrId"
                    :cnslDiv="cnslReqInfo.cnslDiv"
                    :selSunDate="selSunDate"
                    v-model="selectedItem"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">일시선택 안내</th>
            <td>
              <ul class="list_linetxt mb-4">
                <li>위 캘린더에서, 예약가능 상태의 시간을 선택하면 자동으로 해당 시간이 지정 됩니다.</li>
                <li>
                  원하는 상담일시가 없거나, 상담일시 지정이 중요하지 않은 경우에는 아래 상담시간 미지정을 선택하시면
                  상담사분께서 신청자분께 연락 후 시간을 지정하여 등록해드립니다.
                </li>
              </ul>
              <p class="check_row">
                <input type="checkbox" id="cnsl_datecheck" v-model="nonSelected" />
                <label for="cnsl_datecheck" class="bold">상담일시 미지정</label>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </PopupView>
</template>

<script setup lang="ts">
// Components
import PopupView from "@/components/common/PopupView.vue";
import PaginationUi from "@/components/common/PaginationUi.vue";
import DTimeTable from "@/components/common/DTimeTableForReq.vue";

// JSON
import UserInfo from "@/components/prfsncnsl/cnslReq/userInfo.json";
import CnslrList from "@/components/prfsncnsl/cnslReq/cnslrList.json";

import type { CnslMng, CodeMng, Cnslr, Options } from "@/components/prfsncnsl/cnslReq/prfsncnsl";
import { CnslMngInfo } from "@/components/prfsncnsl/cnslReq/prfsncnsl";
import { ref, onMounted, watch, getCurrentInstance } from "vue";

// VM
const instance = getCurrentInstance();
if (!instance) throw new Error("getCurrentInstance returned null");
const vm = instance.appContext.config.globalProperties;

const cnslReqInfo = ref<CnslMng>(new CnslMngInfo()); // 등록 객체
const isPopups = ref<boolean[]>([false, false, false, false]); // 팝업관리
const chips = ref<string[]>([]); // 키워드 배열
const cnslrPlaceholder = ref(""); // 상담사 선택 placeholder
const nonSelected = ref(false); // 상담일자 미지정 여부
const cnslDate = ref(""); // 상담일시

const stafList = CnslrList.staffList; // TODO :: 교수 테이블 연결 전 임시 json

// 팝업 열기
const popupShow = (idx: number) => {
  isPopups.value[idx] = true;
};
// 팝업 닫기
const popupHide = (idx: number) => {
  isPopups.value[idx] = false;
};

// 개인정보 동의/민감정보 확인
const privacys = ref<boolean>(false);
const privacyChoice = ref<string>("N");
const sensitives = ref<boolean>(false);
const sensitiveChoice = ref<string>("N");
const privacyChoice2 = ref<string>("N");
const privacyCheck = () => {
  privacys.value = privacyChoice.value === "Y" && privacyChoice2.value === "Y";
  sensitives.value = sensitiveChoice.value === "Y" && privacyChoice2.value === "Y";
};
// 상담구분 selecbox 구성
const cnslDivOptions = ref<Options[]>([]);
const cnslDivValItem = ref<Options>({ label: "", value: "" });
const fnGetCnslDiv = () => {
  const params = {
    cdCategory: "CNSL_DIV",
  };
  vm.$axios
    .get("/api/counsel/common/counsel/getCodeList", { params: params })
    .then((res) => {
      const data = res.data.data;
      data.forEach((item: CodeMng) => {
        cnslDivOptions.value.push({ label: item.cdNm, value: item.cdId });
      });
    })
    .catch((e) => {
      console.error(e);
    });
};

// 상담유형 selectbox 구성
const cnslTypeOptions = ref<Options[]>([]);
const cnslTypeValItem = ref<Options>({ label: "", value: "" });
const fnGetCnslType = (cnslDiv: string) => {
  const params = {
    cdCategory: "CNSL_TYPE",
    upCdId: cnslDiv,
  };
  vm.$axios
    .get("/api/counsel/common/counsel/getCodeList", { params: params })
    .then((res) => {
      const data = res.data.data;
      cnslTypeOptions.value = [];
      data.forEach((item: CodeMng) => {
        cnslTypeOptions.value.push({
          label: item.cdNm,
          value: item.cdId,
        });
      });
      if (cnslTypeOptions.value.length > 0) cnslTypeValItem.value = cnslTypeOptions.value[0];
    })
    .catch((e) => {
      console.error(e);
    });
};

// 상담사 selectbox 구성
const cnslrOptions = ref<Options[]>([]);
const cnslrValItem = ref<Options>({ label: "", value: "" });
const fnGetcnslr = (cnslDiv: string) => {
  const params = {
    cnslrDiv: cnslDiv,
  };
  vm.$axios
    .get("/api/counsel/common/counsel/getCnslrList", { params: params })
    .then((res) => {
      const data = res.data.data;
      cnslrOptions.value = [];
      data.forEach((item: Cnslr) => {
        cnslrOptions.value.push({
          label: item.cnslrNm,
          value: item.cnslrId,
        });
      });
      if (cnslrOptions.value.length > 0) cnslrValItem.value = cnslrOptions.value[0];
    })
    .catch((e) => {
      console.error(e);
    });
};

watch(cnslrValItem, (item) => {
  cnslReqInfo.value.cnslrId = item.value;
  cnslReqInfo.value.cnslrNm = item.label;
});

// 상담일자 정보
const weeks = ref<number>(0);
const selDate = ref<string>("");
const selSunDate = ref<string>("");
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
    });
};

// 교수님 선택
const fnSelStaff = (item: any) => {
  cnslReqInfo.value.cnslrNm = item.cnslrNm;
  cnslReqInfo.value.cnslrId = item.cnslrId;
  popupHide(0);
};

// 지난주 상담일정 조회
const prevWeeks = () => {
  weeks.value--;
  fnGetSelDate();
};
// 다음주 상담일정 조회
const nextWeeks = () => {
  weeks.value++;
  fnGetSelDate();
};

// 상담 구분 바뀌면
watch(cnslDivValItem, (item: Options) => {
  cnslReqInfo.value.cnslDiv = item.value; // 구분 값 저정
  fnGetCnslType(item.value); // 상담유형 selectbox 구성
  cnslReqInfo.value.cnslrNm = "";
  cnslReqInfo.value.cnslrId = "";
  if (item.value === "CNSL001") {
    // 지도교수상담일 때
    cnslrPlaceholder.value = "";
    cnslReqInfo.value.cnslrNm = UserInfo.userInfo.staffNm;
    cnslReqInfo.value.cnslrId = UserInfo.userInfo.staffId;
    // 지도교수로 세팅
  } else if (item.value === "CNSL002") {
    // 교수 상담일 때
    cnslrPlaceholder.value = "교수님을 선택해주세요.";
  } else {
    // 심리상담일 때
    cnslrPlaceholder.value = "상담사 선택";
    fnGetcnslr(item.value); // 상담사 selectbox 구성
  }
});

const fnSchdlPop = () => {
  if (!cnslReqInfo.value.cnslrId) {
    vm.$alert("먼저 상담사를 선택해주세요.", "");
    return false;
  }
  popupShow(4);
};

// 상담 유형이 바뀌면
watch(cnslTypeValItem, (item: Options) => {
  cnslReqInfo.value.cnslType = item.value;
});

// 상담사 바뀌면
watch(cnslrValItem, (item: Options) => {
  cnslReqInfo.value.cnslrId = item.value;
  cnslReqInfo.value.cnslrNm = item.label;
});

// 키워드
watch(chips, (val) => {
  cnslReqInfo.value.cnslReqKeyword = val.join(" ");
});

// 상담일시 선택
const selectedItem = ref();
const fnSelDate = () => {
  if (nonSelected.value) {
    // 상담일자 미지정
    cnslDate.value = "-";
    cnslReqInfo.value.cnslDate = "";
    cnslReqInfo.value.cnslStrTime = -1;
    cnslReqInfo.value.cnslEndTime = -1;
  } else {
    // 상담일자 지정
    cnslDate.value =
      selectedItem.value.selDate + " " + selectedItem.value.time + ":00 ~" + (selectedItem.value.time + 1) + ":00";
    cnslReqInfo.value.cnslDate = selectedItem.value.selDate;
    cnslReqInfo.value.cnslStrTime = selectedItem.value.time;
    cnslReqInfo.value.cnslEndTime = selectedItem.value.time + 1;
  }
  popupHide(4);
};

// 상담 저장
const fnApplyCnsl = () => {
  // validation
  if (!cnslReqInfo.value.cnslMethod) {
    vm.$toast("상담방법을 선택해주세요", "error");
    return false;
  } else if (!cnslReqInfo.value.cnslDiv) {
    vm.$toast("상담구분을 선택해주세요", "error");
    return false;
  } else if (!cnslReqInfo.value.cnslType) {
    vm.$toast("상담유형을 선택해주세요", "error");
    return false;
  } else if (!cnslReqInfo.value.cnslrId) {
    vm.$toast("상담사를 선택해주세요", "error");
    return false;
  } else if (!cnslReqInfo.value.cnslDate && !nonSelected.value) {
    vm.$toast("상담일시를 선택해주세요", "error");
    return false;
  } else if (!cnslReqInfo.value.cnslReqKeyword) {
    vm.$toast("키워드를 입력해주세요", "error");
    return false;
  } else if (!cnslReqInfo.value.cnslReqTitle) {
    vm.$toast("제목을 입력해주세요", "error");
    return false;
  } else if (!cnslReqInfo.value.cnslReqCont) {
    vm.$toast("내용을 선택해주세요", "error");
    return false;
  } else if (!privacys.value) {
    vm.$toast("개인정보 수집/이용에 대한 동의해주세요.", "error");
    return false;
  } else if (!sensitives.value && cnslReqInfo.value.cnslDiv === "CNSL003") {
    vm.$toast("민감정보 처리에 대한 동의해주세요.", "error");
    return false;
  }
  cnslReqInfo.value.userId = UserInfo.userInfo.userId;
  cnslReqInfo.value.userNm = UserInfo.userInfo.userNm;
  cnslReqInfo.value.regId = UserInfo.userInfo.userId;
  cnslReqInfo.value.cnslReqCont = cnslReqInfo.value.cnslReqCont.replaceAll(/(\n|\r\n)/g, "<br />");

  vm.$loading.show();
  vm.$confirm("신청하시겠습니까?", "", () => {
    vm.$axios
      .post("/api/counsel/client/user/counselRequest/createCnslMng", JSON.stringify(cnslReqInfo.value))
      .then((res) => {
        if (res.data.data) {
          vm.$alert("신청되었습니다.", "");
          vm.$router.push("/user/prfsncnsl/myCnsl");
        }
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        vm.$loading.hide();
      });
  });
};

onMounted(() => {
  fnGetCnslDiv();
  fnGetSelDate();
});
</script>
