import App from "./App.vue";
import { createApp } from "vue";

import dainAxios from "@/plugins/axios";
import pinia from "@/store";
import router from "./router";
import global from "@/plugins/global";
import vuetify from "@/plugins/vuetify";

import { createI18n } from "vue-i18n";
import messages from "@/i18n/messages";

const i18n = createI18n({
  locale: "ko", // default locale
  messages: messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true,
});

import VueSelect from "@/components/common/vueSelect/VueSelect.vue";

/** css파일 */
import "@/assets/css/default.css";
/** sweetalert scss파일 */
import "@/assets/scss/_Sweetalert.scss";

// eslint-disable-next-line prettier/prettier
createApp(App).use(dainAxios).use(pinia).use(router).use(global).use(i18n).use(vuetify).component("VueSelect", VueSelect).mount("#app");
