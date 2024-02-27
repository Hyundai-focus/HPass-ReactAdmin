import React, { useEffect, useRef } from "react";
import 'css/Modal/CouponModal.css'
import 'css/Modal/NewProdModal.css'
import useGet from "hooks/useGet";
const NewProdModal = ({props, onClose, memberNo}) => {
  const modalRef = useRef(null);
  const { get } = useGet();

  const closeModal = (status:boolean) => {
    const getProdList= async() =>{
      try{
          await get(`${process.env.REACT_APP_API_URL}/pos/product/new/history/${memberNo}`);
        }catch(e){return}
    }
    if (modalRef.current) {
      if(status) getProdList()
      modalRef.current.classList.add("modalFadeOut");
      setTimeout(() => {
        onClose()
      }, 500); // 페이드아웃 애니메이션(0.5초) 후 onClose() 호출
    }
  };

  useEffect(() => {
    modalRef.current.classList.add("modalFadeIn");
  }, []);
  return (
    <div className="modalOverlay">
      <div className="Modal" ref={modalRef}>
        <div className="ProdModal">
            <div className="imgContainer">
                <img alt="img" src={props.prodImg}/>
            </div>
            <div className="modalProdName">
                <p className="ProdBrand">{props.prodBrand}</p>
                <p className="ProdName">{props.prodName}</p>
            </div>
            <div className="modalmemberInfo">
                <p className="memberNoTag">신청자</p>
                <p className="memberName">{props.memberName}</p>
            </div>
            
        </div>
        <div className="buttonDiv">
            <button onClick={() => closeModal(false)} className="closeButtonProd">닫기</button>
            <button onClick={() => closeModal(true)}>수령 확인</button>
        </div>
      </div>
    </div>
  );
};

export default NewProdModal;