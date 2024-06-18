<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">비교과프로그램</h2>
        <div class="title_function">
          <div class="radio_tab_wrap">
            <p class="radio_tab">
              <input type="radio" id="radio1" name="radio_program" checked />
              <label for="radio1">비교과신청</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio2" name="radio_program" @click="onClickNavMyProgram()" />
              <label for="radio2">나의 비교과</label>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="sub_section">
      <div class="grid_content">
        <div class="section_tit_wrap">
          <h3 class="section_subtit">비교과프로그램 신청</h3>
        </div>
        <div class="program_listbox detail">
          <div class="img_wrap">
            <img
              :src="`${programInfo.etiUrl === '' ? noImg : programInfo.etiUrl}`"
              @error="onErrorReplaceDefaultImg"
              alt="비교과 이미지"
            />
          </div>
          <div class="program_contents">
            <span class="team_label" v-if="String(programInfo.eliPartiCd) === 'TEAM'">TEAM</span>
            <p class="title">
              <span class="float_label status_label" :class="statusClass[regYn].class">
                {{ statusClass[regYn].name }}
              </span>
              {{ programInfo.eliTitle }}
            </p>
            <p class="capa">{{ programInfo.ability }}</p>
            <div class="contents_bottom">
              <ul class="info">
                <li>
                  <strong>모집</strong>
                  {{ moment(String(programInfo.eliReqStrDate)).format("YY/MM/DD") }} ~
                  {{ moment(String(programInfo.eliReqEndDate)).format("YY/MM/DD") }}
                </li>
                <li>
                  <strong>운영</strong> {{ moment(String(programInfo.eliOprtStrDate)).format("YY/MM/DD") }} ~
                  {{ moment(String(programInfo.eliOprtEndDate)).format("YY/MM/DD") }}
                </li>
                <li><strong>대상</strong> {{ programInfo.elsApplyTargetNm }}</li>
              </ul>
              <ul class="label">
                <li class="likes">999+</li>
                <li class="mileage">
                  {{ programInfo.totalMileage }}
                </li>
                <li class="apply">
                  <strong>{{ "수" }}</strong>
                  /{{ programInfo.eliRecrtCnt }}
                </li>
                <li class="waiting" v-if="programInfo.eliWaitYn === 'Y'">{{ "수" }}/{{ programInfo.eliWaitCnt }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="program_detail flex_wrap">
          <div class="status box">
            <div class="box_titlewrap">
              <h4>현재 비교과 <br />{{ statusClass[regYn].name }} 입니다</h4>
            </div>
            <h5>신청현황</h5>
            <div class="status_wrap">
              <ul>
                <li><strong>신청</strong>{{ "수" }}</li>
                <li><strong>정원</strong>{{ programInfo.eliRecrtCnt }}</li>
              </ul>
              <ul v-if="programInfo.eliWaitYn === 'Y'">
                <li><strong>대기</strong>{{ "수" }}</li>
                <li><strong>정원</strong>{{ programInfo.eliWaitCnt }}</li>
              </ul>
            </div>
          </div>
          <div class="timetable box">
            <div class="box_titlewrap">
              <h4>프로그램 시간표</h4>
              <div class="txt_row">
                <p>오프라인, Zoom 강의 일정을 확인해주세요.</p>
                <p>동영상, 유튜브 강의 일정은 별도 제공하지 않습니다.</p>
              </div>
            </div>
            <!-- [pp] Case 1. 오프라인, Zoom 시간표-->
            <div class="timetable_wrap">
              <ul>
                <li>
                  <p>24회차</p>
                  <p>2024.04.01 18:00~19:00</p>
                  <p>한국관106호</p>
                </li>
                <li>
                  <p>23회차</p>
                  <p>2024.04.01 18:00~19:00</p>
                  <p>Zoom 회의실</p>
                </li>
                <li>
                  <p>22회차</p>
                  <p>2024.04.01 18:00~19:00</p>
                  <p>한국관106호</p>
                </li>
                <li>
                  <p>21회차</p>
                  <p>2024.04.01 18:00~19:00</p>
                  <p>한국관106호</p>
                </li>
                <li>
                  <p>21회차</p>
                  <p>2024.04.01 18:00~19:00</p>
                  <p>한국관106호</p>
                </li>
                <li>
                  <p>21회차</p>
                  <p>2024.04.01 18:00~19:00</p>
                  <p>한국관106호</p>
                </li>
              </ul>
            </div>
            <!-- [pp] //Case 1. 오프라인, Zoom 시간표-->

            <!-- [pp] Case 2. 온라인 시간표 : li에 .online 추가, 1개만 사용 -->
            <!-- <div class="timetable_wrap">
              <ul>
                <li class="online">
                  <p>총 12회차</p>
                  <p>2024.04.01 18:00~19:00</p>
                  <p>Class 강의실</p>
                </li>
              </ul>
            </div> -->
            <!-- [pp] //Case 2. 온라인 시간표-->
          </div>
          <div class="intro box">
            <div class="box_titlewrap">
              <h4>프로그램 소개</h4>
            </div>
            <div class="program_intro">
              <div class="openimg_wrap">
                {{ "에디터에 따라 들어가는 값이 수정될 수 있음." + programInfo.eliDesc }}
                <!-- <img src="/src/assets/images/program/img_program_detail.png" :alt="'예시이미지'" openimg /> -->
              </div>
            </div>
          </div>
        </div>
        <div class="program_detail flex_wrap">
          <div class="step1 box">
            <div class="box_titlewrap">
              <h4>신청 STEP 1</h4>
            </div>
            <div class="profile_editwrap">
              <div class="img_wrap">
                <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
              </div>
              <div class="name">
                박선준
                <p class="btn_edit">
                  <input type="checkbox" id="edit_profile" name="edit_profile" v-model="editBtn" />
                  <label for="edit_profile">수정하기</label>
                </p>
              </div>
              <div class="edit_wrap">
                <!-- 기본정보 -->
                <div v-if="editBtn == false">
                  <div class="phone edit_item">{{ formattedPhone }}</div>
                  <div class="email edit_item">{{ formattedEmail }}</div>
                </div>
                <!-- 수정중 -->
                <div v-if="editBtn == true">
                  <div class="phone edit_item">
                    <input type="text" v-model="phonePrefix" :placeholder="placeholder('phonePrefix')" />
                    <span>-</span>
                    <input type="text" v-model="phoneMiddle" :placeholder="placeholder('phoneMiddle')" />
                    <span>-</span>
                    <input type="text" v-model="phoneSuffix" :placeholder="placeholder('phoneSuffix')" />
                  </div>
                  <div class="email edit_item">
                    <input type="text" v-model="emailUser" :placeholder="placeholder('emailUser')" />
                    <span>@</span>
                    <input type="text" v-model="emailDomain" :placeholder="placeholder('emailDomain')" />
                  </div>
                </div>
              </div>
            </div>
            <div class="program_filewrap" v-if="programInfo.eciReqYn == 'Y'">
              <div class="file_row download">
                <div class="file_name">
                  <p>비교과프로그램참여신청서.hwp</p>
                  <i>115KB</i>
                </div>
                <button type="button" class="btn_icon icon_only filedown">다운로드</button>
              </div>
              <div class="bottom_wrap">
                <label class="btn_round btn_white btn_sm">
                  파일추가
                  <input type="file" class="hidden" />
                </label>
                <div class="file_row add">
                  <div class="file_name">
                    <p>비교과프로그램참여신청서.hwp</p>
                    <i>115KB</i>
                    <button type="button" class="btn_icon icon_only delete">삭제</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="step2 box">
            <div class="box_titlewrap">
              <h4>신청 STEP 2</h4>
            </div>
            <div class="team_row">
              <div class="schedule">
                <div class="info">중복되는 교과/비교과/상담 스케쥴이 없습니다.</div>
                <!-- [pp] 온라인 프로그램일시 .disabled 추가해주세요 -->
                <router-link to="" class="btn_round btn_white btn_sm">스케쥴 확인</router-link>
              </div>

              <!-- [pp] Case 2. 팀프로젝트가 아닐 경우 : 나머지 team_row는 삭제해주세요 -->
              <!-- <div class="schedule disabled">
                <div class="info">중복되는 교과/비교과/상담 스케쥴이 없습니다.</div>
                <router-link to="" class="btn_round btn_white btn_sm disabled">스케쥴 확인</router-link>
              </div> -->
              <!-- [pp] //Case 2. 팀프로젝트가 아닐 경우 -->

              <!-- [pp] Case 3. 중복되는 스케쥴이 있을 경우 -->
              <!-- <div class="schedule">
                <div class="info duplicate">
                  중복되는 스케쥴이 있습니다.
                  <v-menu
                    class="tooltip_area"
                    transition="slide-y-transition"
                    :close-on-content-click="false"
                    v-model="menu"
                  >
                    <template v-slot:activator="{ props }">
                      <button type="button" class="btn_tooltip" v-bind="props">버튼</button>
                    </template>
              <div class="tooltip_cnt">
                <div class="inner_md">
                  <div class="duplicate_wrap">
                    <strong class="date_title">01.16(화)</strong>
                    <ul>
                      <li>
                        <p class="title">교수님 미팅</p>
                        <p class="info">2023/11/15 17:29 ~ 2023/11/20 17:29</p>
                      </li>
                      <li>
                        <p class="title">[교과]디지털 마케팅 전략 플랫폼 마케팅 성공요인 강의</p>
                        <p class="info">2023/12/15 17:29 ~ 2023/12/20 17:29</p>
                      </li>
                      <li>
                        <p class="title">[비교과]빅데이터 이해</p>
                        <p class="info">2023/12/15 17:29 ~ 2023/12/20 17:29</p>
                      </li>
                      <li>
                        <p class="title">[비교과]빅데이터 이해</p>
                        <p class="info">2023/12/15 17:29 ~ 2023/12/20 17:29</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              </v-menu>
              </div>
              <router-link to="" class="btn_round btn_white btn_sm">스케쥴 확인</router-link>
              </div> -->
              <!-- [pp] //Case 3. 중복되는 스케쥴이 있을 경우 -->
            </div>
            <div v-if="String(programInfo.eliPartiCd) === 'TEAM'" class="team_row">
              <div>
                <strong>팀 프로젝트</strong>
                <div>
                  <!-- [pp] Case 1. 팀원으로 신청할때 : 팀장선택불가-->
                  <p class="radio_row">
                    <input type="radio" v-model="captainYn" value="Y" id="radio1_1" class="hidden" />
                    <label for="radio1_1">팀장</label>
                  </p>
                  <p class="radio_row">
                    <input type="radio" v-model="captainYn" id="radio1_2" value="N" class="hidden" />
                    <label for="radio1_2">팀원</label>
                  </p>
                </div>
              </div>
            </div>
            <div v-if="String(programInfo.eliPartiCd) === 'TEAM'" class="team_row">
              <div v-if="captainYn === 'N'">
                <div class="select_row">
                  <vue-select
                    class="select_box"
                    v-model="teamSelect"
                    :options="teamOption"
                    :placeholder="'팀을 선택하세요'"
                    :clearable="false"
                  >
                  </vue-select>
                </div>
                <router-link to="" class="btn_round btn_white btn_sm">팀선택</router-link>
              </div>
              <div v-else>
                <input type="text" v-model="teamNm" placeholder="팀명을 입력해 주세요." />
              </div>
            </div>
          </div>
          <div class="step3 box">
            <div class="box_titlewrap">
              <h4>신청 STEP 3</h4>
            </div>
            <p class="check_row">
              <input type="checkbox" id="psnlCnst" class="hidden" v-model="psnlCnst" />
              <label for="psnlCnst">개인정보 활용 동의</label>
            </p>
            <p class="info">개인정보는 신청자의 동의하에 교육운영목적으로 활용됩니다.</p>
            <div class="btn_area">
              <button :disabled="regYn != 'ing'" @click="onClickRegProgram()" class="btn_round btn_primary btn_lg">
                비교과 신청
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { AxiosResponse } from "axios";
import mediumZoom from "medium-zoom";
import moment from "moment";
import noImg from "@/assets/images/common/img_logo_noimg.png";
//import testData from "./_programList";
type statusClass = {
  ing: { class: string; name: string };
  plan: { class: string; name: string };
  [key: string]: { class: string; name: string };
};
export default {
  data: () => ({
    statusClass: {
      ing: { class: "blue", name: "모집중" },
      plan: { class: "pink", name: "모집예정" },
      end: { class: "gray", name: "모집완료" },
    } as statusClass,
    programInfo: {
      eliId: "",
      eciId: "",
      eliTitle: "",
      eliStfId: "",
      eliStfNm: "",
      eliPartiCd: "",
      eliOprtYear: "",
      eliOprtTerm: "",
      eliReqStrDate: "",
      eliReqStrTime: "",
      eliReqEndDate: "",
      eliReqEndTime: "",
      eliOprtStrDate: "",
      eliOprtStrTime: "",
      eliOprtEndDate: "",
      eliOprtEndTime: "",
      eliRecrtCnt: "",
      eliWaitYn: "",
      eliWaitCnt: "",
      eliSts: "",
      eliRejectCont: "",
      eliDesc: "",
      eliPreYn: "",
      eliPreStr: "",
      eliPreStrTime: "",
      eliPreEnd: "",
      eliPreEndTime: "",
      eliSatisYn: "",
      eliSatisStr: "",
      eliSatisStrTime: "",
      eliSatisEnd: "",
      eliSatisEndTime: "",
      locale: "",
      cdNm: "",
      eciReqYn: "",
    },
    psnlCnst: false,
    regYn: "ing",
    options: [{ label: "팀명" }],
    menu: false,
    phonePrefix: "010",
    phoneMiddle: "3333",
    phoneSuffix: "9999",
    emailUser: "email",
    emailDomain: "hku.ac.kr",
    editBtn: false,
    originalData: null,
    captainYn: "Y",
    teamNm: "",
    teamSelect: "",
    teamOption: [],
  }),
  computed: {
    // 비교과 상세 키
    key() {
      return this.$route.params.key;
    },
    formattedPhone() {
      return `${this.phonePrefix}-${this.phoneMiddle}-${this.phoneSuffix}`;
    },
    formattedEmail() {
      return `${this.emailUser}@${this.emailDomain}`;
    },
  },
  created() {
    //this.originalData = { ...this.$data };
    this.fnGetProgramInfo();
    this.fnGetTeamNmList();
  },
  mounted() {
    mediumZoom("[openimg]");
  },
  methods: {
    moment,
    /** 비교과 상세정보 가져오기 (테스트를 위해 하드코딩데이터 가져오는 방식으로 제작) */
    fnGetProgramInfo() {
      const vm = this;
      const param = {
        eliId: vm.key,
      };
      vm.$axios.get("/api/v1/user/extraCurriProgramInfo", { params: param }).then((res: AxiosResponse) => {
        const resData = res.data;
        vm.programInfo = resData.data[0];
        console.log(vm.programInfo);
        var date = new Date();
        var strDate = new Date(vm.programInfo.eliReqStrDate);
        var endDate = new Date(vm.programInfo.eliReqEndDate);
        var regNotStarted = strDate.getTime() > date.getTime();
        var regNotEnded = endDate.getTime() > date.getTime();
        if (!regNotStarted && regNotEnded) {
          vm.regYn = "ing";
        } else if (!regNotEnded) {
          vm.regYn = "end";
        } else {
          vm.regYn = "plan";
        }
      });
      //모집 여부 확인용
      //  const idx = parseInt(vm.key);
      //  vm.programInfo = testData[idx];
      // console.log(vm.programInfo);
    },

    /**
     * 퍼블리싱 작업물 (수정 혹은 삭제 필요) by khlee
     * 해당 페이지 작업 할 때 이규헌 대리에게 찾아와주세요
     * */
    placeholder(value: string) {
      return this[value] === "" ? this.originalData[value] : "";
    },

    /**
     * 썸네일 불러올 때 오류 발생 시 기본이미지 출력
     * 미리 import 한 이미지를 사용해야 빌드 시 문제가 없다.
     * */
    onErrorReplaceDefaultImg(e: any) {
      e.target.src = noImg;
    },

    /** 비교과 신청 버튼 */
    onClickRegProgram() {
      const vm = this;
      if (vm.programInfo.eliPartiCd === "TEAM") {
        if (vm.captainYn === "Y" && vm.teamNm == "") {
          vm.$alert("팀명을 입력해주세요.");
          return false;
        } else if (vm.captainYn === "N" && vm.teamSelect == "") {
          vm.$alert("팀을 선택해주세요.");
          return false;
        }
      }

      if (!vm.psnlCnst) {
        vm.$alert("개인정보 활용 동의를 선택해주세요.");
        return false;
      }

      const param = {
        eciId: this.programInfo.eciId,
        eliId: this.programInfo.eliId,
        etiUserNo: "U00002", //TODO 아직 정해진 바 없음.
        etiPhNo: this.formattedPhone,
        etiEmail: this.formattedEmail,
        etiTeamNm: this.captainYn == "Y" ? this.teamNm : this.teamSelect.label,
        etiTeamRole: this.captainYn == "Y" ? "LEADER" : "FOLLOWER",
        etiAdminYn: "N",
        eliPartiCd: this.programInfo.eliPartiCd,
      };
      vm.$axios
        .post("/api/user/insertEcpAttentInfo", param)
        .then((res: AxiosResponse) => {
          if (res.data.code == "200") {
            vm.$alert("신청되었습니다.", "", () => {
              vm.$router.push("/user/program");
            });
          }
        })
        .catch((e: any) => {
          console.error(e);
        });
    },

    /** TODO 동양대학교 시연 이후 삭제예정 */
    onClickNavMyProgram() {
      this.$router.push("/user/program/myProgram");
    },
    fnGetTeamNmList() {
      const vm = this;
      const param = {
        eliId: vm.key,
      };
      vm.$axios.get("/api/user/getTeamNmforSelect", { params: param }).then((res: AxiosResponse) => {
        const resData = res.data;
        for (var i = 0; i < resData.data.length; i++) {
          vm.teamOption.push({ label: resData.data[i].etiTeamNm });
        }
      });
    },
  },
};
</script>
