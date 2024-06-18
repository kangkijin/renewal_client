type DraggableIcon =
  | "info"
  | "program"
  | "notice"
  | "employspec"
  | "recrt-cnsl"
  | "zone"
  | "topstudent"
  | "guidance"
  | "counsel";
interface DraggableElement {
  key: string;
  name: string;
  icon: DraggableIcon;
  order: number;
  class?: string;
}

export type { DraggableElement };
