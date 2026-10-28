export enum ModalStatus {
  Opened,
  Closed,
}
export default (
  text: string,
  status: ModalStatus
): { text: string; status: ModalStatus } => ({ text, status });
