import React from "react";
import "css/Payment/PaymentHeader.css"
import Logo from "assets/Logo_green.png"
import { HiOutlineXMark } from "react-icons/hi2";

const PaymentHeader=()=>{
    const date = getToday()
    return(
        <div className="PaymentHeader">
            <img alt="Logo" src={Logo}/>
            <div className="PosInfo">
                <p>영업일자 : {date}</p>
                <p id="secodP">판매원 : 카페 레이어드</p>
            </div>
            <button><HiOutlineXMark /></button>
        </div>
    )
}
const getToday = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
}
export default PaymentHeader