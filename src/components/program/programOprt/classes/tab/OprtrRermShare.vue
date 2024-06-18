<template>
  <div class="oprtr_wrapper">
    <div class="setting_header">
      <div class="toggle_wrap">
        <div class="left">
          <h4 class="setting_tit">운영자 권한 공유<strong>2</strong></h4>
          <div class="btn_wrap">
            <button type="button" class="btn_sm btn_round btn_white" @click="onClickPopupShow()">운영자 등록</button>
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

  <PopupView v-model="isPopups" class="">
    <template #title>운영자 검색</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="onClickHidePopup()">취소</button>
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
<script setup lang="ts">
import { onMounted } from "vue";
import PopupView from "@/components/common/PopupView.vue";
import { ref, getCurrentInstance } from "vue";

const isPopups = ref(false);

const instance = getCurrentInstance();
if (!instance) {
  throw new Error("getCurrentInstance returned null");
}
const vm = instance.appContext.config.globalProperties;

const onClickPopupShow = () => {
  isPopups.value = true;
};

const onClickHidePopup = () => {
  vm.$confirm("취소하시겠습니까?", "알림", (isConfrim: boolean) => {
    if (isConfrim) {
      isPopups.value = false;
    }
  });
};

//운영자 권한 공유 hover 이벤트
const toggleClassOnHover = (elements: NodeList, className: string, eventType: string) => {
  const elementsArray = Array.from(elements);
  for (const element of elementsArray) {
    (element as HTMLElement).addEventListener(eventType, function () {
      (this.parentNode as HTMLElement).classList.toggle(className);
    });
  }
};
const permshareHover = () => {
  const btns = document.querySelectorAll(".oprtr_box button");
  toggleClassOnHover(btns, "on", "mouseenter");
  toggleClassOnHover(btns, "on", "mouseleave");
};

onMounted(() => {
  permshareHover();
});
</script>
