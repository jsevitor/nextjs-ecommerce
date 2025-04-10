import React from "react";

type SectionTitleProps = {
  title: string;
  description: string;
};

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-8">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="w-1/2 text-center">{description}</p>
    </div>
  );
}
