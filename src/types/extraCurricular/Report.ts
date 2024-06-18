/* 과제 인터페이스 */
interface Report {
  ecrId?: number;
  eliId?: number;
  ecmId?: number;
  ecsId?: number;
  ecrHmwrkCnt: number | undefined;
  ecrTitle: string | undefined;
  ecrPer: number | undefined;
  ecrSubmitStrDate: Date | string | undefined;
  ecrSubmitStrHour: number | undefined;
  ecrSubmitStrMinute: number | undefined;
  ecrSubmitEndDate: Date | string | undefined;
  ecrSubmitEndHour: number | undefined;
  ecrSubmitEndMinute: number | undefined;
  ecrDesc: string | undefined;
  ecrTeamReportYn: string | undefined;
  ecrScore?: number;
  ecrPrivateDiv?: string;
  regId: string | undefined;
}

export default Report;
