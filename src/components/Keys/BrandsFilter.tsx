"use client";

import { useState } from "react";

type BrandFilterProps = {
  brands: string[];
};

const BrandsFilter = ({ brands }: BrandFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisible = 5;

  const visibleBrands = isExpanded ? brands : brands.slice(0, maxVisible);

  return (
    <div className="py-6 px-12">
      <h1 className="py-2 font-bold text-purple-900 text-lg">Brands</h1>

      {visibleBrands.map((brand) => (
        <div key={brand} className="flex items-center space-x-2 mb-1">
          <input
            type="checkbox"
            name="brand"
            value={brand}
            className="h-4 w-4"
          />
          <label htmlFor={brand} className="text-md">
            {brand}
          </label>
        </div>
      ))}

      {brands.length > maxVisible && (
        <button
          className="text-blue-600 text-sm mt-1"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h1 className="cursor-pointer hover:underline">
            {isExpanded ? "Show less" : "Show more"}
          </h1>
        </button>
      )}
    </div>
  );
};

export default BrandsFilter;
