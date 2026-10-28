export enum LoadingStatus {
  Loading,
  Error,
  Success,
}
export type DataState = { status: LoadingStatus; data?: number; error?: Error };
export default (state: DataState): string => {
  switch (state.status) {
    case LoadingStatus.Loading:
      return "loading...";
    case LoadingStatus.Error:
      return "error";
    case LoadingStatus.Success:
      return String(state.data);
    default:
      return "unknown";
  }
};
