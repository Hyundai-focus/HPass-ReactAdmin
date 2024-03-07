import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataItem {
  status: string;
  code: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

interface DataState {
  data: DataItem[];
}

const initialState: DataState = {
  data: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
      addItem(state, action: PayloadAction<DataItem>) {
        state.data.push(action.payload);
      },
      removeItem(state) {
        state.data =[];
      },
    },
  });

export const { addItem, removeItem } = dataSlice.actions;
export default dataSlice.reducer;