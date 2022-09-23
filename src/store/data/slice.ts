import { AxiosError } from 'axios';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DATA_SLICE_ALIAS, IDataSlice, IDataItem } from './types';
import { fechDataAction } from './thunk';

const initialState: IDataSlice = {
  data: [],
  totalNumber: 0,
  loading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: DATA_SLICE_ALIAS,
  initialState,
  reducers: {},
  extraReducers: {
    [fechDataAction.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },

    [fechDataAction.fulfilled.type]: (
      state,
      { payload }: PayloadAction<any>,
    ) => {
      state.data = payload;
      state.totalNumber = payload.reduce(
        ({ value }, item: IDataItem) => value + item.value,
      );
      state.loading = false;
    },

    [fechDataAction.rejected.type]: (
      state,
      { payload }: PayloadAction<AxiosError>,
    ) => {
      state.data = [];
      state.loading = false;
      state.error = payload;
    },
  },
});

export default dataSlice.reducer;
