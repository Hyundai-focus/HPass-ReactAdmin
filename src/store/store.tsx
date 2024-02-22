import { configureStore } from '@reduxjs/toolkit';
import paymentListReducer from 'store/reducer/paymentList';
import totalMoneyReducer from 'store/reducer/totalMoney'; 
import couponMoneyReducer from 'store/reducer/couponMoney';
const store = configureStore({
  reducer: {
    paymentList: paymentListReducer,
    totalMoney: totalMoneyReducer,
    couponName: couponMoneyReducer
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;