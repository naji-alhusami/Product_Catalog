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

export async function getAllKeys(): Promise<Key[]> {
  const brands = await getBrands();

  if (!brands) return [];
  const cleanedBrands = brands.map((b) => b.trim());
  const keysPromises = cleanedBrands.map((brand) => getKeysByBrand(brand));
  const allKeysArrays = await Promise.all(keysPromises);

  const allKeys = allKeysArrays.flat().filter(Boolean);

  return allKeys;
}
