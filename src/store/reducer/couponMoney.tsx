import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CouponState {
    coupon: string;
}

const initialState:CouponState = {
    coupon: ""
};

const dataSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers: {
        setCoupon(state, action:PayloadAction<string>){
            state.coupon = action.payload
        }
    },
  });

export const { setCoupon } = dataSlice.actions;

export default dataSlice.reducer;