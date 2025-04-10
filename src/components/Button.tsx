import React from "react";

type ButtonProps = {
  label: string;
  type?: "dark" | "light";
};

export default function Button({ label, type }: ButtonProps) {
  const dark = () => (
    <div className="flex justify-center items-center">
      <button className="w-36 py-2 rounded-full text-sm bg-black text-white cursor-pointer hover:bg-slate-700 hover:text-black">
        {label}
      </button>
    </div>
  );

  const light = () => (
    <div className="flex justify-center items-center">
      <button className="w-36 py-2 rounded-full text-sm bg-white cursor-pointer hover:bg-black hover:text-white">
        {label}
      </button>
    </div>
  );

  return type === "dark" ? dark() : light();
}
