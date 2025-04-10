import React from "react";

export default function ProductCard() {
  return (
    <div>
      <div className="h-72 rounded-2xl border border-blue-500">imagem</div>
      <div>
        <h2 className="font-bold text-lg">Nome</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <span className="font-bold text-lg">R$0,00</span>
      </div>
    </div>
  );
}
