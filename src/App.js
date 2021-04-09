import Login from "./components/Login";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
`;
function App() {
  return (
    <Wrapper>
      <Header />
      <Navbar />
      <Login></Login>
    </Wrapper>
  );
}

export default App;
