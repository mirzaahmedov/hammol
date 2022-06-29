import React from "react";
import styled from "styled-components";
import axios from "axios";

import RadioButton from "@components/RadioButton";

const Container = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px 0;
`;

export default function Categories({ selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = React.useState(null);

  React.useEffect(function () {
    axios
      .get("http://localhost:3001/api/category")
      .then((response) => setCategories(response.data));
  }, []);

  return (
    <Container>
      <RadioButton
        checked={selectedCategory === ""}
        value=""
        name="category"
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        all
      </RadioButton>
      {categories &&
        categories.map((category) => (
          <RadioButton
            checked={selectedCategory === category}
            key={category}
            value={category}
            name="category"
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {category.replace("-", " ")}
          </RadioButton>
        ))}
    </Container>
  );
}
