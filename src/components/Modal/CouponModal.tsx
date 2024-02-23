import React, { useEffect, useRef, useState } from "react";
import 'css/Modal/CouponModal.css'
const CouponModal = ({onClose}) => {
  const modalRef = useRef(null);
  const [selectedCoupon, setSelectedCoupon] = useState({        
    id : -1,
    coupon_brand:"",
    coupon_content:"",
    coupon_start_dt:"",
    coupon_end_dt:""
  })
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.add("modalFadeOut");
      setTimeout(() => {
        onClose(        {
          status: '할인',
          code: 'SL' + selectedCoupon.id,
          name: selectedCoupon.coupon_brand + selectedCoupon.coupon_content,
          price: '-',
          quantity: 1,
          total: '-'});
      }, 500); // 페이드아웃 애니메이션(0.5초) 후 onClose() 호출
    }
  };

  useEffect(() => {
    modalRef.current.classList.add("modalFadeIn");
  }, []);

  const data=[
    {
        id : 1,
        coupon_brand:"[이름이름이름]",
        coupon_content:"내용50%",
        coupon_start_dt:"22.02.03",
        coupon_end_dt:"22.03.04"
    },
    {
        id : 2,
        coupon_brand:"[이름이름이름]",
        coupon_content:"내용내용30%",
        coupon_start_dt:"22.02.03",
        coupon_end_dt:"22.03.04"
    },
    { 
        id : 3,
        coupon_brand:"[이름이름이름]",
        coupon_content:"내용내용10%",
        coupon_start_dt:"22.02.03",
        coupon_end_dt:"22.03.04"
    },
    {
        id : 4,
        coupon_brand:"[이름이름이름]",
        coupon_content:"내용내용내용40%ddsfsd",
        coupon_start_dt:"22.02.03",
        coupon_end_dt:"22.03.04"
    },
    {
        id : 5,
        coupon_brand:"[이름이름이름]",
        coupon_content:"내용 내용20%",
        coupon_start_dt:"22.02.03",
        coupon_end_dt:"22.03.04"
    },
    {
        id : 6,
        coupon_brand:"[이름이름이름]",
        coupon_content:"내용내 용90%",
        coupon_start_dt:"22.02.03",
        coupon_end_dt:"22.03.04"
    },
    
    {
        id : 7,
        coupon_brand:"[이름이름이름]",
        coupon_content:"내용내용 15%",
        coupon_start_dt:"22.02.03",
        coupon_end_dt:"22.03.04"
    },
  ]

  return (
    <div className="modalOverlay">
      <div className="Modal" ref={modalRef}>
        <p>사용 가능 쿠폰</p>
        <div className="CouponListDiv">
            {data.map((item, idx)=>(
                <div key={idx} className="CouponItem">
                    <div className="CouponText">
                        <p>{item.coupon_brand}{item.coupon_content}</p>    
                        <p className="CouponDate">{item.coupon_start_dt} ~ {item.coupon_end_dt}</p>
                    </div>
                    {selectedCoupon.id === -1 ? 
                    <button onClick={(e)=>setSelectedCoupon(item)}>적용</button>
                    : selectedCoupon.id === item.id ?
                    <button onClick={(e)=>setSelectedCoupon((prev) =>({...prev, id: -1}))}>적용</button>
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

export default CouponModal;