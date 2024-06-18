<template>
  <div class="myclass_wrap">
    <!-- 목록의 머리 : 시작 -->
    <div class="myclass_header">
      <div class="quick_move">
        <button @click="onClickPrevMenu(idx)" class="btn_icon icon_only arrow_prev_white">이전탭</button>
        <p class="tab_title">{{ menuName }}</p>
        <button @click="onClickNextMenu(idx)" class="btn_icon icon_only arrow_next_white">다음탭</button>
      </div>
      <div class="count">
        <p>{{ menuName }} 수</p>
        <strong>{{ totalCnt }}</strong>
      </div>
      <!-- 운영자는 QA를 제외하고 등록한다 : 시작 -->
      <div v-if="openPopFunc && eccDivCd != 'QNA'" class="list_btn">
        <button type="button" class="btn_icon myprogram" @click="openPopFunc(true)">{{ menuName }} 등록</button>
      </div>
      <!-- 운영자는 QA를 제외하고 등록한다 : 끝 -->
    </div>
    <!-- 목록의 머리 : 끝 -->
    <div class="sub_section">
      <!-- 목록 내용 있을때 : 시작  -->
      <div v-if="true" class="myclass_listwrap">
        <ul class="refer_list">
          <li class="accordion" v-for="(data, idx) in dataList" :key="data.keyId">
            <div class="acd_tit" @click="selectedEntity(data.keyId)">
              <div class="refer_tit">
                <div class="type">
                  <span class="lesson_label" :class="fnDivClass(data.typeCd)">
                    {{ data.typeCdNm }}
                    {{ data.typeCdNm === "QnA" ? idx + 1 : undefined }}
                  </span>
                </div>
                <div class="name">
                  {{ data.title }}
                  <span v-if="data.privateYn === 'Y'" :class="fnIconClass()"></span>
                  <span v-if="data.fixedYn === 'Y'" :class="fnIconClass()"></span>
                  <p v-if="eccDivCd != 'LEARN'" class="date">{{ data.dateInfo }}</p>
                </div>
                <div class="oprtr_delete">
                  <button v-if="eccDivCd === 'QNA'" type="button" class="delete" @click="deleteFunc(data.keyId)">
                    삭제
                  </button>
                </div>
              </div>
            </div>
            <div class="acd_cnt">
              <CmmnCommuDetail
                v-if="selectedId === data.keyId"
                :selectKeyId="data.keyId"
                :openPopFunc="openPopFunc"
                :deleteFunc="deleteFunc"
                :detailFunc="detailFunc"
              >
              </CmmnCommuDetail>
            </div>
          </li>
        </ul>
      </div>
      <!-- 목록 내용 있을때 : 끝  -->
      <!-- 목록 내용 없을때 : 시작 -->
      <div v-else class="no_lesson">
        <p class="font_gray">등록된 자료가 없습니다.</p>
      </div>
      <!-- 목록 내용 없을때 : 끝 -->
    </div>
    <CommentList :eliId="eliId" :eccDivCd="eccDivCd"></CommentList>
  </div>
</template>

<script setup lang="ts">
import CommentList from "@/components/program/programOprt/classes/CommentList.vue";
import { inject, provide, ref, watch } from "vue";
import CmmnCommuDetail from "@/components/program/programOprt/classes/CmmnCommuDetail.vue";
import { accordion } from "@/assets/js/common";
/** 인터페이스 영역 */
interface cmmnDataFormat {
  keyId: number;
  typeCd: string;
  typeCdNm: string;
  title: string;
  content: string;
  fixedYn: string;
  privateYn: string;
  privatePw: string;
  referKeyId: string;
  dateInfo: string;
  applyKeyId: string;
  applyTitle: string;
  applyContent: string;
}
/** prop / 변수 영역 */
// eslint-disable-next-line no-unused-vars
const prop = defineProps({
  idx: { type: Number, required: true },
  menuName: { type: String, required: true },
  dataList: { type: Array<cmmnDataFormat>, required: true },
  totalCnt: { type: Number, required: true },
  openPopFunc: { type: Function, required: true },
  deleteFunc: { type: Function, required: true },
  detailFunc: { type: Function, required: true },
  eccDivCd: { type: String, required: true },
});

const onClickPrevMenu = inject<Function>("onClickPrevMenu");
const onClickNextMenu = inject<Function>("onClickNextMenu");

const eliId = inject<string>("eliId");
let selectedId = ref<number>();

watch(
  selectedId,
  (newVal) => {
    selectedId.value = newVal;
    accordion();
  },
  {
    immediate: true,
  },
);
/** 함수 / 메서드의 영역 */
function fnDivClass(_div: string) {
  let className = "";
  switch (_div) {
    case "LEARN":
      className = "green";
      break;
    case "QNA":
      className = "green";
      break;
    case "NOTICE":
      className = "blue";
      break;
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
    default:
      className = "red";
  }
  return className;
}

/** 메소드(깊) : 메뉴 별 아이콘 클래스 추가 */
function fnIconClass() {
  let className = "";
  if (prop.eccDivCd === "QNA") {
    className = "qus_locked";
  } else if (prop.eccDivCd === "NOTICE") {
    className = "notice_fixed";
  }
  return className;
}

function selectedEntity(keyId: number) {
  selectedId.value = keyId;
}
</script>
