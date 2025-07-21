import { getClasses } from "@/components/lib/getClasses";
import { getKeys } from "../../lib/getKeys";
import { getBrands } from "../../lib/getBrands";
import BrandsFilter from "./BrandsFilter";
import ClassesFilters from "./ClassesFilters";
import TypesFilter from "./TypesFilters";

export default async function FiltersSidebar() {
  // Get Brands:
  const Brands = await getBrands();

  // Get All Classes:
  const Classes = await getClasses();

  // Get All Keys:
  const Keys = await getKeys();

  if (!Brands || !Classes || !Keys) {
    return <p>Unable to load filters.</p>;
  }

  return (
    <>
      <BrandsFilter Brands={Brands} Keys={Keys} />
      <ClassesFilters Classes={Classes} />
      <TypesFilter Keys={Keys} />
    </>
  );
}
