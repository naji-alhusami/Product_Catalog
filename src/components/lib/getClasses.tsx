import { getKeys } from "./getKeys";
import { getBoxesClasses } from "./getBoxesClasses";

export type ClassWithCount = {
  name: string;
  count: number;
};

export async function getClasses(): Promise<ClassWithCount[]> {
  const keys = await getKeys();

  // Fetch class for each key
  const allClassesRaw = await Promise.all(
    keys.map((key) => getBoxesClasses(key.boxSapNumber))
  );

  // Count classes
  const classCounts: Record<string, number> = {};

  for (const cls of allClassesRaw) {
    if (cls) {
      const name = cls.trim();
      classCounts[name] = (classCounts[name] || 0) + 1;
    }
  }

  // Convert to array
  const classList: ClassWithCount[] = Object.entries(classCounts).map(
    ([name, count]) => ({ name, count })
  );

  return classList;
}
