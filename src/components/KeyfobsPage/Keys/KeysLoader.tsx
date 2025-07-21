import Keys from "./Keys";
import { getKeys } from "@/components/lib/getKeys";

export default async function KeysLoader() {
  const allKeys = await getKeys();
  
  return <Keys allKeys={allKeys} />;
}
