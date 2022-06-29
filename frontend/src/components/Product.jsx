import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Button from "@components/Button";

import { addToShoppingCart } from "@store/shoppingCart.reducer";

const Container = styled(motion.div)`
  cursor: pointer;
`;
const Thumbnail = styled(Link)`
  display: block;
  position: relative;
  height: 0;
  padding-top: 56.25%;
  overflow: hidden;
  border-radius: 10px;
`;
const ThumbnailImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
const Details = styled.div`
  padding: 20px 0;
`;
const Title = styled.h4`
  font-size: 1.2rem;

  & a {
    text-decoration: none;
    color: var(--text);
  }
  & a:hover {
    color: var(--primary);
    text-decoration: underline;
  }
`;
const Brandname = styled.p`
  padding-top: 5px;
  color: var(--text-lighter);
`;
const Purchase = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Price = styled.span`
  font-weight: normal;
  font-size: 1.5rem;
  color: var(--primary);
`;

export default function Product({ id, title, brand, thumbnail, price }) {
  const dispatch = useDispatch();

  return (
    <Container layout>
      <Thumbnail to={`/product/${id}`}>
        <ThumbnailImg src={thumbnail} alt={title} />
      </Thumbnail>
      <Details>
        <Title>
          <Link to={`/product/${id}`}>{title}</Link>
        </Title>
        <Brandname>{brand}</Brandname>
        <Purchase>
          <Price>${price}</Price>
          <Button
            onClick={() =>
              dispatch(
                addToShoppingCart({ id, title, brand, thumbnail, price })
              )
            }
          >
            <i className="icon-cart"></i> Tanlash
          </Button>
        </Purchase>
      </Details>
    </Container>
  );
}
