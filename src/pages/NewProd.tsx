import React, {useState} from "react";
import Header from "components/Header";
import SideBar from "components/SideBar";
import ProdInfo from "components/NewProd/ProdInfo";
import ProdGraph from "components/NewProd/ProdGraph";
import ProdList from "components/NewProd/ProdList";
import NewProdModal from "components/Modal/NewProdModal";
import "css/NewProd/NewProd.css"

const NewProd = () => {
    const [modal, setModal] = useState(false)
    return(
        <>
            <Header/>
            <SideBar props={"product"}/>
            <div className="ProdBody">
                <ProdInfo/>
                <ProdGraph/>
                <ProdList/>
            </div>
            {modal && <NewProdModal onClose={() => {setModal(false)}}/>}
        </>
    )
}
export default NewProd