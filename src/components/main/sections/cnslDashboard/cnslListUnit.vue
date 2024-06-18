<template>
  <div :class="loaded ? '' : 'loading_md'">
    <div class="cnsl_date">
      <button type="button" class="prev" @click="fnGetPrevMonth()">이전</button>
      <p>{{ selYearAndMonth }}</p>
      <button type="button" class="next" @click="fnGetNextMonth()">다음</button>
    </div>
    <div class="cnsl_content">
      <div class="ta_r">
        <button type="button" class="btn_icon write2" @click="fnGetRegPopup()">직접등록</button>
      </div>
      <div class="cnsl_schedule">
        <div class="btn_left">
          <button type="button" class="prev" @click="fnGetPrevDay()">이전</button>
          <p>{{ day }}</p>
          <button type="button" class="next" @click="fnGetNextDay()">다음</button>
        </div>
        <div v-if="cnslHistory.length === 0" class="test_before">
          <div>
            <p>상담일정이 없습니다!</p>
          </div>
        </div>
        <div v-if="cnslHistory.length > 0" class="main_calendarlist">
          <div>
            <ul>
              <li v-for="(item, idx) in cnslHistory" :key="idx" class="normal">
                <p class="title">
                  {{ item.userNm ?? "-" }}학생/{{ item.hakguaCdNm ?? "-" }} /{{ item.gradeCdNm ?? "-" }}/
                  {{ item.ph ?? "-" }}/{{ item.email ?? "-" }}
                </p>
                <span class="date">{{ item.cnslStrTime }}:00~{{ item.cnslEndTime }}:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 팝업 -->
  <PopupView v-model="isPopups[0]" class="large">
    <template #title>상담 대상자 검색</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(0)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="fnSelectUser()">초대</button>
    </template>
    <div class="divide_search">
      <div class="left flex2">
        <div class="divide_header">
          <div class="toggle_wrap">
            <div class="left mg_b0">
              <div class="divide_radio_wrap">
                <p class="radio_line">
                  <input type="radio" name="alarm_radio" id="alarm_radio1" value="USER" v-model="tabs" checked />
                  <label for="alarm_radio1">학생</label>
                </p>
                <p class="radio_line">
                  <input type="radio" name="alarm_radio" id="alarm_radio2" value="GUIDE" v-model="tabs" />
                  <label for="alarm_radio2">지도학생</label>
                </p>
              </div>
            </div>
            <div class="right">
              <vue-select
                class="select_box wd_150"
                :options="selectedOption.groups"
                :placeholder="'알림 그룹'"
                v-model="groupVal"
              ></vue-select>
            </div>
          </div>
        </div>
        <div class="divide_cnt">
          <div class="search_wrap">
            <div class="search_row">
              <input
                type="search"
                class="form_style wd_p100"
                v-model="userScrhKeword"
                placeholder="이름 또는 아이디로 검색하세요"
              />
              <button type="button" class="btn_search btn_icon icon_only" @click="fnGetCnslTarget">검색</button>
            </div>
          </div>
          <!-- 내용 없을때 표출 -->
          <div v-if="userList.length === 0" class="no_notice">
            <p>알림대상자가 없습니다</p>
          </div>
          <ul v-if="userList.length > 0" class="nofitarget_list">
            <template v-for="(item, idx) in userList" :key="idx">
              <li :class="fnDiffItem(item) ? 'disabled' : ''">
                <div class="info">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_noimg.svg" alt="이미지 없음" />
                  </div>
                  <p class="detail">
                    <strong>{{ item.korNm }}</strong>
                    <span>{{ item.hakguaCdNm }}</span>
                    <span>{{ item.gradeCdNm }}</span>
                  </p>
                </div>
                <div class="function">
                  <span class="like">999+</span>
                  <button type="button" class="btn_icon icon_only add_person" @click="addDirectory(item)">선택</button>
                  <button
                    v-if="!fnDiffItem(item)"
                    type="button"
                    class="btn_round btn_icon btn_xs btn_white icon_only plus"
                    title="추가"
                    @click="addTarget(item)"
                  >
                    추가
                  </button>
                  <p v-if="fnDiffItem(item)" class="font_red">추가됨</p>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="divide_header">
          <h4>
            선택된 대상자 <span>{{ selUserList.length }}</span>
          </h4>
        </div>
        <div class="divide_cnt">
          <!-- 내용 없을떄 -->
          <div v-if="selUserList.length === 0" class="no_notice">
            <p>선택된 대상자가 없습니다</p>
          </div>
          <ul class="nofitarget_list">
            <template v-if="selUserList.length > 0">
              <li v-for="(item, idx) in selUserList" :key="idx">
                <div class="info">
                  <div class="img_wrap">
                    <img src="@/assets/images/common/img_noimg.svg" alt="이미지 없음" />
                  </div>
                  <p class="detail">
                    <strong>{{ item.korNm }}</strong>
                    <span>{{ item.hakguaCdNm }}</span>
                    <span>{{ item.gradeCdNm }}</span>
                  </p>
                </div>
                <div class="function">
                  <button
                    type="button"
                    class="btn_round btn_icon btn_xs btn_white icon_only minus"
                    @click="delTarget(item)"
                  >
                    제거
                  </button>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </PopupView>

  <PopupView v-model="isPopups[1]">
    <template #title>상담예약 직접입력</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(1)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="fnSaveCnsl()">등록</button>
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
            </td>
          </tr>
          <tr>
            <th scope="row">신청내용</th>
            <td>
              <div class="letter_count count1000">
                <textarea
                  rows="6"
                  class="form_style wd_p100"
                  placeholder="상담내용을 입력해주세요."
                  v-model="cnslReqCont"
                ></textarea>
                <p class="letter_counter"></p>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">상담일시</th>
            <td>
              <div :class="'cnslr_box' + (selDateLoaded ? '' : ' loading_md')">
                <div class="cnsl_date">
                  <button type="button" class="prev" @click="weeks--">이전</button>
                  <p>{{ selDate }}</p>
                  <button type="button" class="next" @click="weeks++">다음</button>
                </div>
                <div class="cnsl_content">
                  <DTimeTableForReq
                    :cnslrId="props.userInfo.userId"
                    :cnslrNm="props.userInfo.userNm"
                    :selSunDate="selSunDate"
                    :cnslDiv="'CNSL001'"
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
</template>

