import React from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";

export default function BannerCallToAction() {
  return (
    <section className="my-28">
      <div className="border border-yellow-500 h-64 rounded-2xl">
        <h1>BannerCallToAction</h1>
      </div>
      <SectionTitle
        title="WEAR TO WEDDING"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa placeat itaque fugit recusandae veniam cumque deserunt, minus nisi iste dolores!"
      />
      <Button label="Ver detalhes" type="dark" />
    </section>
  );
}
