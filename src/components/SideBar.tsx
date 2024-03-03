import React from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { HiMiniTicket } from "react-icons/hi2";
const SideBar =({props}) =>{
    const navigate = useNavigate();
    const getIconColor = (selectedIcon) => {
        return props === selectedIcon ? 'var(--green)' : 'white';
      };
    return(
        <div className="SideBar">
            <FaMoneyCheckAlt className="topIcon" style={{ color: getIconColor('payment') }} onClick={()=>{navigate('/payment')}} />
            <HiMiniTicket style={{ color: getIconColor('exhibition') }} onClick={()=>{navigate('/exhibition')}}/>
            <FaBoxArchive style={{ color: getIconColor('product') }} onClick={()=>{navigate('/newProd')}}/>
        </div>
    )

}
export default SideBar