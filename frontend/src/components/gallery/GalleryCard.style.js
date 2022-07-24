import styled from "styled-components";

export const CardImage = styled.div`
  position: relative;
  border-radius: 24px;
  display: inline-block;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
  grid-row: span ${(props) => (props.isPar ? 2 : 1)};
  overflow: hidden;

  &:hover > div {
    clip-path: circle(70% at 50% 50%);
  }
`;

export const CardHoverStyle = styled.div`
  position: absolute;
  inset: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  clip-path: circle(0 at 100% 100%);
  transition: clip-path 0.3s ease-in;
`;
export const CardLabel = styled.h1`
  font-size: 1.125rem;
  text-transform: capitalize;
  font-weight: 700;
  color: white;
`;

export const CardButton = styled.button`
  padding: 5px 15px;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 38px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: white;
  }
`;

export const CardButtonUpdate = styled(CardButton)`
  margin-right: 8px;
  color: #b69a02;
  border: 2px solid #b69a02;

  &:hover {
    background-color: #b69a02;
  }
`;
export const CardButtonRemove = styled(CardButton)`
  margin-right: 8px;
  color: #eb5757;
  border: 2px solid #eb5757;

  &:hover {
    background-color: #eb5757;
  }
`;
