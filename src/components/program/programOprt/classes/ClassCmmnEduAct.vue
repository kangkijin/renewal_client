<template>
  <div class="myprogram_wrapper">
    <div class="myclassroom_wrapper">
      <ProfProgramSidebar />
      <div class="myclass_wrap">
        <div class="myclass_header">
          <div class="quick_move">
            <button @click="onClickPrevMenu(idx)" class="btn_icon icon_only arrow_prev_white">이전탭</button>
            <p class="tab_title">{{ menuName }}</p>
            <button @click="onClickNextMenu(idx)" class="btn_icon icon_only arrow_next_white">다음탭</button>
          </div>
          <div class="count">
            <!-- 여기 구분 필요 -->
            <p>{{ menuName }} 수</p>
            <strong>{{ totalCnt }}</strong>
          </div>
          <div class="list_btn">
            <button type="button" class="btn_icon myprogram" @click="regHandler(totalCnt > 0 ? eliId : undefined)">
              {{ menuName }}{{ totalCnt > 0 ? "수정" : "등록" }}
            </button>
          </div>
        </div>
        <div class="sub_section">
          <div v-if="totalCnt > 0" class="myclass_listwrap operator">
            <ul class="lesson_list">
              <li v-for="data in dataList" :key="data.keyId">
                <div class="schedule">
                  <p>{{ data.round }}회차</p>
                  <span class="lesson_label" :class="fnDivClass(data.typeCd)">{{ data.typeNm }}</span>
                </div>
                <div class="name">
                  <div class="name_wrap">
                    <div>
                      <strong class="float_label">
                        <span v-if="false"> ({{ moment(data.runningTime).format("HH:MM:SS") }}) </span>
                        <span v-else> ({{ data.percentage + "%" }}) </span>
                      </strong>
                      {{ data.title }}
                    </div>
                  </div>
                  <p class="date">
                    {{ moment(data.strDate).format("YYYY-MM-DD HH:MM") }} ~
                    {{ moment(data.endDate).format("YYYY-MM-DD HH:MM") }}
                  </p>
                </div>
                <div class="oprtr_delete">
                  <button type="button" class="delete" @click="deleteHandler(data.keyId)">삭제</button>
                </div>
                <div class="link">
                  <!-- 강의실 일 때: 시작 -->
                  <button v-if="eccDivCd === 'LCTR'" class="btn_playlesson" @click="overViewHandler(data.keyId)">
                    <div class="img_wrap">
                      <img src="@/assets/images/program/img_program_thumbnail.png" alt="비교과 이미지" />
                    </div>
                    <p class="progressbar">
                      <span :class="`wd_p${data.progressPer}`"></span>
                    </p>
                  </button>
                  <!-- 강의실 일 때: 끝 -->
                  <!-- 나머지 일 때: 시작 -->
                  <button
                    v-else
                    @click="overViewHandler(data.keyId)"
                    class="btn_starttest btn_icon icon_only"
                    :disabled="false"
                  >
                    시험 바로가기
                  </button>
                  <!-- 나머지 일 때: 끝 -->
                </div>
              </li>
            </ul>
          </div>
          <div v-else class="no_lesson">
            <p class="font_gray">등록된 자료가 없습니다.</p>
          </div>
        </div>
        <CommentList :eliId="eliId" :eccDivCd="eccDivCd"></CommentList>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CommentList from "@/components/program/programOprt/classes/CommentList.vue";
import ProfProgramSidebar from "@/components/program/programOprt/classes/ProfProgramSidebar.vue";
import moment from "moment";
import { inject } from "vue";

/** 인터페이스 모음 */
interface eduDataFormat {
  rootId: number; // 근본 아이디(강의실 id)
  keyId: number; // 목록의 키 아이다
  roundCnt: number; // 회차
  locale: string; // 로케일
  typeCd: string; // 타입코드
  typeCdNm: string; // 타입이름
  playTime: string; // 시험 시간
  importPer: number; // 비중
  title: string; // 제목
  strDate: Date; // 시작일
  endDate: Date; // 종료일
  progressPer: number; // 강의 청취 비율
  processSts: string; // 진행상태
}
/** prop / 변수 모음 */
const prop = defineProps({
  idx: { type: Number, required: true },
  menuName: { type: String, required: true },
  dataList: { type: Array<eduDataFormat>, required: true },
  totalCnt: { type: Number, required: true, default: 0 },
});
const emit = defineEmits(["moveExamRegPage", "moveExamOverview", "deleteSelected"]);
const eliId = inject<number>("eliId");
const eccDivCd = inject<string>("eccDivCd");
/** 훅의 영역 */
/** 메소드 영역 */
/* emit 메소드를 사용하기 위한 메소드 */
const regHandler = (keyId?: number) => {
  emit("moveExamRegPage", keyId ? keyId : undefined);
};
const overViewHandler = (keyId: number) => {
  emit("moveExamOverview", keyId);
};
const deleteHandler = (keyId: number) => {
  emit("deleteSelected", keyId);
};
/* inject로 받는 부모의 메소드 */
const onClickPrevMenu = inject<Function>("onClickPrevMenu");
const onClickNextMenu = inject<Function>("onClickNextMenu");
/* 코드값 별로 클래스 색 입히기 */
function fnDivClass(_div: string) {
  let className = "";
  switch (_div) {
    case "VIDEO":
      className = "gray";
      break;
    case "YOUTUBE":
      className = "red";
      break;
    case "ZOOM":
      className = "blue";
      break;
    case "OFFLINE":
      className = "navy";
      break;
    case "EXAM":
      className = "green";
      break;
    case "TEAM":
      className = "orange";
      break;
    case "SOLO":
      className = "yellow";
      break;
  }
  return className;
}
</script>
