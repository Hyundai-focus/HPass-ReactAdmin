import React, {useEffect} from "react";
import styled from "styled-components"
import List from "components/Exhibition/List";

const Div = styled.div`
    display:flex;
    overflow-y:hidden;
    flex-direction:row;
`
const ListDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top:1rem
`
const ExhibitionPos =()=>{    
    useEffect(() => {
    document.body.style.backgroundColor = "#CAD2D6";
    return () => {
      document.body.style.backgroundColor = "var(--lightGreen)";
    };
  }, []); 
    return(
        <Div>
            <ListDiv>
                <List/>
            </ListDiv>
        </Div>
    )
}
export default ExhibitionPos