import React from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  && input {
    border: ${(props) => (props.error ? "2px solid red" : "none")};
    font-family: "roboto", sans-serif;
    border-bottom: 2px solid #686868;
    color: #686868;
    background-color: #000;
    &::after {
      border-bottom: 2px solid #686868;
      color: #686868;
      background-color: #000;
    }
  }
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
      {error && <p>{error}</p>}
    </InputWrapper>
  );
};

export default Input;
