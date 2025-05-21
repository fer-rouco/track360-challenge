export interface Action {
  id: string,
  content: string;
  fn: () => void;
  focus?: boolean
}