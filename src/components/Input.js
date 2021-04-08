import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`

&& input{
    border: ${props => props.error ? '2px solid red' : 'none'};
    color: black;
}
`

const Input = ({name ,type, value, changeCallback, blurCallback, placeholder, error}) => {
    return (
        <InputWrapper
        error={error}>
      <input
      name={name}
      type={type}
      onChange={(e) => changeCallback(e)}
      onBlur={e => blurCallback(e)}
      value={value}
        />
        {error && <p>{error}</p>}
    </InputWrapper>
    )
}

export default Input
