<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">나의 비교과</h2>
        <div class="title_function">
          <div class="radio_tab_wrap">
            <p class="radio_tab">
              <input type="radio" id="radio1" name="radio_program" @click="onClickNavMyProgram()" />
              <label for="radio1">비교과신청</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio2" name="radio_program" @click="fnGetProgramList()" checked />
              <label for="radio2">나의 비교과</label>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid_content">
      <div class="search_wrap">
        <div class="select_row sm2">
          <vue-select
            class="select_box"
            v-model="selectOption.searchOptYear"
            :options="[{ label: '2024' }]"
            :placeholder="'년도 전체'"
          ></vue-select>
        </div>
        <div class="select_row sm2">
          <vue-select
            class="select_box"
            v-model="selectOption.searchAbility"
            :options="abilityList"
            label="option"
            :placeholder="'핵심역량 전체'"
          ></vue-select>
        </div>
        <div class="select_row sm2">
          <vue-select
            class="select_box"
            v-model="selectOption.searchCategory"
            :options="categoryList"
            label="option"
            placeholder="카테고리 전체"
          ></vue-select>
        </div>
        <div class="select_row sm2">
          <vue-select
            class="select_box"
            v-model="selectOption.searchOptSts"
            :options="optStsList"
            label="option"
            :placeholder="'운영상태 전체'"
          ></vue-select>
        </div>
        <div class="select_row sm2">
          <vue-select
            class="select_box"
            v-model="selectOption.searchAprvSts"
            :options="aprvStsList"
            :placeholder="'이수상태 전체'"
          ></vue-select>
        </div>
        <div class="search_row">
          <input
            type="search"
            class="form_style wd_p100"
            v-model="selectOption.searchTitle"
            placeholder="보고 싶은 비교과 프로그램을 찾아보세요"
          />
          <button type="button" class="btn_search btn_icon icon_only" @click="fnGetProgramList()">검색</button>
        </div>
      </div>
    </div>
    <div class="sub_section">
      <BoxList :list="programList" :cancleAttnt="cancleAttnt" user />
    </div>
  </div>
</template>

<script lang="ts">
import type { AxiosResponse } from "axios";
import BoxList from "@/components/program/BoxList.vue";

// TODO 삭제예정
export default {
  components: { BoxList },
  data: () => ({
    selectOption: {
      searchOptYear: "",
      searchAbility: "",
      searchCategory: "",
      searchOptSts: "",
      searchAprvSts: "",
      searchTitle: "",
      userNo: "",
    },
    categoryList: [],
    optStsList: [
      { option: "전체", val: "" },
      { option: "운영중", val: "OPT_STS1" },
      { option: "운영전", val: "OPT_STS2" },
    ],
    abilityList: [
      { option: "전체", val: "" },
      { option: "종합적 사고력", val: "A001" },
      { option: "자원정보기술활용능력", val: "A002" },
      { option: "자기관리역량", val: "A003" },
      { option: "의사소통역량", val: "A004" },
      { option: "대인관계역량", val: "A005" },
      { option: "글로컬역량", val: "A006" },
    ],
    aprvStsList: [
      { label: "전체" },
      { label: "승인" },
      { label: "승인대기" },
      { label: "미승인" },
      { label: "본인취소" },
      { label: "관리자취소" },
      { label: "운영완료" },
    ],
    programList: [],
  }),
  mounted() {
    this.fnGetProgramList();
    this.fnGetCategorySelect();
  },
  methods: {
    /** TODO 동양대학교 시연 이후 삭제예정 */
    onClickNavMyProgram() {
      this.$router.push("/user/program/list");
    },

    fnGetProgramList() {
      const vm = this;
      vm.programList = [];
      vm.selectOption.userNo = "U00002";
      const param = {
        searchOptYear: vm.selectOption.searchOptYear.label,
        searchAbility: vm.selectOption.searchAbility.val,
        searchCategory: vm.selectOption.searchCategory.val,
        searchOptSts: vm.selectOption.searchOptSts.val,
        searchAprvSts: vm.selectOption.searchAprvSts.label,
        searchTitle: vm.selectOption.searchTitle,
        userNo: vm.selectOption.userNo,
      };
      console.log(param);
      vm.$axios.get("/api/user/getEliListMypage", { params: param }).then((res: AxiosResponse) => {
        const resData = res.data;
        vm.programList = resData.data;
      });
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
    cancleAttnt(etiId: string) {
      if (confirm("비교과 수업 신청을 취소하겠습니까?")) {
        const vm = this;
        vm.$axios.post("/api/user/updateUserEtiSts", { etiId: etiId, etiSts: "ETI006" }).then((res: AxiosResponse) => {
          alert("취소되었습니다.");
        });

        this.fnGetProgramList();
      }
    },
  },
};
</script>
