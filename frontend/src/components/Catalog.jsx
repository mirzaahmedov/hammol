import React from "react";
import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";
import { useSelector } from "react-redux";

import Product from "@components/Product";

const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
`;

export default function Catalog() {
  const products = useSelector((state) => state.products);

  return (
    <Container>
      <Grid>
        {products.items &&
          products.items.map((product) => (
            <Product key={product.id} {...product} />
          ))}
      </Grid>
    </Container>
  );
}
