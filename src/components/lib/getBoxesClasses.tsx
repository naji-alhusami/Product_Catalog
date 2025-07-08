export function getBoxesClasses(code: string): string | null {
  if (!/^\d+$/.test(code) || code.length < 11) return null;

  const boxId = code.substring(5, 8);

  const boxMap: Record<string, string> = {
    "103": "Flinkey BLE",
    "107": "Flinkey BLE + KPC",
    "110": "IXL Kit + KPC",
    "111": "IXL Kit",
    "114": "Flinkey BLE + IXL + KPC",
    "115": "Flinkey BLE + KPC",
  };

  return boxMap[boxId] ?? "undefined";
}
