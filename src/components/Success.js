import React from "react";
import SuccessTv from "../assets/success-tv.png";
import { Title, ContainerRight } from "./styles";

const Success = () => {
  return (
    <ContainerRight>
      <img src={SuccessTv} alt="" />
      <Title>Te logueaste con éxito en tu TV</Title>
    </ContainerRight>
  );
};

export default Success;
