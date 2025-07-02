import Keys from "./Keys";
import { getAllKeys } from "@/components/lib/getAllKeys";

// type KeysLoaderProps = {
//   brands: { [key: string]: string | string[] | undefined };
// };

export default async function KeysLoader() {
  const allKeys = await getAllKeys();
  console.log("allKeys:", allKeys);
  if (allKeys) {
    return (
      <Keys
        allKeys={allKeys}
        // brands={brands}
      />
    );
  }
}
