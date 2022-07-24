import React from "react";
import styled from "styled-components";

const ModalLayoutStyles = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

export default function ModalLayout({ children, style }) {
  return <ModalLayoutStyles style={style}>{children}</ModalLayoutStyles>;
}
