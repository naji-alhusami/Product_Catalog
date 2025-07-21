import Keys from "./Keys";
import { getValidKeys } from "../../lib/getValidKeys";

export default async function KeysLoader() {
  const allKeys = await getValidKeys();
  
  return <Keys allKeys={allKeys} />;
}
