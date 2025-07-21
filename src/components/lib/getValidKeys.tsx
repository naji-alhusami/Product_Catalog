// import { getBrands } from "./getBrands";
// import { getSupportedBrands } from "./getSupportedBrands";
// import { getKeysByBrand } from "./getKeysByBrand";

// export async function getValidKeys(): Promise<any[]> {
//   const supportedBrands = await getSupportedBrands();
//   const allAvailableBrands = await getBrands();

//   if (!supportedBrands || !allAvailableBrands) return [];

//   const validBrands = allAvailableBrands.filter((b) =>
//     supportedBrands.includes(b.toUpperCase())
//   );

//   const keyPromises = validBrands.map((brand) => getKeysByBrand(brand));
//   const resolved = await Promise.allSettled(keyPromises);

//   const allKeys = resolved
//     .filter((r): r is PromiseFulfilledResult<any[]> => r.status === "fulfilled")
//     .flatMap((r) => r.value);

//   return allKeys;
// }
