import styled from "styled-components";

export const MenuContainerStyles = styled.nav`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  align-items: center;
  padding: 32px 0;
  column-gap: 20px;
`;

export const Avatar = styled.div`
  color: black;
  align-self: stretch;
  width: 60px;
  border-radius: 100%;
  display: grid;
  place-items: center;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 0.2s ease-in;
  position: relative;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);

  &:hover > ul {
    display: block;
  }
`;

export const AvatarOptions = styled.ul`
  position: absolute;
  display: none;
  top: 100%;
  width: max-content;
  border-radius: 8px;
  padding: 5px;

  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
`;

export const SignOutOption = styled.button`
  color: black;
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  width: max-content;
  padding: 8px 16px;
  font-weight: 600;

  &:hover {
    color: white;
    background-color: #3db46d;
  }
`;
