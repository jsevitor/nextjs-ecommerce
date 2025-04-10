import React from "react";
import Button from "./Button";

export default function NewsletterSignup() {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="text-xs">Lorem ipsum dolor sit amet.</p>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="E-mail"
          className="w-1/2 px-4 border rounded-full"
        />
        <Button label="Inscrever-se" type="dark" />
      </div>
    </div>
  );
}
