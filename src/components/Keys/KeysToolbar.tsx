"use client";
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveDown, MoveUp, SlidersHorizontal } from "lucide-react";
import SelectedFiltersBar from "./SelectedFiltersBar";
import { useRouter } from "next/navigation";
import StateContext from "@/app/store/state-context";

type KeysToolbarProps = {
  // selectedBrands: string[];
  // selectedTypes: string[];
  // selectedClasses: string[];
};

const KeysToolbar = ({}: // selectedBrands,
// selectedTypes,
// selectedClasses,
KeysToolbarProps) => {
  const contextValue = useContext(StateContext) as {
    showFiltersModalHandler: () => void;
  };
  const { showFiltersModalHandler } = contextValue;

  const filterOptions = ["By Datea", "By Rated", "By Date"];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("All");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  const router = useRouter();

  // const handleRemoveBrand = (brandToRemove: string) => {
  //   const updated = selectedBrands.filter((b) => b !== brandToRemove);
  //   const params = new URLSearchParams();
  //   updated.forEach((b) => params.append("brand", b));
  //   router.push(`/keyfobs?${params.toString()}`);
  // };

  // const handleClearAll = () => {
  //   router.push("/keyfobs");
  // };

  // const totalSelected =
  //   selectedBrands.length + selectedClasses.length + selectedTypes.length;

  return (
    <>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex justify-start items-center lg:hidden">
          {/* <button
          onClick={showFiltersModalHandler}
          className={`cursor-pointer flex items-center gap-2 px-4 py-2 border 
            ${
             selectedBrands.length > 0
               ? "border-blue-600 text-blue-600"
               : "border-black text-black"
          } 
          font-medium hover:bg-blue-50 text-sm`}
        > */}
          <button
            onClick={showFiltersModalHandler}
            className="cursor-pointer flex items-center gap-2 px-4 py-2 border font-medium hover:bg-blue-50 text-sm"
          >
            {/* <span className="flex items-center gap-1">
            Filters {totalSelected > 0 && `(${totalSelected})`}
          </span> */}
            <SlidersHorizontal className="w-4 h-4" />
          </button>
        </div>
        {/* <div className="hidden lg:flex">
        <SelectedFiltersBar
          selectedBrands={selectedBrands}
          selectedTypes={selectedTypes}
          selectedClasses={selectedClasses}
          onRemoveBrand={handleRemoveBrand}
          onClearAll={handleClearAll}
        />
      </div> */}
        {/* Dropdown Button */}
        <div className="relative text-right w-50 lg:w-60 flex flex-row justify-center items-center gap-x-6">
          <h1 className="font-semibold w-35">Sort By:</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 border-1 border-gray-200 py-2 rounded-lg shadow-sm bg-white text-sm font-medium hover:bg-gray-50 flex flex-row justify-between items-center cursor-pointer"
          >
            {selected}
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.span
                  key="up"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="ml-6"
                >
                  <MoveUp className="h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="down"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2 }}
                  className="ml-6"
                >
                  <MoveDown className="h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-8 left-19 lg:left-24 z-10 mt-2 w-32 lg:w-36 rounded-xl bg-white shadow-lg border-1 border-gray-200 ring-opacity-5 ">
              <ul className="py-2 text-left">
                {filterOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSelect(option)}
                    className={`px-4 py-2 cursor-pointer text-sm hover:bg-gray-100 ${
                      selected === option ? "bg-gray-100 font-semibold" : ""
                    }`}
                  >
                    {option}
                    {selected === option && (
                      <span className="float-right">✔</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="h-0.5 w-full my-4 border-b-2 border-gray-300" />
    </>
  );
};

export default KeysToolbar;
