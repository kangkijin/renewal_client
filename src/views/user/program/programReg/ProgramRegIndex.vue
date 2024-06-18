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
      <BannerList />
    </div>
    <div class="grid_content">
      <div class="search_box program">
        <div class="search_section">
          <div class="search_toggle lg center">
            <div class="left">
              <p class="total_count">
                <strong>{{ programList.length }}</strong
                >개의 비교과 프로그램
              </p>
            </div>
            <div class="right">
              <div class="select_row lg">
                <vue-select
                  class="select_box"
                  v-model="selectedCategory"
                  :options="categoryList"
                  label="option"
                  placeholder="전체"
                ></vue-select>
              </div>
              <div class="select_row md">
                <vue-select
                  class="select_box"
                  v-model="selectedTerm"
                  :options="selectOption.term"
                  label="option"
                ></vue-select>
              </div>
              <div class="search_row">
                <input
                  type="search"
                  v-model="inputValue"
                  class="form_style wd_p100"
                  placeholder="보고 싶은 비교과 프로그램을 찾아보세요"
                />
                <button
                  type="button"
                  class="btn_search btn_icon icon_only"
                  @click="onClickChangeData('A000', 'search')"
                >
                  검색
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="search_section search_tab">
          <div class="search_toggle sm">
            <div class="left">
              <div class="radio_tab_lg_wrap">
                <p v-for="(ability, idx) in abilityList" :key="ability.cdId" class="radio_tab_lg">
                  <input
                    type="radio"
                    name="radio_tab_lg"
                    :id="`radio1_${idx}`"
                    class="hidden"
                    :value="ability.cdId"
                    v-model="checkedAbility"
                    @click="onClickChangeData(ability.cdNm, 'tab')"
                  />
                  <label :for="`radio1_${idx}`">{{ ability.cdNm == "" ? "전체" : ability.cdNm }}</label>
                </p>
              </div>
            </div>
            <div class="right">
              <div class="toggle_btnwrap">
                <p class="toggle_btn toggle_ai">
                  <input type="checkbox" name="toggle_btn" id="checkbox2_1" class="hidden" value="" />
                  <label for="checkbox2_1">AI 추천</label>
                </p>
                <p class="toggle_btn toggle_wishlist">
                  <input type="checkbox" name="toggle_btn" id="checkbox2_2" class="hidden" value="" />
                  <label for="checkbox2_2">찜</label>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sub_section">
      <div class="grid_content">
        <div class="program_listwrap">
          <div v-for="(program, idx) in programList" :key="idx" class="program_listbox">
            <p class="btn_like">
              <input type="checkbox" :id="`programlike${idx}`" v-model="program.likes" true-value="Y" false-value="N" />
              <label :for="`programlike${idx}`">좋아요</label>
            </p>
            <!-- <router-link :to="`/user/program/detail/${program.eliId}`" class="program_contents"> -->
            <router-link :to="`/user/program/detail/${program.eliId}`" class="program_contents">
              <div class="img_wrap">
                <img
                  :src="`${program.etiUrl === '' ? noImg : program.etiUrl}`"
                  @error="onErrorReplaceDefaultImg"
                  alt="비교과 이미지"
                />
              </div>
              <span class="team_label" v-if="program.eliPartiCd === 'TEAM'">TEAM</span>
              <p class="title">
                <span class="float_label status_label" :class="statusClass"></span>
                {{ program.eliTitle }}
              </p>
              <p class="capa">{{ program.ability }}</p>
              <div class="contents_bottom">
                <ul class="info">
                  <li>
                    <strong>모집</strong>
                    <!-- {{ program.eliReqDate }} -->
                    {{ moment(program.eliReqStrDate).format("YYYY.MM.DD") }} ~
                    {{ moment(program.eliReqEndDate).format("YYYY.MM.DD") }}
                  </li>
                  <!-- <li><strong>운영</strong> {{ program.eliOprtDate }}</li> -->
                  <li>
                    <strong>운영</strong>
                    {{ moment(program.eliOprtStrDate).format("YYYY.MM.DD") }} ~
                    {{ moment(program.eliOprtEndDate).format("YYYY.MM.DD") }}
                  </li>
                  <!-- <li><strong>대상</strong>{{ program.elsApplyTargetCd }}</li> -->
                  <li><strong>대상</strong>{{ program.elsApplyTargetNm }}</li>
                </ul>
                <ul class="label">
                  <li class="likes">{{ idx * 3 + 50 }}</li>
                  <li class="mileage">{{ program.totalMileage }}</li>
                  <li class="apply">
                    <strong>{{ 2 }}</strong>
                    /{{ program.eliRecrtCnt }}
                  </li>
                  <li class="waiting" v-if="program.eliWaitYn == 'Y'">{{ 5 }}/{{ program.eliWaitCnt }}</li>
                </ul>
              </div>
            </router-link>
          </div>
        </div>
        <PaginationUi />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { AxiosResponse } from "axios";
