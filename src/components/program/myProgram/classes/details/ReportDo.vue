<template>
  <div class="insert_cntwrap">
    <div class="insert_row">
      <strong class="required2">과제 제목</strong>
      <div class="cnt">
        <div class="input_row wd_p75">
          <div class="letter_count count50">
            <input type="search" class="form_style wd_p100" placeholder="제목을 입력해주세요" />
            <p class="letter_counter"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="insert_row">
      <strong class="required2">과제 내용</strong>
      <div class="cnt">
        <div class="input_row wd_p100">
          <div class="letter_count count1000">
            <textarea
              rows="3"
              class="form_style wd_p100"
              placeholder="내용을 입력해주세요"
              oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
            ></textarea>
            <p class="letter_counter"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="insert_row">
      <strong>파일 첨부</strong>
      <div class="cnt">
        <div class="attach_filewrap">
          <label class="btn_round btn_white btn_sm">
            파일 추가
            <input type="file" class="hidden" />
          </label>
          <div class="attach_file_list">
            <div class="file_row">
              <div class="file_name">
                <p>알고리즘수정.mp4</p>
                <i>145KB</i>
                <button type="button" class="btn_icon icon_only download">다운로드</button>
                <button type="button" class="btn_icon icon_only delete">삭제</button>
              </div>
            </div>
            <div class="file_row">
              <div class="file_name">
                <p>알고리즘수정.hwp</p>
                <i>145KB</i>
                <button type="button" class="btn_icon icon_only download">다운로드</button>
                <button type="button" class="btn_icon icon_only delete">삭제</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="btn_area">
    <button type="button" class="btn_xl btn_round btn_white" @click="moveExamListPage()">취소</button>
    <button type="button" class="btn_xl btn_round btn_secondary" @click="submit()">제출</button>
  </div>
</template>
<script setup lang="ts">
import { inject } from "vue";

const moveExamListPage = inject<Function>("moveExamListPage");
function submit() {
  if (confirm("과제를 제출하시겠습니까?")) {
    alert("과제를 제출하였습니다.");
    moveExamListPage();
  }
}
</script>
