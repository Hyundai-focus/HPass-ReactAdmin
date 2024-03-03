import React from "react";
import SideBar from "components/SideBar";
import Header from "components/Header";
import styled from "styled-components"
import List from "components/Exhibition/List";

const Div = styled.div`
    display:flex;
    overflow-y:hidden;
    flex-direction:row;
`
const ListDiv = styled.div`
    margin-top:80px;
    margin-left:80px;
    display: flex;
    width: 100%;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
`
const ExhibitionPos =()=>{
    return(
        <Div>
            <Header/>
            <SideBar props={"exhibition"}/>
            <ListDiv>
                <List/>
            </ListDiv>
        </Div>
    )
}
export default ExhibitionPos