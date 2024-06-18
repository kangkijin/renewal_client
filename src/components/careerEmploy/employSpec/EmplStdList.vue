<template>
  <div class="empl_std_wrapper">
    <div class="search_box career">
      <div class="search_section">
        <div class="search_toggle lg center flip">
          <div class="left">
            <p class="total_count"><b>취업생 목록</b><strong>1,200</strong>명</p>
          </div>
          <div class="right">
            <div class="select_row lg">
              <vue-select
                class="select_box"
                :options="selectOption.options1"
                v-model="selectOption.value5"
              ></vue-select>
            </div>
            <div class="select_row lg">
              <vue-select
                class="select_box"
                :options="selectOption.options2"
                v-model="selectOption.value6"
              ></vue-select>
            </div>
            <div class="select_row lg">
              <vue-select
                class="select_box"
                :options="selectOption.options3"
                v-model="selectOption.value7"
              ></vue-select>
            </div>
            <div class="search_row">
              <input type="search" class="form_style wd_p100" placeholder="기업명을 입력해주세요" />
              <button type="button" class="btn_search btn_icon icon_only">검색</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="empl_std_list box">
      <div class="tbl tbl_scroll tbl_col scrollx_tbl_xl">
        <table>
          <caption>
            취업생 목록
          </caption>
          <colgroup>
            <col style="width: 60px" />
            <col style="width: 80px" />
            <col style="width: 80px" />
            <col style="width: 108px" />
            <col style="width: 108px" />
            <col style="width: 76px" />
            <col style="width: 125px" />
            <col style="width: 60px" />
            <col style="width: 110px" />
            <col style="width: 110px" />
            <col style="width: 60px" />
            <col style="width: 60px" />
            <col style="width: 60px" />
            <col style="width: 60px" />
            <col style="width: 60px" />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" rowspan="2">우수수기</th>
              <th scope="col" rowspan="2">학생명</th>
              <th scope="col" rowspan="2">취업수기</th>
              <th scope="col" rowspan="2">대학</th>
              <th scope="col" rowspan="2">학과</th>
              <th scope="col" rowspan="2">졸업<br />(예정)년도</th>
              <th scope="col" rowspan="2" class="border_right">취업기업</th>
              <th scope="col" colspan="8" class="sub_tit">스펙항목</th>
            </tr>
            <tr>
              <th scope="col" class="sub">학점<br />(점)</th>
              <th scope="col" class="sub">토익·토플·텝스<br />(점)</th>
              <th scope="col" class="sub">OPIc·토익스피킹<br />(등급)</th>
              <th scope="col" class="sub">자격증<br />(개)</th>
              <th scope="col" class="sub">수상횟수<br />(개)</th>
              <th scope="col" class="sub">인턴경험<br />(개월)</th>
              <th scope="col" class="sub">해외경험<br />(개월)</th>
              <th scope="col" class="sub">봉사활동<br />(시간)</th>
            </tr>
          </thead>
        </table>
        <div class="tbl_scroll_body">
          <table>
            <caption>
              취업생 목록
            </caption>
            <colgroup>
              <col style="width: 60px" />
              <col style="width: 80px" />
              <col style="width: 80px" />
              <col style="width: 108px" />
              <col style="width: 108px" />
              <col style="width: 76px" />
              <col style="width: 125px" />
              <col style="width: 60px" />
              <col style="width: 110px" />
              <col style="width: 110px" />
              <col style="width: 60px" />
              <col style="width: 60px" />
              <col style="width: 60px" />
              <col style="width: 60px" />
              <col style="width: 60px" />
            </colgroup>
            <tbody>
              <!-- <tr>
                    <th scope="row" colspan="15">내용이 없습니다</th>
                  </tr> -->
              <tr>
                <th scope="row"><div class="good_std"></div></th>
                <td><p class="name ta_l">나**</p></td>
                <td>
                  <button type="button" class="btn_round btn_sm btn_white" @click="popupShow(1)">결과보기</button>
                </td>
                <td class="ta_l">경상대학</td>
                <td class="ta_l">****</td>
                <td>2024</td>
                <td class="ta_l">삼성전자</td>
                <td>4.23</td>
                <td>652</td>
                <td>IH</td>
                <td>1</td>
                <td>1</td>
                <td>12</td>
                <td>12</td>
                <td>90</td>
              </tr>
              <tr>
                <th scope="row"><div class="good_std"></div></th>
                <td><p class="name ta_l">나**</p></td>
                <td><button type="button" class="btn_round btn_sm btn_white">결과보기</button></td>
                <td class="ta_l">경상대학</td>
                <td class="ta_l">****</td>
                <td>2024</td>
                <td class="ta_l">삼성전자</td>
                <td>4.23</td>
                <td>652</td>
                <td>IH</td>
                <td>1</td>
                <td>1</td>
                <td>12</td>
                <td>12</td>
                <td>90</td>
              </tr>
              <tr>
                <th scope="row"><div class="good_std"></div></th>
                <td><p class="name ta_l">나**</p></td>
                <td><button type="button" class="btn_round btn_sm btn_white">결과보기</button></td>
                <td class="ta_l">경상대학</td>
                <td class="ta_l">****</td>
                <td>2024</td>
                <td class="ta_l">삼성전자</td>
                <td>4.23</td>
                <td>652</td>
                <td>IH</td>
                <td>1</td>
                <td>1</td>
                <td>12</td>
                <td>12</td>
                <td>90</td>
              </tr>
              <tr>
                <th scope="row"><div class="good_std"></div></th>
                <td><p class="name ta_l">나**</p></td>
                <td><button type="button" class="btn_round btn_sm btn_white">결과보기</button></td>
                <td class="ta_l">경상대학</td>
                <td class="ta_l">****</td>
                <td>2024</td>
                <td class="ta_l">삼성전자</td>
                <td>4.23</td>
                <td>652</td>
                <td>IH</td>
                <td>1</td>
                <td>1</td>
                <td>12</td>
                <td>12</td>
                <td>90</td>
              </tr>
              <tr>
                <th scope="row"><div class="good_std"></div></th>
                <td><p class="name ta_l">나**</p></td>
                <td><button type="button" class="btn_round btn_sm btn_white">결과보기</button></td>
                <td class="ta_l">경상대학</td>
                <td class="ta_l">****</td>
                <td>2024</td>
                <td class="ta_l">삼성전자</td>
                <td>4.23</td>
                <td>652</td>
                <td>IH</td>
                <td>1</td>
                <td>1</td>
                <td>12</td>
                <td>12</td>
                <td>90</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td><p class="name ta_l">나**</p></td>
                <td><button type="button" class="btn_round btn_sm btn_white">결과보기</button></td>
                <td class="ta_l">경상대학</td>
                <td class="ta_l">****</td>
                <td>2024</td>
                <td class="ta_l">삼성전자</td>
                <td>4.23</td>
                <td>652</td>
                <td>IH</td>
                <td>1</td>
                <td>1</td>
                <td>12</td>
                <td>12</td>
                <td>90</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td><p class="name ta_l">나**</p></td>
                <td><button type="button" class="btn_round btn_sm btn_white">결과보기</button></td>
                <td class="ta_l">경상대학</td>
                <td class="ta_l">****</td>
                <td>2024</td>
                <td class="ta_l">삼성전자</td>
                <td>4.23</td>
                <td>652</td>
                <td>IH</td>
                <td>1</td>
                <td>1</td>
                <td>12</td>
                <td>12</td>
                <td>90</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td><p class="name ta_l">나**</p></td>
                <td><button type="button" class="btn_round btn_sm btn_white">결과보기</button></td>
                <td class="ta_l">경상대학</td>
                <td class="ta_l">****</td>
                <td>2024</td>
                <td class="ta_l">삼성전자</td>
                <td>4.23</td>
                <td>652</td>
                <td>IH</td>
                <td>1</td>
                <td>1</td>
                <td>12</td>
                <td>12</td>
                <td>90</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td><p class="name ta_l">나**</p></td>
                <td><button type="button" class="btn_round btn_sm btn_white">결과보기</button></td>
                <td class="ta_l">경상대학</td>
                <td class="ta_l">****</td>
                <td>2024</td>
                <td class="ta_l">삼성전자</td>
                <td>4.23</td>
                <td>652</td>
                <td>IH</td>
                <td>1</td>
                <td>1</td>
                <td>12</td>
                <td>12</td>
                <td>90</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td><p class="name ta_l">나**</p></td>
                <td><button type="button" class="btn_round btn_sm btn_white">결과보기</button></td>
                <td class="ta_l">경상대학</td>
                <td class="ta_l">****</td>
                <td>2024</td>
                <td class="ta_l">삼성전자</td>
                <td>4.23</td>
                <td>652</td>
                <td>IH</td>
                <td>1</td>
                <td>1</td>
                <td>12</td>
                <td>12</td>
                <td>90</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <PaginationUi />
  </div>
  <PopupView v-model="isPopups[1]" class="medium">
    <template #title>취업수기</template>
    <template #footer>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="popupHide(1)">확인</button>
    </template>
    <div class="spec_stnrd">
      <strong class="tit">경상대학 나**님의 취업 수기</strong>
      <p>
        나는 어디어디에 취업했습니다. 어디어디는 내가 가고싶은 여행지를 추천해주는 인터넷 추천서비스회사입니다. 저는
        어디어디를 가기위해, 대한민국 주요 관광지를, 구석구석 도보여행하고, 모든 정보를 블로그로 기록해두었습니다.
      </p>
    </div>
  </PopupView>
</template>

<script lang="ts">
import PopupView from "@/components/common/PopupView.vue";
import PaginationUi from "@/components/common/PaginationUi.vue";

export default {
  components: {
    PopupView,
    PaginationUi,
  },
  data: () => ({
    isPopups: [false],
    radio: "",
    selectOption: {
      value5: "대학전체",
      value6: "학과전체",
      value7: "졸업(예정)년도 전체",
      options1: [{ label: "선택" }, { label: "선택" }],
      options2: [{ label: "선택" }, { label: "선택" }],
      options3: [{ label: "선택" }, { label: "선택" }],
    },
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
