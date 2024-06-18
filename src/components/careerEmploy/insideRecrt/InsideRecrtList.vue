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
      <!-- 결과 없을 경우 표출 -->
      <!--  
        <div class="test_before list_wrap">
          <div>
            <p>채용공고가 없습니다.</p>
          </div>
        </div>
        -->
      <div class="recrt_doublewrap">
        <div class="recrt_viewitem">
          <router-link to="/user/careerEmploy/insideRecrt/detail" class="recrt_viewbox">
            <div class="recrt_viewer">
              <img src="@/assets/images/careerEmploy/img_ex_recrt1.png" alt="기업 로고" />
            </div>
            <div class="cnt">
              <div class="title">
                <p class="txt">삼성전자 반도체 엔지니어 추천 채용 선차순</p>
                <div class="title_label">
                  <span class="status_label blue">접수중</span>
                </div>
              </div>
              <div class="labels">
                <span>삼성전자</span>
                <span>2명</span>
                <span>생산직</span>
                <span>서울/경기</span>
              </div>
              <ul class="function">
                <li class="icon calendar">접수일정</li>
                <li>2024.06.05~2024.06.15</li>
              </ul>
            </div>
          </router-link>
          <p class="btn_like">
            <input type="checkbox" id="recrt_like1" name="recrt_like" />
            <label for="recrt_like1">좋아요</label>
          </p>
        </div>
        <div class="recrt_viewitem">
          <router-link to="" class="recrt_viewbox">
            <div class="recrt_viewer">
              <img src="@/assets/images/careerEmploy/img_ex_recrt2.png" alt="기업 로고" />
            </div>
            <div class="cnt">
              <div class="title">
                <p class="txt">삼성전자 반도체 엔지니어 추천 채용 선차순</p>
                <div class="title_label">
                  <span class="status_label blue">접수중</span>
                </div>
              </div>
              <div class="labels">
                <span>대원제약</span>
                <span>2명</span>
                <span>생산직</span>
                <span>서울/경기</span>
              </div>
              <ul class="function">
                <li class="icon calendar">접수일정</li>
                <li>채용시 마감</li>
              </ul>
            </div>
          </router-link>
          <p class="btn_like">
            <input type="checkbox" id="recrt_like2" name="recrt_like" />
            <label for="recrt_like2">좋아요</label>
          </p>
        </div>
        <div class="recrt_viewitem">
          <router-link to="" class="recrt_viewbox">
            <div class="recrt_viewer">
              <img src="@/assets/images/careerEmploy/img_ex_recrt3.png" alt="기업 로고" />
            </div>
            <div class="cnt">
              <div class="title">
                <p class="txt">2024년 신입사원채용</p>
                <div class="title_label">
                  <span class="status_label lightgray">접수완료</span>
                </div>
              </div>
              <div class="labels">
                <span>삼성전자</span>
                <span>2명</span>
                <span>생산직</span>
                <span>서울/경기</span>
              </div>
              <ul class="function">
                <li class="icon calendar">접수일정</li>
                <li>2024.06.05~2024.06.15</li>
              </ul>
            </div>
          </router-link>
          <p class="btn_like">
            <input type="checkbox" id="recrt_like3" name="recrt_like" />
            <label for="recrt_like3">좋아요</label>
          </p>
        </div>
        <div class="recrt_viewitem">
          <router-link to="" class="recrt_viewbox">
            <div class="recrt_viewer">
              <img src="@/assets/images/careerEmploy/img_ex_recrt4.png" alt="기업 로고" />
            </div>
            <div class="cnt">
              <div class="title">
                <p class="txt">포스코 신입채용 (2024 상반기 공채)</p>
                <div class="title_label">
                  <span class="status_label lightgray">접수완료</span>
                </div>
              </div>
              <div class="labels">
                <span>삼성전자</span>
                <span>2명</span>
                <span>생산직</span>
                <span>서울/경기</span>
              </div>
              <ul class="function">
                <li class="icon calendar">접수일정</li>
                <li>2024.06.05~2024.06.15</li>
              </ul>
            </div>
          </router-link>
          <p class="btn_like">
            <input type="checkbox" id="recrt_like4" name="recrt_like" />
            <label for="recrt_like4">좋아요</label>
          </p>
        </div>
        <div class="recrt_viewitem">
          <router-link to="" class="recrt_viewbox">
            <div class="recrt_viewer">
              <img src="@/assets/images/careerEmploy/img_ex_recrt1.png" alt="기업 로고" />
            </div>
            <div class="cnt">
              <div class="title">
                <p class="txt">삼성전자 반도체 엔지니어 추천 채용 선차순</p>
                <div class="title_label">
                  <span class="status_label blue">접수중</span>
                </div>
              </div>
              <div class="labels">
                <span>삼성전자</span>
                <span>2명</span>
                <span>생산직</span>
                <span>서울/경기</span>
              </div>
              <ul class="function">
                <li class="icon calendar">접수일정</li>
                <li>2024.06.05~2024.06.15</li>
              </ul>
            </div>
          </router-link>
          <p class="btn_like">
            <input type="checkbox" id="recrt_like5" name="recrt_like" />
            <label for="recrt_like5">좋아요</label>
          </p>
        </div>
        <div class="recrt_viewitem">
          <router-link to="" class="recrt_viewbox">
            <div class="recrt_viewer">
              <img src="@/assets/images/careerEmploy/img_ex_recrt4.png" alt="기업 로고" />
            </div>
            <div class="cnt">
              <div class="title">
                <p class="txt">삼성전자 반도체 엔지니어 추천 채용 선차순</p>
                <div class="title_label">
                  <span class="status_label blue">접수중</span>
                </div>
              </div>
              <div class="labels">
                <span>대원제약</span>
                <span>2명</span>
                <span>생산직</span>
                <span>서울/경기</span>
              </div>
              <ul class="function">
                <li class="icon calendar">접수일정</li>
                <li>채용시 마감</li>
              </ul>
            </div>
          </router-link>
          <p class="btn_like">
            <input type="checkbox" id="recrt_like6" name="recrt_like" />
            <label for="recrt_like6">좋아요</label>
          </p>
        </div>
        <div class="recrt_viewitem">
          <router-link to="" class="recrt_viewbox">
            <div class="recrt_viewer">
              <img src="@/assets/images/careerEmploy/img_ex_recrt1.png" alt="기업 로고" />
            </div>
            <div class="cnt">
              <div class="title">
                <p class="txt">삼성전자 반도체 엔지니어 추천 채용 선차순</p>
                <div class="title_label">
                  <span class="status_label blue">접수중</span>
                </div>
              </div>
              <div class="labels">
                <span>삼성전자</span>
                <span>2명</span>
                <span>생산직</span>
                <span>서울/경기</span>
              </div>
              <ul class="function">
                <li class="icon calendar">접수일정</li>
                <li>2024.06.05~2024.06.15</li>
              </ul>
            </div>
          </router-link>
          <p class="btn_like">
            <input type="checkbox" id="recrt_like7" name="recrt_like" />
            <label for="recrt_like7">좋아요</label>
          </p>
        </div>
        <div class="recrt_viewitem">
          <router-link to="" class="recrt_viewbox">
            <div class="recrt_viewer">
              <img src="@/assets/images/careerEmploy/img_ex_recrt2.png" alt="기업 로고" />
            </div>
            <div class="cnt">
              <div class="title">
                <p class="txt">삼성전자 반도체 엔지니어 추천 채용 선차순</p>
                <div class="title_label">
                  <span class="status_label blue">접수중</span>
                </div>
              </div>
              <div class="labels">
                <span>대원제약</span>
                <span>2명</span>
                <span>생산직</span>
                <span>서울/경기</span>
              </div>
              <ul class="function">
                <li class="icon calendar">접수일정</li>
                <li>채용시 마감</li>
              </ul>
            </div>
          </router-link>
          <p class="btn_like">
            <input type="checkbox" id="recrt_like8" name="recrt_like" />
            <label for="recrt_like8">좋아요</label>
          </p>
        </div>
        <div class="recrt_viewitem">
          <router-link to="" class="recrt_viewbox">
            <div class="recrt_viewer">
              <img src="@/assets/images/careerEmploy/img_ex_recrt4.png" alt="기업 로고" />
            </div>
            <div class="cnt">
              <div class="title">
                <p class="txt">삼성전자 반도체 엔지니어 추천 채용 선차순</p>
                <div class="title_label">
                  <span class="status_label blue">접수중</span>
                </div>
              </div>
              <div class="labels">
                <span>대원제약</span>
                <span>2명</span>
                <span>생산직</span>
                <span>서울/경기</span>
              </div>
              <ul class="function">
                <li class="icon calendar">접수일정</li>
                <li>채용시 마감</li>
              </ul>
            </div>
          </router-link>
          <p class="btn_like">
            <input type="checkbox" id="recrt_like9" name="recrt_like" />
            <label for="recrt_like9">좋아요</label>
          </p>
        </div>
        <div class="recrt_viewitem">
          <router-link to="" class="recrt_viewbox">
            <div class="recrt_viewer">
              <img src="@/assets/images/careerEmploy/img_ex_recrt1.png" alt="기업 로고" />
            </div>
            <div class="cnt">
              <div class="title">
                <p class="txt">삼성전자 반도체 엔지니어 추천 채용 선차순</p>
                <div class="title_label">
                  <span class="status_label blue">접수중</span>
                </div>
              </div>
              <div class="labels">
                <span>삼성전자</span>
                <span>2명</span>
                <span>생산직</span>
                <span>서울/경기</span>
              </div>
              <ul class="function">
                <li class="icon calendar">접수일정</li>
                <li>2024.06.05~2024.06.15</li>
              </ul>
            </div>
          </router-link>
          <p class="btn_like">
            <input type="checkbox" id="recrt_like10" name="recrt_like" />
            <label for="recrt_like10">좋아요</label>
          </p>
        </div>
      </div>
      <PaginationUi />
    </div>
  </div>
</template>

<script lang="ts">
import PaginationUi from "@/components/common/PaginationUi.vue";

export default {
  components: {
    PaginationUi,
  },
  data: () => ({
    selectOption: {
      value1: "전체",
      options: [{ label: "전체" }, { label: "접수중" }, { label: "접수마감" }],
    },
  }),
};
</script>
