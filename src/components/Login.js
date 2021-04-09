import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";

const Wrapper = styled.div`
  display: flex;
  padding-top: 50px;
  & div:nth-child(1) {
    width: 25%;
    min-width: 300px;
  }
  & div:last-child{
    margin-bottom: 25px
    width: 75%
  }
`;
const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;
const LoginButton = styled.button`
  text-transform: uppercase;
  color: white;
  padding: 8px;
  padding-left: 15px;
  border: none;
  border-left: 5px solid #57d4ac;
  font-size: 36px;
  background: none;
  font-family: "roboto", sans-serif;
  margin: 15px;
  font-weight: bold;
`;

const Title = styled.h2`
  font-family: "roboto", sans-serif;
  font-size: 36px;
`;

const SubmitButton = styled.button`
  background-color: #57d4ac;
  border-radius: 20px;
  padding: 10px;
  width: 250px;
  color: #000;
`;

const Login = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    //mandamo toda la data al back asi re lindo
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setCode(value);
  };

  const handleError = () => {
    if (!code) {
      setError("El código debe contener al menos X caracteres");
    } else {
      setError("");
    }
  };

  return (
    <Wrapper>
      <Container>
        <LoginButton>easy login</LoginButton>
      </Container>
      <Container>
        <Title>
          ¿Querés loguearte en tu TV?<br/> Ingresa que el código que aparece en la TV
        </Title>

        <Input
          name="code"
          type="text"
          value={code}
          placeholder="Código"
          changeCallback={handleChange}
          blurCallback={handleError}
          error={error}
        />
        <SubmitButton onClick={handleSubmit}>INGRESAR</SubmitButton>
      </Container>
    </Wrapper>
  );
};

export default Login;
