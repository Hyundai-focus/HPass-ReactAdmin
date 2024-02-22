import React, {  } from "react";
import SideBar from "components/SideBar";
import Header from "components/Header";
import BottomButtons from "components/Payment/BottomButtons";
import ProductList from "components/Payment/ProductList"
import ProductRes from "components/Payment/ProductRes"
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
            <BottomButtons/>
            </div>
            <ProductRes/>
        </Div>
    )
}
export default Payment