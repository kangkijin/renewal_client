<template>
  <div class="search_box career">
    <div class="search_section">
      <div class="search_toggle lg center flip">
        <div class="left">
          <p class="total_count"><strong>545</strong>개의 채용공고</p>
        </div>
        <div class="right">
          <div class="search_row">
            <input
              type="search"
              class="form_style wd_p100"
              placeholder="채용공고명을 검색하세요"
              v-model="searchInfo.keyWord"
              @keyup.enter="getWorknetRecrtList"
            />
            <button type="button" class="btn_search btn_icon icon_only" @click="getWorknetRecrtList">검색</button>
          </div>
        </div>
      </div>
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
  <div class="jobsearch_list">
    <div class="worknet jobsearch_box box">
      <a href="javascript:void(0);">
        <p class="tit"><strong>[NH농협]</strong>2024년도 상반기 채용</p>
        <p class="date">
          <span class="status_label blue">접수중</span>
          채용시까지
        </p>
        <ul class="info_list">
          <li><strong>업체명</strong>NH농협</li>
          <li><strong>소재지</strong>분야별 상이</li>
          <li><strong>학력</strong>학력무관</li>
          <li><strong>경력</strong>관계없음</li>
          <li><strong>근무형태</strong>주6일 근무</li>
          <li><strong>임금</strong>시급 12500원 ~ 12500원</li>
        </ul>
      </a>
    </div>
    <div class="worknet jobsearch_box box">
      <a href="javascript:void(0);">
        <p class="tit"><strong>[광주가톨릭평화방송]</strong>광주가톨릭평화방송 광주가톨릭평화방송</p>
        <p class="date">
          <span class="status_label blue">접수중</span>
          채용시까지
        </p>
        <ul class="info_list">
          <li><strong>업체명</strong>광주가톨릭평화방송</li>
          <li><strong>소재지</strong>분야별 상이</li>
          <li><strong>학력</strong>학력무관</li>
          <li><strong>경력</strong>관계없음</li>
          <li><strong>근무형태</strong>주6일 근무</li>
          <li><strong>임금</strong>시급 12500원 ~ 12500원</li>
        </ul>
      </a>
    </div>
    <div class="worknet jobsearch_box box">
      <a href="javascript:void(0);">
        <p class="tit"><strong>[건강보험심사평가원]</strong>건강보험심사평가원 채용공고</p>
        <p class="date">
          <span class="status_label blue">접수중</span>
          채용시까지
        </p>
        <ul class="info_list">
          <li><strong>업체명</strong>건강보험심사평가원</li>
          <li><strong>소재지</strong>분야별 상이</li>
          <li><strong>학력</strong>학력무관</li>
          <li><strong>경력</strong>관계없음</li>
          <li><strong>근무형태</strong>주6일 근무</li>
          <li><strong>임금</strong>시급 12500원 ~ 12500원</li>
        </ul>
      </a>
    </div>
    <div class="worknet jobsearch_box box">
      <a href="javascript:void(0);">
        <p class="tit"><strong>[건강보험심사평가원]</strong>건강보험심사평가원 채용공고</p>
        <p class="date">
          <span class="status_label blue">접수중</span>
          2024.04.11 ~ 2024. 04.30
        </p>
        <ul class="info_list">
          <li><strong>업체명</strong>건강보험심사평가원</li>
          <li><strong>소재지</strong>분야별 상이</li>
          <li><strong>학력</strong>학력무관</li>
          <li><strong>경력</strong>관계없음</li>
          <li><strong>근무형태</strong>주6일 근무</li>
          <li><strong>임금</strong>시급 12500원 ~ 12500원</li>
        </ul>
      </a>
    </div>
    <div class="worknet jobsearch_box box">
      <a href="javascript:void(0);">
        <p class="tit"><strong>[건강보험심사평가원]</strong>건강보험심사평가원 채용공고</p>
        <p class="date">
          <span class="status_label blue">접수중</span>
          2024.04.11 ~ 2024. 04.30
        </p>
        <ul class="info_list">
          <li><strong>업체명</strong>건강보험심사평가원</li>
          <li><strong>소재지</strong>분야별 상이</li>
          <li><strong>학력</strong>학력무관</li>
          <li><strong>경력</strong>관계없음</li>
          <li><strong>근무형태</strong>주6일 근무</li>
          <li><strong>임금</strong>시급 12500원 ~ 12500원</li>
        </ul>
      </a>
    </div>
    <div class="worknet jobsearch_box box">
      <a href="javascript:void(0);">
        <p class="tit"><strong>[건강보험심사평가원]</strong>건강보험심사평가원 채용공고</p>
        <p class="date">
          <span class="status_label blue">접수중</span>
          2024.04.11 ~ 2024. 04.30
        </p>
        <ul class="info_list">
          <li><strong>업체명</strong>건강보험심사평가원</li>
          <li><strong>소재지</strong>분야별 상이</li>
          <li><strong>학력</strong>학력무관</li>
          <li><strong>경력</strong>관계없음</li>
          <li><strong>근무형태</strong>주6일 근무</li>
          <li><strong>임금</strong>시급 12500원 ~ 12500원</li>
        </ul>
      </a>
    </div>
    <div class="worknet jobsearch_box box">
      <a href="javascript:void(0);">
        <p class="tit"><strong>[건강보험심사평가원]</strong>건강보험심사평가원 채용공고</p>
        <p class="date">
          <span class="status_label blue">접수중</span>
          2024.04.11 ~ 2024. 04.30
        </p>
        <ul class="info_list">
          <li><strong>업체명</strong>건강보험심사평가원</li>
          <li><strong>소재지</strong>분야별 상이</li>
          <li><strong>학력</strong>학력무관</li>
          <li><strong>경력</strong>관계없음</li>
          <li><strong>근무형태</strong>주6일 근무</li>
          <li><strong>임금</strong>시급 12500원 ~ 12500원</li>
        </ul>
      </a>
    </div>
    <div class="worknet jobsearch_box box">
      <a href="javascript:void(0);">
        <p class="tit"><strong>[건강보험심사평가원]</strong>건강보험심사평가원 채용공고</p>
        <p class="date">
          <span class="status_label blue">접수중</span>
          2024.04.11 ~ 2024. 04.30
        </p>
        <ul class="info_list">
          <li><strong>업체명</strong>건강보험심사평가원</li>
          <li><strong>소재지</strong>분야별 상이</li>
          <li><strong>학력</strong>학력무관</li>
          <li><strong>경력</strong>관계없음</li>
          <li><strong>근무형태</strong>주6일 근무</li>
          <li><strong>임금</strong>시급 12500원 ~ 12500원</li>
        </ul>
      </a>
    </div>
    <div class="worknet jobsearch_box box">
      <a href="javascript:void(0);">
        <p class="tit"><strong>[건강보험심사평가원]</strong>건강보험심사평가원 채용공고</p>
        <p class="date">
          <span class="status_label blue">접수중</span>
          2024.04.11 ~ 2024. 04.30
        </p>
        <ul class="info_list">
          <li><strong>업체명</strong>건강보험심사평가원</li>
          <li><strong>소재지</strong>분야별 상이</li>
          <li><strong>학력</strong>학력무관</li>
          <li><strong>경력</strong>관계없음</li>
          <li><strong>근무형태</strong>주6일 근무</li>
          <li><strong>임금</strong>시급 12500원 ~ 12500원</li>
        </ul>
      </a>
    </div>
  </div>
  <PaginationUi />
</template>
<script lang="ts">
import type { AxiosResponse } from "axios";
import PaginationUi from "@/components/common/PaginationUi.vue";
export default {
  components: {
    PaginationUi,
  },
  data: () => ({
    searchInfo: {
      keyWord: "",
      pageIndex: 0,
    },
    list: [],
  }),
  created() {
    const vm = this;
    vm.getWorknetRecrtList(1);
  },
  methods: {
    getWorknetRecrtList(pageIndex) {
      const vm = this;
      const searchParam = {
        keyWord: vm.searchInfo.keyWord,
        pageIndex: vm.searchInfo.pageIndex,
      };
      vm.loading = true; //***paging***
      vm.$axios
        .get("/api/client/career/user/recrtInfo/getWorknetRecrtList", { params: searchParam })
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
