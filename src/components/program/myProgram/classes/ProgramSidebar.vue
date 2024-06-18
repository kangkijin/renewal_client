<template>
  <div class="mystatus_wrap">
    <div class="mystatus_box">
      <h4>현재 과정 <br />운영 중입니다.</h4>
      <p class="date">운영기간 : 2024.01.01~2024.08.28</p>
      <div class="mystatus_graph">
        <div class="graph_info">
          <h5>학습현황 : 나</h5>
          <ul>
            <li>
              <div class="title">
                <strong>강의</strong>
                <p>수료기준 80%</p>
              </div>
              <div class="progress">
                <span class="lesson wd_p50"><i>5/12(41.7%)</i></span>
              </div>
            </li>
            <li>
              <div class="title">
                <strong>시험</strong>
                <p>수료기준 80점</p>
              </div>
              <div class="progress">
                <span class="test wd_p40"><i>2/4(28.0점)</i></span>
              </div>
            </li>
            <li>
              <div class="title">
                <strong>과제</strong>
                <p>수료기준 70점</p>
              </div>
              <div class="progress">
                <span class="report wd_p30"><i>1/3(30.0점)</i></span>
              </div>
            </li>
          </ul>
        </div>
        <div class="graph_info">
          <h5>학습현황 : 참여자 평균</h5>
          <ul>
            <li>
              <div class="title">
                <strong>강의</strong>
                <p>수료기준 80%</p>
              </div>
              <div class="progress">
                <span class="lesson wd_p50"><i>5/12(41.7%)</i></span>
              </div>
            </li>
            <li>
              <div class="title">
                <strong>시험</strong>
                <p>수료기준 80점</p>
              </div>
              <div class="progress">
                <span class="test wd_p40"><i>2/4(28.0점)</i></span>
              </div>
            </li>
            <li>
              <div class="title">
                <strong>과제</strong>
                <p>수료기준 70점</p>
              </div>
              <div class="progress">
                <span class="report wd_p30"><i>1/3(30.0점)</i></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="btn_area">
      <router-link to="/user/program/myProgram" class="btn_round btn_secondary btn_icon btn_xl myprogram">
        나의 비교과 목록
      </router-link>
    </div>
  </div>
</template>
