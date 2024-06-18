<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">비교과 운영</h2>
        <div class="title_function">
          <div class="radio_tab_wrap">
            <p class="radio_tab">
              <input type="radio" id="radio1" name="radio_program" />
              <label for="radio1">비교과신청</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio2" name="radio_program" />
              <label for="radio2">나의 비교과</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio3" name="radio_program" checked />
              <label for="radio3">비교과 운영</label>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid_content">
      <div class="sub_section top">
        <div class="section_tit_wrap">
          <h3 class="section_subtit">Class</h3>
        </div>
        <div class="toggle_wrap">
          <div class="left wd_p100">
            <div class="radio_tab_lg_wrap">
              <p class="radio_tab_lg" v-for="(menu, idx) in menuList" :key="menu.id">
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
          :is="Classes[activeMenu.id]"
          :menuName="activeMenu.name"
          :idx="activeMenu.idx"
          :eccDivCd="activeMenu.id.replace('List', '').toUpperCase()"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as Classes from "@/components/program/programOprt/classes/classImport";
import { getCurrentInstance, provide, ref } from "vue";

/** prop / 변수 영역 */
const activeMenu = ref({ idx: 7, name: "설정", id: "ClassSetup" });
const menuList = [
  { name: "강의실", id: "LctrList" },
  { name: "시험", id: "ExamList" },
  { name: "과제", id: "ReportList" },
  { name: "학습자료", id: "ReferList" },
  { name: "Q&A", id: "QnaList" },
  { name: "공지사항", id: "NoticeList" },
  { name: "관리", id: "ClassMng" },
  { name: "설정", id: "ClassSetup" },
  { name: "입과", id: "EcpAplcn" },
];
const instance = getCurrentInstance();
if (!instance) {
  throw new Error("getCurrentInstance returned null");
}
const vm = instance.appContext.config.globalProperties;
/** 메소드 영역 */
function onClickUpdatecarouselIdx(menu: string, idx: number, name: string) {
  activeMenu.value.idx = idx;
  activeMenu.value.id = menu;
  activeMenu.value.name = name;
}

function onClickNextMenu(curIdx: number) {
  const maxLength = menuList.length;

  // 마지막 페이지인 경우
  if (curIdx + 1 === maxLength) {
    activeMenu.value = { id: menuList[0].id, idx: 0, name: menuList[0].name };
  } else {
    activeMenu.value = {
      id: menuList[curIdx + 1].id,
      idx: curIdx + 1,
      name: menuList[curIdx + 1].name,
    };
  }
}
function onClickPrevMenu(curIdx: number) {
  const maxLength = menuList.length;

  // 처음 페이지인 경우
  if (curIdx === 0) {
    activeMenu.value = { id: menuList[maxLength - 1].id, idx: maxLength - 1, name: menuList[maxLength - 1].name };
  } else {
    activeMenu.value = {
      id: menuList[curIdx - 1].id,
      idx: curIdx - 1,
      name: menuList[curIdx - 1].name,
    };
  }
}
/** 호이스팅으로 인한 provide 선언 */
const eliId: number = 9999;
const ecmId: number = 9999;
const ecsId: number = 9999;
provide("eliId", eliId);
provide("ecmId", ecmId);
provide("ecsId", ecsId);
/* 화살표 클릭 시, 탭 이동 함수 provide */
provide("onClickPrevMenu", onClickPrevMenu);
provide("onClickNextMenu", onClickNextMenu);
/* 차수 횟수 provide */
provide("examRound", 3);
/* vm사용 위한 provide */
provide("vm", vm);
</script>
