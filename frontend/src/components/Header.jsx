import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 20px;
  background-color: #ffffff;
`;
const Logo = styled.h1`
  font-size: 1.5rem;
  font-style: italic;
`;
const ShoppingCartButton = styled(Link)`
  text-decoration: none;
  color: var(--primary);
  padding: 10px 20px;
  font-size: 1rem;
  border: 1px solid var(--primary);
  border-radius: 10px;
  transition: color 0.25s, background-color 0.25s;

  & i {
    margin-inline-end: 5px;
  }
  &:hover {
    background-color: var(--primary);
    color: #ffffff;
  }
`;

export default function Header() {
  return (
    <Container>
      <Logo>Hammol</Logo>
      <ShoppingCartButton to="/shopping-cart">
        <i className="icon-cart"></i> Savatcha
      </ShoppingCartButton>
    </Container>
  );
}
