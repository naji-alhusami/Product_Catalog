import { getBrands } from "./getBrands";
import { getKeysByBrand } from "./getKeysByBrand";

export type Key = {
  id: number;
  boxName: string;
  boxSapNumber: string;
  brand: string;
  keyForm: {
    id: number;
    name: string;
    imageUrl: string;
  };
};

export async function getKeys(): Promise<Key[]> {
  const brands = await getBrands();

  if (!brands) return [];
  const allKeysArrays = await Promise.all(
    brands.map((brand) => getKeysByBrand(brand))
  );

  const allKeys = allKeysArrays.flat().filter(Boolean);

  return allKeys;
}
