"use client";
import { useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import AllKeys from "./AllKeys";
import FiltersModal from "../Filters/FiltersModal";
import KeysToolbar from "./KeysToolbar";
import { type Key } from "../../lib/getKeys";
import StateContext from "@/app/store/state-context";
import KeysLoading from "./KeysLoading";

type FiltersProps = {
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
  const typeParam = searchParams.getAll("type");
  const classParam = searchParams.getAll("class");


  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timeout);
  }, [brandParam.join(",")]);

  const selectedBrands: string[] = useMemo(() => {
    return brandParam.map((b) => b.trim());
  }, [brandParam]);

  const selectedTypes: string[] = useMemo(() => {
    return typeParam.map((t) => t.trim());
  }, [typeParam]);

  const selectedClasses: string[] = useMemo(() => {
    return classParam.map((c) => c.trim());
  }, [classParam]);

  const filteredKeys = useMemo(() => {
    return allKeys.filter((key) => {
      const brandMatch =
        selectedBrands.length === 0 ||
        selectedBrands.includes(key.brand.trim());

      const typeId = key.boxName.match(/\d+/)?.[0];
      const typeMatch =
        typeParam.length === 0 || (typeId && typeParam.includes(typeId));

      return brandMatch && typeMatch;
    });
  }, [selectedBrands, typeParam, allKeys]);

  return (
    <>
      {isFiltersModal && <FiltersModal />}
      <div className="flex flex-col">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col justify-center w-full pt-2 pb-4">
            {/* <KeysToolbar
              selectedBrands={selectedBrands}
              selectedTypes={selectedTypes}
              selectedClasses={selectedClasses}
            /> */}
            {/* <div className="h-0.5 w-full my-4 border-b-2 border-gray-300" /> */}
            {loading ? (
              <KeysLoading />
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
