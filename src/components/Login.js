import React, { useState } from "react";
import styled from "styled-components";
import Success from "./Success";
import Form from "./Form";
import { ContainerLeft } from "./styles";

const Wrapper = styled.div`
  display: flex;
  padding-top: 50px;
  background: #000;
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

const Login = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const wasSuccessful = false;

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
      <ContainerLeft>
        <LoginButton>easy login</LoginButton>
      </ContainerLeft>

      {wasSuccessful ? (
        <Success />
      ) : (
        <Form
          code={code}
          handleChange={handleChange}
          handleError={handleError}
          error={error}
          handleSubmit={handleSubmit}
        />
      )}
    </Wrapper>
  );
};

export default Login;
