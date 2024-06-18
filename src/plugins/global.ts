import type { App } from "vue";
import Swal from "sweetalert2";
import type { SweetAlertIcon } from "sweetalert2";
import StringUtil from "./stringUtil";
import ObjectUtil from "./objectUtil";
export default {
  install: (app: App) => {
    /**
     * 전체 페이지 로딩 $loading
     * @method show()
     * 전체 페이지 로딩을 보여준다.
     * @method hide()
     * 전체 페이지 로딩을 숨긴다.
     */
    app.config.globalProperties.$loading = {
      show() {
        const element = document.getElementById("app");
        element?.classList.toggle("page_loading", true);
      },
      hide() {
        const element = document.getElementById("app");
        element?.classList.toggle("page_loading", false);
      },
    };
    /**
     * 시스템 alert 대체용 $alert
     * @param text
     * 알림창 내부에 들어갈 내용
     * @param title
     * 알림창 header 쪽에 들어갈 내용, 기본 값 : '알림'
     */
    app.config.globalProperties.$alert = (_text: string, _title: string, callback?: () => void) => {
      Swal.fire({
        title: (_title ?? "") === "" ? "알림" : _title,
        html: _text,
        confirmButtonColor: "#5D87FF",
        reverseButtons: true,
        confirmButtonText: "확인",
      }).then(() => {
        if (callback && typeof callback === "function") {
          callback();
        }
      });
      return "hi";
    };

    /**
     * 시스템 confirm 대체용 $confirm
     * @param text
     * 알림창 내부에 들어갈 내용
     * @param title
     * 알림창 header 쪽에 들어갈 내용, 기본 값 : '알림'
     */
    app.config.globalProperties.$confirm = (_text: string, _title: string, callback: Function) => {
      Swal.fire({
        title: (_title ?? "") === "" ? "알림" : _title,
        html: _text,
        confirmButtonColor: "#5D87FF",
        showCancelButton: true,
        cancelButtonColor: "#fff",
        reverseButtons: true,
        confirmButtonText: "확인",
        cancelButtonText: "취소",
      }).then((res) => {
        if (callback && typeof callback === "function") {
          callback(res.isConfirmed);
        }
      });
    };

    /**
     * Toast alert
     * @param _title
     * @param _icon
     */
    app.config.globalProperties.$toast = (_title: string, _icon: SweetAlertIcon) => {
      const swalToast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      swalToast.fire({
        icon: _icon,
        title: _title,
      });
    };

    /** String Utility */
    app.config.globalProperties.$StringUtil = StringUtil;
    /** Object Utility */
    app.config.globalProperties.$ObjectUtil = ObjectUtil;

    app.config.globalProperties.$format = {
      numberWithComma(value: number) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      },
    };
  },
};
