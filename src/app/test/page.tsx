import { getBrands } from "@/components/lib/getBrands";

export default async function HomePage() {
  const brands = await getBrands();
  return (
    <div>
      <h1>Vehicle Brands</h1>
      {brands ? (
        <ul>
          {brands.map((brand) => (
            <li key={brand.id}>{brand.name}</li>
          ))}
        </ul>
      ) : (
        <p>Failed to load brands.</p>
      )}
    </div>
  );
}
