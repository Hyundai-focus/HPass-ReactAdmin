import React, { useEffect, useState } from "react";
import "css/NewProd/ProdList.css"
import useGet from "hooks/useGet"

const ProdList=({props})=>{
    const { get } = useGet();
    const [data,setData] = useState([ ])
    useEffect(()=>{
        const getStatus = async() =>{
            try{
                const res = await get(`${process.env.REACT_APP_API_URL}/pos/product/new/list/${props}`);
                setData(res)
              }catch(e){return}
          }
          getStatus()
          // eslint-disable-next-line
    },[])
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
                <div key={index}>
                <div className="bottomListItem" >
                    <p className="ProdNum">pu{item.productHistoryNo}</p>
                    <p className="ProdPerson">{item.memberName}</p>
                    <p className="ProdDate">{item.historyDate}</p>
                    <p className="ProdStatus">{item.productStatus}</p>
                </div>
                <hr/>
                </div>
            ))}
            </div> 
        </div>
    )
}
export default ProdList