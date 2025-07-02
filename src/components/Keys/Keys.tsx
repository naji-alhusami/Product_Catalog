"use client";
import { useContext, useEffect, useMemo, useState } from "react";

import AllKeys from "./AllKeys";
import FiltersModal from "./FiltersModal";
import KeysToolbar from "./KeysToolbar";
import { type Key } from "../lib/getAllKeys";
import { useSearchParams } from "next/navigation";
import StateContext from "@/app/store/state-context";

type FiltersProps = {
  // brands: { [key: string]: string | string[] | undefined };
  allKeys: Key[];
};

const Keys = ({ allKeys }: FiltersProps) => {
  const contextValue = useContext(StateContext) as {
    isFiltersModal: boolean;
  };
  const { isFiltersModal } = contextValue;
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const brandParam = searchParams.getAll("brand");

  console.log("Selected brands:", brandParam);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timeout);
  }, [brandParam.join(",")]);

  const selectedBrands: string[] = useMemo(() => {
    return brandParam.map((b) => b.trim());
  }, [brandParam]);

  const filteredKeys = useMemo(() => {
    return selectedBrands.length > 0
      ? allKeys.filter((key) => selectedBrands.includes(key.brand.trim()))
      : allKeys;
  }, [selectedBrands, allKeys]);

  return (
    <>
      {isFiltersModal && <FiltersModal />}
      <div className="flex flex-col">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col justify-center w-full pt-10 pb-4">
            <KeysToolbar selectedBrands={selectedBrands} />
            <div className="h-0.5 w-full my-4 border-b-2 border-gray-300" />
            {loading ? (
              <p className="w-full">Loading....</p>
            ) : (
              <AllKeys allKeys={filteredKeys} brands={brandParam} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Keys;
