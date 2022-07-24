import styled from "styled-components";

export const FormControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormControlLabel = styled.label`
  display: block;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 19px;
  color: #4f4f4f;
`;

export const FormControlInput = styled.input`
  display: block;
  width: 100%;
  padding: 18px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 19px;
  border: 1px solid #bdbdbd;
  border-radius: 12px;

  &::placeholder {
    color: #bdbdbd;
  }

  &:focus {
    outline: 2px solid #3db46d;
  }
`;

export const FormControlError = styled.span`
  font-size: 0.7rem;
  color: red;
  text-align: right;
  font-weight: 600;

  &::before {
    content: "* ";
  }
`;
