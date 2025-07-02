import Keys from "./Keys";
import { getAllKeys } from "@/components/lib/getAllKeys";

type KeysLoaderProps = {
  brands: { [key: string]: string | string[] | undefined };
};

export default async function KeysLoader({ brands }: KeysLoaderProps) {
  const allKeys = await getAllKeys();

  if (allKeys) {
    return <Keys allKeys={allKeys} brands={brands} />;
  }
}
