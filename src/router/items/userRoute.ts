/** 학생 페이지 관련 라우터 */
const userRoute = [
  {
    path: "/user",
    redirect: "/user/main",
    component: () => import("@/layout/user/UserTemplate.vue"),
    meta: {
      title: "다인대학교 학생",
    },
    children: [
      /** 메인 페이지 */
      {
        path: "/user/main",
        component: () => import("@/views/user/main/MainIndex.vue"),
        meta: {
          auth: false,
        },
      },
      {
        path: "/user/main/setup",
        component: () => import("@/views/user/main/MainDshbSetup.vue"),
      },

      /** 포트폴리오 */
      {
        path: "/user/portfolio",
        redirect: "/user/portfolio/myHistory",
      },
      {
        path: "/user/portfolio/myHistory",
        component: () => import("@/views/user/portfolio/myHistory/HistoryIndex.vue"),
      },

      /** 비교과 프로그램 */
      /** 비교과 프로그램 신청 */
      {
        path: "/user/program",
        redirect: "/user/program/list",
      },
      {
        path: "/user/program/list",
        component: () => import("@/views/user/program/programReg/ProgramRegIndex.vue"),
      },
      {
        path: "/user/program/detail/:key",
        component: () => import("@/views/user/program/programReg/ProgramDetail.vue"),
      },

      /** 나의 비교과 목록 */
      {
        path: "/user/program/myProgram",
        component: () => import("@/views/user/program/myProgram/MyProgramIndex.vue"),
      },
      /** 나의 비교과 : Class 강의실 */
      {
        path: "/user/program/myProgram/class",
        component: () => import("@/views/user/program/myProgram/MyProgramClass.vue"),
      },

      /** 진로설계,취업창업 */
      {
        path: "/user/careerEmploy",
        redirect: "/user/careerEmploy/fieldCareer",
      },
      /** 진로설계,취업창업 - 분야별진로설계 */
      {
        path: "/user/careerEmploy/fieldCareer",
        component: () => import("@/views/user/careerEmploy/fieldCareer/FieldCareerIndex.vue"),
      },
      /** 진로설계,취업창업 - 추천채용 */
      {
        path: "/user/careerEmploy/rcmdRecrt",
        component: () => import("@/views/user/careerEmploy/rcmdRecrt/RcmdRecrtIndex.vue"),
      },
      /** 진로설계,취업창업 - 추천채용 - 공고상세보기 */
      {
        path: "/user/careerEmploy/rcmdRecrt/detail",
        component: () => import("@/views/user/careerEmploy/rcmdRecrt/RcmdRecrtDetail.vue"),
      },
      /** 진로설계,취업창업 - 교외채용 */
      {
        path: "/user/careerEmploy/outsideRecrt",
        component: () => import("@/views/user/careerEmploy/outsideRecrt/OutsideRecrtIndex.vue"),
      },
      /** 진로설계,취업창업 - 교외채용 - 공고상세보기 */
      {
        path: "/user/careerEmploy/outsideRecrt/detail",
        component: () => import("@/views/user/careerEmploy/outsideRecrt/OutsideRecrtDetail.vue"),
      },
      /** 진로설계,취업창업 - 교내채용 */
      {
        path: "/user/careerEmploy/insideRecrt",
        component: () => import("@/views/user/careerEmploy/insideRecrt/InsideRecrtIndex.vue"),
      },
      /** 진로설계,취업창업 - 교외채용 - 공고상세보기 */
      {
        path: "/user/careerEmploy/insideRecrt/detail",
        component: () => import("@/views/user/careerEmploy/insideRecrt/InsideRecrtDetail.vue"),
      },
      /** 진로설계,취업창업 - 워크넷 */
      {
        path: "/user/careerEmploy/worknet",
        component: () => import("@/views/user/careerEmploy/worknet/WorknetIndex.vue"),
      },
      /** 진로설계,취업창업 - 사람인 */
      {
        path: "/user/careerEmploy/saramin",
        component: () => import("@/views/user/careerEmploy/saramin/SaraminIndex.vue"),
      },
      /** 진로설계,취업창업 - 취업스펙 */
      {
        path: "/user/careerEmploy/employSpec",
        component: () => import("@/views/user/careerEmploy/employSpec/EmploySpecIndex.vue"),
      },

      /** 진단,조사,시험 */
      {
        path: "/user/diag",
        redirect: "/user/diag/coreAbility",
      },
      /** 진단,조사,시험 - 핵심역량진단 */
      {
        path: "/user/diag/coreAbility",
        component: () => import("@/views/user/diag/coreAbility/CoreAbilityIndex.vue"),
      },
      /** 진단,조사,시험 - 전공능력진단 */
      {
        path: "/user/diag/majorAbility",
        component: () => import("@/views/user/diag/majorAbility/MajorAbilityIndex.vue"),
      },
      /** 진단,조사,시험 - 설문조사 */
      {
        path: "/user/diag/surveyRsch",
        component: () => import("@/views/user/diag/surveyRsch/SurveyRschIndex.vue"),
      },
      /** 진단,조사,시험 - 만족도조사 */
      {
        path: "/user/diag/satisRsch",
        component: () => import("@/views/user/diag/satisRsch/SatisRschIndex.vue"),
      },
      /** 진단,조사,시험 - 시험 */
      {
        path: "/user/diag/examination",
        component: () => import("@/views/user/diag/examination/ExamIndex.vue"),
      },

      /** 전문상담 */
      {
        path: "/user/prfsncnsl",
        redirect: "/user/prfsncnsl/cnslReq",
      },
      /** 전문상담 - 상담신청 */
      {
        path: "/user/prfsncnsl/cnslReq",
        component: () => import("@/views/user/prfsncnsl/cnslReq/CnslReqIndex.vue"),
      },
      /** 전문상담 - 나의 상담 내역 */
      {
        path: "/user/prfsncnsl/myCnsl",
        component: () => import("@/views/user/prfsncnsl/myCnsl/MyCnslIndex.vue"),
      },
    ],
  },
];

export default userRoute;
