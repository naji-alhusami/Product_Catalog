// import { getClasses } from "@/components/lib/getClasses";
// import { getKeys } from "../../lib/getKeys";
// import { getBrands } from "../../lib/getBrands";
// import BrandsFilter from "./BrandsFilter";
// import ClassesFilters from "./ClassesFilters";
// import TypesFilter from "./TypesFilters";

// export default async function FiltersSidebar({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }) {
//   const selectedBrands = Array.isArray(searchParams.brand)
//     ? searchParams.brand
//     : searchParams.brand
//     ? [searchParams.brand]
//     : [];

//   const selectedClasses = Array.isArray(searchParams.class)
//     ? searchParams.class
//     : searchParams.class
//     ? [searchParams.class]
//     : [];

//   const selectedTypes = Array.isArray(searchParams.type)
//     ? searchParams.type
//     : searchParams.type
//     ? [searchParams.type]
//     : [];

//   // Get Brands:
//   const Brands = await getBrands();

//   // Get All Classes:
//   const Classes = await getClasses();

//   // Get All Keys:
//   const Keys = await getKeys();

//   const filteredKeys = Keys.filter((key) => {
//     const brand = key.brand.trim().toUpperCase();
//     const type = key.boxName.match(/\d{3}/)?.[0];
//     const cls = Classes.find(
//       (class) => class.boxSapNumber === key.boxSapNumber
//     )?.name;

//     const matchBrand =
//       selectedBrands.length === 0 || selectedBrands.includes(brand);
//     const matchClass =
//       selectedClasses.length === 0 || selectedClasses.includes(cls);
//     const matchType =
//       selectedTypes.length === 0 || selectedTypes.includes(type);

//     return matchBrand && matchClass && matchType;
//   });

//   if (!Brands || !Classes || !Keys) {
//     return <p>Unable to load filters.</p>;
//   }

//   return (
//     <>
//       <BrandsFilter Brands={Brands} Keys={Keys} />
//       <ClassesFilters Classes={Classes} />
//       <TypesFilter Keys={Keys} />
//     </>
//   );
// }

import { getClasses } from "@/components/lib/getClasses";
import { getKeys } from "../../lib/getKeys";
import { getBrands } from "../../lib/getBrands";
import BrandsFilter from "./BrandsFilter";
import ClassesFilters from "./ClassesFilters";
import TypesFilter from "./TypesFilters";

export default async function FiltersSidebar({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // --- Extract filters from URL
  const selectedBrands = Array.isArray(searchParams.brand)
    ? searchParams.brand
    : searchParams.brand
    ? [searchParams.brand]
    : [];

  const selectedClasses = Array.isArray(searchParams.class)
    ? searchParams.class
    : searchParams.class
    ? [searchParams.class]
    : [];

  const selectedTypes = Array.isArray(searchParams.type)
    ? searchParams.type
    : searchParams.type
    ? [searchParams.type]
    : [];

  // --- Get all data
  const allBrands = await getBrands();
  if (!allBrands) {
    return <p>Unable to load filters.</p>;
  }
  const allClasses = await getClasses(); // { name, boxSapNumber }[]
  const allKeys = await getKeys();

  // --- Filter keys based on current selection
  const filteredKeys = allKeys.filter((key) => {
    const brand = key.brand.trim().toUpperCase();
    const type = key.boxName.match(/\d{3}/)?.[0];
    const cls = allClasses.find(
      (c) => c.boxSapNumber === key.boxSapNumber
    )?.name;

    const matchBrand =
      selectedBrands.length === 0 || (brand && selectedBrands.includes(brand));
    const matchClass =
      selectedClasses.length === 0 || (cls && selectedClasses.includes(cls));
    const matchType =
      selectedTypes.length === 0 || (type && selectedTypes.includes(type));

    return matchBrand && matchClass && matchType;
  });

  // --- COUNT by brand
  const brandCounts: Record<string, number> = {};
  for (const key of filteredKeys) {
    const brand = key.brand.trim().toUpperCase();
    brandCounts[brand] = (brandCounts[brand] || 0) + 1;
  }

  const BrandsWithCounts = allBrands
    .map((b) => ({
      name: b.trim().toUpperCase(),
      count: brandCounts[b.trim().toUpperCase()] || 0,
    }))
    .filter((b) => b.count > 0);

  // --- COUNT by class
  const classCounts: Record<string, number> = {};
  for (const key of filteredKeys) {
    const cls = allClasses.find(
      (c) => c.boxSapNumber === key.boxSapNumber
    )?.name;
    if (cls) {
      classCounts[cls] = (classCounts[cls] || 0) + 1;
    }
  }

  const ClassesWithCounts = Object.entries(classCounts).map(
    ([name, count]) => ({ name, count })
  );

  // --- COUNT by type (from boxName)
  const typeCounts: Record<string, number> = {};
  for (const key of filteredKeys) {
    const type = key.boxName.match(/\d{3}/)?.[0];
    if (type) {
      typeCounts[type] = (typeCounts[type] || 0) + 1;
    }
  }

  const TypesWithCounts = Object.entries(typeCounts).map(([name, count]) => ({
    name,
    count,
  }));
  console.log(BrandsWithCounts);
  return (
    <>
      <BrandsFilter Brands={BrandsWithCounts} />
      <ClassesFilters Classes={ClassesWithCounts} />
      <TypesFilter Types={TypesWithCounts} />
    </>
  );
}
