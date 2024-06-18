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
                <p>{{ detailData.ecrPer }}%</p>
              </li>
              <li>
                <strong>결과 공개</strong>
                <p>{{ detailData.ecrPrivateDivNm }}</p>
              </li>
              <li>
                <strong>응시 기간</strong>
                <p>
                  {{ moment(detailData.ecrSubmitStrDate).format("YYYY-MM-DD HH:mm") }} ~
                  {{ moment(detailData.ecrSubmitEndDate).format("YYYY-MM-DD HH:mm") }}
                </p>
              </li>
            </ul>
          </div>
          <div class="intro_cnt">
            <div class="wrap">
              <div class="title">
                <span>{{ detailData.ecrHmwrkCnt }}회차</span>
                준비과제
              </div>
              <div class="cnt">
                <div class="editor_area">
                  {{ detailData.ecrDesc }}
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
          </div>
        </div>
        <div class="btn_area">
          <button type="button" class="btn_xl btn_round btn_white" @click="returnToList()">목록으로</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import moment from "moment";
// eslint-disable-next-line no-unused-vars
const prop = defineProps({
  detailData: { type: Object, require: true },
});
const emit = defineEmits(["moveExamListPage"]);
/* emit 사용 메소드: 목록으로 이동 */
const returnToList = () => {
  emit("moveExamListPage");
};
</script>
