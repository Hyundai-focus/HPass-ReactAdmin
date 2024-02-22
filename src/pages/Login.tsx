import React, { useState } from "react";
import Header from 'components/Header';
import 'css/Login.css'
import Logo from "assets/Logo_green.png"
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import usePost from "hooks/usePost";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { post } = usePost();
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL;
    const [login, setLogin] = useState({
        email: "",
        password: "",
      });
    const tryLogin= async() =>{
        try{
            const res = await post(`${apiUrl}/login`, {
                userId: login.email,
                password: login.password,
            });
            if(res.role !== 'ROLE_POS') navigate('/invalid')
            else{

            }
        }
        catch(e){
            console.log(e)
            return
        }

    }
    return(
        <>
            <Header/>
            <div className='LoginDiv'>
                <img alt="logo" src={Logo}/>
                <label>
                    <FiUser />
                    <input 
                        type='text' 
                        placeholder='ID'
                        value={login.email}
                        onChange={(e) => {
                            setLogin((prev) => ({ ...prev, email: e.target.value }));
                          }}
                    />              
                </label> 
                <label>
                    <RiLockPasswordLine />
                    <input 
                        type='password' 
                        placeholder='Password'
                        value={login.password}
                        onChange={(e) => {
                            setLogin((prev) => ({ ...prev, password: e.target.value }));
                          }}
                    />            
                </label> 
                <button onClick={tryLogin}>
                    로그인
                </button>
            </div>
        </>
    )

}
export default Login