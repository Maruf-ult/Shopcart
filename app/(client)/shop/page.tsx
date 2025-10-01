import Shop from "@/components/Shop";
import { getAllBrands, getCategories } from "@/sanity/queries";
import React from "react";

export default async function Page() {
  const categories = await getCategories();
  const brands = await getAllBrands();

  return (
    <div className="bg-white">
      <Shop categories={categories} brands={brands} />
    </div>
  );
}