<template>
  <div class="myclass_wrap">
    <div class="myclass_header">
      <div class="quick_move">
        <button @click="this.$parent.$parent.onClickPrevMenu(idx)" class="btn_icon icon_only arrow_prev_white">
          이전탭
        </button>
        <p class="tab_title">{{ menuName }}</p>
        <button @click="this.$parent.$parent.onClickNextMenu(idx)" class="btn_icon icon_only arrow_next_white">
          다음탭
        </button>
      </div>
      <div class="count">
        <p>강의 수</p>
        <strong>{{ totalCnt }}</strong>
      </div>
      <div class="progress">
        <p>{{ eccDivCd === "LCTR" ? "진도율" : "누적점수" }}</p>
        <strong>
          {{ calculValue ? calculValue : 0 }}
          <i>{{ eccDivCd === "LCTR" ? "%" : "점" }}</i>
        </strong>
      </div>
    </div>
    <div class="sub_section">
      <!-- 목록 내용 있을때 : 길이 > 0  -->
      <div v-if="totalCnt > 0" class="myclass_listwrap">
        <ul class="lesson_list">
          <li v-for="data in dataList" :key="data.keyId">
            <div class="schedule">
              <p>{{ data.roundCnt }}{{ data.locale == "KO" ? "회차" : "Round" }}</p>
              <span class="lesson_label" :class="fnDivClass(data.typeCd)">{{ data.typeCdNm }}</span>
            </div>
            <div class="name">
              <div class="name_wrap">
                <div>
                  <strong class="float_label">
                    <span v-if="data.playTime">({{ data.playTime }})</span>
                    <span v-if="data.importPer">({{ data.importPer }})</span>
                  </strong>
                  {{ data.title }}
                </div>
              </div>
              <p v-if="data.period" class="date">
                {{ data.period }}
              </p>
            </div>

            <div class="progress" v-if="data.typeCd === 'Y' || data.typeCd === 'V'">
              {{ data.progressPer }}<strong>%</strong>
            </div>
            <div class="status" v-if="data.typeCd === 'Y' || data.typeCd === 'V'">
              <p :class="data.processStsNm === 'Y' ? 'font_navy' : 'font_red'">{{ data.processStsNm }}</p>
            </div>
            <!-- -->
            <div class="test_status">
              <p :class="data.processStsNm === '미실시' ? 'font_gray' : ''">
                {{ data.processStsNm === "완료" ? `${data.score} 점` : data.processStsNm }}
              </p>
            </div>

            <div class="link">
              <button
                v-if="data.typeCd === 'Y' || data.typeCd === 'V'"
                class="btn_playlesson"
                @click="onClickNavDetail(data.rootReferKey, 'LctrDetail')"
              >
                <div class="img_wrap">
                  <img src="@/assets/images/program/img_program_thumbnail.png" alt="비교과 이미지" />
                </div>
                <p class="progressbar">
                  <span :class="`wd_p${data.progressPer}`"></span>
                </p>
              </button>
              <!-- ㅜㅜ data.typeCd === 'Y' || data.typeCd === 'V' -->
              <button
                v-else-if="data.typeCd === 'Q'"
                @click="onClickNavDetail(data.rootReferKey, 'ExamIntro')"
                class="btn_starttest btn_icon icon_only"
                :disabled="data.processSts === 'CD04' || data.processSts === 'CD05'"
              >
                시험 바로가기
              </button>
              <router-link v-else to="/program/myProgram/report/intro" class="btn_starttest btn_icon icon_only">
                시험 바로가기
              </router-link>
            </div>
          </li>
        </ul>
      </div>
      <!-- // 목록 내용 있을때 : 길이 > 0  -->
      <!-- 목록 내용 없을때 : 길이 = 0 -->
      <div v-else class="no_lesson">
        <p class="font_gray">진행중인 {{ menuName }}이(가) 없습니다.</p>
      </div>
      <!-- // 목록 내용 없을때 : 길이 = 0 -->
    </div>
    <CommentList :eliId="eliId" :eccDivCd="eccDivCd"></CommentList>
  </div>
</template>

<script setup lang="ts">
import CommentList from "@/components/program/programOprt/classes/CommentList.vue";
import { inject } from "vue";

/** 인터페이스 영역 */
interface cmmnDataFormat {
  keyId: number;
  roundCnt: number;
  locale: string;
  typeCd: string;
  typeCdNm: string;
  playTime: string;
  importPer: number;
  title: string;
  period: string;
  progressPer: number;
  processSts: string;
  processStsNm: string;
  score: number;
  rootReferKey: number;
}
/** prop / 변수 모음 */
const prop = defineProps({
  idx: { type: Number, required: true },
  menuName: { type: String, required: true },
  eliId: { type: Number, required: true },
  totalCnt: { type: Number, required: true },
  calculValue: { type: Number, required: true },
  dataList: { type: Array<cmmnDataFormat>, required: true },
});

const eccDivCd = inject("eccDivCd");

/** 코드값 별로 클래스 색 입히기 */
function fnDivClass(_div: string) {
  let className = "";
  switch (_div) {
    case "V":
      className = "gray";
      break;
    case "Y":
      className = "red";
      break;
    case "Z":
      className = "blue";
      break;
    case "F":
      className = "navy";
      break;
  }
  return className;
}

/** 메뉴 이동 상세메뉴 */
function onClickNavDetail(_key: number, menuId: string) {
  const vm = this;
  vm.$parent.$data.detailKey = _key;
  vm.$parent.$data.activeMenu.id = menuId;
}
</script>