<script setup lang="ts">
import PopupView from "@/components/common/PopupView.vue";
import DTimeTableForReq from "@/components/common/DTimeTableForReq.vue";

import type { User } from "@/components/prfsncnsl/cnslReq/prfsncnsl";
import { ref, reactive, getCurrentInstance, watch, defineProps, onMounted } from "vue";
import moment from "moment";

// VM
const instance = getCurrentInstance();
if (!instance) throw new Error("getCurrentInstance returned null");
const vm = instance.appContext.config.globalProperties;

// Props
const props = defineProps(["userInfo"]);
const userInfo = reactive(props.userInfo);

const loaded = ref<boolean>(true);

// 팝업 관리
const isPopups = reactive<boolean[]>([false, false]);
const popupShow = (idx: number) => {
  isPopups[idx] = true;
};
const popupHide = (idx: number) => {
  isPopups[idx] = false;
};

// 상담 히스토리 날짜 관리
interface CnslHistory {
  userId: string;
  userNm: string;
  hakguaCdNm: string;
  gradeCdNm: string;
  ph: string;
  email: string;
  cnslStrTime: string;
  cnslEndTime: string;
}

const day = ref<string>(moment().format("DD")); // 선택일자
const selHistoryDate = ref<string>(moment().format("YYYY-MM-DD")); // 선택일
const selYearAndMonth = ref<string>(moment(selHistoryDate.value).format("YYYY-MM"));
const cnslHistory = ref<CnslHistory[]>([]); // 상담 히스토리

// 이전달 가져오기
const fnGetPrevMonth = () => {
  selHistoryDate.value = moment(selHistoryDate.value).subtract(1, "month").format("YYYY-MM-DD");
};
// 다음달 가져오기
const fnGetNextMonth = () => {
  selHistoryDate.value = moment(selHistoryDate.value).add(1, "month").format("YYYY-MM-DD");
};
// 이전일자 가져오기
const fnGetPrevDay = () => {
  selHistoryDate.value = moment(selHistoryDate.value).subtract(1, "day").format("YYYY-MM-DD");
};
// 다음일자 가져오기
const fnGetNextDay = () => {
  selHistoryDate.value = moment(selHistoryDate.value).add(1, "day").format("YYYY-MM-DD");
};
watch(selHistoryDate, (date) => {
  selYearAndMonth.value = moment(date).format("YYYY-MM");
  day.value = moment(date).format("DD");
  fnGetHistory();
});

// 상담 히스토리 조회
const fnGetHistory = () => {
  const params = {
    selDate: selHistoryDate.value,
    cnslrId: userInfo.userId,
  };
  loaded.value = false;
  vm.$axios
    .get("/api/counsel/client/professor/getCnslHistory", { params: params })
    .then((res) => {
      cnslHistory.value = res.data.data;
    })
    .catch((e) => {
      console.error(e);
    })
    .finally(() => {
      loaded.value = true;
    });
};

// 상담 대상자 조회
interface UserParams {
  keyword: string;
  hakguaCd: string;
  guideProfNo: string;
  gradeCd: string;
}
const groupVal = ref({ label: "나의 주소록", value: "", type: "ADRESS" });
const userScrhKeword = ref<string>("");
const userList = ref<User[]>(new Array());
const selUserList = ref<User[]>(new Array());
const fnGetCnslTarget = () => {
  let params: UserParams = { keyword: userScrhKeword.value, hakguaCd: "", guideProfNo: "", gradeCd: "" };
  if (groupVal.value.type === "HAKGUA") {
    params.hakguaCd = groupVal.value.value;
  } else if (groupVal.value.type === "STAFF") {
    params.guideProfNo = groupVal.value.value;
  } else if (groupVal.value.type === "GRADE") {
    params.gradeCd = groupVal.value.value;
  }

  if (tabs.value === "GUIDE") {
    params.guideProfNo = userInfo.userId;
  }

  vm.$axios.get("/api/counsel/client/professor/getUserList", { params: params }).then((res) => {
    userList.value = res.data.data;
  });
};
// 상담 대상자 검색 팝업 호출
const fnGetRegPopup = () => {
  fnGetCnslTarget();
  userList.value.forEach((item) => {
    item.addYn = "N";
  });
  popupShow(0);
};

