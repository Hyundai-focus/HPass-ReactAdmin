import React from 'react';
import Header from 'components/Header';
import 'css/Login.css'
import Logo from "assets/Logo_green.png"
import { useNavigate } from "react-router-dom";
const LoginInvalid = () => {
    const navigate = useNavigate();
    return(
        <>
            <Header/>
            <div className='LoginDiv'>
                    <img alt="logo" src={Logo}/>
                <p>접근 불가능한 계정입니다</p>
                <button onClick={() => navigate("/")}>
                    로그인
                </button>
            </div>
        </>
    )

}
export default LoginInvalid