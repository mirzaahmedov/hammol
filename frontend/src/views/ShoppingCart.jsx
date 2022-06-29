import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { removeFromShoppingCart } from "@store/shoppingCart.reducer";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  width: 100%;
  padding: 20px;
`;
const Items = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Item = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;
const Thumbnail = styled.img`
  height: 80px;
  width: 140px;
  object-fit: cover;
  object-position: center;
`;
const Title = styled.h4`
  flex: 1;
  font-size: 1.2rem;
`;
const Price = styled.span`
  font-weight: normal;
  font-size: 1.5rem;
  color: var(--primary);
`;
const DeleteButton = styled.button`
  appearance: none;
  border: none;
  padding: 10px 20px;
  color: #ffffff;
  background-color: red;
  border-radius: 5px;
  cursor: pointer;
`;

export default function ShoppingCart() {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  return (
    <Container>
      <Items>
        {shoppingCart &&
          shoppingCart.map((item, index) => (
            <Item key={index} layout>
              <Thumbnail src={item.thumbnail} alt={item.title} />
              <Title>{item.title}</Title>
              <Price>${item.price}</Price>
              <DeleteButton
                onClick={() => dispatch(removeFromShoppingCart(index))}
              >
                O'chirish
              </DeleteButton>
            </Item>
          ))}
      </Items>
    </Container>
  );
}
