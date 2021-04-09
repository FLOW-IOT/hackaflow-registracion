import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 700px;
  && input {
    padding: 40px 40px 10px 0;
    border-bottom: ${(props) =>
      props.error ? "2px solid red" : "1px solid #686868"};
    font-family: "roboto", sans-serif;
    color: #57d4ac;
    background-color: #000;
    font-family: "roboto", sans-serif;
    font-size: 36px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #686868;
      font-family: "roboto", sans-serif;
      font-size: 36px;
    }
  }
`;
const Error = styled.p`
  font-size: 14px;
  color: red;
`;

const Input = ({
  name,
  type,
  value,
  changeCallback,
  blurCallback,
  placeholder,
  error,
}) => {
  return (
    <InputWrapper error={error}>
      <input
        name={name}
        type={type}
        onChange={(e) => changeCallback(e)}
        onBlur={(e) => blurCallback(e)}
        value={value}
        placeholder={placeholder}
      />
      {error && <Error>{error}</Error>}
    </InputWrapper>
  );
};

export default Input;
