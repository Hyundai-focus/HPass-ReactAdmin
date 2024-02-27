import React from "react";
//import { FaHome } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SideBar =({props}) =>{
    const navigate = useNavigate();
    const getIconColor = (selectedIcon) => {
        return props === selectedIcon ? 'var(--green)' : 'white';
      };
    return(
        <div className="SideBar">
            {/* <FaHome className="topIcon" style={{ color: getIconColor('home') }} /> */}
            <FaMoneyCheckAlt className="topIcon" style={{ color: getIconColor('payment') }} onClick={()=>{navigate('/payment')}} />
            <FaBoxArchive style={{ color: getIconColor('product') }} onClick={()=>{navigate('/newProd')}}/>
        </div>
    )

}
export default SideBar