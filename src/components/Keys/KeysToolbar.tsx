import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveDown, MoveUp, SlidersHorizontal } from "lucide-react";
import SelectedFiltersBar from "./SelectedFiltersBar";

type KeysToolbarProps = {
  showFiltersModalHandler: () => void;
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
};

const KeysToolbar = ({
  showFiltersModalHandler,
  selectedBrands,
  setSelectedBrands,
}: KeysToolbarProps) => {
  const filterOptions = ["By Datea", "By Rated", "By Date"];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("All");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };
  console.log(selectedBrands);
  return (
    <div className="w-full flex flex-row justify-between items-center">
      <div className="flex justify-start items-center lg:hidden">
        <button
          onClick={showFiltersModalHandler}
          className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 font-medium hover:bg-blue-50 text-sm"
        >
          <span className="flex items-center gap-1">
            Filters {selectedBrands.length > 0 && `(${selectedBrands.length})`}
          </span>
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>
      <div className="hidden lg:flex">
        <SelectedFiltersBar
          selectedBrands={selectedBrands}
          onRemoveBrand={(brand) =>
            setSelectedBrands(selectedBrands.filter((b) => b !== brand))
          }
          onClearAll={() => setSelectedBrands([])}
        />
      </div>
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
          <div className="absolute top-18 left-19 lg:left-24 z-10 mt-2 w-32 lg:w-36 rounded-xl bg-white shadow-lg border-1 border-gray-200 ring-opacity-5 ">
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
  );
};

export default KeysToolbar;
