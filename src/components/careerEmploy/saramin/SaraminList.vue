<!-- prettier-ignore-start -->
<template>
  <div class="search_box career">
    <div class="search_section">
      <div class="search_toggle lg center flip">
        <div class="left">
          <p class="total_count"><strong>{{ totalCnt }}</strong>개의 채용공고</p>
        </div>
        <div class="right">
          <div class="search_row">
            <input type="search" class="form_style wd_p100" placeholder="채용공고명을 검색하세요" @keyup.enter="getSaraminRecrtList()"/>
            <button type="button" class="btn_search btn_icon icon_only" @click="getSaraminRecrtList()">검색</button>
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
    <div class="saramin jobsearch_box box" v-for="item in list" :key="item.active">
      <a :href=" item.url " target="_blank">
        <p class="tit">
          <strong>{{ item.company.detail.name }}</strong
          >{{ item.position.title }}
        </p>
        <p class="date" v-if="item['close-type'].code == '1'">
          <span class="status_label blue">접수중</span>
          {{ formatDate(item['expiration-date']) }}까지
        </p>
        <p class="date" v-else-if="item['close-type'].code == '2'">
          <span class="status_label blue">접수중</span>
          채용 시까지
        </p>
        <p class="date" v-else-if="item['close-type'].code == '3'">
          <span class="status_label blue">접수중</span>
          상시채용
        </p>
        <p class="date" v-else-if="item['close-type'].code == '4'">
          <span class="status_label blue">접수중</span>
          수시채용
        </p>
        <ul class="info_list">
          <li><strong>업체명</strong>{{ item.company.detail.name }}</li>
          <li><strong>소재지</strong><span v-html="item.position.location.name"></span></li>
          <li><strong>학력</strong>{{ item.position['required-education-level'].name }}</li>
          <li><strong>경력</strong>{{ item.position['experience-level'].name }}</li>
          <li><strong>근무형태</strong>{{ item.position['job-type'].name }}</li>
          <li><strong>임금</strong>{{ item.salary.name }}</li>
        </ul>
      </a>
    </div>
  </div>
  <PaginationUi />
</template>
<!-- prettier-ignore-end -->
<script lang="ts">
import type { AxiosResponse } from "axios";
import PaginationUi from "@/components/common/PaginationUi.vue";
export default {
  components: {
    PaginationUi,
  },
  data: () => ({
    menuType: "saramin",
    searchInfo: {
      keyWord: "",
    },
    list: [],
    totalCnt: "",
  }),
  created() {
    const vm = this;
    vm.getSaraminRecrtList();
  },
  methods: {
    getSaraminRecrtList() {
      const vm = this;
      const searchParam = {
        keyWord: vm.searchInfo.keyWord,
      };
      vm.loading = true; //***paging***
      vm.$axios
        .get("/api/client/career/user/recrtInfo/getSaraminRecrtList", { params: searchParam })
        .then((res: AxiosResponse) => {
          vm.list = res.data.data.data.jobs.job;
          vm.totalCnt = res.data.data.data.jobs.total;
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
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).replace('. ', '-').replace('. ', '-').replace('.', '');
    }
  },
};
</script>
