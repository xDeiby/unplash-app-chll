import React from "react";
import { ButtonStyle } from "./Button.style";

export default function Button({ children, ...props }) {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
}
