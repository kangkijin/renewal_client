<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">비교과 운영</h2>
        <div class="title_function">
          <div class="radio_tab_wrap">
            <p class="radio_tab">
              <input type="radio" id="radio1" name="radio_program" />
              <label for="radio1">비교과신청</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio2" name="radio_program" />
              <label for="radio2">나의 비교과</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio3" name="radio_program" checked />
              <label for="radio3">비교과 운영</label>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="grid_content">
      <div class="sub_section top">
        <div class="section_tit_wrap">
          <h3 class="section_subtit">Class</h3>
        </div>
        <div class="toggle_wrap">
          <div class="left wd_p100">
            <div class="radio_tab_lg_wrap">
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_1" class="hidden" value="" checked />
                <label for="radio1_1">강의실</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_2" class="hidden" value="" />
                <label for="radio1_2">시험</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_3" class="hidden" value="" />
                <label for="radio1_3">과제</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_4" class="hidden" value="" />
                <label for="radio1_4">학습자료</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_5" class="hidden" value="" />
                <label for="radio1_5">Q&A</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_6" class="hidden" value="" />
                <label for="radio1_6">공지사항</label>
              </p>
              <p class="radio_tab_lg">
                <input type="radio" name="radio_tab_lg" id="radio1_7" class="hidden" value="" />
                <label for="radio1_7">출석&성적</label>
              </p>
            </div>
          </div>
        </div>
        <div class="operator_tab_wrap">
          <p class="operator_tab">
            <input type="radio" name="operator_tab" id="operator1_1" class="hidden" value="" />
            <label for="operator1_1">사용 메뉴 설정</label>
          </p>
          <p class="operator_tab">
            <input type="radio" name="operator_tab" id="operator1_2" class="hidden" value="" />
            <label for="operator1_2">이수 기준 설정</label>
          </p>
          <p class="operator_tab">
            <input type="radio" name="operator_tab" id="operator1_3" class="hidden" value="" checked />
            <label for="operator1_3">운영자 권한 공유</label>
          </p>
        </div>
        <div class="oprtr_wrapper">
          <div class="setting_header">
            <div class="toggle_wrap">
              <div class="left">
                <h4 class="setting_tit">운영자 권한 공유<strong>2</strong></h4>
                <div class="btn_wrap">
                  <button type="button" class="btn_sm btn_round btn_white" @click="popupShow(0)">운영자 등록</button>
                </div>
              </div>
            </div>
          </div>
          <div class="permshare_wrap">
            <div class="oprtr_box">
              <button type="button" class="btn_icon icon_only delete_gray">삭제</button>
              <div>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                </div>
                <p class="name">박선준<strong>직원</strong></p>
                <p class="part">비교과학습센터</p>
              </div>
            </div>
            <div class="oprtr_box">
              <button type="button" class="btn_icon icon_only delete_gray">삭제</button>
              <div>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex1.png" alt="프로필 이미지" />
                </div>
                <p class="name">나교수<strong>교수</strong></p>
                <p class="part">간호학부 · 간호학과</p>
              </div>
            </div>
            <div class="oprtr_box">
              <button type="button" class="btn_icon icon_only delete_gray">삭제</button>
              <div>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="프로필 이미지" />
                </div>
                <p class="name">박선준<strong>직원</strong></p>
                <p class="part">비교과학습센터</p>
              </div>
            </div>
            <div class="oprtr_box">
              <button type="button" class="btn_icon icon_only delete_gray">삭제</button>
              <div>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex1.png" alt="프로필 이미지" />
                </div>
                <p class="name">나교수<strong>교수</strong></p>
                <p class="part">간호학부 · 간호학과</p>
              </div>
            </div>
            <div class="oprtr_box">
              <button type="button" class="btn_icon icon_only delete_gray">삭제</button>
              <div>
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex1.png" alt="프로필 이미지" />
                </div>
                <p class="name">나교수<strong>교수</strong></p>
                <p class="part">간호학부 · 간호학과</p>
              </div>
            </div>
          </div>
        </div>
        <div class="btn_area">
          <button type="button" class="btn_round btn_secondary btn_xl">저장</button>
        </div>
      </div>
    </div>
  </div>

  <PopupView v-model="isPopups[0]" class="">
    <template #title>운영자 검색</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="onClickHidePopup(0)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl">선택</button>
    </template>
    <div class="divide_search operator">
      <div class="left">
        <div class="divide_header">
          <div class="toggle_wrap">
            <div class="left mg_b0">
              <div class="divide_radio_wrap">
                <p class="radio_line">
                  <input type="radio" name="alarm_radio" id="alarm_radio1" checked />
                  <label for="alarm_radio1">학생</label>
                </p>
                <p class="radio_line">
                  <input type="radio" name="alarm_radio" id="alarm_radio2" />
                  <label for="alarm_radio2">교수</label>
                </p>
                <p class="radio_line">
                  <input type="radio" name="alarm_radio" id="alarm_radio3" />
                  <label for="alarm_radio3">상담사</label>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="divide_cnt">
          <div class="search_wrap">
            <div class="search_row">
              <input type="search" class="form_style wd_p100" placeholder="이름 또는 아이디로 검색하세요" />
              <button type="button" class="btn_search btn_icon icon_only">검색</button>
            </div>
          </div>
          <!-- 내용 없을때 표출 -->
          <!-- <div class="no_notice">
            <p>알림대상자가 없습니다</p>
          </div> -->
          <ul class="nofitarget_list">
            <li>
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_noimg.svg" alt="이미지 없음" />
                </div>
                <p class="detail">
                  <strong>이현우이현우이현우 이현우이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <button type="button" class="btn_round btn_icon btn_xs btn_white icon_only plus" title="추가">
                  추가
                </button>
              </div>
            </li>
            <li>
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <p class="detail">
                  <strong>이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <button type="button" class="btn_round btn_icon btn_xs btn_white icon_only plus" title="추가">
                  추가
                </button>
              </div>
            </li>
            <li class="disabled">
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <p class="detail">
                  <strong>이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <p class="font_red">추가됨</p>
              </div>
            </li>
            <li>
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <p class="detail">
                  <strong>이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <button type="button" class="btn_round btn_icon btn_xs btn_white icon_only plus" title="추가">
                  추가
                </button>
              </div>
            </li>
            <li>
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_ex3.png" alt="예시" />
                </div>
                <p class="detail">
                  <strong>이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <button type="button" class="btn_round btn_icon btn_xs btn_white icon_only plus" title="추가">
                  추가
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="divide_header">
          <h4>선택된 대상자 <span>4</span></h4>
        </div>
        <div class="divide_cnt">
          <ul class="nofitarget_list">
            <li>
              <div class="info">
                <div class="img_wrap">
                  <img src="@/assets/images/common/img_noimg.svg" alt="이미지 없음" />
                </div>
                <p class="detail">
                  <strong>이현우</strong>
                  <span>간호대학</span>
                  <span>1학년</span>
                </p>
              </div>
              <div class="function">
                <button type="button" class="btn_round btn_icon btn_xs btn_white icon_only minus">추가</button>
              </div>
            </li>
          </ul>
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
    date: "",
    loaded: false,
    isPopups: [false, false, false, false],
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
    onClickConfirm(_text: string) {
      const vm = this;
      vm.$confirm(_text, "", (isConfirm: boolean) => {
        if (isConfirm) {
          vm.$toast("확인되었습니다.", "success");
        } else {
          vm.$toast("취소되었습니다.", "error");
        }
      });
    },
    onClickHidePopup(popupIdx: number) {
      const vm = this;
      vm.$confirm("취소하시겠습니까?", "알림", (isConfrim: boolean) => {
        if (isConfrim) {
          vm.popupHide(popupIdx);
        }
      });
    },
  },
};
</script>
