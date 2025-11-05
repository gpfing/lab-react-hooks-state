import React, { useState } from "react";
import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Apple", price: "$1.00", category: "Fruits", inStock: true },
  { id: 2, name: "Milk", price: "$2.50", category: "Dairy", inStock: false },
];

const ProductList = ({ value, cartItem, setCartItem }) => {
  const filteredProducts = sampleProducts.filter(
    (product) => product.category === value
  );

  let mapProducts = [];

  if (value === "all") {
    mapProducts = sampleProducts;
  } else {
    mapProducts = filteredProducts;
  }

  return (
    <div>
      <h2>Available Products</h2>

      {mapProducts.length === 0 ? <p>"no products available"</p>
      : mapProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cartItem={cartItem}
          setCartItem={setCartItem}
        />
      ))}
    </div>
  );
};

export default ProductList;