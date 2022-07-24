import styled from "styled-components";

export const ButtonStyle = styled.button`
  border-radius: 12px;
  background-color: #3db46d;
  padding: 16px 20px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 22px;
  border: none;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: #2de477;
  }
`;
