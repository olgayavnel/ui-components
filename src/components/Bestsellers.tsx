import React from "react";
import styled from "styled-components";

const Canvas = styled.section`
  font-family: Verdana, Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #faefe3;
  width: 22rem;
  height: 30rem;
  border-radius: 1rem;
  padding: 6rem 8rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  margin: 4rem auto;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ProductsContent = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-radius: 1rem;
  padding: 2rem 2rem;
  min-width: 20rem;
  gap: 1rem;
`;

const Label = styled.p`
  align-self: flex-start;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
`;

// Content of each cart
const ProductWrapper = styled.div`
  display: flex;
  background-color: rgb(254, 242, 238);
  width: 100%;
  border-radius: 1rem;
  gap: 2rem;
  justify-content: space-between;
  height: 7rem;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
`;

const ProductImage = styled.img`
  height: 100%;
  width: 7rem;
  height: 7rem;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  h5,
  p {
    margin: 0;
  }
`;
const ProductName = styled.h5`
  color: rgb(254, 128, 92);
`;
const ProductBrand = styled.p`
  font-size: 0.8rem;
  color: rgb(202, 196, 196);
`;
const ProductPrice = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
`;

export interface BestsellersProps {
  label: string;
  products: {
    image: string;
    name: string;
    brand: string;
    price: string;
  }[];
}

export const Bestsellers: React.FC<BestsellersProps> = ({
  label,
  products,
  ...props
}: BestsellersProps) => {
  return (
    <Canvas>
      <ProductsWrapper>
        <ProductsContent>
          <Label>{label}</Label>
          {(products || []).map((product) => (
            <ProductWrapper>
              <ProductImage src={product.image} alt="sneakers" />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductBrand>{product.brand}</ProductBrand>
                <ProductPrice>${product.price}</ProductPrice>
              </ProductInfo>
            </ProductWrapper>
          ))}
        </ProductsContent>
      </ProductsWrapper>
    </Canvas>
  );
};
