import React from "react";
import 'css/Payment/ProductRes.css'
import { useSelector } from 'react-redux';
import { RootState } from "store/store";
import BottomButtons from "components/Payment/BottomButtons";
const ProductRes=()=>{
    const totalMoney = useSelector((state : RootState) => state.totalMoney);
    const total = Number(totalMoney.total)
    const coupon = useSelector((state : RootState) => state.couponName.coupon);
    const discountMoney = total * Number(coupon.split("%")[0].slice(-2)) / 100
    return(
        <div id="ProductRes">
        <div className="ProductRes">
            <div className="ProductResLeft">
                <p>합계 금액</p>
                <p>할인</p>
                <p>결제 금액</p>
                <p style={{border:'none'}}>거스름돈</p>
            </div>
            <div className="ProductResRight">
                <p>{total.toLocaleString()}</p>
                <p>{discountMoney.toLocaleString()}</p>
                <p>{(total - discountMoney).toLocaleString()}</p>
                <p className="LastPTag">0</p>
            </div>
        </div>
        <div className="Numbers">
            <div id="NumberRes"></div>
            <div className="number">
                <p>7</p><p>8</p><p>9</p>
            </div>
            <div className="number">
                <p>4</p><p>5</p><p>6</p>
            </div>
            <div className="number">
                <p>1</p><p>2</p><p>3</p>
            </div>
            <div className="number">
                <p>0</p><p>00</p><p>c</p>
            </div>
            <div className="number">
                <p>&lt;</p><p id="Enter">Enter</p>
            </div>
        </div>
        <BottomButtons/>
        </div>
    )
}
export default ProductRes