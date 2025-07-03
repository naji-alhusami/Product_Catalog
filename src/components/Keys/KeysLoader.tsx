import { getSupportedBrands } from "@/components/lib/getSupportedBrands";
import { getKeysByBrand } from "@/components/lib/getKeysByBrand";
import { getBrands } from "../lib/getBrands";
import Keys from "./Keys";

export default async function KeysLoader() {
  const supportedBrands = await getSupportedBrands();
  const allAvailableBrands = await getBrands();

  if (allAvailableBrands && supportedBrands) {
    const validBrands = allAvailableBrands.filter((b) =>
      supportedBrands.includes(b.toUpperCase())
    );

    const keyPromises = validBrands.map((brand) => getKeysByBrand(brand));
    const resolved = await Promise.allSettled(keyPromises);

    const allKeys = resolved
      .filter((r) => r.status === "fulfilled")
      .flatMap((r) => (r as PromiseFulfilledResult<any[]>).value);

    return <Keys allKeys={allKeys} />;
  }
}
