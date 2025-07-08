"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Key } from "../lib/getAllKeys";

type BrandFilterProps = {
  AllKeys: Key[];
};

const TypesFilter = ({ AllKeys }: BrandFilterProps) => {
  console.log(AllKeys);
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedTypes = searchParams.getAll("type");

  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisible = 5;
  const AllTypes = Array.from(
    new Set(
      AllKeys.flatMap((key) => {
        const match = key.boxName.match(/\b\d{3}\b/);
        return match ? [match[0]] : [];
      })
    )
  ).sort((a, b) => Number(a) - Number(b));
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

      {visibleTypes.map((boxName, index) => {
        const number = boxName.match(/\d+/)?.[0] ?? "";

        return (
          <div
            key={`${number}-${index}`}
            className="flex items-center space-x-2 mb-1"
          >
            <input
              type="checkbox"
              name="type"
              value={boxName}
              checked={selectedTypes.includes(number)}
              onChange={() => handleToggleType(boxName)}
              className="h-4 w-4"
            />
            <label htmlFor={boxName} className="text-sm">
              Typ {boxName}
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
