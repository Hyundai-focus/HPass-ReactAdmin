import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from 'pages/Login'
import LoginInvalid from 'pages/LoginInvalid'
import Payment from "pages/Payment";

const Routing=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/invalid" element={<LoginInvalid/>}/>
                <Route path="/Payment" element={<Payment/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default Routing