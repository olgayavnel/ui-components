import React, { useState } from "react";
import {
  Label,
  ProductBrand,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductsContent,
  ProductsList,
  ProductsWrapper,
  ProductWrapper,
} from "./Bestsellers.styles";

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
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <ProductsWrapper>
      <ProductsContent>
        <Label>{label}</Label>
        <ProductsList>
          {(products || []).map((product) => (
            <ProductWrapper
              onClick={handleClick}
              style={{
                backgroundColor: isActive ? "salmon" : "",
                color: isActive ? "white" : "",
              }}
            >
              <ProductImage src={product.image} alt="sneakers" />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductBrand>{product.brand}</ProductBrand>
                <ProductPrice>${product.price}</ProductPrice>
              </ProductInfo>
            </ProductWrapper>
          ))}
        </ProductsList>
      </ProductsContent>
    </ProductsWrapper>
  );
};
