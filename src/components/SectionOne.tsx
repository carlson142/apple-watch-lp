import React from "react";
import styled from "styled-components";

import watch from "../img/watches.jpg";
import CustomButton from "./CustomButton";

const Container = styled.section`
  width: 100%;
  max-width: 144rem;
  min-height: 80vh;
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
    min-height: 100vh;
  }

  @media (max-width: 600px) {
    border-bottom: none;
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
  position: relative;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const ImgCont = styled.div`
  position: absolute;
  right: -35rem;

  @media (min-width: 1441px) {
    right: -55rem;
  }

  @media (max-width: 1000px) {
    right: 0rem;
    right: 50%;
    transform: translate(50%);
  }
`;

const Image = styled.img`
  @media (max-width: 1000px) {
    height: 51rem;
  }

  @media (max-width: 600px) {
    width: 90vw;
    height: auto;
    margin-top: 5rem;
  }
`;

const SectionOne: React.FC = () => {
  return (
    <Container>
      <Left>
        <Header>Freedom calls.</Header>
        <Text>
          Answer a call from your surfboard. Ask Siri to send a message. Stream
          your favorite song on your run. And do it all while leaving your phone
          behind. Introducing Apple Watch Series 3 with cellular. Now you have
          the freedom to go with just your watch
        </Text>
        <CustomButton text={"watch the keynote"} />
      </Left>

      <Right>
        <ImgCont>
          <Image src={watch} alt="watch" />
        </ImgCont>
      </Right>
    </Container>
  );
};

export default SectionOne;
