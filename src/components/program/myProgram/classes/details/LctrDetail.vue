<template>
  <div class="myprogram_wrapper">
    <div class="myclassroom_wrapper">
      <div class="myclass_wrap">
        <div class="myclass_header">
          <div class="quick_move">
            <button @click="this.$parent.onClickPrevMenu(idx)" class="btn_icon icon_only arrow_prev_white">
              이전탭
            </button>
            <p class="tab_title">강의실</p>
            <button @click="this.$parent.onClickNextMenu(idx)" class="btn_icon icon_only arrow_next_white">
              다음탭
            </button>
          </div>
          <div class="list_btn">
            <button @click="onClickNavClassList()" class="btn_icon myprogram">강의목록</button>
          </div>
        </div>
        <div class="sub_section">
          <div class="lesson_wrapper">
            <div class="video_wrap">
              <!-- 동영상 영역 -->
              <img src="@/assets/images/program/img_video_ex.png" alt="비디오 예시" />
            </div>
            <div class="lesson_cnt">
              <div class="title">
                <p>
                  <span>{{ lctrInfo.강의_회차 }}회차</span>
                  {{ lctrInfo.강의_명 }}
                </p>
                <div class="iconbtn_wrap">
                  <div>
                    <p class="check_like2">
                      <input type="checkbox" id="like1" name="like1" />
                      <label for="like1">좋아요</label>
                    </p>
                    <p class="count">120</p>
                  </div>
                </div>
              </div>
              <div class="cnt">
                <div class="editor_area prewrap" v-html="lctrInfo.강의_상세"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// TODO 삭제예정
import testData from "../_lctrData";
export default {
  props: {
    idx: { type: Number, required: true },
    detailKey: { type: String, required: true },
  },
  data: () => ({
    lctrInfo: {},
  }),
  mounted() {
    this.fnGetLctrInfo();
  },
  methods: {
    onClickNavClassList() {
      const vm = this;
      vm.$parent.$data.activeMenu.id = "LctrList";
    },
    fnGetLctrInfo() {
      const vm = this;
      const idx = parseInt(vm.detailKey);
      vm.lctrInfo = testData[idx];
    },
  },
};
</script>
