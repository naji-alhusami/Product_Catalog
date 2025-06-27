import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MoveDown, MoveUp, SlidersHorizontal } from "lucide-react";

type SortProps = {
  showFiltersModalHandler: () => void;
};

const Sort = ({ showFiltersModalHandler }: SortProps) => {
  const filterOptions = ["By Datea", "By Rated", "By Date"];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("All");

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    // onSelect(option);
  };

  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex justify-start items-center pt-10 pb-4 lg:hidden">
        <button
          onClick={showFiltersModalHandler}
          className="flex items-center gap-2 px-4 py-2 font-bold text-black border-1 border-black hover:bg-gray-200 hover:text-cyan-500 hover:border-cyan-500 cursor-pointer"
        >
          <SlidersHorizontal /> Filters
        </button>
      </div>
      {/* Dropdown Button */}
      <div className="relative text-left pt-10 pb-4 w-50 lg:w-70 flex flex-row justify-center items-center">
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
          <div className="absolute top-18 left-19 lg:left-22 z-10 mt-2 w-32 lg:w-48 rounded-xl bg-white shadow-lg border-1 border-gray-200 ring-opacity-5 ">
            <ul className="py-2">
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

export default Sort;
