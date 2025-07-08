import { getAllKeys } from "../lib/getAllKeys";
import { getBoxesClasses } from "../lib/getBoxesClasses";
import { getBrands } from "../lib/getBrands";
import BrandsFilter from "./BrandsFilter";
import ClassesFilters from "./ClassesFilters";
import TypesFilter from "./TypesFilters";

export default async function FiltersSidebar() {
  const brands = await getBrands();
  const AllKeys = await getAllKeys();

  const AllClassesRaw = await Promise.all(
    AllKeys.map((key) => getBoxesClasses(key.boxSapNumber))
  );
  const UniqueClasses: string[] = [
    ...new Set(AllClassesRaw.filter((cls): cls is string => cls !== null)),
  ];

  if (brands && UniqueClasses) {
    return (
      <div>
        <BrandsFilter brands={brands} />
        <ClassesFilters UniqueClasses={UniqueClasses} />
        <TypesFilter AllKeys={AllKeys} />
      </div>
    );
  }
}
