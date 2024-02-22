import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TotalState {
    total: number;
}

const initialState:TotalState = {
    total: 0
};

const dataSlice = createSlice({
    name: 'total',
    initialState,
    reducers: {
        setTotalMoney(state, action:PayloadAction<number>){
            state.total = action.payload
        }
    },
  });

export const { setTotalMoney } = dataSlice.actions;

export default dataSlice.reducer;