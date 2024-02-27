import React from "react";
import 'css/Payment/ProductRes.css'
import { useSelector } from 'react-redux';
import { RootState } from "store/store";
const ProductRes=()=>{
    const totalMoney = useSelector((state : RootState) => state.totalMoney);
    const total = Number(totalMoney.total)
    const coupon = useSelector((state : RootState) => state.couponName.coupon);
    const discountMoney = total * Number(coupon.split("%")[0].slice(-2)) / 100
    return(
        <div className="ProductRes">
            <div className="ProductResLeft">
                <p>합계 금액</p>
                <p>할인</p>
                <p>결제 금액</p>
                <p>카드 결제</p>
                <p>현금 결제</p>
                <p style={{border:'none'}}>추가 결제 금액</p>
            </div>
            <div className="ProductResRight">
                <p>{total}</p>
                <p>{discountMoney}</p>
                <p>{total - discountMoney}</p>
                <p>0</p>
                <p>0</p>
                <p className="LastPTag">0</p>
            </div>
        </div>
    )
}
export default ProductRes