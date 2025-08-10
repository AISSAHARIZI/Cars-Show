"use client";

import Hero from "./Hero";
import Category from "./Category";

export default function All() {
  return (
    <div className={`  w-[90%] relative space-y-20 mx-auto  mt-35 `}>
      <Hero />
      <Category />
    </div>
  );
}
