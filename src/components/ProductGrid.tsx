import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8 mb-16">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
