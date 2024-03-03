import React, { useEffect, useState,useMemo } from "react";
import 'css/Exhibition/List.css'
import Pompeii from 'assets/Pompeii.png'
import items from 'assets/exhibition.json'
import useGet from "hooks/useGet";
import usePost from "hooks/usePost";
import NoListModal from "components/Modal/NoListModal";
import ExhibitionModal from "components/Modal/ExhibitionModal";
const List=()=>{
    const exhibitionName = "폼페이 유물전"
    const exhibitionSubName = "<그대, 그곳에 있었다>"
    const {get} = useGet()
    const [coupon, setCoupon] = useState()
    const [couponId, setCouponId] = useState()
    const [data, setData] = useState([])
    const [couponList,setCouponList] =useState([])
    const [falseModal, setFalseModal] = useState(false)
    const [modal,setModal] =useState(false)
    const [total, setTotal] = useState(0)
    useEffect(()=>{
        let sum = 0;
        data.forEach(item => {
            sum += item.money;
        });
        setTotal(sum);
    },[data])

    const socket =useMemo(() => {
        return new WebSocket(`wss://${process.env.REACT_APP_API_URL.split('//')[1]}/socket/exhibition`);
    }, []); 
    
    socket.onmessage=(e)=>{
        const getCouponList = async () => {
            try {
                const res = await get(`${process.env.REACT_APP_API_URL}/pos/coupon/list/${e.data}`);
                const filteredRes = res.filter(item => item.couponContent.includes('전시회'));
                if (filteredRes.length === 0) setFalseModal(true);
                else {
                    const dataWithIds = filteredRes.map((item, index) => ({
                        ...item,
                        id: index + 1 // 각 항목에 고유한 id 추가
                    }));
                    setCouponList(dataWithIds);
                    setModal(true);
                }
            } catch (e) {}
        };
        getCouponList();
    }
    
    const CouponClick =()=>{
        const {post} = usePost()
        const setCouponTrue =async()=>{
            try{
                await post(`${process.env.REACT_APP_API_URL}/pos/coupon/use`, {storeName : `${couponId}`})
            }
            catch(e){return}
        }
        setCouponTrue()
    }

    return(
        <div className="List">
            <div className="imgDiv">
                <img alt="pompeii" src={Pompeii}/>
                <div className="imgName">
                    <p>{exhibitionName}</p>
                    <p>{exhibitionSubName}</p>
                </div>
            </div>
            <div className="ListHeader">
                <p id="nameTag">상품명</p>
                <p id="numberTag">수량</p>
                <p id="moneyTag">금액 / 할인율</p>
            </div>
            <div className="ListItems">
                {data.map((item, index) => (
                    <div key={index} className="ListItem">
                        <p id="nameTag">{exhibitionName + exhibitionSubName + " " + item.name}</p>
                        <p id="numberTag">{item.count}</p>
                        <p id="moneyTag">{item.money.toLocaleString()}</p>
                    </div>
                ))}
            </div>
            <div className="ListButton">
                <button onClick={() => setData(prev => {return [...prev, items.items[0]]})}>성인</button>
                <button onClick={() => setData(prev => {return [...prev, items.items[1]]})}>어린이 및 청소년</button>
                <button onClick={() => setData(prev => {return [...prev, items.items[2]]})}>특별할인</button>
                <button id="clear" onClick={() => {setData([]) 
                    setCoupon(undefined)}}>초기화</button>
            </div>
            <div className="totalEx">
                <p id="totalMoney">{total.toLocaleString()}</p>
                <p id="totalMinus">-</p>
                <div id="totalCoupon">
                    {coupon !== undefined ?
                    <>
                        <p id="couponName">{coupon}</p>
                        <p id="couponMoney">{(total * 0.5).toLocaleString()}</p>
                    </>
                    :<p>0</p>
                    }
                </div>
                <p id="totalEqual">=</p>
                <p id="totalResult">{
                    coupon !== undefined? (total * 0.5).toLocaleString() : total.toLocaleString()}</p>
            </div>
            <button className="payButton" onClick={CouponClick}>결제</button>
            {falseModal && <NoListModal onClose={() => {setFalseModal(false)}}/>}
            {modal && <ExhibitionModal props={couponList} onClose={(selectedC) => {setCouponId(selectedC.id)
                                                                                    setCoupon(selectedC.name)
                                                                                    setModal(false)}}/>}
        </div>
    )

}
export default List