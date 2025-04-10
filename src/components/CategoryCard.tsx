import React from "react";
import Button from "./Button";

export default function CategoryCard() {
  return (
    <div className="relative h-[500px] rounded-2xl border border-purple-500 overflow-hidden">
      <div className="bg-purple-500 w-full h-full flex items-center justify-center">
        <span className="text-white font-bold">Imagem</span>
      </div>
      <div className="absolute left-4 bottom-4 z-50 flex flex-col gap-2">
        <div className="text-white font-semibold text-3xl">CATEGORIA</div>
        <Button label="Ver detalhes" type="light" />
      </div>
    </div>
  );
}
