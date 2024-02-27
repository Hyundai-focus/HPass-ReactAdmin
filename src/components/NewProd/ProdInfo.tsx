import React from "react";
import "css/NewProd/ProdInfo.css"

const ProdInfo =({props}) =>{
    return(
        <div className="ProdInfo">
            <div className="IMGContainer">
                <img alt="img" src={props.prodImg}/>
            </div>
            <p className="BrandName">{props.prodBrand}</p>
            <p className="ProdName">{props.prodName}</p>
            <div className="ProdInfoBottom">
                <div>
                    <p>총개수</p>
                    <p>{props.totalStock}</p>
                </div>
                <div>
                    <p>신청 개수</p>
                    <p>{props.applyStock}</p>
                </div>
                <div>
                    <p>수령 개수</p>
                    <p>{props.receiveStock}</p>
                </div>
                <div>
                    <p>수령 기한</p>
                    <p>{props.receiveDt}</p>
                </div>
            </div>
        </div>
    )
}

export default ProdInfo