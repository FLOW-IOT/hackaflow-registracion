import React, {useEffect} from "react";
import SuccessTv from "../assets/success-tv.png";
import FailureTv from "../assets/failure-tv.png";
import { Title, ContainerRight } from "./styles";

const Result = ({res, setRes}) => {
  useEffect(()=>{
    
  })
  return (
    <ContainerRight>
      {res === 'success' ?
      <>
      <img src={SuccessTv} alt="" />
      <Title>Te logueaste con éxito en tu TV</Title>
      </>
      :
      <>
      <img src={FailureTv} alt="" />
      <Title>Error en Inicio de sesión en tu TV</Title>
      <button onClick={() =>setRes(null)}>Volver a intentar</button>
      </>

}
    </ContainerRight>
  );
};

export default Result;
