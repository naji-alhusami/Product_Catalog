"use client";
import { useMemo, useState } from "react";

import AllKeys from "./AllKeys";
import KeysHeader from "./KeysHeader";
import FiltersSidebar from "./FiltersSidebar";
import FiltersModal from "./FiltersModal";
import KeysToolbar from "./KeysToolbar";
import { type Key } from "../lib/getAllKeys";

type FiltersProps = {
  brands: string[];
  allKeys: Key[];
};

const Keys = ({ brands, allKeys }: FiltersProps) => {
  const [isFiltersModal, setIsFiltersModal] = useState<boolean>(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  function showFiltersModalHandler() {
    setIsFiltersModal(!isFiltersModal);
  }

  const filteredKeys = useMemo(() => {
    if (selectedBrands.length === 0) return allKeys;
    return allKeys.filter((key) => selectedBrands.includes(key.brand.trim()));
  }, [selectedBrands, allKeys]);

  return (
    <>
      {isFiltersModal && (
        <FiltersModal
          isFiltersModal={isFiltersModal}
          setIsFiltersModal={setIsFiltersModal}
          showFiltersModalHandler={showFiltersModalHandler}
          brands={brands}
        />
      )}

      <div className="flex flex-col mx-12 my-20 lg:px-16">
        <KeysHeader />
        <div className="flex flex-row items-start justify-between">
          <FiltersSidebar
            brands={brands}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
          />
          <div className="flex flex-col justify-center w-full pt-10 pb-4">
            <KeysToolbar
              showFiltersModalHandler={showFiltersModalHandler}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
            />
            <div className="h-0.5 w-full my-4 border-b-2 border-gray-300" />
            {allKeys && <AllKeys allKeys={filteredKeys} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Keys;
