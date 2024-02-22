import React from "react"
import 'css/Payment/ProductList.css'


const data = [
    {
      status:'구매',
      code: 'PD012',
      name: '철재에 크롬 코팅 가공마감',
      price: 48000,
      quantity: 1,
      total: 48000
    },
    {
        status:'할인',
        code: 'PD012',
        name: '철재에 크롬 코팅 가공마감',
        price: 48000,
        quantity: 1,
        total: 48000
      } 
    // 데이터가 더 있다면 여기에 추가...
  ];


const ProductList =() =>{
    return(
        <div className="ProductList">
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
                    {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.status}</td>
                        <td>{item.code}</td>
                        <td>{item.name}</td>
                        <td>{item.price.toLocaleString()}원</td>
                        <td>{item.quantity}</td>
                        <td>{item.total.toLocaleString()}원</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ProductList