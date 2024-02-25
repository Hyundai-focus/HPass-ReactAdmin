import React from "react";
import "css/NewProd/ProdList.css"
const ProdList=()=>{
    const data=[
        {
            product_history_no:1,
            member_name:"김*김",
            product_history_dt:"24.02.03",
            product_status:"수령"
        }
        ,

        {
            product_history_no:1,
            member_name:"김*김",
            product_history_dt:"24.02.03",
            product_status:"수령"
        }
        ,
        {
            product_history_no:1,
            member_name:"김*김",
            product_history_dt:"24.02.03",
            product_status:"수령"
        },
        {
            product_history_no:1,
            member_name:"김*김",
            product_history_dt:"24.02.03",
            product_status:"수령"
        },
        {
            product_history_no:1,
            member_name:"김*김",
            product_history_dt:"24.02.03",
            product_status:"수령"
        },
        {
            product_history_no:1,
            member_name:"김*김",
            product_history_dt:"24.02.03",
            product_status:"수령"
        },
        {
            product_history_no:1,
            member_name:"김*김",
            product_history_dt:"24.02.03",
            product_status:"수령"
        },
    ]
    return(
        <div className="ProdList">
            <div className="topBar">
                <p className="ProdNum">신청번호</p>
                <p className="ProdPerson">신청자</p>
                <p className="ProdDate">신청일</p>
                <p className="ProdStatus">수령상태</p>
            </div>
            <div className="bottomList">
            {data.map((item, index) => (
                <div>
                <div className="bottomListItem" key={index}>
                    <p className="ProdNum">pu{item.product_history_no}</p>
                    <p className="ProdPerson">{item.member_name}</p>
                    <p className="ProdDate">{item.product_history_dt}</p>
                    <p className="ProdStatus">{item.product_status}</p>
                </div>
                <hr/>
                </div>
            ))}
            </div> 
        </div>
    )
}
export default ProdList