<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">비교과 프로그램</h2>
        <div class="title_function">
          <div class="radio_tab_wrap">
            <p class="radio_tab">
              <input type="radio" id="radio1" name="radio_program" @click="onClickNavProgram()" />
              <label for="radio1">비교과신청</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio2" name="radio_program" checked />
              <label for="radio2">나의 비교과</label>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid_content">
      <div class="sub_section top">
        <div class="section_tit_wrap">
          <h3 class="section_subtit">{{ testData[parseInt(key)].비교과_제목 }}</h3>
        </div>

        <div class="toggle_wrap">
          <div class="left wd_p100">
            <div class="radio_tab_lg_wrap">
              <p class="radio_tab_lg" v-for="(menu, idx) in carouselList" :key="menu.id">
                <input
                  type="radio"
                  name="radio_tab_lg"
                  :id="menu.id"
                  class="hidden"
                  :value="menu.id"
                  @click="onClickUpdatecarouselIdx(menu.id, idx, menu.name)"
                  v-model="activeMenu.id"
                />
                <label :for="menu.id">{{ menu.name }}</label>
              </p>
            </div>
          </div>
        </div>

        <component
          :is="activeMenu.id"
          :idx="activeMenu.idx"
          :menuName="activeMenu.menuName"
          :eliId="9999"
          :eccDivCd="activeMenu.id.replace('List', '').toUpperCase()"
          :onClickNextMenu="onClickNextMenu"
          :onClickPrevMenu="onClickPrevMenu"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as Classes from "@/components/program/myProgram/classes/classImport";
// TODO 동양대학교 시연 종료 후 삭제
import testData from "./_myprogramList";
import type { AxiosResponse } from "axios";
import { provide } from "vue";
export default {
  components: Classes,
  data: () => ({
    // TODO 동양대학교 시연 종료 후 삭제
    testData: testData,
    curData: "",
    dataList: {},
    detailKey: null,

    // 초기 메뉴 작성되어있어야 함
    activeMenu: { id: "LctrList", idx: 0, menuName: "강의실" },

    // carousel 메뉴 리스트만 있고 detail은 여기서 선언하지 않는다.
    carouselList: [
      { name: "강의실", id: "LctrList" },
      { name: "시험", id: "ExamList" },
      { name: "과제", id: "ReportList" },
      { name: "학습자료", id: "ReferList" },
      { name: "Q&A", id: "QnaList" },
      { name: "공지사항", id: "NoticeList" },
      { name: "출석&성적", id: "AttendScore" },
    ],
  }),
  computed: {
    key() {
      return history.state.npsKeyId ?? "-";
    },
  },
  watch: {
    curData: function (val) {
      //val : 메뉴 변경시 값 찍어줌
      this.fnChangeDataList(val);
    },
  },
  mounted() {
    /*var vm = this;
    vm.$axios.get("http://localhost:4000/api/v1/user/ecpPromotions", { params: { epmType: "STD" } }).then(function (
      res: AxiosResponse,
    ) {
      vm.dataList = res.data.data;
    });*/
  },
  methods: {
    /**
     * carousel 메뉴 다음 버튼
     * @comment 하위 컴포넌트에서 parent 변수로 접근한다
     * */
    onClickNextMenu(curIdx: number) {
      const vm = this;
      const maxLength = vm.carouselList.length;

      // 마지막 페이지인 경우
      if (curIdx + 1 === maxLength) {
        vm.activeMenu = { id: vm.carouselList[0].id, idx: 0 };
      } else {
        vm.activeMenu = {
          id: vm.carouselList[curIdx + 1].id,
          idx: curIdx + 1,
          menuName: vm.carouselList[curIdx + 1].name,
        };
      }
      vm.curData = vm.activeMenu.id;
    },

    /**
     * carousel 메뉴 이전 버튼
     * @comment 하위 컴포넌트에서 parent 변수로 접근한다
     * */
    onClickPrevMenu(curIdx: number) {
      const vm = this;
      const maxLength = vm.carouselList.length;

      // 처음 페이지인 경우
      if (curIdx === 0) {
        vm.activeMenu = { id: vm.carouselList[maxLength - 1].id, idx: maxLength - 1 };
      } else {
        vm.activeMenu = {
          id: vm.carouselList[curIdx - 1].id,
          idx: curIdx - 1,
          menuName: vm.carouselList[curIdx - 1].name,
        };
      }
      vm.curData = vm.activeMenu.id;
    },

    /** carousel 메뉴 버튼이 아니라 메뉴 탭을 눌렀을 때 idx update 메서드 */
    onClickUpdatecarouselIdx(menu: string, idx: number, name: string) {
      const vm = this;
      vm.activeMenu.idx = idx;
      vm.curData = menu;
      vm.activeMenu.menuName = name;
    },
    /** TODO 동양대학교 시연 이후 삭제예정 */
    onClickNavProgram() {
      this.$router.push("/user/program/list");
    },
    fnChangeDataList(val: String) {
      var vm = this;
      switch (val) {
        case "LctrList":
          /*vm.$axios
            .get("http://localhost:4000/api/v1/user/ecpPromotions", { params: { epmType: "STD" } })
            .then(function (res: AxiosResponse) {
              vm.dataList = res.data.data;
            });*/
          break;
        case "ExamList":
          break;
        case "ReportList":
          break;
        case "ReferList":
          break;
        case "QnaList":
          break;
        case "NoticeList":
          break;
        case "AttendScore":
          break;
      }
    },
  },
};
</script>
