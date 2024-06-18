<template>
  <div v-if="eccDivCd === 'REFER'" class="refer_cnt">
    <div class="refer_header">
      <div class="tip_label">
        <strong>설명</strong>
        <p>
          {{ data.content }}
        </p>
      </div>
    </div>
    <div class="file_list column">
      <div class="filedown">
        <a href="javascript:void(0);">
          <div class="title">
            <p>
              <strong class="float_label"><span>.png</span></strong
              >자료설명_클러스터링
            </p>
          </div>
          <span>115 MB</span>
        </a>
      </div>
    </div>
  </div>
  <div v-else class="qna_cnt">
    <div class="btn_wrap">
      <!-- 현재 로그인 중인 유저의 아이디와 작성자의 아이디가 일치할 때 조건 안걸음 -->
      <button
        v-if="eccDivCd === 'QNA'"
        type="button"
        class="btn_round btn_white btn_sm"
        @click="deleteFunc(selectKeyId)"
      >
        삭제
      </button>
      <button
        v-if="eccDivCd === 'QNA'"
        type="button"
        class="btn_round btn_white btn_sm"
        @click="openPopFunc(true, selectKeyId)"
      >
        수정
      </button>
    </div>
    <div class="qna_wrap">
      <div :class="eccDivCd === 'QNA' ? 'question_box' : undefined">
        <div class="tit_wrap">
          <strong class="title">제목</strong>
          <div>{{ data.title }}</div>
        </div>
        <div class="cnt_wrap">
          <strong class="title">내용</strong>
          <div>
            <p>
              {{ data.content }}
            </p>
            <div class="file_list column">
              <div class="filedown">
                <a href="javascript:void(0);">
                  <div class="title">
                    <p>
                      <strong class="float_label"><span>.png</span></strong
                      >자료설명_클러스터링
                    </p>
                  </div>
                  <span>115 MB</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- QA에서 답변글 있으면 -->
      <div v-if="data.applyKeyId" class="answer_box">
        <div class="tit_wrap">
          <strong class="title">제목</strong>
          <div>{{ data.applyTitle }}</div>
        </div>
        <div class="cnt_wrap">
          <strong class="title">내용</strong>
          <div>
            <p>{{ data.applyContent }}</p>
            <div class="file_list column">
              <div class="filedown">
                <a href="javascript:void(0);">
                  <div class="title">
                    <p>
                      <strong class="float_label"><span>.확장자</span><span>파일크기</span></strong
                      >파일제목
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- //QA에서 답변글 있으면 -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { inject, onBeforeMount } from "vue";
/** prop / 변수 모음 */
const prop = defineProps({
  selectKeyId: { type: Number, required: true },
  openPopFunc: { type: Function, required: false },
  deleteFunc: { type: Function, required: false },
  detailFunc: { type: Function, required: true },
});
const eccDivCd = inject<string>("eccDivCd");
const data = inject<object>("detailData");
const referingId = inject<Function>("ReferingId");
onBeforeMount(() => {
  prop.detailFunc(prop.selectKeyId);
  referingId ? referingId(prop.selectKeyId) : undefined;
});
</script>
