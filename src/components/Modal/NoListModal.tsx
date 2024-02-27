import React, { useEffect, useRef } from "react";
import 'css/Modal/CouponModal.css'
const NoListModal = ({onClose}) => {
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

  return (
    <div className="modalOverlay">
      <div className="Modal" ref={modalRef}>
        <p className="NoListP">해당하는 내역이 없습니다.</p>
            <button onClick={closeModal} className="noListButton">닫기</button>
      </div>
    </div>
  );
};

export default NoListModal;