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
    id: string;
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
    <ProductsWrapper>
      <ProductsContent>
        <Label>{label}</Label>
        <ProductsList>
          {(products || []).map((product, i) => {
            console.log(products);
            return (
              <ProductWrapper key={i}>
                <ProductImage src={product.image} alt="sneakers" />
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductBrand>{product.brand}</ProductBrand>
                  <ProductPrice>${product.price}</ProductPrice>
                </ProductInfo>
              </ProductWrapper>
            );
          })}
        </ProductsList>
      </ProductsContent>
    </ProductsWrapper>
  );
};
