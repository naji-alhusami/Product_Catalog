type SelectedFiltersBarProps = {
  selectedBrands: string[];
  onRemoveBrand: (brand: string) => void;
  onClearAll: () => void;
};

const SelectedFiltersBar = ({
  selectedBrands,
  onRemoveBrand,
  onClearAll,
}: SelectedFiltersBarProps) => {
  if (selectedBrands.length === 0) return null;

  return (
    <div className="flex items-center gap-4">
      {selectedBrands.map((brand) => (
        <div
          key={brand}
          className="flex items-center border border-blue-500 text-blue-700 px-3 py-1 rounded-full text-sm"
        >
          <span>{brand}</span>
          <button
            onClick={() => onRemoveBrand(brand)}
            className="ml-2 text-blue-700 hover:text-blue-900 cursor-pointer"
          >
            ×
          </button>
        </div>
      ))}
      <button
        onClick={onClearAll}
        className="text-sm text-blue-700 underline hover:text-blue-900 cursor-pointer"
      >
        Clear all
      </button>
    </div>
  );
};

export default SelectedFiltersBar;
