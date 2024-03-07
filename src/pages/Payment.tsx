import React, {useEffect} from "react";
import PaymentHeader from "components/Payment/PaymentHeader"
import ProductList from "components/Payment/ProductList"
import ProductRes from "components/Payment/ProductRes"
import MenuButtons from "components/Payment/MenuButtons";
import styled from "styled-components"
import "css/Payment/Payment.css"

const Div = styled.div`
    display:flex;
    overflow-y:hidden;
    flex-direction:row;
    padding : 0.5rem;
    
`
const Payment =()=>{
    useEffect(() => {
        document.body.style.backgroundColor = "#CAD2D6";
        return () => {
          document.body.style.backgroundColor = "var(--lightGreen)";
        };
      }, []); 
    return(
        <div className="Payment">
            <PaymentHeader/>
            <Div>
                <div>
                    <ProductList/>
                    <ProductRes/>
                </div>
                <div>
                    <MenuButtons/>
                </div>
            </Div>
        </div>
    )
}
export default Payment