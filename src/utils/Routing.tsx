import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from 'pages/Login'
import LoginInvalid from 'pages/LoginInvalid'
import Payment from "pages/Payment";
import Control from "pages/Control";
import NewProd from "pages/NewProd"
import ExhibitionPos from "pages/ExhibitionPos";

const Routing=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/invalid" element={<LoginInvalid/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="/control" element={<Control/>}/>
                <Route path="/newProd" element={<NewProd/>}/>
                <Route path="/exhibition" element={<ExhibitionPos/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default Routing