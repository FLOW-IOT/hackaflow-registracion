import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  && input {
    padding: 40px 40px 10px 0;
    border-bottom: ${(props) => (props.error ? "2px solid red" : "1px solid #686868")};
    font-family: "roboto", sans-serif;
    color: #57D4AC;
    background-color: #000;
    font-family: "roboto", sans-serif;
    font-size: 36px;
    &:focus{
        outline: none;
    }
    &::placeholder {
        color: #686868;
    font-family: "roboto", sans-serif;
    font-size: 36px;
    width: 700px;
  }
  }
`;
const Error = styled.p`
    font-size: 14px;
    color: red;
`

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
