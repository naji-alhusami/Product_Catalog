import { getBrands } from "../lib/getBrands";
import BrandsFilter from "./BrandsFilter";

type FiltersSidebarProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function FiltersSidebar({
  searchParams,
}: FiltersSidebarProps) {
  const brands = await getBrands();
  console.log("brands:", brands);
  if (brands) {
    return <BrandsFilter brands={brands} searchParams={searchParams} />;
  }
}
