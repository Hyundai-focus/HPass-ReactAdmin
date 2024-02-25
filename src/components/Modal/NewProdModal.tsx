import React, { useEffect, useRef, useState } from "react";
import 'css/Modal/CouponModal.css'
import 'css/Modal/NewProdModal.css'
const NewProdModal = ({onClose}) => {
  const modalRef = useRef(null);
 
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.add("modalFadeOut");
      setTimeout(() => {
        onClose()
      }, 500); // 페이드아웃 애니메이션(0.5초) 후 onClose() 호출
    }
  };

  useEffect(() => {
    modalRef.current.classList.add("modalFadeIn");
  }, []);
  const data={
    product_history_no:1,
    product_img:"https://images-prod.dazeddigital.com/900/azure/dazed-prod/1360/0/1360573.jpg",
    product_name:"리바이리 소듐 미네랄 엠플",
    product_brand:"Re X Re",
    member_name:"반 * 현"
    
}
  return (
    <div className="modalOverlay">
      <div className="Modal" ref={modalRef}>
        <div className="ProdModal">
            <div className="imgContainer">
                <img alt="img" src={data.product_img}/>
            </div>
            <div className="modalProdName">
                <p className="ProdBrand">{data.product_brand}</p>
                <p className="ProdName">{data.product_name}</p>
            </div>
            <div className="modalmemberInfo">
                <p className="memberNoTag">신청자</p>
                <p className="memberName">{data.member_name}</p>
            </div>
            
        </div>
        <div className="buttonDiv">
            <button onClick={closeModal} className="closeButtonProd">닫기</button>
            <button onClick={closeModal}>수령 확인</button>
        </div>
      </div>
    </div>
  );
};

export default NewProdModal;