/** 운영자 페이지 관련 라우터 */
const oprtrRoute = [
  {
    path: "/oprt",
    redirect: "/oprt/main",
    component: () => import("@/layout/user/UserTemplate.vue"),
    meta: {
      title: "다인대학교 운영자",
    },
    children: [
      /** 비교과 운영 목록 */
      {
        // path: "/program/programOprt",
        path: "/oprt/main",
        component: () => import("@/views/oprtr/program/ProgramOprt.vue"),
      },
      /** 비교과 운영 > 사용 메뉴 설정 TAB */
      {
        path: "/program/programOprt/menuSetting",
        component: () => import("@/views/oprtr/program/MenuSetting.vue"),
      },
      /** 비교과 운영 > 이수 기준 설정 TAB */
      {
        path: "/program/programOprt/guideSetting",
        component: () => import("@/views/oprtr/program/GuideSetting.vue"),
      },
      /** 비교과 운영 > 운영자 권한 공유 TAB */
      {
        path: "/program/programOprt/oprtrPerm",
        component: () => import("@/views/oprtr/program/OprtrPerm.vue"),
      },
      /** 비교과 운영 > Class 관리 수강자 목록 */
      {
        path: "/program/programOprt/stdList",
        component: () => import("@/views/oprtr/program/StdList.vue"),
      },
      /** 비교과 운영 > Class 입과 신청자 목록 */
      {
        path: "/program/programOprt/applyList",
        component: () => import("@/views/oprtr/program/ApplyList.vue"),
      },
      /** 비교과 운영 : Class 강의실 */
      {
        path: "/program/programOprt/class",
        component: () => import("@/views/oprtr/program/OprtrClsList.vue"),
      },
      /** 비교과 운영 : Class 강의실 > 동영상강의 */
      {
        path: "/program/programOprt/class/detail",
        component: () => import("@/views/oprtr/program/OprtrClsDetail.vue"),
      },
      /** 비교과 운영 : Class 강의실 > 강의등록 */
      {
        path: "/program/programOprt/class/regist",
        component: () => import("@/views/oprtr/program/RegClass.vue"),
      },
      /** 비교과 운영 : Class 시험 */
      {
        path: "/program/programOprt/test",
        component: () => import("@/views/oprtr/program/OprtrTestList.vue"),
      },
      /** 비교과 운영 : Class 시험 > 시험안내 */
      {
        path: "/program/programOprt/test/intro",
        component: () => import("@/views/oprtr/program/OprtrTestIntro.vue"),
      },
      /** 비교과 운영 : Class 시험 > 시험응시 */
      {
        path: "/program/programOprt/test/do",
        component: () => import("@/views/oprtr/program/OprtrTestDo.vue"),
      },
      /** 비교과 운영 : Class 시험 > 시험정답 */
      {
        path: "/program/programOprt/test/marked",
        component: () => import("@/views/oprtr/program/OprtrTestMark.vue"),
      },
      /** 비교과 운영 : Class 시험 > 시험등록*/
      {
        path: "/program/programOprt/test/regist",
        component: () => import("@/views/oprtr/program/RegTest.vue"),
      },
      /** 비교과 운영 : Class 과제 */
      {
        path: "/program/programOprt/report",
        component: () => import("@/views/oprtr/program/OprtrReportList.vue"),
      },
      /** 비교과 운영 : Class 과제 > 과제조회  */
      {
        path: "/program/programOprt/report/intro",
        component: () => import("@/views/oprtr/program/OprtrReportIntro.vue"),
      },
      /** 비교과 운영 : Class 과제 > 과제등록  */
      {
        path: "/program/programOprt/report/regist",
        component: () => import("@/views/oprtr/program/RegReport.vue"),
      },
      /** 비교과 운영 : Class 학습자료 */
      {
        path: "/program/programOprt/refer",
        component: () => import("@/views/oprtr/program/OprtrReferList.vue"),
      },
      /** 비교과 운영 : Class Q&A */
      {
        path: "/program/programOprt/qna",
        component: () => import("@/views/oprtr/program/OprtrQnaList.vue"),
      },
      /** 비교과 운영 : Class 공지사항 */
      {
        path: "/program/programOprt/notice",
        component: () => import("@/views/oprtr/program/OprtrNtcList.vue"),
      },
    ],
  },
];

export default oprtrRoute;
