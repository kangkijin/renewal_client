interface barChartLabel {
  name: String;
  img: string;
}
interface barChartDataset {
  name: String;
  data: Number[];
}
interface barChartOnlyDataset {
  data: Number[];
}
interface RadarChartDataset {
  name: String;
  data: Number[];
}

export type { barChartLabel, barChartDataset, barChartOnlyDataset, RadarChartDataset };
