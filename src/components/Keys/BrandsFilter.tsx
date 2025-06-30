"use client";

import { useState } from "react";

type BrandFilterProps = {
  brands: string[];
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
};

const BrandsFilter = ({
  brands,
  selectedBrands,
  setSelectedBrands,
}: BrandFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisible = 5;
  const cleanedBrands = brands.map((b) => b.trim());
  const visibleBrands = isExpanded
    ? cleanedBrands
    : cleanedBrands.slice(0, maxVisible);

  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <div className="">
      <h1 className="py-2 font-bold text-cyan-900 text-lg">Brands</h1>

      {visibleBrands.map((brand) => (
        <div key={brand} className="flex items-center space-x-2 mb-1">
          <input
            type="checkbox"
            name="brand"
            value={brand}
            checked={selectedBrands.includes(brand)}
            onChange={() => toggleBrand(brand)}
            className="h-4 w-4"
          />
          <label htmlFor={brand} className="text-sm">
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
