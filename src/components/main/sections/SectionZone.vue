<template>
  <div class="main_section section6">
    <div class="grid_content">
      <div class="flex_wrap reponsive_pc">
        <div class="main_print">
          <div class="section_tit_wrap">
            <h3 class="section_subtit">출력 Zone</h3>
          </div>
          <div class="box">
            <div class="print_zone">
              <strong>비교과 이수</strong>
              <div class="inner">
                <div>
                  <div class="form">
                    <vue-select :options="selectedOption.options" class="select_box md" placeholder="선택" />
                  </div>
                  <button type="button" class="btn_round btn_md btn_white">이수증 보기</button>
                </div>
              </div>
            </div>
            <div class="print_zone">
              <strong>대학인증</strong>
              <div class="inner">
                <div>
                  <div class="form">
                    <vue-select :options="selectedOption2.options" class="select_box md" placeholder="선택" />
                  </div>
                  <button type="button" class="btn_round btn_md btn_white">인증서 보기</button>
                </div>
                <div>
                  <div class="form half">
                    <VDateInput :boxSize="'md'" v-model="date" placeholder="시작일"></VDateInput>
                    <VDateInput :boxSize="'md'" v-model="date" placeholder="종료일"></VDateInput>
                  </div>
                  <button type="button" class="btn_round btn_md btn_white">비교과활동기록부</button>
                </div>
                <div>
                  <div class="form half">
                    <vue-select :options="selectedOption3.grade" placeholder="학년도" class="select_box md" />
                    <vue-select :options="selectedOption3.term" placeholder="학기" class="select_box md" />
                  </div>
                  <button type="button" class="btn_round btn_md btn_white">교과이수내역</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main_portinput">
          <div class="section_tit_wrap">
            <h3 class="section_subtit">입력 Zone</h3>
          </div>
          <div class="box dp_flex">
            <div class="input_portfolio">
              <div class="title">
                <h4>My 포트폴리오</h4>
                <button type="button" class="btn_round btn_lg" @click="popupShow()">작성하기</button>
              </div>
              <div class="print_zone">
                <strong>자기주도활동</strong>
                <div class="inner">
                  <div>
                    <div class="form">
                      <vue-select :options="selectedOption4.psdl" class="select_box md" placeholder="선택" />
                    </div>
                    <button type="button" class="btn_round btn_md btn_white">등록</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PopupView v-model="isPopups">
    <template #title>자기주도활동 등록</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide()">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="popupHide()">등록</button>
    </template>
    <div class="tbl tbl_row scrollx_tbl_xs">
      <table>
        <caption>
          자기주도활동 등록
        </caption>
        <colgroup>
          <col style="width: 130px" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scoper="row">활동 분류</th>
            <td>
              <vue-select :options="selectedOption.options" class="select_box md" placeholder="선택" />
            </td>
          </tr>
          <tr>
            <th scoper="row">활동 제목</th>
            <td>
              <div class="letter_count count40">
                <input type="search" class="form_style wd_p100" placeholder="활동 제목을 입력해주세요" />
                <p class="letter_counter"></p>
              </div>
            </td>
          </tr>
          <tr>
            <th scoper="row">활동 내용</th>
            <td>
              <div class="letter_count count500">
                <textarea class="form_style wd_p100" rows="5" placeholder="학습자료 설명을 입력해주세요"></textarea>
                <p class="letter_counter"></p>
              </div>
            </td>
          </tr>
          <tr>
            <th scoper="row">파일 첨부</th>
            <td>
              <div class="attach_filewrap">
                <label class="btn_round btn_white btn_sm">
                  파일 추가
                  <input type="file" class="hidden" />
                </label>
                <div class="attach_file_list">
                  <div class="file_row">
                    <div class="file_name">
                      <p>알고리즘수정.hwp</p>
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </PopupView>
</template>

<script lang="ts">
import VDateInput from "@/components/common/VDateInput.vue";
import PopupView from "@/components/common/PopupView.vue";

export default {
  components: {
    VDateInput,
    PopupView,
  },
  data: () => ({
    selectedOption: {
      options: [
        { label: "선택", code: "a" },
        { label: "이수", code: "b" },
        { label: "미이수", code: "c" },
      ],
    },
    selectedOption2: {
      options: [
        { label: "선택", code: "a" },
        { label: "인증", code: "b" },
        { label: "미인증", code: "c" },
      ],
    },
    date: "",
    selectedOption3: {
      grade: [
        { label: "1학년", code: "a" },
        { label: "2학년", code: "b" },
        { label: "3학년", code: "c" },
      ],
      term: [
        { label: "1학기", code: "a" },
        { label: "2학기", code: "b" },
      ],
    },
    selectedOption4: {
      psdl: [
        { label: "어학성적", code: "a" },
        { label: "자격증", code: "b" },
        { label: "대외활동", code: "c" },
        { label: "봉사활동", code: "d" },
        { label: "헌혈", code: "e" },
        { label: "헌혈증기부", code: "f" },
        { label: "그 외 대학별 추가 항목", code: "g" },
      ],
    },
    isPopups: false,
  }),
  methods: {
    popupShow() {
      const vm = this;
      vm.isPopups = true;
    },
    popupHide() {
      const vm = this;
      vm.isPopups = false;
    },
  },
};
</script>
