<template>
  <div class="grid_content" v-if="promoList[0].proListYn === 'Y'">
    <div class="program_gridbox">
      <div class="program_thumbbox" v-for="(program, idx) in promoList" :key="idx">
        <div class="img_wrap">
          <!-- [pp] 이미지 없을때 -->
          <img src="@/assets/images/program/img_program_thumbnail.png" alt="대학 로고이미지 예시" />
        </div>
        <p class="btn_like">
          <input type="checkbox" id="programlike1" name="programlike" />
          <label for="programlike1">좋아요</label>
        </p>
        <router-link :to="`/user/program/detail/${program.eliId}`" class="program_contents">
          <div>
            <span class="team_label" v-if="program.eliPartiCd == 'TEAM'">TEAM</span>
            <p class="title">{{ program.eliTitle }}</p>
            <p class="capa">{{ program.ability }}</p>
            <ul class="info">
              <li>
                <strong>모집</strong>{{ moment(program.eliReqStrDate).format("YYYY.MM.DD") }} ~
                {{ moment(program.eliReqEndDate).format("YYYY.MM.DD") }}
              </li>
              <li>
                <strong>운영</strong>{{ moment(program.eliOprtStrDate).format("YYYY.MM.DD") }} ~
                {{ moment(program.eliOprtEndDate).format("YYYY.MM.DD") }}
              </li>
              <li><strong>대상</strong>{{ program.elsApplyTargetNm }}</li>
            </ul>
            <ul class="label">
              <li class="mileage">100,000</li>
              <li class="likes">999+</li>
              <li class="apply">19/{{ program.eliRecrtCnt }}</li>
              <li class="waiting" v-if="program.eliWaitYn == 'Y'">0/{{ program.eliWaitCnt }}</li>
            </ul>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import type { AxiosResponse } from "axios";
import moment from "moment";

export default {
  data: () => ({
    promoList: [
      {
        eliId: "",
        eliTitle: "",
        cdNm: "",
        cdId: "",
        elsApplyTargetCd: "",
        eliReqDate: "",
        eliOprtDate: "",
        eliReqStrDate: "",
        eliReqEndDate: "",
        eliOprtStrDate: "",
        eliOprtEndDate: "",
        eliPartiCd: "",
        totalMileage: "",
        likes: "",
        apply: "",
        eliWaitCnt: "",
        eliWaitYn: "",
        teamYn: "",
      },
    ],
  }),
  beforeMount() {
    this.fnGetProgramList();
  },
  methods: {
    moment,
    fnGetProgramList() {
      const vm = this;
      vm.$axios.get("/api/user/getPromotionFiveList", { params: { epmType: "STD" } }).then((res: AxiosResponse) => {
        const resData = res.data;
        vm.promoList = resData.data;
        console.log(resData.data);
      });
    },
  },
};
</script>
