import styled from "styled-components";

export const Title = styled.h2`
  font-family: "roboto", sans-serif;
  font-size: 36px;
`;

export const ContainerLeft = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 25%;
  min-width: 300px;
`;

export const ContainerRight = styled.div`
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 20px;

  width: 75%;
  img {
    width: 300px;
    margin: 40px 0;
  }
  button {
    margin: 20px 0;
    width: 300px;
    font-family: "roboto", sans-serif;
    font-size: 24px;
  }
`;
