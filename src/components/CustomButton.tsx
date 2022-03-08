import React from "react";
import styled from "styled-components";

const Button = styled.button`
  align-self: flex-start;

  padding: 1.5rem 2rem;
  cursor: pointer;

  background-color: var(--color-primary-red);
  color: white;
  border: none;

  font-family: inherit;
  font-size: 1.6rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;

  transition: all 0.2s ease-in;

  :hover {
    background-color: var(--color-primary-red-hover);
  }
`;

interface ButtonProps {
  text: string;
}

const CustomButton: React.FC<ButtonProps> = ({ text }) => {
  return <Button>{text}</Button>;
};

export default CustomButton;
