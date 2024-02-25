import React from "react";
import "css/NewProd/ProdGraph.css"
import { AreaChart, XAxis,YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer } from "recharts";

const ProdGraph=()=>{
    const data = [
        { name: '02.23', uv: 4, pv: 13 },
        { name: '02.24', uv: 1, pv: 10 },
        { name: '02.25', uv: 5, pv: 10 },
        { name: '02.26', uv: 1, pv: 5 },
        { name: '02.27', uv: 2, pv: 3 },
    ];
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
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#B0E1D0" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="pv" stroke="#cbcbcb" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </ResponsiveContainer>
            </div>
        </div>
    )
}
export default ProdGraph