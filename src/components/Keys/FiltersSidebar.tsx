import BrandsFilter from "./BrandsFilter";

type FiltersSidebarProps = {
  brands: string[];
};

const FiltersSidebar = ({ brands }: FiltersSidebarProps) => {
  console.log(brands);
  return (
    <div className="hidden lg:flex flex-col w-80 border-r border-gray-300 px-4 py-16 bg-gray-200">
      <h1 className="text-lg font-semibold">Filters</h1>
      <BrandsFilter brands={brands} />
    </div>
  );
};

export default FiltersSidebar;
