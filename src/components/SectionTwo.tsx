import React from "react";
import styled from "styled-components";

import { cardData } from "../cardData";
import STwoCard from "./STwoCard";

const Container = styled.section`
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;

  padding: 5rem 12rem;

  @media (max-width: 1330px) {
    padding: 5rem;
  }

  @media (max-width: 600px) {
    padding: 3rem;
  }
`;

const CardList = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1170px) {
    flex-direction: column;
  }
`;

const SectionTwo: React.FC = () => {
  return (
    <Container>
      <CardList>
        {cardData.map((data) => {
          return <STwoCard key={data.id} {...data} />;
        })}
      </CardList>
    </Container>
  );
};

export default SectionTwo;
