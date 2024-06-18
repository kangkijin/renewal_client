import moment from "moment";

/*
TODO 삭제예정
CD01 완료
CD02 채점중 (없는거였음 삭제삭제)
CD03 미실시 (아직 안한거)
CD04 미실시 (안하고 지나간거)
CD05 미실시 (기간이 아직 안된거)
*/
const _examData = [
  {
    시험_상세_키: "0",
    시험_회차: 1,
    시험_제목: "사전테스트",
    시험_비중: 5,
    시험_시작일: moment().subtract(10, "days").format(),
    시험_종료일: moment().subtract(9, "days").format(),
    시험_상태_명: "완료",
    시험_상태_코드: "CD01",
    시험_성적: 92,
  },
  {
    시험_상세_키: "1",
    시험_회차: 2,
    시험_제목: "기초 수학 테스트",
    시험_비중: 10,
    시험_시작일: moment().subtract(9, "days").format(),
    시험_종료일: moment().subtract(8, "days").format(),
    시험_상태_명: "완료",
    시험_상태_코드: "CD01",
    시험_성적: 90,
  },
  {
    시험_상세_키: "2",
    시험_회차: 3,
    시험_제목: "머신러닝 기초 테스트",
    시험_비중: 10,
    시험_시작일: moment().subtract(8, "days").format(),
    시험_종료일: moment().subtract(7, "days").format(),
    시험_상태_명: "완료",
    시험_상태_코드: "CD01",
    시험_성적: 100,
  },
  {
    시험_상세_키: "3",
    시험_회차: 4,
    시험_제목: "심층 학습 테스트",
    시험_비중: 10,
    시험_시작일: moment().subtract(7, "days").format(),
    시험_종료일: moment().subtract(6, "days").format(),
    시험_상태_명: "미실시",
    시험_상태_코드: "CD04",
    시험_성적: 0,
  },
  {
    시험_상세_키: "4",
    시험_회차: 5,
    시험_제목: "심층 학습의 활용테스트",
    시험_비중: 5,
    시험_시작일: moment().subtract(6, "days").format(),
    시험_종료일: moment().subtract(5, "days").format(),
    시험_상태_명: "완료",
    시험_상태_코드: "CD01",
    시험_성적: 98,
  },
  {
    시험_상세_키: "5",
    시험_회차: 6,
    시험_제목: "자연어 처리 테스트",
    시험_비중: 5,
    시험_시작일: moment().subtract(5, "days").format(),
    시험_종료일: moment().subtract(4, "days").format(),
    시험_상태_명: "완료",
    시험_상태_코드: "CD01",
    시험_성적: 91,
  },
  {
    시험_상세_키: "6",
    시험_회차: 7,
    시험_제목: "강화 학습 테스트",
    시험_비중: 5,
    시험_시작일: moment().subtract(4, "days").format(),
    시험_종료일: moment().subtract(3, "days").format(),
    시험_상태_명: "완료",
    시험_상태_코드: "CD01",
    시험_성적: 88,
  },
  {
    시험_상세_키: "7",
    시험_회차: 8,
    시험_제목: "클러스터링 및 차원 축소 테스트",
    시험_비중: 5,
    시험_시작일: moment().subtract(3, "days").format(),
    시험_종료일: moment().add(1, "days").format(),
    시험_상태_명: "미실시",
    시험_상태_코드: "CD03",
    시험_성적: 0,
  },
  {
    시험_상세_키: "8",
    시험_회차: 9,
    시험_제목: "이상 탐지 및 이벤트 감지 테스트",
    시험_비중: 5,
    시험_시작일: moment().add(0, "days").format(),
    시험_종료일: moment().add(2, "days").format(),
    시험_상태_명: "미실시",
    시험_상태_코드: "CD03",
    시험_성적: 0,
  },
  {
    시험_상세_키: "9",
    시험_회차: 10,
    시험_제목: "AI의 윤리와 사회적 영향 테스트",
    시험_비중: 5,
    시험_시작일: moment().add(2, "days").format(),
    시험_종료일: moment().add(3, "days").format(),
    시험_상태_명: "미실시",
    시험_상태_코드: "CD05",
    시험_성적: 0,
  },
];

export default _examData;
