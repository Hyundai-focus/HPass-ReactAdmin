import React from "react";
import SideBar from "components/SideBar";
import Header from "components/Header";
import BottomButtons from "components/Payment/BottomButtons";
import ProductList from "components/Payment/ProductList"
import ProductRes from "components/Payment/ProductRes"
import 'css/Payment/Payment.css'
import styled from "styled-components"

const Div = styled.div`
    display:flex;
    flex-direction:row;
`


const Payment =()=>{
    return(
        <Div>
            <Header/>
            <SideBar props={"payment"}/>
            <div>
            <ProductList/>
            <div className="TotalInfo">
                <div>
                    <p id="leftP">총 판매 수량</p>
                    <p id="rightP">1</p>
                </div>
                <hr/>
                <div>
                    <p id="leftP">총 판매 수량</p>
                    <p id="rightP">48000</p>
                </div>
            </div>
            <BottomButtons/>
            </div>
            <ProductRes/>
        </Div>
    )
}
export default Payment