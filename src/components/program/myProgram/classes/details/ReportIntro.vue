<template>
  <div class="grid_content">
    <div class="sub_section top">
      <div class="section_tit_wrap">
        <h3 class="section_subtit">Class</h3>
      </div>
      <div class="sub_section">
        <div class="intro_wrapper">
          <div class="intro_list">
            <ul>
              <li>
                <strong>과제 비중</strong>
                <p>50%</p>
              </li>
              <li>
                <strong>결과 공개</strong>
                <p>점수 + 정답</p>
              </li>
              <li>
                <strong>응시 기간</strong>
                <p>2024 - 09 - 10 12 : 00 ~ 2024 - 10 - 01 01 : 00</p>
              </li>
            </ul>
          </div>
          <div class="intro_cnt">
            <div class="wrap">
              <div class="title">
                <span>1회차</span>
                준비과제
              </div>
              <div class="cnt">
                <div class="editor_area">
                  드론정비과정 프로그램 상세내용을 확인하고 시험을 풀어주세요. 드론정비과정 프로그램 상세내용을 확인하고
                  시험을 풀어주세요.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="attached_filedown">
          <p class="title">첨부파일<span>5</span>개</p>
          <!-- [pp] 첨부파일 없을때 -->
          <!-- <div class="no_attachedfile">
            <p>첨부파일이 없습니다.</p>
          </div> -->
          <div class="file_list">
            <div class="filedown">
              <a href="javascript:void(0);">
                <div class="title">
                  <p>
                    <strong class="float_label"><span>.hwp</span></strong
                    >과제 참고1
                  </p>
                </div>
                <span>115 MB</span>
              </a>
            </div>
            <div class="filedown">
              <a href="javascript:void(0);">
                <div class="title">
                  <p>
                    <strong class="float_label"><span>.hwp</span></strong
                    >과제 참고 과제 참고 과제 참고 과제 참고 과제 참고2
                  </p>
                </div>
                <span>115 MB</span>
              </a>
            </div>
            <div class="filedown">
              <a href="javascript:void(0);">
                <div class="title">
                  <p>
                    <strong class="float_label"><span>.hwp</span></strong
                    >과제 참고3
                  </p>
                </div>
                <span>115 MB</span>
              </a>
            </div>
            <div class="filedown">
              <a href="javascript:void(0);">
                <div class="title">
                  <p>
                    <strong class="float_label"><span>.hwp</span></strong
                    >과제 참고4
                  </p>
                </div>
                <span>115 MB</span>
              </a>
            </div>
            <div class="filedown">
              <a href="javascript:void(0);">
                <div class="title">
                  <p>
                    <strong class="float_label"><span>.hwp</span></strong
                    >과제 참고5
                  </p>
                </div>
                <span>115 MB</span>
              </a>
            </div>
          </div>
        </div>
        <div class="btn_area">
          <button v-if="!reportContentSts" type="button" class="btn_xl btn_round btn_secondary" @click="startReport()">
            과제 시작하기
          </button>
        </div>
      </div>
      <ReportDo v-if="reportContentSts"></ReportDo>
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject, ref } from "vue";
import ReportDo from "@/components/program/myProgram/classes/details/ReportDo.vue";

const moveExamListPage = inject("moveExamListPage");

let reportContentSts = ref<boolean>(false);
function startReport() {
  if (confirm("과제제출을 시작하시겠습니까?")) {
    reportContentSts.value = true;
  }
}
</script>
