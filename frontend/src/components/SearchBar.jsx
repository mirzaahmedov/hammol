import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";

import Categories from "@components/Categories";

import { setProducts } from "@store/products.reducer";

const Container = styled.div`
  padding: 20px;
`;
const SearchInput = styled.input`
  --placeholder: #cccccc;

  appearance: none;
  background: none;
  border: none;
  outline: none;
  width: 100%;
  padding: 10px 0;
  font-size: 3rem;
  border-bottom: 1px solid var(--grey);

  &:focus {
    color: var(--primary);
    border-color: var(--primary);
  }
  &::placeholder {
    opacity: 1;
    color: var(--placeholder);
    transition: opacity 0.25s;
  }
  &:-ms-input-placeholder {
    opacity: 1;
    color: var(--placeholder);
    transition: opacity 0.25s;
  }
  &:focus::placeholder {
    opacity: 0;
  }
  &:focus:-ms-input-placeholder {
    opacity: 0;
  }
`;

export default function SearchBar() {
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [term, setTerm] = React.useState("");

  const dispatch = useDispatch();

  React.useEffect(
    function () {
      axios
        .get(
          `http://localhost:3001/api/product?name=${term}&category=${selectedCategory}`
        )
        .then((response) => dispatch(setProducts(response.data.products)));
    },
    [term, selectedCategory]
  );

  return (
    <Container>
      <SearchInput
        placeholder="Izlash..."
        value={term}
        onChange={(event) => setTerm(event.target.value)}
      />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </Container>
  );
}
