import React from "react";
import SideBar from "components/SideBar";
import Header from "components/Header";
import BottomButtons from "components/Payment/BottomButtons";
import ProductList from "components/Payment/ProductList"
import ProductRes from "components/Payment/ProductRes"
import MenuButtons from "components/Payment/MenuButtons";
import styled from "styled-components"

const Div = styled.div`
    display:flex;
    overflow-y:hidden;
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
            <div>
                <MenuButtons/>
                <ProductRes/>
            </div>
        </Div>
    )
}
export default Payment