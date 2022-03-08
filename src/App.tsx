import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";

const Container = styled.main`
  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Container>
  );
};

export default App;
