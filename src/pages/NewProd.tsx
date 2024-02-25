import React from "react";
import Header from "components/Header";
import SideBar from "components/SideBar";
import ProdInfo from "components/NewProd/ProdInfo";
import ProdGraph from "components/NewProd/ProdGraph";
import "css/NewProd/NewProd.css"

const NewProd = () => {

    return(
        <>
            <Header/>
            <SideBar props={"product"}/>
            <div className="ProdBody">
                <ProdInfo/>
                <ProdGraph/>
            </div>
        </>
    )
}
export default NewProd