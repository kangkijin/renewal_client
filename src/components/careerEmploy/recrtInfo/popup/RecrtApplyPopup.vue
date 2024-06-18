<template>
  <PopupView class="medium">
    <template #title>추천채용 지원하기</template>
    <template #footer>
      <button type="button" class="btn_round btn_white btn_xl" @click="popupHide()">취소</button>
      <button type="button" class="btn_round btn_secondary btn_xl" @click="onClickSaveApplication()">지원</button>
    </template>
    <div class="recrt_popup flex_form full">
      <div>
        <strong>이력서</strong>
        <div class="">
          <div class="attach_filewrap">
            <label class="btn_round btn_white btn_sm">
              파일 추가
              <input type="file" class="hidden" @change="getFileName($event.target.files)" />
            </label>
            <div class="attach_file_list">
              <p class="mg_b5">이력서를 등록해주세요.</p>
              <!-- [pp] 파일등록시 위 문구삭제-->
              <!-- <div class="file_row">
                <div class="file_name">
                  <p>추천채용_이력서.hwp</p>
                  <i>145KB</i>
                  <button type="button" class="btn_icon icon_only delete">삭제</button>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div>
        <strong>지원사유</strong>
        <div class="inner_flex">
          <div class="letter_count count500">
            <textarea
              rows="6"
              class="form_style wd_p100"
              placeholder="지원사유를 간단히 등록해주세요."
              oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
              v-model="contents"
            ></textarea>
            <p class="letter_counter"></p>
          </div>
        </div>
      </div>
    </div>
  </PopupView>
</template>
<script lang="ts">
import PopupView from "@/components/common/PopupView.vue";
import type { AxiosResponse } from "axios";
//import { ref } from "vue";
export default {
  components: {
    PopupView,
  },
  props: {
    recrtId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contents: "",
    };
  },
  methods: {
    popupHide() {
      this.isPopups = false; // isPopups 배열 요소 갱신하는 방법 수정
    },
    async getFileName(files) {
      const file = files[0];
      if (file) {
        const { name, size } = file;
        console.log(`파일 이름: ${name}, 파일 크기: ${size} bytes`);
        const base64Data = await this.base64(file);
        console.log(base64Data); // Base64 데이터 확인
      }
    },
    base64(file: File): Promise<string> {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => {
          if (reader.result) {
            resolve(reader.result.toString());
          }
        };
        reader.readAsDataURL(file);
      });
    },
    uploadImg(files: FileList, type: number) {
      console.log(`${files} 파일을 전송할겁니다. 아마도.${type}으로다가여`);
    },
    onClickSaveApplication() {
      const vm = this;
      const param = {
        recrtMemo: vm.contents, // contents 변수명 수정
        recrtTypeCd: "REC_TYPE01",
        userStsCd: "REC_USER_STS01",
        recrtId: vm.recrtId,
      };
      this.$confirm("지원하시겠습니까?", "알림", (isConfrim: boolean) => {
        if (isConfrim) {
          this.$loading.show();
          const _url = "/api/client/career/user/recrtInfo/saveApplicaionInfo";
          this.$axios
            .post(_url, JSON.stringify(param)) // JSON.stringify 불필요 (axios가 자동으로 JSON으로 변환)
            .then((res: AxiosResponse) => {
              const code = res.data.code;
              if (code === "200") {
                this.$toast("지원완료되었습니다.", "success");
                this.popupHide();
              }
            })
            .catch((e: any) => {
              console.error(e);
              this.$toast("지원에 실패했습니다.<br />새로고침 후 증상이 반복되면 관리자에게 문의해주세요.", "false");
            })
            .finally(() => {
              this.$loading.hide();
            });
        }
      });
    },
  },
};
</script>
