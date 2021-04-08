import React, { useState } from "react";
import styled from 'styled-components'
import Input from './Input'

const Wrapper = styled.div`
  display: flex;
  padding-top: 50px;
  & div:nth-child(1){
    max-width:25%;
  }
`
const Container = styled.div`
color: white;
  display: flex;
  flex-direction:column;
`
const LoginButton = styled.button`
  text-transform: uppercase;
  color: white;
  padding: 8px;
  padding-left: 15px;
  border: none;
  border-left: 5px solid #57D4AC;
  font-size: 36px;
  background: none;
  font-family: 'roboto', sans-serif;
  margin: 15px;
`
const Login = () => {
  const [email, setEmail] = useState({value:"", error: null});
  const [password, setPassword] = useState({value:"", error: null});
  const [code, setCode] = useState();

  const handleSubmit = () => {
    //mandamo toda la data al back asi re lindo
  };
  const handleChange = ({target}) =>{
    const {name, value} = target;
    if(name === 'email'){
        setEmail({value, error: null})
    }
    if(name === 'password'){
        setPassword({value, error: null})
    }
  }
  const handleError = ({target}) =>{
    const {name, value} = target;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(name === 'email'){
      if(!email.value){
        setEmail({...email, error: 'email cannot be blank'})
      }
      if(!re.test(String(email.value).toLowerCase())){
        setEmail({...email, error: 'Please use a vald email'})
      }
    }
    if(name === 'password'){
      if(!password.value){
        setPassword({...password, error: 'password cannot be empty'})
      }
      else if(password.value.length < 6){
        setPassword({...password, error: 'password too short'})
      }
    }
  }
  return (
    <Wrapper>
      <Container>
        <LoginButton>login</LoginButton>
      </Container>
      <Container>
        <Input
          name="email"
          type="email"
          value={email.value}
          placeholder="email"
          changeCallback={handleChange}
          blurCallback={handleError}
          error={email.error}
          />
          <Input
          name="password"
          type="password"
          value={password.value}
          placeholder="password"
          changeCallback={handleChange}
          blurCallback={handleError}
          error={password.error}
          />

      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input
        type="code"
        onChange={(e) => setCode(e.target.value)}
        value={code}
      />
      <button onClick={handleSubmit}> ENTRAR CON TODA VIOLENCIA</button>
      </Container>
    </Wrapper>
  );
};

export default Login;
