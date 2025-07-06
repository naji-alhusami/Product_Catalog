type KeysNavigatorProps = {
  totalPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  visiblePages: (number | string)[];
};

const KeysNavigator = ({
  totalPages,
  currentPage,
  setCurrentPage,
  visiblePages,
}: KeysNavigatorProps) => {
  if (totalPages <= 1) return null;

  return (
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
  );
};

export default KeysNavigator;
