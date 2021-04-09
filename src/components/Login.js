import React, { useState } from "react";
import axios from 'axios'
import styled from "styled-components";
import Result from "./Result";
import Form from "./Form";
import { ContainerLeft } from "./styles";
import {validateLogin, handleError} from '../services/login'

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
const BASE_URL = 'https://hackaflow.herokuapp.com/api/v1';

const client = axios.create({
  BASE_URL,
});
const Login = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null)

  const handleSubmit = async () => {
    if(!code) return;
    try {
      const res =  await client.request({
        url: `${BASE_URL}/credentials`,
        method: 'POST',
        data: {code}
      });
      // if(res.status === 200){
        setResult('success')
      // }
    }
    catch(err) {
      console.log(err.response.data)
      setResult('failure')
    }
    
    validateLogin(code)
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

      {result ? (
        <Result res={result} setRes={setResult} />
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
