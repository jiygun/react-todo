export interface PaginationState {
  page: number;
  pages: number[];
}

export let initialState: PaginationState = {
  page: 1,
  pages: [],
};
