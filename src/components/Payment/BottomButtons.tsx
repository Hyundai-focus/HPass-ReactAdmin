
import React,{useMemo} from "react";
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { setCoupon } from "store/reducer/couponMoney";
import { setTotalMoney } from "store/reducer/totalMoney";

const Button = styled.button`
    background-color: var(--black);
    border-radius: 0.5rem;
    color: white;
    height: 10vh;
    margin-bottom:0.25rem;
    width:100%;
    font-size: 1.25rem;
    font-weight: bold;
    border:none;
`
const ButtonDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:33%;
    margin-right:0.25rem;
`
const Div = styled.div`
    width:67.5vw;
    display:flex;
    flex-direction:row;
    margin-left:80px;
    margin-top:0.5rem;
`
const BottomButtons = () =>{
    const dispatch = useDispatch();
    const socket =useMemo(() => {
        return new WebSocket(`ws://${process.env.REACT_APP_API_URL.split('//')[1]}/socket/controller`);
    }, []); 
    const clickPay =()=> {
        socket.send(`addProduct:: []`);
        dispatch(setCoupon("0")) 
        dispatch(setTotalMoney(0))
    }
    return(
        <Div>
            <ButtonDiv>
                <Button style={{backgroundColor:'#EFBD3C'}}>초기화</Button>
                <Button style={{backgroundColor:'#878787'}}>결제취소</Button>
                <Button>게시/마감</Button>
            </ButtonDiv>
            <ButtonDiv>
                <Button>영수증재출력</Button>
                <Button>영수증조회</Button>
                <Button>현금영수증</Button>
            </ButtonDiv>
            <ButtonDiv>
                <Button onClick={clickPay} style={{backgroundColor:'#E11C1C'}}>결제</Button>
                <Button>카드결제</Button>
                <Button>현금결제</Button>
            </ButtonDiv>
        </Div>
    )

}

export default BottomButtons