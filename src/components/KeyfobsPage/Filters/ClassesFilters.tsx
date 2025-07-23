"use client";
import { useContext, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import StateContext from "@/app/store/state-context";
import { type ClassWithCount } from "@/components/lib/getClasses";

type ClassesFiltersProps = {
  Classes: ClassWithCount[];
};

const ClassesFilters = ({ Classes }: ClassesFiltersProps) => {
  const contextValue = useContext(StateContext);
  if (!contextValue) return null;
  const { setSelectedFilters } = contextValue;

  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedClasses = searchParams.getAll("class");

  const [isExpanded, setIsExpanded] = useState(false);
  const maxVisible = 5;

  // const uniqueClasses = [...new Set(AllClasses)].filter(Boolean);
  const visibleClasses = isExpanded ? Classes : Classes.slice(0, maxVisible);

  const handleToggleClass = (cls: string) => {
    const params = new URLSearchParams(searchParams.toString()); // preserve full state
    const current = new Set(params.getAll("class")); // get current classes

    if (current.has(cls)) {
      current.delete(cls);
    } else {
      current.add(cls);
    }

    params.delete("class"); // clear all class filters
    current.forEach((c) => params.append("class", c)); // re-add updated classes

    router.push(`/keyfobs?${params.toString()}`, { scroll: false });
    setSelectedFilters((prev) => ({
      ...prev,
      classes: Array.from(current),
    }));
  };

  return (
    <div className="py-6">
      <h1 className="py-2 font-bold text-cyan-900 text-lg">Classes</h1>

      {visibleClasses.map(({ name, count }) => (
        <div key={name} className="flex items-center space-x-2 mb-1">
          <input
            type="checkbox"
            name="class"
            value={name}
            checked={selectedClasses.includes(name)}
            onChange={() => handleToggleClass(name)}
            className="h-4 w-4"
          />
          <label htmlFor={name} className="text-sm text-black font-semibold">
            {name}
          </label>
          <label htmlFor={name} className="text-sm text-gray-400 font-semibold">
            ({count})
          </label>
        </div>
      ))}

      {Classes.length > maxVisible && (
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

export default ClassesFilters;
