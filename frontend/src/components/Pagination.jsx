import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { nextPage, prevPage, navigatePage } from "@store/products.reducer";

const Container = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 20px 20px 100px 20px;
`;
const Button = styled.button`
  appearance: none;
  border: none;
  padding: 0 20px;
  min-height: 57px;
  min-width: 57px;
  color: inherit;
  font-size: 1rem;
  background-color: #f1f1f1;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.25s;

  &:hover {
    background-color: #dddddd;
  }
  &:disabled {
    background: none;
    pointer-events: none;
    color: grey;
  }
  &.active {
    color: #ffffff;
    background-color: var(--primary);
  }
`;

function generatePaginationNumbers(activePage, pagesCount) {
  return Array(pagesCount)
    .fill(0)
    .map((_, index) => index + 1);
}

export default function Pagination() {
  const { activePage, pagesCount } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <Container>
      <Button disabled={activePage === 1} onClick={() => dispatch(prevPage())}>
        Prev
      </Button>
      {generatePaginationNumbers(activePage, pagesCount).map((number) => (
        <Button
          key={number}
          className={activePage === number ? "active" : ""}
          onClick={() => dispatch(navigatePage(number))}
        >
          {number}
        </Button>
      ))}
      <Button
        disabled={activePage === pagesCount}
        onClick={() => dispatch(nextPage())}
      >
        Next
      </Button>
    </Container>
  );
}
