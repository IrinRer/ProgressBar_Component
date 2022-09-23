import { RootState } from "store";

export const getData = (state: RootState) => state.data.data;
export const getTotalDataNumber = (state: RootState) => state.data.totalNumber;
