"use client";
import { useState } from "react";
import FiltersModal from "./FiltersModal";
import FiltersSidebar from "./FiltersSidebar";
import KeysHeader from "./KeysHeader";
import Sort from "./Sort";

const Keys = () => {
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
        />
      )}
      <div className="h-screen flex flex-row">
        <FiltersSidebar />
        <div className="flex flex-col px-8 py-20 sm:px-16">
          <KeysHeader />
          {/* Filters Row */}
          <Sort showFiltersModalHandler={showFiltersModalHandler} />
          <div className=" h-px w-full mt-1 bg-gray-500" />
        </div>
      </div>
    </>
  );
};

export default Keys;

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
