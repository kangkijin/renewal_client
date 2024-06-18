<template>
  <div class="main_section section5">
    <div class="grid_content">
      <div class="flex_wrap reponsive_pc">
        <div class="main_rcrt">
          <div class="toggle_wrap responsive_mob">
            <div class="left">
              <h3 class="section_subtit">채용정보</h3>
            </div>
            <div class="right">
              <div class="radio_tab_wrap">
                <p class="radio_tab">
                  <input type="radio" id="recrt1" name="radio_recrt" checked />
                  <label for="recrt1">추천채용</label>
                </p>
                <p class="radio_tab">
                  <input type="radio" id="recrt2" name="radio_recrt" />
                  <label for="recrt2">교외채용</label>
                </p>
                <p class="radio_tab">
                  <input type="radio" id="recrt3" name="radio_recrt" />
                  <label for="recrt3">교내채용</label>
                </p>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="recrt_info">
              <!-- 채용공고 전체 없을때 :
              <div class="no_notice">
                <p>현재 진행중인 채용공고가 없습니다.</p>
              </div>
              -->
              <div class="recrt_link">
                <strong class="number">01</strong>
                <p class="corp">삼성전자</p>
                <p class="title">신입 전산직 채용공고</p>
                <router-link to="" class="direct_link">바로가기</router-link>
              </div>
              <div class="recrt_link">
                <strong class="number">02</strong>
                <p class="corp">엘지전자</p>
                <p class="title">마케팅 채용</p>
                <router-link to="" class="direct_link">바로가기</router-link>
              </div>
              <div class="recrt_link">
                <strong class="number">03</strong>
                <p class="corp">부산대학병원</p>
                <p class="title">신입간호사 채용</p>
                <router-link to="" class="direct_link">바로가기</router-link>
              </div>
              <div class="recrt_link">
                <strong class="number">04</strong>
                <p class="corp">ILE 외국인학교</p>
                <p class="title">통번역직원 채용</p>
                <router-link to="" class="direct_link">바로가기</router-link>
              </div>
              <!-- 채용공고 없을때 : -->
              <!-- <div class="recrt_link">
                <div class="no_recrt">현재 진행중인 채용공고가 없습니다.</div>
              </div> -->
            </div>
          </div>
        </div>
        <div class="main_cnsl">
          <div class="section_tit_wrap">
            <h3 class="section_subtit">상담신청</h3>
          </div>
          <div class="box">
            <div class="cnslapply_list">
              <router-link to="" class="guideprof">지도교수상담</router-link>
              <router-link to="" class="prof">교수상담</router-link>
              <router-link to="" class="psycho">심리상담</router-link>
              <router-link to="" class="employ">취업상담</router-link>
              <router-link to="" class="learn">학습상담</router-link>
              <router-link to="" class="write">글쓰기상담</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
