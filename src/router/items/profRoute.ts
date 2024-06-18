const profRoute = [
  /** 교수 페이지 관련 라우터 */
  {
    path: "/prof",
    redirect: "/prof/main",
    component: () => import("@/layout/prof/ProfTemplate.vue"),
    meta: {
      title: "다인대학교 교수",
    },
    children: [
      /** 메인 페이지 */
      {
        path: "/prof/main",
        component: () => import("@/views/prof/main/MainIndex.vue"),
        meta: {
          auth: false,
        },
      },
      {
        path: "/prof/main/setup",
        component: () => import("@/views/prof/main/MainDshbSetup.vue"),
      },

      /** 비교과 프로그램 */
      /** 비교과 프로그램 운영 */
      {
        path: "/prof/program",
        redirect: "/prof/program/operation",
      },
      {
        path: "/prof/program/operation",
        component: () => import("@/views/prof/program/programOprt/ProgramOprtIndex.vue"),
      },
      {
        path: "/prof/program/operation/class",
        component: () => import("@/views/prof/program/programOprt/ProgramOprtClass.vue"),
      },

      /** 진단,조사,시험 */
      {
        path: "/prof/diag",
        redirect: "/prof/diag/profAbility",
      },
      /** 진단,조사,시험 - 교수역량진단 */
      {
        path: "/prof/diag/profAbility",
        component: () => import("@/views/prof/diag/profAbility/ProfAbilityIndex.vue"),
      },
      /** 진단,조사,시험 - 설문조사 */
      {
        path: "/prof/diag/surveyRsch",
        component: () => import("@/views/prof/diag/surveyRsch/SurveyRschIndex.vue"),
      },
      /** 진단,조사,시험 - 만족도조사 */
      {
        path: "/prof/diag/satisRsch",
        component: () => import("@/views/prof/diag/satisRsch/SatisRschIndex.vue"),
      },
      /** 진단,조사,시험 - 시험 */
      {
        path: "/prof/diag/examination",
        component: () => import("@/views/prof/diag/examination/ExamIndex.vue"),
      },
    ],
  },
];

export default profRoute;
