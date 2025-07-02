"use client";
import { useMemo, useState } from "react";

import AllKeys from "./AllKeys";
import FiltersSidebar from "./FiltersSidebar";
import FiltersModal from "./FiltersModal";
import KeysToolbar from "./KeysToolbar";
import { type Key } from "../lib/getAllKeys";

type FiltersProps = {
  brands: { [key: string]: string | string[] | undefined };
  allKeys: Key[];
};

const Keys = ({ allKeys, brands }: FiltersProps) => {
  const [isFiltersModal, setIsFiltersModal] = useState<boolean>(false);

  const selectedBrands: string[] = useMemo(() => {
    const brand = brands.brand;
    return Array.isArray(brand)
      ? brand.map((b) => b.trim())
      : brand
      ? [brand.trim()]
      : [];
  }, [brands]);

  const filteredKeys =
    selectedBrands.length > 0
      ? allKeys.filter((key) => selectedBrands.includes(key.brand.trim()))
      : allKeys;

  function showFiltersModalHandler() {
    setIsFiltersModal(!isFiltersModal);
  }

  return (
    <>
      {isFiltersModal && (
        <FiltersModal
          isFiltersModal={isFiltersModal}
          setIsFiltersModal={setIsFiltersModal}
          showFiltersModalHandler={showFiltersModalHandler}
        />
      )}

      <div className="flex flex-col">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col justify-center w-full pt-10 pb-4">
            <KeysToolbar
              showFiltersModalHandler={showFiltersModalHandler}
              selectedBrands={selectedBrands}
            />
            <div className="h-0.5 w-full my-4 border-b-2 border-gray-300" />
            {allKeys && <AllKeys allKeys={filteredKeys} brands={brands} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Keys;
