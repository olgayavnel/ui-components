import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #5850ec;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton onClick={props.onClick}>{props.label}</StyledButton>;
};
