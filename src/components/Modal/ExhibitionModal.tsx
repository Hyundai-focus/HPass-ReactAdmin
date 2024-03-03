import React, { useEffect, useRef, useState } from "react";
import 'css/Modal/CouponModal.css'

const ExhibitionModal = ({props, onClose}) => {
  const modalRef = useRef(null);
  const [selectedCoupon, setSelectedCoupon] = useState({        
    id : -1,
    couponHistoryNo : 0,
    couponBrand:"",
    couponContent:"",
    couponStartDt:"",
    couponEndDt:""
  })
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.add("modalFadeOut");
      setTimeout(() => {
        if(selectedCoupon.id === -1) onClose({})
        else onClose({
          id : selectedCoupon.couponHistoryNo,
          name: selectedCoupon.couponBrand + " " + selectedCoupon.couponContent});
      }, 500); // 페이드아웃 애니메이션(0.5초) 후 onClose() 호출
    }
  };

  useEffect(() => {
    modalRef.current.classList.add("modalFadeIn");
  }, []);

  return (
    <div className="modalOverlay">
      <div className="Modal" ref={modalRef}>
        <p>사용 가능 쿠폰</p>
        <div className="CouponListDiv">
            {props.map((item, idx)=>(
                <div key={idx} className="CouponItem">
                    <div className="CouponText">
                        <p>[{item.couponBrand}] {item.couponContent}</p>    
                        <p className="CouponDate">{item.couponStartDt} ~ {item.couponEndDt}</p>
                    </div>
                    {selectedCoupon.id === -1 ? 
                    <button onClick={(e)=>setSelectedCoupon(item)}>적용</button>
                    : selectedCoupon.id === item.id ?
                    <button className="selected" onClick={(e)=>setSelectedCoupon((prev) =>({...prev, id: -1}))}>적용</button>
                    :<button className="disabled">적용</button>}
                </div>
            ))}
        </div>
        <button onClick={closeModal}>
        닫기
      </button>
      </div>
    </div>
  );
};

export default ExhibitionModal;