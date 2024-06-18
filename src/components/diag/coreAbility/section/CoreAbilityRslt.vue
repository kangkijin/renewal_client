<template>
  <div>
    <div>
      <div class="section_tit_wrap">
        <h4 class="section_tit2">핵심역량진단 결과</h4>
      </div>
      <div class="box test_result" :class="loaded ? '' : 'loading_md'">
        <!-- 결과 없을 경우 표출 -->

        <div v-if="loaded && diagList.length === 0" class="test_before">
          <div>
            <p>핵심역량진단 결과가 없습니다.</p>
          </div>
        </div>

        <ul v-else class="testresult_list">
          <li v-for="item in diagList" :key="item.damId">
            <div>
              <p class="title">{{ item.damTitle }}<span v-if="item.datCmpltYn === 'N'" class="label">미응시</span></p>
              <div class="function">
                <p class="date">
                  응시일<span>{{ item.submitDate ? moment(item.submitDate).format("YYYY.MM.DD") : "-" }}</span>
                </p>

                <template v-if="item.datCmpltYn === 'Y'">
                  <span class="label">응시완료</span>
                  <button type="button" @click="onClickShowRsltPopup(item.datId)">결과보기</button>
                </template>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <DiagRsltPopup v-if="isPopup" v-model="isPopup" :datId="selectedKey"></DiagRsltPopup>
</template>
<script setup lang="ts">
import DiagRsltPopup from "../popup/DiagRsltPopup.vue";
import { getCurrentInstance, onMounted, ref } from "vue";
import moment from "moment";
import type { UserDiagInfoTypes } from "@/types/diag/DiagTypes";

onMounted(() => {
  fnGetMyDiagList();
});

const instance = getCurrentInstance();
if (!instance) {
  throw new Error("getCurrentInstance returned null");
}
const vm = instance.appContext.config.globalProperties;

const isPopup = ref(false);
const selectedKey = ref();

const loaded = ref(false);
const diagList = ref([] as UserDiagInfoTypes[]);

/** 핵심역량진단 결과 리스트 가져오기 */
const fnGetMyDiagList = () => {
  vm.$axios
    .get("/api/client/diag/user/coreAbility/getMyDiagList")
    .then((res) => {
      const resData = res.data;
      diagList.value = resData.data;

      loaded.value = true;
    })
    .catch((e) => {
      console.error(e);
    });
};

/**
 * 클릭 시 핵심역량진단 결과 팝업
 */
const onClickShowRsltPopup = (datId: number) => {
  selectedKey.value = datId;
  isPopup.value = true;
};
</script>
