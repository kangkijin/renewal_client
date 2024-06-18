const cnslrRoute = [
  /** 상담사 페이지 관련 라우터 */
  {
    path: "/cnslr",
    redirect: "/cnslr/main",
    component: () => import("@/layout/cnslr/CnslrTemplate.vue"),
    meta: {
      title: "다인대학교 상담사",
    },
    children: [
      {
        path: "/cnslr/main",
        component: () => import("@/views/cnslr/main/MainIndex.vue"),
        meta: {
          auth: false,
        },
      },
      {
        path: "/cnslr/main/setup",
        component: () => import("@/views/cnslr/main/MainDshbSetup.vue"),
      },
    ],
  },
];

export default cnslrRoute;
