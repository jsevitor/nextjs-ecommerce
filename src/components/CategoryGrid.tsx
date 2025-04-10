import React from "react";
import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8 mb-28">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  );
}
