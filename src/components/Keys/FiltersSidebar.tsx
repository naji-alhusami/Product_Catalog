import { getAllKeys } from "../lib/getAllKeys";
import { getBoxesClasses } from "../lib/getBoxesClasses";
import { getBrands } from "../lib/getBrands";
import { getKeysByBrand } from "../lib/getKeysByBrand";
import { getValidKeys } from "../lib/getValidKeys";
import BrandsFilter from "./BrandsFilter";
import ClassesFilters from "./ClassesFilters";
import TypesFilters from "./TypesFilters";

export default async function FiltersSidebar() {
  const brands = await getBrands();
  const AllKeys = await getAllKeys();
  console.log(AllKeys);

  if (brands) {
    return (
      <div>
        <BrandsFilter brands={brands} />
        {/* <ClassesFilters AllClasses={AllClasses} />
        <TypesFilters allKeys={allKeys} /> */}
      </div>
    );
  }
}
