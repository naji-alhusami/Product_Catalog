// import { getAllKeys } from "@/components/lib/getAllKeys";
import { getAllKeys } from "@/components/lib/getAllKeys";
// import { getBrands } from "@/components/lib/getBrands";
// import { getKeysByBrand } from "@/components/lib/getKeysByBrand";
// import Image from "next/image";

export default async function HomePage() {
  // const keys = await getAllKeys();
  // const keys = await getKeysByBrand("Honda");
  // const brands = await getBrands();
  const allKeys = await getAllKeys();
  return (
    <div>
      <h1>Vehicle Brands</h1>
      {/* {keys ? (
        <ul>
          {keys.map((key) => (
            <div key={key.id}>
              <li>{key.keyForm.imageUrl}</li>
              <Image src={key.keyForm.imageUrl} alt="key-image" width={200} height={200} />
            </div>
          ))}
        </ul>
      ) : (
        <p>Failed to load brands.</p>
      )} */}
    </div>
  );
}
