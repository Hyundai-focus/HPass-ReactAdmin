import React, { useEffect, useState } from "react";
import "css/NewProd/ProdGraph.css"
import useGet from "hooks/useGet"
import { AreaChart, XAxis,YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from "recharts";

const ProdGraph=({props})=>{
    const { get } = useGet();
    const [data,setData] = useState([
        {
            "날짜":"",
            "전체:":0,
            "수령":0
        }
    ])
    useEffect(()=>{
        const getStatus = async() =>{
            try{
                const res = await get(`${process.env.REACT_APP_API_URL}/pos/product/new/status/${props}`);
                console.log(res)
                const transformedData = res.map((item) => ({
                    "날짜": item.historyDate,
                    "전체": item.notReceive + item.receive,
                    "수령": item.receive
                  }));
                setData(transformedData)
              }catch(e){return}
          }
          getStatus()
    },[])
    return(
        <div className="ProdGraph">
            <div className="chartTop">
                <p>수령 현황</p>
                <div className="colorChart">
                    <div className="MiniDiv">
                        <div className="AllRound"></div>
                        <p>전체</p>
                    </div>
                    <div className="MiniDiv">
                        <div className="takeRound"></div>
                        <p>수령완료</p>
                    </div>

                </div>
            </div>
            <div className="Chart">
            <ResponsiveContainer width="95%" height="95%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#B0E1D0" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#B0E1D0" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#cbcbcb" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#cbcbcb" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="날짜" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="전체" stroke="#B0E1D0" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="수령" stroke="#cbcbcb" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
            </div>
        </div>
    )
}
export default ProdGraph