import styled from "styled-components";

export const ModalButton = styled.button`
  align-self: stretch;
  border-radius: 12px;
  background-color: #3db46d;
  padding: 16px 20px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 22px;
  border: none;
  color: white;
`;

export const ButtonSubmit = styled(ModalButton)`
  align-self: unset;
`;

export const ButtonCancel = styled(ButtonSubmit)`
  color: #bdbdbd;
  background-color: transparent;
  margin-right: 8px;
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 24px 32px;
  border-radius: 12px;
  width: min(620px, 90%);
`;

export const ModalHeader = styled.h1`
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 32px;
  margin-bottom: 20px;
  color: #333333;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 19px;
  color: #4f4f4f;
`;

export const Input = styled.input`
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
`;
