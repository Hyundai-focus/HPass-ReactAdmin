import React,{useEffect, useMemo,useState} from "react"
import 'css/Payment/ProductList.css'
import CouponModal from "components/Modal/CouponModal"
import { useDispatch } from 'react-redux'
import { setCoupon } from "store/reducer/couponMoney"
import { useSelector } from 'react-redux';
import { RootState } from "store/store";
import { setTotalMoney } from "store/reducer/totalMoney"
import { addItem } from "store/reducer/paymentList"
import useGet from "hooks/useGet"

const ProductList =() =>{
    const totalList = useSelector((state : RootState) => state.paymentList);
    const dispatch = useDispatch();
    const [data,setData] =useState([])
    const [modal,setModal] =useState(false)
    const [total, setTotal] = useState({
        cnt : 0,
        money: 0
    })
    const { get } = useGet();

    const socket =useMemo(() => {
        return new WebSocket(`ws://${process.env.REACT_APP_API_URL.split('//')[1]}/socket/coupon`);
    }, []); 

    socket.onmessage=(e)=>{
        console.log(e.data)
        const getCouponList= async() =>{
            try{
                const res = await get(`${process.env.REACT_APP_API_URL}/pos/coupon/list/${e.data}`);
                console.log(res)
                const dataWithIds = res.map((item, index) => ({
                    ...item,
                    id: index + 1
                }));
                setData(dataWithIds);
            }
            catch(e){
                console.log(e)
                return
            }
        }
        getCouponList()
        setModal(true)
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
                    <p style={{width:'10%'}}>&nbsp;작업</p>
                    <hr/>
                    <p style={{width:'10%'}}>상품ID</p>
                    <hr/>
                    <p style={{width:'38%'}}>상품명</p>
                    <hr/>
                    <p style={{width:'14%'}}>단가</p>
                    <hr/>
                    <p style={{width:'6%'}}>수량</p>
                    <hr/>
                    <p style={{width:'17%'}}>합계</p>
                </div>
                <div className="ProductListTopOverflow">
                    <table className="ProductTable">
                        <thead style={{visibility:'collapse'}}>
                            <tr>
                            <th style={{width:'10%'}}/>
                            <th style={{width:'10%'}}/>
                            <th style={{width:'40%'}}/>
                            <th style={{width:'17%'}}/>
                            <th style={{width:'6%'}}/>
                            <th style={{width:'17%'}}/>
                            </tr>
                        </thead>
                        <tbody>
                            {totalList.data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.status}</td>
                                <td>{item.code}</td>
                                <td>{item.name}</td>
                                {item.status === '할인' ? 
                                <td>{item.price.toLocaleString()}</td>
                                : <td>{item.price.toLocaleString()}원</td>
                                }
                                <td>{item.quantity}</td>
                                {item.status === '할인' ? 
                                <td>{item.total.toLocaleString()}</td>
                                : <td>{item.total.toLocaleString()}원</td>
                                }
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="TotalInfo">
                <div>
                    <p id="leftP">총 판매 수량</p>
                    <p id="rightP">{total.cnt}</p>
                </div>
                <hr/>
                <div>
                    <p id="leftP">총 판매 수량</p>
                    <p id="rightP">{total.money}</p>
                </div>
            </div>
            {modal&& <CouponModal 
                props={data}
                onClose={(coupon) => {
                    if(coupon.status === '할인'){
                        dispatch(addItem(coupon))
                        dispatch(setCoupon(coupon.name))
                    }
                    setModal(false)}}
            />}
        </div>
    )
}
export default ProductList