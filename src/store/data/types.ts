import { AxiosError } from 'axios';

export const DATA_SLICE_ALIAS = 'data';

export interface IDataItem {
  name: string;
  color: string;
  value: number;
}

export interface IDataSlice {
  data: Array<IDataItem>;
  totalNumber: number;
  loading: boolean;
  error: AxiosError | null;
}
