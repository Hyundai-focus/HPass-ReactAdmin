import React from "react";
import "css/Payment/MenuButtons.css"
import { addItem } from "store/reducer/paymentList";
import { useDispatch } from 'react-redux';
import item from 'assets/item.json'

const MenuButtons=()=>{
    console.log(item.items)
    const dispatch = useDispatch()
    return(
        <div className="MenuButtons">
            {item.items.map((data, idx)=>(
                <div key={idx} className="MenuButtonOut">
                    {data.map((dt, index)=>(
                        <button onClick={()=>{ dispatch(addItem(dt))}}>
                            <div className="MenuButtonIn">
                                <img alt="img" src={dt.img}/>
                                <div className="overlay"></div>
                            </div>
                            <p>{dt.name}</p>
                        </button>
                    ))}
                </div>
            ))}
        </div>
    )

}
export default MenuButtons