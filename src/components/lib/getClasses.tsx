import { getKeys } from "./getKeys";
import { getBoxesClasses } from "./getBoxesClasses";

export async function getClasses(): Promise<string[]> {
  const keys = await getKeys();

  const allClassesRaw = await Promise.all(
    keys.map((key) => getBoxesClasses(key.boxSapNumber))
  );

  const classes = [
    ...new Set(allClassesRaw.filter((cls): cls is string => cls !== null)),
  ];

  return classes;
}
