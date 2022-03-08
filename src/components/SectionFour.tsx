import React from "react";
import styled from "styled-components";

import hero from "../img/runners.jpg";
import CustomButton from "./CustomButton";

const Container = styled.section`
  width: 100vw;
  height: 100vh;

  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${hero});
  background-size: cover;
  background-blend-mode: saturation;

  display: flex;
`;

const Left = styled.div`
  width: 50%;

  @media (max-width: 1000px) {
    width: 0;
  }
`;

const Right = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 5rem;
  }

  @media (max-width: 600px) {
    padding: 3rem;
  }
`;

const Header = styled.h1`
  color: white;
  font-size: 5rem;

  margin-bottom: 5rem;

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.6;

  width: 81%;
  color: var(--color-secondary-gray);

  position: relative;
  margin-left: 5rem;
  margin-bottom: 5rem;

  color: white;

  ::after {
    content: "";
    display: block;

    height: 100%;
    width: 2px;
    background-color: white;

    position: absolute;
    top: 0;
    left: -5rem;
  }
`;

const SectionFour: React.FC = () => {
  return (
    <Container>
      <Left></Left>
      <Right>
        <Header>Take control of your health.</Header>
        <Text>
          With built-in GPS and altimeter, Apple Watch Nike+ has all the
          features to help you take your run to the next level. You can even
          pair yourwatch wirelessly with compatible gym equipment. And it's
          swimproof, so you can take a post-run dip in the pool.
        </Text>
        <CustomButton text={"explore features"} />
      </Right>
    </Container>
  );
};

export default SectionFour;
