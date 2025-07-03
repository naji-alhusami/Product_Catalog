export function getBoxesClasses(code: string): string | null {
  if (!/^\d+$/.test(code) || code.length < 11) return null;

  const boxId = code.substring(5, 8);

  const boxMap: Record<string, string> = {
    "101": "Flinkey BLE+KPC",
    "102": "Box AUDI",
    "103": "Box TOYOTA",
  };

  return boxMap[boxId] ?? "BOX";
}
