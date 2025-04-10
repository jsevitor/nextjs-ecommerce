import React from "react";
import NewsletterSignup from "./NewsletterSignup";

export default function Footer() {
  return (
    <footer>
      <div className="flex justify-between pb-16">
        <div className="w-full">
          <h1 className="text-5xl font-bold">TULOS</h1>
          <NewsletterSignup />
        </div>
        <div className="w-full flex justify-end gap-24">
          <div>
            <h3 className="font-bold mb-4">Produto</h3>
            <ul className="flex flex-col gap-1">
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Produto</h3>
            <ul className="flex flex-col gap-1">
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Produto</h3>
            <ul className="flex flex-col gap-1">
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
              <li>Lorem, ipsum.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-4 bg-black text-white">
        <div>2025</div>
        <div className="flex gap-4">
          <div>Lorem</div>
          <div>Lorem</div>
          <div>Lorem</div>
        </div>
      </div>
    </footer>
  );
}
