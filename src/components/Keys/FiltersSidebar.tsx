import { getBoxesClasses } from "../lib/getBoxesClasses";
import { getBrands } from "../lib/getBrands";
import { getValidKeys } from "../lib/getValidKeys";
import BrandsFilter from "./BrandsFilter";
import ClassesFilters from "./ClassesFilters";

export default async function FiltersSidebar() {
  const brands = await getBrands();

  const allKeys = await getValidKeys();
  const AllClasses = allKeys
    .map((key) => getBoxesClasses(key.boxSapNumber))
    .filter((cls): cls is string => cls !== null);

  if (brands) {
    return (
      <>
        <BrandsFilter brands={brands} />
        <ClassesFilters AllClasses={AllClasses} />
      </>
    );
  }
}
