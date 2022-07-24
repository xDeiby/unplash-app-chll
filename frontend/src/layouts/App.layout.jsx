import React from "react";
import styled from "styled-components";

const LayoutStyles = styled.div`
  width: min(${(props) => props.theme.layouts.desktop}, 90%);
  margin: 0 auto;
`;

export default function AppLayout({ children }) {
  return <LayoutStyles>{children}</LayoutStyles>;
}
