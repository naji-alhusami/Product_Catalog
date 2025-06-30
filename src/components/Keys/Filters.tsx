"use client";
import { useState } from "react";
import FiltersModal from "./FiltersModal";
import KeysHeader from "./KeysHeader";
import Sort from "./Sort";
import AllKeys from "./AllKeys";
import { type Key } from "../lib/getAllKeys";

type FiltersProps = {
  brands: string[];
  allKeys: Key[];
};

const Filters = ({ brands, allKeys }: FiltersProps) => {
  const [isFiltersModal, setIsFiltersModal] = useState<boolean>(false);

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
          brands={brands}
        />
      )}
      <div className="flex flex-row">
        {/* <FiltersSidebar brands={brands} /> */}
        <div className="flex flex-col px-12 py-20 sm:px-16">
          <KeysHeader />
          {/* Filters Row */}
          <div className=" h-1 w-full mt-1 bg-gray-500" />
          <Sort showFiltersModalHandler={showFiltersModalHandler} />
          {allKeys && <AllKeys allKeys={allKeys} />}
        </div>
      </div>
    </>
  );
};

export default Filters;

{
  /* Category Tabs */
}
{
  /* <div className="flex justify-center space-x-6 mb-6">
        <button className="px-4 py-2 bg-gray-100 text-black rounded-full font-medium shadow-sm hover:bg-gray-200">
          🔑 Keys
        </button>
        <button className="px-4 py-2 text-gray-500 hover:text-black">
          🚗 Brands
        </button>
        <button className="px-4 py-2 text-gray-500 hover:text-black">
          ⚙️ Types
        </button>
      </div> */
}
