<template>
  <div class="search_box">
    <div class="search_section">
      <div class="search_toggle xs">
        <div class="left">
          <div class="radio_tab_lg_wrap">
            <p class="radio_tab_lg">
              <input type="radio" name="radio_tab2_lg" id="radio_tab2_1" checked />
              <label for="radio_tab2_1"> 강점역량 </label>
            </p>
            <p class="radio_tab_lg">
              <input type="radio" name="radio_tab2_lg" id="radio_tab2_2" />
              <label for="radio_tab2_2">약점역량</label>
            </p>
            <p class="radio_tab_lg">
              <input type="radio" name="radio_tab2_lg" id="radio_tab2_3" />
              <label for="radio_tab2_3">중간역량</label>
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
              *강점 (학교 상위 20%미만) 중간(학교 상위 20% 이상~80%미만) 약점 (학교 상위 80% 이상)<br />
              *현재 학년도/ 현재 학기 기준으로 추천 제공됩니다.
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
          <p class="total_count"><strong>5</strong>개의 교과 프로그램</p>
        </div>
      </div>
    </div>
  </div>
  <!-- 결과 없을 경우 표출 -->
  <!--  
  <div class="test_before">
    <div>
      <p>추천 교과 내역이 없습니다.</p>
    </div>
  </div>
  -->
  <!-- 교과 리스트 표출 -->
  <DoubleList :type="'curri'" />
</template>

<script lang="ts">
import DoubleList from "@/components/program/DoubleList.vue";

export default {
  components: {
    DoubleList,
  },
  data: () => ({
    checkedAbility: "a000",
    abilityList: [{ cdId: String }, { cdNm: String }],
    //tooltip
    tooltip: false,
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
          cdNm: "종합적사고력",
        },
        {
          cdId: "a002",
          cdNm: "자원정보기술활용",
        },
        {
          cdId: "a003",
          cdNm: "자기관리",
        },
        {
          cdId: "a004",
          cdNm: "의사소통능력",
        },
        {
          cdId: "a005",
          cdNm: "대인관계",
        },
      ];
    },
  },
};
</script>
