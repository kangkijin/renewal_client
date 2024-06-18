const stfRoute = [
  /** 직원 페이지 관련 라우터 */
  {
    path: "/stf",
    redirect: "/stf/main",
    component: () => import("@/layout/stf/StfTemplate.vue"),
    meta: {
      title: "다인대학교 직원",
    },
    children: [
      {
        path: "/stf/main",
        component: () => import("@/views/stf/main/MainIndex.vue"),
        meta: {
          auth: false,
        },
      },
      {
        path: "/stf/main/setup",
        component: () => import("@/views/stf/main/MainDshbSetup.vue"),
      },
    ],
  },
];

export default stfRoute;
