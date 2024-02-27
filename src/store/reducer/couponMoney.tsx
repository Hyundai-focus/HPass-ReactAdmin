import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CouponState {
    coupon: string;
    couponId : number;
}

const initialState:CouponState = {
    coupon: "",
    couponId: 0,
};

const dataSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers: {
        setCoupon(state, action:PayloadAction<string>){
            state.coupon = action.payload
        },
        setCouponId(state, action:PayloadAction<number>){
            state.couponId = action.payload
        }
    },
  });

export const { setCoupon,setCouponId } = dataSlice.actions;

export default dataSlice.reducer;