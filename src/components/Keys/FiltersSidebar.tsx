import BrandsFilter from "./BrandsFilter";

type FiltersSidebarProps = {
  brands: string[];
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
};

const FiltersSidebar = ({
  brands,
  selectedBrands,
  setSelectedBrands,
}: FiltersSidebarProps) => {
  return (
    <div className="hidden lg:flex flex-col w-80 pr-16 py-32">
      <h1 className="text-2xl font-semibold">Filters</h1>
      <BrandsFilter
        brands={brands}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
      />
    </div>
  );
};

export default FiltersSidebar;
