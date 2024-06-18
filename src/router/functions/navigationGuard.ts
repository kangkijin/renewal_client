import type { Router } from "vue-router";

const navigationGuard = (router: Router) => {
  router.beforeEach((to) => {
    const metaTitle = to.meta.title as string;
    document.title = metaTitle || "다인대학교";
  });

  router.afterEach(() => {});
};

export default navigationGuard;
