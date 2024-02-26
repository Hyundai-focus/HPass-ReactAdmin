import React, {useState,useMemo,useEffect} from "react";
import Header from "components/Header";
import SideBar from "components/SideBar";
import ProdInfo from "components/NewProd/ProdInfo";
import ProdGraph from "components/NewProd/ProdGraph";
import ProdList from "components/NewProd/ProdList";
import NewProdModal from "components/Modal/NewProdModal";
import "css/NewProd/NewProd.css"

const NewProd = () => {    
    const socket =useMemo(() => {
    return new WebSocket(`ws://${process.env.REACT_APP_API_URL.split('//')[1]}/socket/newProd`);
    }, []); 
    const [modal, setModal] = useState(false)

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