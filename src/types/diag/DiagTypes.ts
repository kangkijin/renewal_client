type qusType = "SCALE" | "OPEN" | "CHOICE" | "BRANCH";
type ansStatus = /** 미체크 */ null | /** 체크 */ "checked" | /** 정답 */ "correct" | /** 오답 */ "wrong";

export interface UserDiagInfoTypes {
  damId: number;
  damTitle: string;
  datId: number;
  damStrDate: Date;
  damEndDate: Date;
  darResCnt: number;
  datCmpltYn: ynTypes;
  submitDate?: Date | null;
}

export interface CoreDiagQusTypes {
  daqId: string;
  daqTitle: string;
  daqOrder: number;
  qusType: qusType;
  ansSts?: ansStatus;
}

export interface CoreDiagTypes {
  damId: number;
  damTitle: string;
  damStrDate: Date;
  damEndDate: Date;
  dapId: string;
  dapGuide: string;
  daqTotalCnt: number;
  dapAnsCnt: number;
  dapViewCnt: number;
  daqAnsTitle: string;
  daqAnsScore: string;
  daqInfo: CoreDiagQusTypes[];
}

export interface CoreDiagResTypes {
  darId: number;
  damId: number;
  dapId: number;
  daqId: number;
  daqOrder: number;
  darScore: string | null;
}
