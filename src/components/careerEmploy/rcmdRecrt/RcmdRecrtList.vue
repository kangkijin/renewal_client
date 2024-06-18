<template>
  <div class="grid_content">
    <div class="sub_section">
      <div class="search_box career">
        <div class="search_section">
          <div class="search_toggle lg center flip">
            <div class="left">
              <p class="total_count"><strong>545</strong>개의 채용공고</p>
            </div>
            <div class="right">
              <div class="select_row lg">
                <vue-select
                  class="select_box"
                  :options="selectOption.options"
                  v-model="selectOption.value1"
                ></vue-select>
              </div>
              <div class="search_row">
                <input type="search" class="form_style wd_p100" placeholder="채용공고명을 검색하세요" />
                <button type="button" class="btn_search btn_icon icon_only">검색</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="recrt_tab">
        <div class="toggle_btnwrap">
          <p class="toggle_btn toggle_applylist">
            <input type="checkbox" name="toggle_btn" id="checkbox2_1" class="hidden" />
            <label for="checkbox2_1">지원목록</label>
          </p>
          <p class="toggle_btn toggle_wishlist">
            <input type="checkbox" name="toggle_btn" id="checkbox2_2" class="hidden" />
            <label for="checkbox2_2">찜목록</label>
          </p>
        </div>
      </div>
      <!-- <결과 없을 경우 표출 -->
      <!--  
        <div class="test_before list_wrap">
          <div>
            <p>채용공고가 없습니다.</p>
          </div>
        </div>
        -->
      <div v-if="list.length == 0" class="test_before list_wrap">
        <div>
          <p>채용공고가 없습니다.</p>
        </div>
      </div>
      <div v-if="list.length != 0" class="recrt_doublewrap rcmd">
        <div v-for="item in list" :key="item.recrtId" class="recrt_viewitem">
          <router-link to="" class="recrt_viewbox">
            <div class="recrt_viewer">
              <img src="@/assets/images/careerEmploy/img_ex_recrt2.png" alt="기업 로고" />
            </div>
            <div class="cnt">
              <div class="title">
                <p class="txt">{{ item.recrtTitle }}</p>
                <div class="title_label">
                  <span class="status_label blue">접수중</span>
                </div>
              </div>
              <div class="labels">
                <span>{{ item.recrtCorpNm }}</span>
                <span>{{ item.recrtCnt }}</span>
                <span>{{ item.recrtField }}</span>
                <span>{{ item.recrtCorpAddr }}</span>
              </div>
              <ul class="function">
                <li class="icon calendar">접수일정</li>
                <li v-if="item.recrtCloseTypeCd == REC_CLOSE_TYPE01">{{ item.recrtApplyDate }}</li>
                <li v-else-if="item.recrtCloseTypeCd == REC_CLOSE_TYPE02">{{ item.recrtCloseTypeNm }}</li>
              </ul>
            </div>
          </router-link>
          <p class="btn_like">
            <input type="checkbox" id="recrt_like2" name="recrt_like" />
            <label for="recrt_like2">좋아요</label>
          </p>
          <router-link to="" class="btn_white btn_sm btn_round">지원하기</router-link>
        </div>
      </div>
      <PaginationUi />
    </div>
  </div>
  <PopupView v-model="isPopups[0]" class="medium">
    <template #title>추천채용 지원하기</template>
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
import PaginationUi from "@/components/common/PaginationUi.vue";
import PopupView from "@/components/common/PopupView.vue";
import { letterCount } from "@/assets/js/common";
import type { AxiosResponse } from "axios";

export default {
  components: {
    PaginationUi,
    PopupView,
  },
  data: () => ({
    selectOption: {
      value1: "전체",
      options: [{ label: "전체" }, { label: "접수중" }, { label: "접수마감" }],
    },
    isPopups: [false],
    list: [],
    searchInfo: {
      status: "",
      keyWord: "",
    },
  }),
  created() {
    const vm = this;
    vm.getRecrtInfo();
  },
  mounted: function () {
    letterCount();
  },
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
    getRecrtInfo() {
      const vm = this;
      const searchParam = {
        status: vm.searchInfo.status,
        keyWord: vm.searchInfo.keyWord,
      };
      vm.loading = true; //***paging***
      vm.$axios
        .get("/api/client/career/user/recrtInfo/getRecrtInfoList", { params: searchParam })
        .then((res: AxiosResponse) => {
          vm.list = res.data.data;
          //const dataTable = vm.$refs.dataTable; //***paging***
          //dataTable.updateRowsPerPageActiveOption(vm.serverOptions.rowsPerPage); //***paging*** BaseTableConfig<->easyDataTable  rowsPerPage맞춰줘야함
          //vm.serverOptions.totalCount = res.data.data.length > 0 ? res.data.data[0].totalCount : 0; //***paging***
        })
        .catch((e: Error) => {
          console.error(e);
        })
        .finally(() => {
          vm.loading = false; //***paging***
        });
    },
  },
};
</script>
