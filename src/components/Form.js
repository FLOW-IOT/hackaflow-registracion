import styled from "styled-components";
import Input from "./Input";
import { Title, ContainerRight } from "./styles";

const SubmitButton = styled.button`
  background-color: ${props => props.disabled ? 'gray' : '#57d4ac'};
  border-radius: 20px;
  padding: 10px;
  width: 250px;
  margin-bottom: 25px;
  width: 75%;
  color: #000;
`;

const Form = ({ code, handleChange, handleError, error, handleSubmit }) => {
  return (
    <ContainerRight>
      {" "}
      <Title>
        ¿Querés loguearte en tu TV?
        <br />
      </Title>
      <Title>Ingresa el código que aparece en la TV</Title>
      <Input
        name="code"
        type="text"
        value={code}
        placeholder="Código"
        changeCallback={handleChange}
        blurCallback={handleError}
        error={error}
      />
      <SubmitButton onClick={handleSubmit} disabled={!code}>INGRESAR</SubmitButton>
    </ContainerRight>
  );
};

export default Form;
