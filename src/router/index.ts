import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import navigationGuard from "./functions/navigationGuard";

import cmmnRoute from "./items/cmmnRoute"; // 공통 접근 페이지
import userRoute from "./items/userRoute"; // 학생 페이지
import profRoute from "./items/profRoute"; // 교수 페이지
import oprtrRoute from "./items/oprtrRoute"; // 운영자 페이지
import cnslrRoute from "./items/cnslrRoute"; // 상담사 페이지
import stfRoute from "./items/stfRoute"; // 직원 페이지

const routes: RouteRecordRaw[] = [...cmmnRoute, ...userRoute, ...profRoute, ...oprtrRoute, ...cnslrRoute, ...stfRoute];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

//페이지 이동시 class remove
router.beforeEach((to, from, next) => {
  document.body.classList.remove("scrolly");
  next();
});

navigationGuard(router);
export default router;
