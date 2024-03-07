
import React from "react";
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { removeItem } from "store/reducer/paymentList";
import { setCoupon } from "store/reducer/couponMoney";
import { setCouponId } from "store/reducer/couponMoney";
import { setTotalMoney } from "store/reducer/totalMoney";

const Button = styled.button`
    background-color: white;
    border-radius: 0.35rem;
    color: var(--black);
    height: 4.35rem;
    width:100%;
    font-size: 0.85rem;
    font-weight: bold;
    border:5px solid white;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.25);
`
const Div = styled.div`
    width:8rem;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
`
const BottomButtons = () =>{
    const dispatch = useDispatch()
    const reset=()=>{
        dispatch(removeItem())
        dispatch(setCouponId(-1))
        dispatch(setCoupon("0")) 
        dispatch(setTotalMoney(0))
    }
    return(
        <Div>
            <Button onClick={reset}>초기화</Button>
            <Button >결제취소</Button>
            <Button>영수증조회</Button>
            <Button>영수증재출력</Button>
            <Button>현금영수증</Button>
        </Div>
    )

}

export default BottomButtons