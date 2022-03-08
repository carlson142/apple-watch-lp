import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0000006c;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
`;

const MenuCont = styled.div`
  height: 100vh;
  width: 70vw;
  background-color: white;

  position: fixed;
  right: 0;

  padding: 2.5rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 80vw;
  }
`;

const IconCont = styled.div`
  position: absolute;
  right: 5rem;
  top: 2.5rem;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Item = styled.li`
  font-size: 3rem;

  :not(:last-child) {
    margin-bottom: 3rem;
  }
`;

interface MenuProps {
  openMenu(): void;
}

const MobileMenu: React.FC<MenuProps> = ({ openMenu }) => {
  return (
    <Container>
      <MenuCont>
        <IconCont>
          <IoClose size={25} onClick={openMenu} />
        </IconCont>

        <List>
          <Item>About</Item>
          <Item>Offers</Item>
          <Item>Services</Item>
        </List>
      </MenuCont>
    </Container>
  );
};

export default MobileMenu;
