import React from "react";
import { FaHome } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";

const SideBar =({props}) =>{
    const getIconColor = (selectedIcon) => {
        return props === selectedIcon ? 'var(--green)' : 'white';
      };
    return(
        <div className="SideBar">
            <FaHome className="topIcon" style={{ color: getIconColor('home') }} />
            <FaMoneyCheckAlt style={{ color: getIconColor('payment') }} />
            <FaBoxArchive style={{ color: getIconColor('product') }} />
        </div>
    )

}
export default SideBar