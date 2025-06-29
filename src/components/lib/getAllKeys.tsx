import { getBrands } from "./getBrands";
import { getKeysByBrand } from "./getKeysByBrand";

export async function getAllKeys(): Promise<any[]> {
  const brands = await getBrands();
  if (!brands) return [];

  const keysPromises = brands.map((brand) => getKeysByBrand(brand));
  const allKeysArrays = await Promise.all(keysPromises);

  const allKeys = allKeysArrays.flat().filter(Boolean);

  return allKeys;
}
