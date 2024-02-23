import React,{useMemo, useCallback, useEffect} from "react";
import styled from 'styled-components'
import { useDispatch,useSelector } from 'react-redux';
import { addItem } from "store/reducer/paymentList";
import { RootState } from "store/store";

const Div = styled.div`
    margin-top:-50px;
    display:flex;
    flex-direction:column;
`
const Button = styled.button`
    height: 10vh;
    margin-bottom:1vh;
`

const Control=()=>{
    const dispatch = useDispatch();
    const paymentList = useSelector((state : RootState) => state.paymentList);
    const socket =useMemo(() => {
        return new WebSocket(`ws://${process.env.REACT_APP_API_URL.split('//')[1]}/socket/controller`);
    }, []); 

    useEffect(() => {
        socket.onopen = (event) => {
          console.log("WebSocket connection opened:", event);
        };
        return () => {
          socket.onclose = function (event) {
            console.log("WebSocket connection closed:", event);
          };
        };
      }, [socket]);

    const sendData = useCallback(() =>{
        if (socket.readyState === WebSocket.OPEN) { //소켓이 열려 있으면 전송
            socket.send(`addProduct:: ${JSON.stringify(paymentList.data)}`);
        }// eslint-disable-next-line
    }, [paymentList.data]);// paymentList.data의 변경(데이터 추가 완료)되면 재생성

    useEffect(() => {
        sendData();
    }, [sendData]); //sendData이 변경(재생성)되면 실행

    const addData =async()=>{
        const newItem = {
            status: 'new',
            code: '123',
            name: 'Sample Item',
            price: 1000,
            quantity: 1,
            total: 10000,
        };
        dispatch(addItem(newItem)) 
    };

    const coupon=()=>{
        if (socket.readyState === WebSocket.OPEN) { //소켓이 열려 있으면 전송
            socket.send(`coupon::coupon`);
        }
    }
    return(
        <Div>
            <Button onClick={addData}>
                결제 물품 추가
            </Button>
            <Button onClick={coupon}>
                쿠폰 모달창 열기
            </Button>
        </Div>
    )
}
export default Control