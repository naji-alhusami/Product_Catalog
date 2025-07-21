import { getClasses } from "@/components/lib/getClasses";
import { getKeys } from "../../lib/getKeys";
import { getBrands } from "../../lib/getBrands";
import BrandsFilter from "./BrandsFilter";
import ClassesFilters from "./ClassesFilters";
import TypesFilter from "./TypesFilters";

export default async function FiltersSidebar() {
  // Get Brands:
  const Brands = await getBrands();

  // Get All Keys:
  const Keys = await getKeys();

  // Get All Classes:
  const Classes = await getClasses();

  if (!Brands || !Classes || !Keys) {
    return <p>Unable to load filters.</p>;
  }

  return (
    <div>
      <BrandsFilter Brands={Brands} />
      <ClassesFilters Classes={Classes} />
      <TypesFilter Keys={Keys} />
    </div>
  );
}
