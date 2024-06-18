<template>
  <div class="file_list column">
    <!-- <div v-for="obj in filesList" :key="obj.fileId" class="filedown">
      <a href="javascript:void(0);" onclick="getDownloadFile(obj.fileId)">
        <div class="title">
          <p>
            <strong class="float_label">
              <span>{{ obj.ext }}</span>
            </strong>
            {{ obj.fileNm }}
          </p>
        </div>
        <span>{{ obj.fileSize }}</span>
      </a>
    </div>-->
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
</template>
<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import axios, { type AxiosResponse } from "axios";

/** prop / 변수 모음 */
const prop = defineProps({
  erdId: { type: Number, required: true },
});
let filesList = ref<object[]>();
/** 훅의 영역 */
onBeforeMount(() => {
  getFilesList();
});
/** 메소드(얇) 모음 */

/** 해당 학습자료에 포함된 파일 목록 조회 */
const getFilesList = () => {
  const _url = "";
  const param = {
    erdId: prop.erdId,
  };
  axios.get(_url, { params: param }).then((response: AxiosResponse) => {
    const stsCd = response.data.code;
    /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
    if (stsCd != 200) {
      throw new Error();
    }
    filesList.value = response.data.data;
  });
};

/** 선택한 파일을 다운로드 */
// eslint-disable-next-line no-unused-vars
const getDownloadFile = (fileId: number) => {
  const _url = "";
  const param = {
    fileId: fileId,
  };
  axios.get(_url, { params: param }).then((response: AxiosResponse) => {
    const stsCd = response.data.code;
    /** 상태코드가 200이 아니면 (예: 300 류) 에러호출 */
    if (stsCd != 200) {
      throw new Error();
    }
  });
};
/** 메소드(깊) 모음 */
</script>
