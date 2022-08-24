import React, { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export interface CenterProps {
  children: ReactNode;
}

export const Center: React.FC<CenterProps> = ({ children }: any) => {
  return <Wrapper>{children}</Wrapper>;
};
