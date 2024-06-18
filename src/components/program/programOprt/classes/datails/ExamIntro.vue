<template>
  <div class="sub_section">
    <div class="intro_wrapper">
      <div class="intro_list">
        <ul>
          <li>
            <strong>시험 비중</strong>
            <p>10%</p>
          </li>
          <li>
            <strong>시험 시간</strong>
            <p>10분</p>
          </li>
          <li>
            <strong>결과 공개</strong>
            <p>점수 + 정답</p>
          </li>
          <li>
            <strong>총 문제</strong>
            <p>10</p>
          </li>
          <li>
            <strong>응시 기간</strong>
            <p>2024 - 09 - 10 12 : 00 ~ 2024 - 10 - 01 01 : 00</p>
          </li>
        </ul>
      </div>
      <div class="intro_cnt">
        <div>
          <div class="title">
            <span>1회차</span>
            사전 테스트
          </div>
          <div class="cnt">
            <div class="editor_area">드론정비과정 프로그램 상세내용을 확인하고 시험을 풀어주세요.</div>
          </div>
        </div>
        <button v-if="transVal2" class="view_ans" @click="clickBtn2()">
          {{ viewNm }}
        </button>
      </div>
    </div>
    <div class="btn_area">
      <button v-show="!examContentSts" type="button" class="btn_xl btn_round btn_secondary" @click="startExam()">
        시험 시작하기
      </button>
    </div>
  </div>
  <ExamDo v-if="examContentSts"></ExamDo>
</template>
<script setup lang="ts">
import ExamDo from "@/components/program/myProgram/classes/details/ExamDo.vue";
import { ref } from "vue";

let viewNm = ref<string>("정답보기");
let examContentSts = ref<boolean>(false);

function startExam() {
  if (confirm("시험을 시작 하시겠습니까?\n시험 응시 후 브라우저 종료 또는 화면 이탈 시 0점 처리됩니다.")) {
    examContentSts.value = true;
  }
}
</script>
