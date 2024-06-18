type qusTypes = "SCALE" | "CHOICE" | "OPEN";
type ansStatus = /** 미체크 */ null | /** 체크 */ "checked" | /** 정답 */ "correct" | /** 오답 */ "wrong";

export interface AnsOuput {
  /** 문항 답변 명 */
  title: string;
  /** 문항 답변 별 점수 */
  score?: number;
  /** 문항 답변 이미지 */
  img?: string;
}

export interface QusOutput {
  /** 문항 명 */
  title: string;
  /** 문항 번호 */
  order: number;
  /** 문항 힌트 */
  hint?: string;
  /** 문항 별 점수 */
  score?: number;
  /** 문항 타입 */
  type?: qusTypes;
  /** 문항 이미지 */
  img?: string;
  // /** 문항 답변 상태 */
  ansSts?: ansStatus;
  // /** 문항 답변 값 */
  // ansVal?: string | null;
  /** 문항 답변정보 */
  ansInfo: AnsOuput[];
}
