"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { type Key } from "../lib/getAllKeys";

type AllKeysProps = {
  allKeys: Key[];
  brands: string[];
};

const AllKeys = ({ allKeys }: AllKeysProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(12); // lg and up
      } else {
        setItemsPerPage(10); // sm and md
      }
    };

    updateItemsPerPage(); // Set on mount
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(allKeys.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentKeys = allKeys.slice(startIndex, startIndex + itemsPerPage);

  const getVisiblePages = (current: number, total: number) => {
    const pages: (number | string)[] = [];

    pages.push(1); // show first page

    if (current > 2) {
      pages.push("...");
    }

    if (current !== 1 && current !== total) {
      pages.push(current); // Show current if it's not already shown
    }

    if (current < total - 1) {
      pages.push("...");
    }

    if (total > 1) {
      pages.push(total); // show last page
    }

    return pages;
  };

  const visiblePages = getVisiblePages(currentPage, totalPages);

  return (
    <div className="w-full flex flex-col gap-10">
      {/*  Grid of keys */}
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

      {/*  Pagination controls */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center gap-2 mt-6">
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="px-3 py-1 border rounded text-sm disabled:opacity-30 cursor-pointer"
            >
              &laquo;
            </button>

            {visiblePages.map((page, index) =>
              typeof page === "string" ? (
                <span
                  key={`ellipsis-${index}`}
                  className="px-2 text-gray-500 font-bold select-none"
                >
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-1 border rounded text-sm cursor-pointer ${
                    page === currentPage
                      ? "bg-cyan-600 text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {page}
                </button>
              )
            )}

            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              className="px-3 py-1 border rounded text-sm disabled:opacity-30 cursor-pointer"
            >
              &raquo;
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-1">
            Page {currentPage} of {totalPages}
          </p>
        </div>
      )}
    </div>
  );
};

export default AllKeys;
