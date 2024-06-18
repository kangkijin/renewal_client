interface CodeMng {
  cdId: string;
  upCdId: string;
  cdCategory: string;
  cdNm: string;
  orderNo: number;
  regId: string;
  regDate: string;
  userdef1: string;
  userdef2: string;
  userdef3: string;
}

interface CnslMng {
  cnslMngId: number;
  userId: string;
  userNm: string;
  cnslMethod: string;
  cnslDiv: string;
  cnslDivNm: string;
  cnslType: string;
  cnslTypeNm: string;
  cnslrId: string;
  cnslrNm: string;
  cnslDate: string;
  cnslStrTime: number;
  cnslEndTime: number;
  cnslReqTitle: string;
  cnslReqKeyword: string;
  cnslReqCont: string;
  cnslRsltTitle: string;
  cnslRsltKeyword: string;
  cnslRsltCont: string;
  cnslRsltProc: string;
  cnslSts: string;
  cnslStsNm: string;
  regId: string;
  regDate: string;
  updId: string;
  updDate: string;
  delYn: string;
  selDate: string;
  selSunDate: string;
  weeks: number;
  hakguaCdNm: string;
  gradeCdNm: string;
  cnslReqKeywordArr: string[];
  cnslRsltKeywordArr: string[];
  groupKeyId: number;
  satisKeyId: number;
  referKeyId: number;
  groupCnt: number;
  groupUserList: CnslMng[];
  cnslRnd: number;
}

interface CnslSchdl {
  cnslrSchdlId: number;
  cnslrId: string;
  cnslDate: string;
  cnslTime: number;
  cnslPsblYn: string;
  regId: string;
  regDate: string;
  updId: string;
  updDate: string;
}

interface Options {
  label: string;
  value: string;
}

interface Cnslr {
  cnslCnslrId: number;
  cnslrDiv: string;
  cnslrId: string;
  cnslrNm: string;
  cnslrDetNm: string;
  cnslrPh: string;
  cnslrEmail: string;
  cnslrActYn: string;
  cnslrSgnfc: string;
  cnslCnslrIds: string;
  cnslrStsDiv: string;
}

interface User {
  userId: string;
  korNm: string;
  engNm: string;
  colgCd: string;
  colgCdNm: string;
  hakguaCd: string;
  hakguaCdNm: string;
  majorCd: string;
  majorCdNm: string;
  gradeCd: string;
  gradeCdNm: string;
  shregSt: string;
  shregStNm: string;
  sexCd: string;
  sexCdNm: string;
  birthDt: string;
  email: string;
  ph: string;
  guideProfNm: string;
  guideProfNo: string;
  entrDt: string;
  grdtDt: string;
  telNo: string;
  adress: string;
  grdtYn: string;
  grdtYear: string;
  credit: string;
  frgnYn: string;
  handicapYn: string;
  addYn: string;
}

class CnslMngInfo {
  cnslMngId: number;
  userId: string;
  userNm: string;
  cnslMethod: string;
  cnslDiv: string;
  cnslDivNm: string;
  cnslType: string;
  cnslTypeNm: string;
  cnslrId: string;
  cnslrNm: string;
  cnslDate: string;
  cnslStrTime: number;
  cnslEndTime: number;
  cnslReqTitle: string;
  cnslReqKeyword: string;
  cnslReqCont: string;
  cnslRsltTitle: string;
  cnslRsltKeyword: string;
  cnslRsltCont: string;
  cnslRsltProc: string;
  cnslSts: string;
  cnslStsNm: string;
  regId: string;
  regDate: string;
  updId: string;
  updDate: string;
  delYn: string;
  selDate: string;
  selSunDate: string;
  weeks: number;
  hakguaCdNm: string;
  gradeCdNm: string;
  cnslReqKeywordArr: string[];
  cnslRsltKeywordArr: string[];
  groupKeyId: number;
  satisKeyId: number;
  referKeyId: number;
  groupCnt: number;
  groupUserList: CnslMng[];
  cnslRnd: number;
  constructor() {
    this.cnslMngId = -1;
    this.userId = "";
    this.userNm = "";
    this.cnslMethod = "";
    this.cnslDiv = "";
    this.cnslDivNm = "";
    this.cnslType = "";
    this.cnslTypeNm = "";
    this.cnslrId = "";
    this.cnslrNm = "";
    this.cnslDate = "";
    this.cnslStrTime = -1;
    this.cnslEndTime = -1;
    this.cnslReqTitle = "";
    this.cnslReqKeyword = "";
    this.cnslReqCont = "";
    this.cnslRsltTitle = "";
    this.cnslRsltKeyword = "";
    this.cnslRsltCont = "";
    this.cnslRsltProc = "";
    this.cnslSts = "";
    this.cnslStsNm = "";
    this.regId = "";
    this.regDate = "";
    this.updId = "";
    this.updDate = "";
    this.delYn = "";
    this.selDate = "";
    this.selSunDate = "";
    this.weeks = -1;
    this.hakguaCdNm = "";
    this.gradeCdNm = "";
    this.cnslReqKeywordArr = [];
    this.cnslRsltKeywordArr = [];
    this.groupKeyId = -1;
    this.satisKeyId = -1;
    this.referKeyId = -1;
    this.groupCnt = -1;
    this.groupUserList = [];
    this.cnslRnd = -1;
  }
}

export type { CodeMng, CnslMng, CnslSchdl, Cnslr, Options, User };
export { CnslMngInfo };
