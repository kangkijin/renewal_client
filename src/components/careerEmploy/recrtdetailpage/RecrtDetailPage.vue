<template>
  <div class="recrt_flex_wrap">
    <div class="box recrt_company">
      <div class="viewer_wrap">
        <div class="recrt_viewer">
          <img src="@/assets/images/careerEmploy/img_ex_recrt1.png" alt="기업 로고" />
        </div>
        <router-link to="" class="btn_secondary btn_sm btn_round" @click="popupShow(0)">지원하기</router-link>
      </div>
      <div class="list_wrap">
        <strong class="tit">삼성전자 연구직 추천채용공고</strong>
        <ul class="recrt_list">
          <li><strong>업체명</strong>삼성전자</li>
          <li><strong>소재지</strong>서울시, 광주광역시</li>
          <li><strong>접수일정</strong>2024.06.05~2024.06.15</li>
          <li><strong>공고등록일</strong>2024.06.01</li>
          <li><strong>채용담당자</strong>취업지원팀 062-0000-0000</li>
        </ul>
      </div>
    </div>
    <div class="box recrt_cnt">
      <div class="info_wrap">
        <strong class="tit">모집정보</strong>
        <ul class="recrt_list">
          <li><strong>채용직종</strong>연구직</li>
          <li><strong>관련전공</strong>전자공학과</li>
          <li><strong>모집인원</strong>2명</li>
          <li><strong>계약형태</strong>종신직</li>
        </ul>
      </div>
      <div class="info_text">
        <strong class="tit">모집안내</strong>
        <div class="cnt">
          <p>
            삼성전자의 연구직으로 종신토록 반도체 연구에 종사할 수 있는 직종입니다. 반도체 장인을 육성하기 위한
            특별채용입니다. 반도체 장인을 육성하기 위한 특별채용입니다. 반도체 장인을 육성하기 위한 특별채용입니다.
            반도체 장인을 육성하기 위한 특별채용입니다. 반도체 장인을 육성하기 위한 특별채용입니다. 반도체 장인을
            육성하기 위한 특별채용입니다. 반도체 장인을 육성하기 위한 특별채용입니다.
          </p>
          <div class="file_wrap">
            <div class="file_row">
              <p>비교과프로그램참여신청서.hwp</p>
              <strong class="btn_icon icon_only filedown">다운로드</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <PopupView v-model="isPopups[0]" class="medium">
    <template #title>지원하기</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(0)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="onClickHidePopup(0)">지원</button>
    </template>
    <div class="recrt_popup flex_form full">
      <div>
        <strong>이력서</strong>
        <div class="">
          <div class="attach_filewrap">
            <label class="btn_round btn_white btn_sm">
              파일 추가
              <input type="file" class="hidden" />
            </label>
            <div class="attach_file_list">
              <p class="mg_b5">이력서를 등록해주세요.</p>
              <!-- [pp] 파일등록시 위 문구삭제-->
              <!-- <div class="file_row">
                <div class="file_name">
                  <p>추천채용_이력서.hwp</p>
                  <i>145KB</i>
                  <button type="button" class="btn_icon icon_only delete">삭제</button>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div>
        <strong>지원사유</strong>
        <div class="inner_flex">
          <div class="letter_count count500">
            <textarea
              rows="6"
              class="form_style wd_p100"
              placeholder="지원사유를 간단히 등록해주세요."
              oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
            ></textarea>
            <p class="letter_counter"></p>
          </div>
        </div>
      </div>
    </div>
  </PopupView>
</template>

<script lang="ts">
import PopupView from "@/components/common/PopupView.vue";
export default {
  components: {
    PopupView,
  },
  data: () => ({
    selectOption: {
      value1: "전체",
      options: [{ label: "접수중" }, { label: "접수마감" }],
    },
    isPopups: [false],
  }),
  methods: {
    popupShow(idx: number) {
      const vm = this;
      vm.isPopups[idx] = true;
    },
    popupHide(idx: number) {
      const vm = this;
      vm.isPopups[idx] = false;
    },
    onClickHidePopup(popupIdx: number) {
      const vm = this;
      vm.$confirm("지원하시겠습니까?", "알림", (isConfrim: boolean) => {
        if (isConfrim) {
          vm.popupHide(popupIdx);
          vm.$toast("지원완료되었습니다.", "success");
        }
      });
    },
  },
};
</script>
