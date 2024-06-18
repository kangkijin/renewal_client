<template>
  <div class="search_box">
    <div class="search_section">
      <div class="search_toggle xs">
        <div class="left">
          <div class="radio_tab_lg_wrap">
            <p class="radio_tab_lg">
              <input type="radio" name="radio_tab_lg" id="radio_tab_1" checked />
              <label for="radio_tab_1"> 강점역량 </label>
            </p>
            <p class="radio_tab_lg">
              <input type="radio" name="radio_tab_lg" id="radio_tab_2" />
              <label for="radio_tab_2">약점역량</label>
            </p>
            <p class="radio_tab_lg">
              <input type="radio" name="radio_tab_lg" id="radio_tab_3" />
              <label for="radio_tab_3">중간역량</label>
            </p>
          </div>
        </div>
        <div class="right">
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
              - 강점 (학교 상위 20%미만) 중간(학교 상위 20% 이상~80%미만) 약점<br />
              - 진단 결과가 없을 경우, 목록이 출력되지 않습니다.<br />
              - 모집대기/모집 중인 비교과 프로그램이 추천됩니다.
            </div>
          </v-menu>
        </div>
      </div>
    </div>
    <div class="search_section search_tab">
      <div class="search_toggle md center">
        <div class="left">
          <div class="radio_tab_wrap">
            <p v-for="(ability, idx) in abilityList" :key="ability.cdId" class="radio_tab">
              <input
                type="radio"
                name="radio_tab"
                :id="`radio1_${idx}`"
                class="hidden"
                :value="ability.cdId"
                v-model="checkedAbility"
              />
              <label :for="`radio1_${idx}`">{{ ability.cdNm }}</label>
            </p>
          </div>
        </div>
        <div class="right">
          <p class="total_count">
            <strong>{{ ecpList.length }}</strong
            >개의 비교과 프로그램
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- 결과 없을 경우 표출 -->
  <!--  
  <div class="test_before">
    <div>
      <p>추천 비교과 내역이 없습니다.</p>
    </div>
  </div>
  -->
  <!-- 비교과 리스트 표출 -->
  <basic-list :list="ecpList" />
</template>

<script lang="ts">
import testImg1 from "@/assets/images/program/img_program_ex1.png";
import testImg2 from "@/assets/images/program/img_program_ex2.png";

import BasicList from "@/components/program/BasicList.vue";

export default {
  components: {
    BasicList,
  },
  data: () => ({
    checkedAbility: "a000",
    abilityList: [{ cdId: String }, { cdNm: String }],
    //tooltip
    tooltip: false,

    ecpList: [
      {
        비교과_키: "0",
        모집_구분: "ing",
        비교과_제목: "교수역량프로그램 A",
        비교과_역량: "기본역량",
        비교과_역량_키: "A001001",
        모집_시작_기간: new Date(),
        모집_종료_기간: new Date(),
        운영_시작_기간: new Date(),
        운영_종료_기간: new Date(),
        비교과_대상: "정교수|기타",
        총_찜_수: 5,
        내_찜_여부: "Y",
        비교과_마일리지: 1000,
        신청자_수: 20,
        모집자_수: 20,
        대기신청_수: 3,
        대기모집_수: 20,
        썸네일_경로: "",
        팀_여부: "Y",
      },
      {
        비교과_키: "1",
        모집_구분: "ing",
        비교과_제목: "교수역량 Ace",
        비교과_역량: "준비역량",
        비교과_역량_키: "A001001",
        모집_시작_기간: new Date(),
        모집_종료_기간: new Date(),
        운영_시작_기간: new Date(),
        운영_종료_기간: new Date(),
        비교과_대상: "부교수|조교수",
        총_찜_수: 1020,
        내_찜_여부: "N",
        비교과_마일리지: 1000,
        신청자_수: 19,
        모집자_수: 20,
        대기신청_수: 0,
        대기모집_수: 20,
        썸네일_경로: testImg1,
        팀_여부: "N",
      },
      {
        비교과_키: "2",
        모집_구분: "plan",
        비교과_제목: "교수역량 B",
        비교과_역량: "평가역량",
        비교과_역량_키: "A001001",
        모집_시작_기간: new Date(),
        모집_종료_기간: new Date(),
        운영_시작_기간: new Date(),
        운영_종료_기간: new Date(),
        비교과_대상: "교수전체",
        총_찜_수: 100,
        내_찜_여부: "N",
        비교과_마일리지: 1000,
        신청자_수: 0,
        모집자_수: 100,
        대기신청_수: 0,
        대기모집_수: 20,
        썸네일_경로: testImg2,
        팀_여부: "Y",
      },
    ],
  }),
  created: function () {
    this.fnGetAbilityInfo();
  },
  methods: {
    fnGetAbilityInfo() {
      const vm = this;
      vm.abilityList = [
        {
          cdId: "a000",
          cdNm: "전체",
        },
        {
          cdId: "a001",
          cdNm: "기본역량",
        },
        {
          cdId: "a002",
          cdNm: "준비역량",
        },
        {
          cdId: "a003",
          cdNm: "실행역량",
        },
        {
          cdId: "a004",
          cdNm: "평가역량",
        },
      ];
    },
  },
};
</script>
