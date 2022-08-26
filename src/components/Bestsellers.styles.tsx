import styled from "styled-components";
import { device } from "../utils/theme";

export const ProductsWrapper = styled.div`
  font-family: "Montserrat", sans-serif;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ProductsContent = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-radius: 1rem;
  padding: 2rem 2rem;

  gap: 1rem;

  @media ${device.tablet} {
    min-width: 20rem;
  }
`;

export const Label = styled.p`
  align-self: flex-start;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.98rem;
  letter-spacing: 0.016rem;
`;

export const ProductsList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 0;
  margin: 0;
  gap: 1rem;
`;
// Content of each cart
export const ProductWrapper = styled.li`
  display: flex;
  align-items: center;
  background-color: rgb(254, 242, 238);
  width: 13rem;
  border-radius: 1.5rem;
  gap: 2rem;
  justify-content: space-between;
  height: 7.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  padding: 0.5rem 1rem;

  @media ${device.tablet} {
    padding: 0;
    width: 20rem;
  }
`;

export const ProductImage = styled.img`
  height: 100%;
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  border-radius: 1.5rem;

  @media ${device.tablet} {
    width: 7rem;
    height: 7rem;
  }
`;

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    letter-spacing: 0.016rem;
    word-wrap: break-word;
  }
`;

export const ProductName = styled.p`
  color: rgb(254, 128, 92);
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.3rem;
  margin-bottom: 0.6875rem;
`;
export const ProductBrand = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgb(175, 175, 189);
  margin-bottom: 0.5625em;
`;
export const ProductPrice = styled.p`
  color: rgb(18, 18, 31);
  font-size: 0.875;
  font-weight: 600;
`;
