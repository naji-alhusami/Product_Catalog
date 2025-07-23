"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Key } from "@/components/lib/getKeys";

type BrandFilterProps = {
  Keys: Key[];
};

const TypesFilter = ({ Keys }: BrandFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedTypes = searchParams.getAll("type");

  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisible = 5;
  const typeCounts: Record<string, number> = {};

  Keys.forEach((key) => {
    const match = key.boxName.match(/\b\d{3}\b/);
    if (match) {
      const type = match[0];
      typeCounts[type] = (typeCounts[type] || 0) + 1;
    }
  });

  const AllTypes = Object.entries(typeCounts)
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => Number(a.type) - Number(b.type));

  const visibleTypes = isExpanded ? AllTypes : AllTypes.slice(0, maxVisible);

  const handleToggleType = (type: string) => {
    const number = type.match(/\d+/)?.[0];
    if (!number) return;

    const params = new URLSearchParams(searchParams.toString());
    const current = new Set(selectedTypes);

    if (current.has(number)) {
      current.delete(number);
    } else {
      current.add(number);
    }

    params.delete("type");
    current.forEach((n) => params.append("type", n));

    router.push(`/keyfobs?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="">
      <h1 className="py-2 font-bold text-cyan-900 text-lg">Types</h1>

      {visibleTypes.map(({ type, count }) => {
        return (
          <div key={type} className="flex items-center space-x-2 mb-1">
            <input
              type="checkbox"
              name="type"
              value={type}
              checked={selectedTypes.includes(type)}
              onChange={() => handleToggleType(type)}
              className="h-4 w-4"
            />
            <label htmlFor={type} className="text-sm text-black font-semibold">
              Typ {type}
            </label>
            <label
              htmlFor={type}
              className="text-sm text-gray-400 font-semibold"
            >
              ({count})
            </label>
          </div>
        );
      })}

      {AllTypes.length > maxVisible && (
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

export default TypesFilter;
