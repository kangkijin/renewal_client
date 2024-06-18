<template>
  <div class="main_section section4">
    <div class="grid_content">
      <div class="toggle_wrap">
        <div class="left tablet_between">
          <div class="radio_tab_wrap">
            <p class="radio_tab">
              <input type="radio" id="radio_counsel1" name="radio_counsel" checked />
              <label for="radio_counsel1">지도학생</label>
            </p>
            <p class="radio_tab">
              <input type="radio" id="radio_counsel2" name="radio_counsel" />
              <label for="radio_counsel2">기타학생</label>
            </p>
          </div>
          <router-link to="" class="direct_link">상담 바로가기</router-link>
        </div>
        <div class="right">
          <div class="select_row sm">
            <vue-select :options="selectedOption.options" v-model="selectedOption.value" class="select_box" />
          </div>
        </div>
      </div>
      <div class="box">
        <div class="counsel_statis">
          <div>
            <div class="box_titlewrap">
              <h5>
                상담률
                <span class="explain">(학생수 기준)</span>
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
                    <div class="hover_title">호버 제목</div>
                    김대학 김대학 김대학 김대학 김대학 김대학 김대학<br />
                    김대학 김대학 김대학 김대학 김대학 김대학 김대학<br />
                    김대학 김대학 김대학 김대학 김대학 김대학 김대학
                  </div>
                </v-menu>
              </h5>
            </div>
            <ul>
              <li>
                <div>
                  상담률
                  <p>72%</p>
                </div>
              </li>
              <li class="number">
                <div>
                  완료학생수
                  <p>36</p>
                </div>
                <div>
                  지도학생수
                  <p class="font_gray">50</p>
                </div>
              </li>
              <li>
                <div>
                  학과
                  <p>30.1%</p>
                </div>
                <div>
                  학교
                  <p>59.8%</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div class="box_titlewrap">
              <h5>
                상담률
                <span class="explain">(건수 기준)</span>
                <v-menu
                  class="tooltip_area"
                  transition="slide-y-transition"
                  :close-on-content-click="false"
                  v-model="tooltip2"
                >
                  <template v-slot:activator="{ props }">
                    <button type="button" class="btn_tooltip" v-bind="props">버튼</button>
                  </template>
                  <div class="tooltip_cnt">
                    <div class="hover_title">호버 제목</div>
                    김대학 김대학 김대학 김대학 김대학 김대학 김대학<br />
                    김대학 김대학 김대학 김대학 김대학 김대학 김대학<br />
                    김대학 김대학 김대학 김대학 김대학 김대학 김대학
                  </div>
                </v-menu>
              </h5>
            </div>
            <ul>
              <li>
                <div>
                  상담률
                  <p>72%</p>
                </div>
              </li>
              <li class="number">
                <div>
                  완료학생수
                  <p>36</p>
                </div>
                <div>
                  지도학생수
                  <p class="font_gray">50</p>
                </div>
              </li>
              <li>
                <div>
                  학과
                  <p>30.1%</p>
                </div>
                <div>
                  학교
                  <p>59.8%</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data: () => ({
    selectedOption: {
      value: "2024",
      options: [{ label: "2024" }, { label: "2023" }],
    },
    //tooltip
    tooltip: false,
    tooltip2: false,
  }),
};
</script>
