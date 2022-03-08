import React from "react";
import styled from "styled-components";

import image from "../img/preview.jpg";
import CustomButton from "./CustomButton";

const Container = styled.section`
  width: 100%;
  max-width: 144rem;
  height: 80vh;
  margin: 0 auto;

  display: flex;
  overflow: hidden;

  border-bottom: 1px solid var(--color-secondary-gray-border);

  @media (min-width: 1441px) {
    max-width: 100vw;
    padding: 0 25rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    height: 100vh;
  }
`;

const Left = styled.div`
  width: 50%;

  padding: 5rem;
  padding-left: 12rem;

  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 100%;
    padding-left: 5rem;
  }

  @media (max-width: 600px) {
    padding: 3rem;
  }
`;

const Header = styled.h1`
  color: black;
  font-size: 5rem;

  margin-bottom: 5rem;

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  font-size: 1.6rem;
  line-height: 1.6;

  width: 81%;
  color: var(--color-secondary-gray);

  position: relative;
  margin-left: 5rem;
  margin-bottom: 5rem;

  @media (max-width: 600px) {
    margin-left: 2rem;
    width: 90%;
  }

  ::after {
    content: "";
    display: block;

    height: 100%;
    width: 2px;
    background-color: var(--color-secondary-gray);

    position: absolute;
    top: 0;
    left: -5rem;

    @media (max-width: 600px) {
      left: -2rem;
    }
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;

  padding-bottom: 5rem;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const ImgCont = styled.div`
  height: 100%;

  @media (max-width: 1000px) {
    height: 50%;
  }

  @media (max-width: 600px) {
    height: 45%;
  }
`;

const Image = styled.img`
  height: 100%;
`;

const SectionThree: React.FC = () => {
  return (
    <Container>
      <Left>
        <Header>Nike Sport Band. Light. Flexible. Breathable.</Header>
        <Text>
          Made from the same durable, lightweight fluoroelastomer as the
          original Apple Watch Sport Band, the Nike Sport Band reduces weight
          and improves ventilation via row after row of compression-molded
          perforations.
        </Text>
        <CustomButton text={"buy now"} />
      </Left>

      <Right>
        <ImgCont>
          <Image src={image} alt="watch" />
        </ImgCont>
      </Right>
    </Container>
  );
};

export default SectionThree;
