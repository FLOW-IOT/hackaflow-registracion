import styled from "styled-components";
import Input from "./Input";
import { Title, ContainerRight } from "./styles";

const SubmitButton = styled.button`
  background-color: #57d4ac;
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
      <Title>Ingresa que el código que aparece en la TV</Title>
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
    </ContainerRight>
  );
};

export default Form;
