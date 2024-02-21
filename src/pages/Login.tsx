import React from 'react';
import Header from 'components/Header';
import 'css/Login.css'
import Logo from "assets/Logo.png"

const Login = () => {
    return(
        <>
            <Header/>
            <div className='LoginDiv'>
                <p>로그인</p>
                <button>
                    <img alt="logo" src={Logo}/>
                    <p>로 로그인하기</p>
                </button>
            </div>
        </>
    )

}
export default Login