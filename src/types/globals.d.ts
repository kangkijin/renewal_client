import { SweetAlertIcon } from "sweetalert2";
import axios from "axios";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $axios: typeof axios;

    /**
     * 전체 페이지 로딩 $loading
     * @comment method show
     * 전체 페이지 로딩을 보여준다.
     * @comment method hide
     * 전체 페이지 로딩을 숨긴다.
     */
    $loading: {
      show(): void;
      hide(): void;
    };

    /**
     * 시스템 alert 대체용 $alert
     * @param text
     * 알림창 내부에 들어갈 내용
     * @param title
     * 알림창 header 쪽에 들어갈 내용, 기본 값 : '알림'
     */
    $alert: (_text: string, _title: string, callback?: () => void) => void;

    /**
     * 시스템 confirm 대체용 $confirm
     * @param text
     * 알림창 내부에 들어갈 내용
     * @param title
     * 알림창 header 쪽에 들어갈 내용, 기본 값 : '알림'
     */
    $confirm: (_text: string, _title: string, callback: (confirmed: boolean) => void) => void;

    /**
     * Toast alert
     * @param _title
     * @param _icon
     */
    $toast: (_title: string, _icon: SweetAlertIcon) => void;

    $StringUtil: {
      isEmpty(item?: string): boolean;
      r2StringToJsonArr: (r2String: string[][], mapper: string[]) => Array<Record<string, string>>;
    };
    $ObjectUtil: {
      isEmpty(item?: Object): boolean;
    };

    /**
     * 포맷 관련 메서드
     * @comment $format
     * 숫자 천단위 구분기호
     */
    $format: {
      numberWithComma(value: number): string;
    };
  }
}

declare global {
  type ynTypes = "Y" | "N" | null;
}