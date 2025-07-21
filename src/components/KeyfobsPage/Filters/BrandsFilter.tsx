"use client";
import { useContext, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import StateContext from "@/app/store/state-context";
import { Key } from "@/components/lib/getKeys";

type BrandFilterProps = {
  Brands: string[];
  Keys: Key[];
};

const BrandsFilter = ({ Brands, Keys }: BrandFilterProps) => {
  const contextValue = useContext(StateContext);
  if (!contextValue) return null;
  const { setSelectedFilters } = contextValue;

  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedBrands = searchParams.getAll("brand");

  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const maxVisible = 5;

  // Create array of brands name and count:
  const brandCounts: Record<string, number> = {};

  for (const key of Keys) {
    const brand = key.brand.trim().toUpperCase();
    brandCounts[brand] = (brandCounts[brand] || 0) + 1;
  }

  const BrandsWithCounts = Brands?.map((brand) => {
    const name = brand.trim().toUpperCase();
    return {
      name,
      count: brandCounts[name] || 0,
    };
  });

  // Manage URL when
  const handleToggleBrand = (brand: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const current = new Set(selectedBrands);

    if (current.has(brand)) {
      current.delete(brand);
    } else {
      current.add(brand);
    }

    params.delete("brand");
    current.forEach((b) => params.append("brand", b));
    router.push(`/keyfobs?${params.toString()}`, { scroll: false });
    setSelectedFilters((prev) => ({
      ...prev,
      brands: Array.from(current),
    }));
  };

  return (
    <div className="">
      <h1 className="py-2 font-bold text-cyan-900 text-lg">Brands</h1>

      {BrandsWithCounts.slice(
        0,
        isExpanded ? BrandsWithCounts.length : maxVisible
      ).map(({ name, count }) => (
        <div key={name} className="flex items-center space-x-2 mb-1">
          <input
            type="checkbox"
            name="brand"
            value={name}
            checked={selectedBrands.includes(name)}
            onChange={() => handleToggleBrand(name)}
            className="h-4 w-4"
          />
          <label htmlFor={name} className="text-sm text-black">
            {name}
          </label>
          <label htmlFor={name} className="text-sm text-gray-400 font-semibold">
            ({count})
          </label>
        </div>
      ))}

      {Brands.length > maxVisible && (
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
