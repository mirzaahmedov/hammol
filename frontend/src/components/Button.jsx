import styled from "styled-components";

export default styled.button`
  appearance: none;
  border: none;
  padding: 8px 15px;
  font-size: 1rem;
  font-family: inherit;
  color: #ffffff;
  background-color: var(--primary);
  border-radius: 5px;
  box-shadow: 0 2px 0 var(--primary-darker);
  cursor: pointer;
  transition: background-color 0.25s, box-shadow 0.25s, transform 0.25s;

  &:hover {
    background-color: var(--primary-lighter);
    box-shadow: 0 4px 0 var(--primary-darker);
    transform: translateY(-2px);
  }
  &:active {
    box-shadow: 0 0 0 var(--primary-darker);
    transform: translateY(0px);
  }
  & i {
    margin-inline: 2px;
  }
`;
