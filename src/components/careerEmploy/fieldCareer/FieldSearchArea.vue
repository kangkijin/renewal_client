<template>
  <div class="flex_wrap career_flex">
    <div class="flex_wrap field_flex">
      <div class="box">
        <div class="field_select1">
          <vue-select class="select_box" :options="selectOption.field1" v-model="selectOption.value1"></vue-select>
          <button type="button" class="btn_round btn_md btn_primary">등록</button>
        </div>
      </div>
      <div class="box">
        <div class="field_select2">
          <vue-select class="select_box" :options="selectOption.field2" v-model="selectOption.value2"></vue-select>
          <vue-select class="select_box" :options="selectOption.field3" v-model="selectOption.value3"></vue-select>
        </div>
        <div class="field_select1">
          <vue-select class="select_box" :options="selectOption.field1_2" v-model="selectOption.value1_2"></vue-select>
          <button type="button" class="btn_round btn_md btn_primary">등록</button>
        </div>
      </div>
    </div>
    <RecrtSlideBanner />
  </div>
  <div class="flex_wrap career_flex2">
    <div class="box career_search">
      <div class="box_titlewrap">
        <h4>검색결과</h4>
      </div>
      <!-- [pp] 등록 전 : 
      <div class="no_cnt">
        <p>등록된 내용이 없습니다</p>
      </div>
      -->
      <div class="select_keyword_wrap">
        <p class="select_keyword">
          <input type="radio" id="select_keyword1" name="select_keyword" />
          <label for="select_keyword1">AI 개발자</label>
          <button type="button" class="icon_only btn_icon btn_delete_word">삭제</button>
        </p>
        <p class="select_keyword">
          <input type="radio" id="select_keyword2" name="select_keyword" />
          <label for="select_keyword2">일 잘하는 개발자</label>
          <button type="button" class="icon_only btn_icon btn_delete_word">삭제</button>
        </p>
        <p class="select_keyword">
          <input type="radio" id="select_keyword3" name="select_keyword" />
          <label for="select_keyword3">컴퓨터 프로그래밍</label>
          <button type="button" class="icon_only btn_icon btn_delete_word">삭제</button>
        </p>
        <p class="select_keyword">
          <input type="radio" id="select_keyword4" name="select_keyword" />
          <label for="select_keyword4">프로그래머</label>
          <button type="button" class="icon_only btn_icon btn_delete_word">삭제</button>
        </p>
        <p class="select_keyword">
          <input type="radio" id="select_keyword5" name="select_keyword" />
          <label for="select_keyword5">일이삼사오육칠팔구십십일십이심삼십사사사사사</label>
          <button type="button" class="icon_only btn_icon btn_delete_word">삭제</button>
        </p>
        <p class="select_keyword">
          <input type="radio" id="select_keyword6" name="select_keyword" />
          <label for="select_keyword6">넘치면스크롤</label>
          <button type="button" class="icon_only btn_icon btn_delete_word">삭제</button>
        </p>
        <p class="select_keyword">
          <input type="radio" id="select_keyword7" name="select_keyword" />
          <label for="select_keyword7">해서볼수있어요</label>
          <button type="button" class="icon_only btn_icon btn_delete_word">삭제</button>
        </p>
        <p class="select_keyword">
          <input type="radio" id="select_keyword8" name="select_keyword" />
          <label for="select_keyword8">이렇게</label>
          <button type="button" class="icon_only btn_icon btn_delete_word">삭제</button>
        </p>
      </div>
    </div>
    <div class="box career_result">
      <!-- [pp] 검색결과 선택하기 전일때 : career_result 안쪽은 전체 비워주세요 -->
      <div class="result_area">
        <div class="box_titlewrap">
          <h4>AI 개발자 검색결과 제목 들어오는곳</h4>
        </div>
        <div class="result_wrap">
          <div class="view_area">
            <div class="img_wrap">
              <img src="@/assets/images/careerEmploy/img_ex_result1.png" alt="기업 로고" />
            </div>
          </div>
          <div class="cnt_area">
            <div class="tit">
              AI 개발자는 어떻게 될 수 있나요
              <p class="like">999+</p>
            </div>
            <p class="cnt">
              나를 발전시키고 또 그로 인해 성장하는 인생을 사는 방법이 있습니다. 어떻게? 바로 자기계발! 그렇다면 우리가
              흔히 말하는 ‘자기계발’ 도대체 무엇일까요? 꾸준히 쌓아 `놓는 것이라고 말해 주었습니다. 나를 발전시키고 또
              그로 인해 성장하는 인생을 사는 방법이 있습니다. 어떻게? 바로 자기계발!
            </p>
            <div class="ability_wrap">
              <p class="ability_label">전공능력1</p>
              <p class="ability_label">전공능력2</p>
              <p class="ability_label">핵심역량1</p>
              <p class="ability_label">핵심역량2</p>
            </div>
          </div>
        </div>
      </div>
      <div class="developer_area">
        <div class="profile_wrap">
          <div class="img_wrap">
            <img src="@/assets/images/common/img_ex3.png" alt="예시 이미지" />
          </div>
          <p class="name">나교수</p>
          <p class="part">공과대학ㆍSW학과</p>
        </div>
        <div class="function">
          <p class="check_like">
            <input type="checkbox" id="like1" name="like1" />
            <label for="like1">좋아요</label>
          </p>
          <button type="button" class="btn_icon icon_only comment" @click="popupShow(0)">알림보내기</button>
        </div>
      </div>
    </div>
  </div>

  <PopupView v-model="isPopups[0]" class="medium">
    <template #title>알림보내기</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide(0)">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl">발송</button>
    </template>
    <div class="tbl tbl_row scrollx_tbl_xs">
      <table>
        <caption>
          작성
        </caption>
        <colgroup>
          <col style="width: 18%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">수신자</th>
            <td>
              박형식 외 15명
              <v-menu
                class="tooltip_area"
                transition="slide-y-transition"
                :close-on-content-click="false"
                v-model="tooltip"
              >
                <template v-slot:activator="{ props }">
                  <button type="button" class="btn_tooltip" v-bind="props">버튼</button>
                </template>
                <div class="tooltip_cnt">
                  <div class="hover_title">발송명단</div>
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <br />
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <span class="name">수신인</span>
                  <br />
                  <span class="name">수신인</span>
                </div>
              </v-menu>
            </td>
          </tr>
          <tr>
            <th scope="row">제목</th>
            <td>
              <div class="letter_count count40">
                <input type="search" class="form_style wd_p100" placeholder="메시지 제목을 입력해주세요" />
                <p class="letter_counter"></p>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">내용</th>
            <td>
              <div class="letter_count count1000">
                <textarea class="form_style wd_p100" rows="5" placeholder="메시지 내용을 입력해주세요"></textarea>
                <p class="letter_counter"></p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </PopupView>
</template>

<script lang="ts">
import RecrtSlideBanner from "@/components/careerEmploy/RecrtSlideBanner.vue";
import PopupView from "@/components/common/PopupView.vue";
export default {
  components: {
    RecrtSlideBanner,
    PopupView,
  },
  data: () => ({
    selectOption: {
      value1: "우리학과 분야선택",
      value1_2: "타학과 분야선택",
      value2: "대학",
      value3: "학과",
      field1: [{ label: "분야1" }, { label: "분야2" }, { label: "분야3" }],
      field1_2: [{ label: "분야1" }, { label: "분야2" }, { label: "분야3" }],
      field2: [{ label: "대학1" }, { label: "대학2" }, { label: "대학3" }],
      field3: [{ label: "학과1" }, { label: "학과2" }, { label: "학과3" }],
    },
    isPopups: [false],
    tooltip: false,
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
  },
};
</script>
