type 비교과_모집_구분 = "ing" | "plan";
type 비교과_운영_상태키 =
  | "T_05_01"
  | "T_05_02"
  | "T_05_03"
  | "T_05_04"
  | "T_05_05"
  | "T_05_06"
  | "T_05_07"
  | "T_05_08"
  | "T_05_09";

type 비교과_운영_상태명 =
  | "운영중"
  | "승인"
  | "승인대기"
  | "운영상태전체"
  | "미승인"
  | "본인취소"
  | "관리자취소"
  | "취소"
  | "운영완료";

interface ProgramListTypes {
  비교과_키: string;
  모집_구분: 비교과_모집_구분;
  비교과_제목: string;
  비교과_역량: string;
  비교과_역량_키: string;
  모집_시작_기간: Date;
  모집_종료_기간: Date;
  운영_시작_기간: Date;
  운영_종료_기간: Date;
  비교과_대상: string;
  총_찜_수: number;
  내_찜_여부: ynTypes;
  비교과_마일리지: number;
  신청자_수: number;
  모집자_수: number;
  대기신청_수: number;
  대기모집_수: number;
  썸네일_경로: string;
  팀_여부: ynTypes;
}

interface MyProgramTypes {
  비교과_신청_키: string;
  비교과_제목: string;
  비교과_역량: string;
  비교과_역량_키: string;
  총_찜_수: number;
  내_찜_여부: ynTypes;
  비교과_마일리지: number;
  운영_시작_기간: Date;
  운영_종료_기간: Date;
  사전조사_시작_기간?: Date;
  사전조사_종료_기간?: Date;
  사후조사_시작_기간?: Date;
  사후조사_종료_기간?: Date;
  비교과_운영_상태키: 비교과_운영_상태키;
  비교과_운영_상태명: 비교과_운영_상태명;
  썸네일_경로: string;
  팀_여부: ynTypes;
}

export type { ProgramListTypes, MyProgramTypes };
