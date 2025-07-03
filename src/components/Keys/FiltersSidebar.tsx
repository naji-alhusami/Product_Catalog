import { getBrands } from "../lib/getBrands";
import BrandsFilter from "./BrandsFilter";

export default async function FiltersSidebar() {
  const brands = await getBrands();

  if (brands) {
    return <BrandsFilter brands={brands} />;
  }
}