import { setColors } from "@/assets/js/common";
import type { AbilityTypes } from "@/types/diag/AbilityTypes";
import moment from "moment";
import BannerList from "@/components/program/BannerList.vue";
import noImg from "@/assets/images/common/img_logo_noimg.png";
import PaginationUi from "@/components/common/PaginationUi.vue";

export default {
  components: {
    BannerList,
    PaginationUi,
  },
  data: () => ({
    selectedTerm: null,
    selectedCategory: null,
    inputValue: null,
    selectOption: {
      category: [
        { option: "카테고리명1", val: "A001" },
        { option: "카테고리명2", val: "A002" },
      ],
      term: [
        { option: "전체", val: "" },
        { option: "모집예정", val: "notReg" },
        { option: "모집중", val: "canReg" },
      ],
    },
    programList: [
      {
        eliId: "",
        eliTitle: "",
        cdNm: "",
        cdId: "",
        elsApplyTargetCd: "",
        eliReqDate: "",
        eliOprtDate: "",
        eliReqStrDate: "",
        eliReqEndDate: "",
        eliOprtStrDate: "",
        eliOprtEndDate: "",
        eliPartiCd: "",
        totalMileage: "",
        likes: "",
        apply: "",
        eliWaitCnt: "",
        eliWaitYn: "",
        teamYn: "",
      },
    ],
    emitList: [],
    categoryList: [],
    statusClass: {
      ing: { class: "blue", name: "모집중" },
      plan: { class: "pink", name: "모집예정" },
    },
    checkedAbility: "A000",
    abilityList: [] as Array<AbilityTypes>,
  }),

  created: function () {
    this.fnGetAbilityInfo();
    this.fnGetProgramList();
    this.fnGetCategorySelect();
  },
  mounted: function () {
    setColors();
  },
  methods: {
    moment,

    fnGetAbilityInfo() {
      const vm = this;
      //초당대 기준
      vm.abilityList = [
        {
          cdId: "",
          cdNm: "",
        },
        {
          cdId: "A001",
          cdNm: "종합적 사고력",
        },
        {
          cdId: "A002",
          cdNm: "자원정보기술활용능력",
        },
        {
          cdId: "A003",
          cdNm: "자기관리역량",
        },
        {
          cdId: "A004",
          cdNm: "의사소통역량",
        },
        {
          cdId: "A005",
          cdNm: "대인관계역량",
        },
        {
          cdId: "A006",
          cdNm: "글로컬역량",
        },
      ];
    },

    /**
     * 썸네일 불러올 때 오류 발생 시 기본이미지 출력
     * 미리 import 한 이미지를 사용해야 빌드 시 문제가 없다.
     * */
    onErrorReplaceDefaultImg(e: any) {
      e.target.src = noImg;
    },

    fnGetProgramList() {
      const vm = this;
      vm.$axios.get("/api/user/getEliList").then((res: AxiosResponse) => {
        const resData = res.data;
        vm.programList = resData.data;
        vm.emitList = resData.data;
      });
    },

    //<!--TODO--> 검색 기능이 제법 꼬여있어서 가급적이면 고치는 편이 좋을 것 같다...
    onClickChangeData(type: String, method: String) {
      const vm = this;
      if (method != "search") {
        if (type == "") {
          vm.programList = vm.emitList;
        } else {
          vm.programList = vm.emitList.filter(function (x: any) {
            return x.ability.split(", ").includes(type);
          });
        }
      } else {
        console.log(vm.selectedCategory);
        console.log(vm.selectedTerm);
        var date = new Date();
        vm.programList = vm.emitList.filter(function (x: any) {
          var strDate = new Date(x.eliReqStrDate);
          var endDate = new Date(x.eliReqEndDate);
          var regNotStarted = vm.selectedTerm == null ? true : strDate.getTime() > date.getTime();
          var regStarted =
            vm.selectedTerm == null ? true : strDate.getTime() <= date.getTime() && endDate.getTime() >= date.getTime();
          var includeInput =
            vm.inputValue == null || vm.inputValue.val == "" ? true : x.eliTitle.includes(vm.inputValue);
          var includeCategory = vm.selectedCategory == null ? true : x.ecmId === vm.selectedCategory.val;
          if (vm.selectedTerm != null && vm.selectedTerm.val == "canReg") {
            return regStarted && includeInput && includeCategory;
          } else if (vm.selectedTerm != null && vm.selectedTerm.val == "notReg") {
            return regNotStarted && includeInput && includeCategory;
          } else {
            return includeInput && includeCategory;
          }
        });
      }
    },
    /** TODO 동양대학교 시연 이후 삭제예정 */
    onClickNavMyProgram() {
      this.$router.push("/user/program/myProgram");
    },
    fnGetCategorySelect() {
      const vm = this;
      vm.categoryList.push({ option: "전체", val: "" });
      vm.$axios.get("/api/admin/ecpUser/ecpCategorySelect").then((res: AxiosResponse) => {
        const resData = res.data;
        for (var i = 0; i < resData.data.length; i++) {
          vm.categoryList.push({ option: resData.data[i].ecmTitle, val: resData.data[i].ecmId });
        }
      });
    },
  },
};
</script>
