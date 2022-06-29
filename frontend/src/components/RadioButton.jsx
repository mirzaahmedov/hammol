import React from "react";
import styled from "styled-components";

const Wrap = styled.label`
  cursor: pointer;
`;
const Input = styled.input`
  display: none;
`;
const Label = styled.button`
  appearance: none;
  background: none;
  padding: 8px 15px;
  font-size: 0.8rem;
  color: var(--grey);
  border: 1px solid var(--grey);
  border-radius: 100px;
  pointer-events: none;
  text-transform: capitalize;

  ${Input}:checked ~ & {
    color: #ffffff;
    border: var(--primary);
    background-color: var(--primary);
  }
`;

export default function RadioButton({ children, ...props }) {
  return (
    <Wrap>
      <Input {...props} type="radio" />
      <Label>{children}</Label>
    </Wrap>
  );
}
