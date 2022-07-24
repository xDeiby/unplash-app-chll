import styled from "styled-components";

export const ButtonSubmit = styled.button`
  border-radius: 12px;
  background-color: #eb5757;
  padding: 16px 20px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 22px;
  border: none;
  color: white;
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
