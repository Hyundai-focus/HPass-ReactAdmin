import React from "react";
import "css/NewProd/ProdInfo.css"

const ProdInfo =() =>{
    const data={
        product_brand:"Re X Re",
        product_name:"리바이리 소듐 미네랄 엠플",
        product_img:"https://images-prod.dazeddigital.com/900/azure/dazed-prod/1360/0/1360573.jpg",
        stock:30,
        receive_ct:"24.03.01"
    }
    return(
        <div className="ProdInfo">
            <div className="IMGContainer">
                <img alt="img" src={data.product_img}/>
            </div>
            <p className="BrandName">{data.product_brand}</p>
            <p className="ProdName">{data.product_name}</p>
            <div className="ProdInfoBottom">
                <div>
                    <p>총개수</p>
                    <p>{data.stock}</p>
                </div>
                <div>
                    <p>신청 개수</p>
                    <p>{data.stock}</p>
                </div>
                <div>
                    <p>수령 개수</p>
                    <p>{data.stock}</p>
                </div>
                <div>
                    <p>수령 일자</p>
                    <p>{data.receive_ct}</p>
                </div>
            </div>
        </div>
    )
}

export default ProdInfo