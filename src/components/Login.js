import React, { useState } from "react";
import styled from "styled-components";
import Success from "./Success";
import Form from "./Form";
import { Container } from "./styles";

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
  const wasSuccessful = true;

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
      </Container>
    </Wrapper>
  );
};

export default Login;