// 검색
watch(groupVal, () => {
  fnGetCnslTarget();
});
const tabs = ref<string>();
watch(tabs, () => {
  fnGetCnslTarget();
});

// 상담 대상자 그룹 유형
const selectedOption = ref({
  value: "1개월",
  options: [
    { label: "1개월", code: "a" },
    { label: "2개월", code: "b" },
    { label: "3개월 3개월 3개월", code: "c" },
  ],
  groups: [
    { label: "나의 주소록", value: "", type: "ADRESS" },
    { label: "학과학생", value: userInfo.hakguaCd, type: "HAKGUA" },
    { label: "학과교수", value: userInfo.userId, type: "STAFF" },
    { label: "1학년", value: "1", type: "GRADE" },
    { label: "2학년", value: "2", type: "GRADE" },
    { label: "3학년", value: "3", type: "GRADE" },
    { label: "4학년", value: "4", type: "GRADE" },
  ],
});

// 주소록에 추가
const addDirectory = (item: User) => {
  vm.$alert("준비중인 기능입니다!", "");
  // TODO :: 주소록 테이블 만들어지면 연결
  console.log(item);
};
// 대상자 추가
const addTarget = (item: User) => {
  selUserList.value.push(item);
};
// 대상자 제외
const delTarget = (item: User) => {
  selUserList.value = selUserList.value.filter((selItem) => {
    return !(selItem.userId == item.userId);
  });
};
const fnDiffItem = (item: User) => {
  const result = selUserList.value.filter((selItem) => {
    return selItem.userId === item.userId;
  });
  return result.length > 0;
};

// 상담사 일정 날짜정보 조회
const weeks = ref<number>(0);
const selDate = ref<string>("");
const selSunDate = ref<string>("");
const selDateLoaded = ref<boolean>(true);
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
watch(weeks, () => {
  fnGetSelDate();
  selDateLoaded.value = false;
});
const chips = ref();
const selectedDate = ref();
const cnslReqCont = ref<string>();
const fnSaveCnsl = () => {
  const userIds: string[] = [];
  const userNms: string[] = [];
  selUserList.value.forEach((item) => {
    userIds.push(item.userId);
    userNms.push(item.korNm);
  });

  if (typeof selectedDate.value === "undefined" || selectedDate.value.selDate === "") {
    vm.$toast("예약일시를 선택해주세요.", "error");
    return false;
  } else if (typeof chips.value === "undefined" || chips.value.length === 0) {
    vm.$toast("키워드를 입력해주세요.", "error");
    return false;
  } else if (cnslReqCont.value === "") {
    vm.$toast("신청내용을 입력해주세요.", "error");
    return false;
  }

  let reqCont: string = "";
  if (typeof cnslReqCont.value !== "undefined") {
    reqCont = cnslReqCont.value.replaceAll(/(\n|\r\n)/g, "<br />");
  }

  // TODO :: 상담신청 시 필요 데이터 추가 확인 필요(상담방법, 상담유형)
  const params = {
    userId: userIds.join("^"),
    userNm: userNms.join("^"),
    cnslMethod: "OFF", // 추가 필요??
    cnslDiv: "CNSL001", // 지도교수 상담
    cnslType: "CNSL001009", // 추가 필요?? (일단 기타)
    cnslrId: userInfo.userId,
    cnslrNm: userInfo.userNm,
    cnslDate: selectedDate.value.selDate,
    cnslStrTime: selectedDate.value.time,
    cnslEndTime: selectedDate.value.time + 1,
    cnslReqTitle: "지도교수 등록 상담",
    cnslReqKeyword: chips.value.join(" "),
    cnslReqCont: reqCont,
    regId: userInfo.userId,
  };

  vm.$loading.show();
  vm.$axios
    .post("/api/counsel/client/professor/counselRequest/createCnslMng", JSON.stringify(params))
    .then((res) => {
      if (res.status === 200) {
        vm.$alert("저장되었습니다.", "success");
        popupHide(0);
        popupHide(1);
      } else {
        vm.$toast("저장 중 오류가 발생하였습니다.\n 잠시후 다시시도해주세요.", "error");
      }
    })
    .catch((e) => {
      console.error(e);
      vm.$toast("저장 중 오류가 발생하였습니다.\n 잠시후 다시시도해주세요. (1)", "error");
    })
    .finally(() => {
      vm.$loading.hide();
    });
};

const fnSelectUser = () => {
  if (selUserList.value.length === 0) {
    vm.$toast("대상자를 선택해주세요", "error");
    return false;
  }
  popupShow(1);
};

onMounted(() => {
  fnGetHistory();
  fnGetSelDate();
});
</script>
