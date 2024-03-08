import React, {useState} from "react";
import "css/Payment/MenuButtons.css"
import { addItem } from "store/reducer/paymentList";
import { useDispatch } from 'react-redux';
import item from 'assets/item.json'
import { useSelector } from 'react-redux';
import { RootState } from "store/store";
import { removeItem } from "store/reducer/paymentList";
import { setCoupon } from "store/reducer/couponMoney";
import { setCouponId } from "store/reducer/couponMoney";
import { setTotalMoney } from "store/reducer/totalMoney";
import usePost from "hooks/usePost";
import {FadeLoader} from 'react-spinners'
const MenuButtons=()=>{    
    const dispatch = useDispatch()
    const coupon = useSelector((state : RootState) => state.couponName.couponId)
    const [loading, setLoading] = useState(false)
    const {post} = usePost()
    const clickPay =()=> {
        setLoading(true)
        const setCouponTrue =async()=>{
            try{
                await post(`${process.env.REACT_APP_API_URL}/pos/coupon/use`, {storeName : `${coupon}`})
            }
            catch(e){return}
        }
        setTimeout(() => {
            setLoading(false)
            if(coupon !== -1) setCouponTrue()
            dispatch(removeItem())
            dispatch(setCouponId(-1))
            dispatch(setCoupon("0")) 
            dispatch(setTotalMoney(0))
          }, 1250);
    }
    return(
        <div className="MenuButtons">
            {[...Array(7)].map((_, idx) => (
                <div key={idx} className="MenuButtonOut">
                {[...Array(5)].map((__, index) => {
                    const dt = item.items[idx] && item.items[idx][index] ? item.items[idx][index] : null;
                    if (dt) {
                        return (
                            <button key={index} onClick={() => dispatch(addItem(dt))}>
                                {dt.name}
                                <p>{dt.price.toLocaleString()}원</p>
                            </button>
                        );
                    } else return <button key={index} id="noneBtn"/>
                })}
                </div>
            ))}
            <div className="MenuBottomButtons">
                <button onClick={clickPay}>카드결제</button>
                <button>현금결제</button>
                <button>결제취소</button>
                <div>
                    <div className="minuButtons">
                        <button>복합결제</button>
                        <button>서비스</button>
                    </div>
                    <div className="minuButtons">
                        <button>환불</button>
                        <button>더치페이</button>
                    </div>
                </div>
            </div>
            {loading && <div  className="Loading">
                <div>
                <FadeLoader color="#d0d0d0" height={9} margin={10} radius={14} width={9} />
                <p>결제중입니다</p>
                </div>
            </div>}
        </div>
    )
}
export default MenuButtons