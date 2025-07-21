"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { type Key } from "../../lib/getKeys";
import KeysNavigator from "./KeysNavigator";

type AllKeysProps = {
  allKeys: Key[];
  brands: string[];
};

const AllKeys = ({ allKeys }: AllKeysProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(12);
      } else {
        setItemsPerPage(10);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(allKeys.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentKeys = allKeys.slice(startIndex, startIndex + itemsPerPage);

  const getVisiblePages = (current: number, total: number) => {
    const pages: (number | string)[] = [];
    pages.push(1);

    if (current > 2) pages.push("...");
    if (current !== 1 && current !== total) pages.push(current);
    if (current < total - 1) pages.push("...");
    if (total > 1) pages.push(total);

    return pages;
  };

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <div className="w-full flex flex-col gap-10">
      {/* Grid of keys */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {currentKeys.map((key) => (
          <div
            key={key.id}
            className="relative border border-gray-300 rounded-md p-2 w-full"
          >
            <p className="absolute text-lg border border-black top-5 right-5 px-2 py-1 bg-white rounded-lg font-bold">
              {key.boxName.match(/\d+/)?.[0]}
            </p>
            <Image
              src={key.keyForm.imageUrl}
              alt="key-image"
              width={500}
              height={100}
              className="rounded-md"
              priority
            />
            <div className="flex flex-row items-center justify-start py-4">
              <h1 className="font-bold text-md pr-2">Brand:</h1>
              <p className="font-bold text-sm text-gray-500">{key.brand}</p>
            </div>
            <button className="cursor-pointer w-full px-3 py-2 text-white font-bold bg-cyan-400 hover:bg-cyan-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <KeysNavigator
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        visiblePages={visiblePages}
      />
    </div>
  );
};

export default AllKeys;
