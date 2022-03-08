import React, { useState } from "react";
import styled from "styled-components";
import { IoClose, IoMenu } from "react-icons/io5";

import logo from "../img/logo.svg";
import MobileMenu from "./MobileMenu";

const Container = styled.nav`
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 12rem;
  padding-right: 25rem;

  position: relative;

  @media (max-width: 1000px) {
    padding-right: 12rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 5rem;
  }
`;

const Logo = styled.img``;

const List = styled.ul`
  list-style: none;
  display: flex;

  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li`
  font-size: 1.6rem;
  color: var(--color-secondary-gray);
  cursor: pointer;
  position: relative;

  transition: all 0.2s ease-in;

  :not(:last-child) {
    margin-right: 2rem;
  }

  :hover {
    color: black;
  }

  ::after {
    content: "";
    display: block;

    height: 2px;
    width: 100%;
    background-color: black;

    position: absolute;
    bottom: -1rem;
    transition: all 0.2s ease-in;

    opacity: 0;
  }

  :hover::after {
    opacity: 1;
  }
`;

const SearchCont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Input = styled.input.attrs({
  type: "text",
  placeholder: "How can we help you?",
})`
  border: none;
  outline: none;

  padding: 1rem 0;
  max-width: 17rem;

  border-bottom: 2px solid var(--color-secondary-gray);
  font-size: 1.6rem;

  margin-left: 2rem;
`;

const MobileCont = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [search, setSearc] = useState<string>("");

  const [menu, setMenu] = useState<boolean>(false);

  const addSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearc(e.target.value);
  };

  const clearSearch = () => {
    setSearc("");
  };

  const openMenu = () => {
    setMenu((prev) => !prev);
  };

  console.log(menu);

  return (
    <Container>
      <Logo src={logo} alt="apple" />

      <List>
        <Item>About</Item>
        <Item>Offers</Item>
        <Item>Services</Item>
      </List>

      <SearchCont>
        <Input
          value={search}
          onChange={(e) => {
            addSearch(e);
          }}
        />

        <IoClose
          size={20}
          style={{ cursor: "pointer" }}
          onClick={clearSearch}
        />
      </SearchCont>

      <MobileCont>
        <IoMenu size={25} onClick={openMenu} />
        {menu && <MobileMenu openMenu={openMenu} />}
      </MobileCont>
    </Container>
  );
};

export default Header;
