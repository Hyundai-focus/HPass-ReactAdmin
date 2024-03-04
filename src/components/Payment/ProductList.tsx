import React,{useEffect, useMemo,useState} from "react"
import 'css/Payment/ProductList.css'
import CouponModal from "components/Modal/CouponModal"
import NoListModal from "components/Modal/NoListModal";
import { useDispatch } from 'react-redux'
import { setCoupon, setCouponId } from "store/reducer/couponMoney"
import { useSelector } from 'react-redux';
import { RootState } from "store/store";
import { setTotalMoney } from "store/reducer/totalMoney"
import { addItem } from "store/reducer/paymentList"
import useGet from "hooks/useGet"

const ProductList =() =>{
    const totalList = useSelector((state : RootState) => state.paymentList);
    const dispatch = useDispatch();
    const [data,setData] =useState([])
    const [falseModal, setFalseModal] = useState(false)
    const [modal,setModal] =useState(false)
    const [total, setTotal] = useState({
        cnt : 0,
        money: 0
    })
    const { get } = useGet();

    const socket =useMemo(() => {
        return new WebSocket(`wss://${process.env.REACT_APP_API_URL.split('//')[1]}/socket/coupon`);
    }, []); 
    
    useEffect(() => {
        socket.onopen = (event) => {
          console.log("WebSocket connection opened:", event);
        };
        return () => {
          socket.onclose = function (event) {
            console.log("WebSocket connection closed:", event);
          };
        };
      }, [socket]);

    socket.onmessage=(e)=>{
        console.log(e)
        const getCouponList= async() =>{
            try{
                const res = await get(`${process.env.REACT_APP_API_URL}/pos/coupon/list/${e.data}`);
                if(res.length === 0) setFalseModal(true)
                else{
                    const dataWithIds = res.map((item, index) => ({
                        ...item,
                        id: index + 1
                    }));
                    setData(dataWithIds);
                    setModal(true)
                }
            }
            catch(e){return}
        }
        getCouponList()
    }
    useEffect(()=>{
        let calCnt = 0
        let calMoney = 0
        totalList.data.forEach((item) =>{
            if(item.code.slice(0,2) !=='SL'){
                calCnt += item.quantity
                calMoney += item.total
            }
        })
        dispatch(setTotalMoney(calMoney))
        setTotal({
            cnt : calCnt,
            money : calMoney,
        })
        // eslint-disable-next-line
    },[totalList.data])

    return(
        <div className="ProductList">
            <div className="ProductListTop">
                <div className="TopBar">
                    <p className="Width10P">작업</p>
                    <p className="Width10P">상품ID</p>
                    <p className="Width40P">상품명</p>
                    <p className="Width15P">단가</p>
                    <p className="Width10P">수량</p>
                    <p className="Width15P_last">합계</p>
                </div>
                <div className="ProductListTopOverflow">
                    {totalList.data.map((item, index) => (
                    <div key={index}>
                         <div className="MenuInfo">
                            <p className="Width10P">{item.status}</p>
                            <p className="Width10P">{item.code}</p>
                            <p className="Width40P">{item.name}</p>
                            {item.status === '할인' ? 
                                <p className="Width15P">{item.price.toLocaleString()}</p>
                                : <p className="Width15P">{item.price.toLocaleString()}원</p>
                            }
                            <p className="Width10P">{item.quantity}</p>
                            {item.status === '할인' ? 
                                <p className="Width15P">{item.total.toLocaleString()}</p>
                                : <p className="Width15P">{item.total.toLocaleString()}원</p>
                            }
                        </div>
                        <hr/>
                    </div>
                    ))}
                </div>
            </div>
            <div className="TotalInfo">
                <div>
                    <p id="leftP">총 판매 수량</p>
                    <p id="rightP">{total.cnt}</p>
                </div>
                <hr/>
                <div>
                    <p id="leftP">총 판매 금액</p>
                    <p id="rightP">{total.money.toLocaleString()}</p>
                </div>
            </div>
            {falseModal && <NoListModal onClose={() => {setFalseModal(false)}}/>}
            {modal&& <CouponModal 
                props={data}
                onClose={(coupon) => {
                    if(coupon.status === '할인'){
                        dispatch(addItem(coupon))
                        dispatch(setCouponId(coupon.code.slice(2)))
                        dispatch(setCoupon(coupon.name))
                    }
                    setModal(false)}}
            />}
        </div>
    )
}
export default ProductList