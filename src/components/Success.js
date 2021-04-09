import React from "react";
import SuccessTv from "../assets/success-tv.png";
import { Title, Container } from "./styles";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Success = () => {
  return (
    <Container>
      <img src={SuccessTv} alt="" />
      <Title>Te logueaste con éxito en tu TV</Title>
    </Container>
  );
};

export default Success;
