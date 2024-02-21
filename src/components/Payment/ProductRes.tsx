import React from "react";
import 'css/Payment/ProductRes.css'

const ProductRes=()=>{
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
                <p>48000</p>
                <p>0</p>
                <p>48000</p>
                <p>0</p>
                <p>0</p>
                <p style={{border:'none'}}>0</p>
            </div>
        </div>
    )
}
export default ProductRes