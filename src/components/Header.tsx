import React from "react";
import Logo from "assets/Logo.png"
import { FaUserAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import "css/HeaderSideBar.css"

const Header = () => {
    return(
        <div className="Header">
            <img alt="Logo" src={Logo}/>
            <div className="HeaderLeftMenu">
                <FaBell/>
                <FaUserAlt/>
            </div>
        </div>
    )

}

export default Header
