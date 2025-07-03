"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type BrandFilterProps = {
  brands: string[];
};

const BrandsFilter = ({ brands }: BrandFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedBrands = searchParams.getAll("brand");

  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisible = 5;
  const cleanedBrands = brands.map((b) => b.trim());
  const visibleBrands = isExpanded
    ? cleanedBrands
    : cleanedBrands.slice(0, maxVisible);

  const handleToggleBrand = (brand: string) => {
    const params = new URLSearchParams();
    const current = new Set(selectedBrands);

    if (current.has(brand)) {
      current.delete(brand);
    } else {
      current.add(brand);
    }

    current.forEach((b) => params.append("brand", b));
    router.push(`/keyfobs?${params.toString()}`, { scroll: false });
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
            onChange={() => handleToggleBrand(brand)}
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
