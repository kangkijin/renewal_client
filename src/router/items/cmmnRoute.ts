const cmmnRoute = [
  {
    path: "/",
    redirect: "/intro",
    meta: {
      auth: false,
    },
  },
  {
    path: "/intro",
    component: () => import("@/views/common/IntroIndex.vue"),
    meta: {
      title: "다인대학교",
      auth: false,
    },
  },
  /** 계원예대 로그인 */
  {
    path: "/kaywonLogin",
    component: () => import("@/views/login/kaywonLogin.vue"),
    meta: {
      title: "계원예술대학교",
      auth: false,
    },
  },
  /** 초당대 로그인 */
  {
    path: "/chodangLogin",
    component: () => import("@/views/login/chodangLogin.vue"),
    meta: {
      title: "초당대학교",
      auth: false,
    },
  },
  /** 다인대학교 인트로 */
  {
    path: "/chodangIntro",
    component: () => import("@/views/common/ChodangIntro.vue"),
    meta: {
      title: "다인대학교",
      auth: false,
    },
  },
  /** 공통 라우터 */
  {
    path: "/:catchAll(.*)", // 모든 경로에 일치
    name: "NotFound",
    component: () => import("@/views/common/ErrorPage.vue"),
    meta: {
      title: "다인대학교",
      auth: false,
    },
  },
];

export default cmmnRoute;
