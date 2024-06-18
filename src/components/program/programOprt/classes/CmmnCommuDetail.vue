<template>
  <div v-if="eccDivCd === 'REFER'" class="refer_cnt">
    <div class="refer_header">
      <div class="btn_wrap">
        <button type="button" class="btn_round btn_white btn_sm" @click="deleteFunc(selectKeyId)">삭제</button>
        <button type="button" class="btn_round btn_white btn_sm" @click="openPopFunc(true, selectKeyId)">수정</button>
      </div>
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
    <div v-if="eccDivCd === 'QNA'" class="btn_wrap">
      <button
        v-if="data.applyKeyId"
        type="button"
        class="btn_round btn_white btn_sm"
        @click="deleteFunc(data.applyKeyId)"
      >
        답변 삭제
      </button>
      <button
        v-if="data.applyKeyId"
        type="button"
        class="btn_round btn_white btn_sm"
        @click="openPopFunc(true, data.applyKeyId)"
      >
        답변 수정
      </button>
      <button v-else type="button" class="btn_round btn_white btn_sm" @click="openPopFunc(true)">답변 등록</button>
    </div>
    <div v-else class="btn_wrap">
      <button type="button" class="btn_round btn_white btn_sm" @click="deleteFunc(selectKeyId)">삭제</button>
      <button type="button" class="btn_round btn_white btn_sm" @click="openPopFunc(true, selectKeyId)">수정</button>
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
import { accordion } from "@/assets/js/common";
/** prop / 변수 모음 */
const prop = defineProps({
  selectKeyId: { type: Number, required: true },
  openPopFunc: { type: Function, required: true },
  deleteFunc: { type: Function, required: true },
  detailFunc: { type: Function, required: true },
});
const eccDivCd = inject<string>("eccDivCd");
const data = inject<object>("detailData");
const referingId = inject<Function>("ReferingId");
onBeforeMount(() => {
  alert(eccDivCd);
  prop.detailFunc(prop.selectKeyId);
  referingId ? referingId(prop.selectKeyId) : undefined;
});
</script>
