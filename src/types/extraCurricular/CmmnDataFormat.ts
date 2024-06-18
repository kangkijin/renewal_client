import type Report from "@/types/extraCurricular/Report";

interface cmmnDataFormat {
  keyId: number;
  typeCd: string;
  typeCdNm: string;
  title: string;
  content: string;
  fixedYn: string;
  privateYn: string;
  privatePw: string;
  referKeyId: string;
  dateInfo: string;
  applyKeyId: string;
  applyTitle: string;
  applyContent: string;
}

export default cmmnDataFormat;
