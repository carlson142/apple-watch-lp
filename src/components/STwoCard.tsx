import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 35rem;
  min-height: 30rem;

  :not(:last-child) {
    ::after {
      content: "...";
      display: block;

      font-size: 5rem;
      color: var(--color-secondary-gray);
    }
  }

  @media (max-width: 1170px) {
    max-width: 100vw;
    min-height: 25rem;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;

  margin-bottom: 5rem;
`;

const Text = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.6;
  color: #2a2a2a;
`;

const Button = styled.button`
  align-self: flex-start;
  margin-top: 3rem;
  margin-left: 4.5rem;

  border: none;
  cursor: pointer;

  background-color: transparent;
  color: var(--color-primary-red);

  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;

  transition: all 0.2s ease-in;

  ::after {
    content: "";
    display: block;

    height: 2px;
    width: 3rem;
    background-color: var(--color-primary-red);

    position: absolute;
    left: -3rem;
    top: 50%;
    transform: translate(-50%);

    transition: all 0.2s ease-in;
  }
  :hover::after {
    width: 5rem;
    left: -4rem;
  }

  :hover {
    margin-left: 6.5rem;
  }

  @media (max-width: 1170px) {
    align-self: center;
  }
`;

interface CardProps {
  title: string;
  text: string;
  btn: boolean;
}

const STwoCard: React.FC<CardProps> = ({ title, text, btn }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Text>{text}</Text>
      {btn && <Button>Learn more</Button>}
    </Container>
  );
};

export default STwoCard;
