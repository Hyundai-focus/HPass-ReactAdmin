import React, {useState,useMemo,useEffect} from "react";
import Header from "components/Header";
import SideBar from "components/SideBar";
import ProdInfo from "components/NewProd/ProdInfo";
import ProdGraph from "components/NewProd/ProdGraph";
import ProdList from "components/NewProd/ProdList";
import NewProdModal from "components/Modal/NewProdModal";
import NoListModal from "components/Modal/NoListModal";
import "css/NewProd/NewProd.css"
import usePost from "hooks/usePost"
import useGet from "hooks/useGet";
const NewProd = () => {    
    const socket =useMemo(() => {
      return new WebSocket(`ws://${process.env.REACT_APP_API_URL.split('//')[1]}/socket/newProd`);
    }, []); 
    const [modal, setModal] = useState(false)
    const [falseModal, setFalseModal] = useState(false)
    const [memberNo, setmemberNo] = useState(0)
    const [modalData, setModalData] = useState({})
    const [prodData, setProdData] = useState([])
    const { post } = usePost();
    const { get } = useGet();

    useEffect(() => {
      const getProdList= async() =>{
        try{
            const res = await post(`${process.env.REACT_APP_API_URL}/pos/product/new`,{"storeName":"더현대 서울 1F 컨시어지"});
            setProdData(res)
          }catch(e){return}
      }
      getProdList()
      // eslint-disable-next-line
    }, []);

    socket.onmessage=(e)=>{
      console.log(e.data)
      setmemberNo(e.data)
      const getUserHistory= async() =>{
          try{
              const res = await get(`${process.env.REACT_APP_API_URL}/pos/product/new/apply/${e.data}`);
              if(res.productHistoryNo === null) setFalseModal(true)
              else{
                setModalData(res)
                setModal(true)
            } 
          }
          catch(e){return}
      }
      getUserHistory()
  }

    return(
        <>
            <Header/>
            <SideBar props={"product"}/>
            <div className="newProdBody">
            {prodData.map((item,index)=>{
              return(
              <div className="ProdBody" key={index}>
                <ProdInfo props={item}/>
                <ProdGraph props={item.prodNo}/>
                <ProdList props={item.prodNo}/>
              </div>)
            })}
            </div>
            {modal && <NewProdModal props={modalData} onClose={() => {setModal(false)}} memberNo={memberNo}/>}
            {falseModal && <NoListModal onClose={() => {setFalseModal(false)}}/>}
        </>
    )
}
export default NewProd