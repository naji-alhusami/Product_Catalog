import AllKeys from "@/components/Keys/AllKeys";
import Filters from "@/components/Keys/Filters";
import FiltersSidebar from "@/components/Keys/FiltersSidebar";
import Navbar from "@/components/layout/Navbar/BasicNavbar";
import { getAllKeys } from "@/components/lib/getAllKeys";
import { getBrands } from "@/components/lib/getBrands";

async function Keyfobs() {
  const brands = await getBrands();
  let allKeys: any[] = [];

  try {
    allKeys = await getAllKeys();
  } catch (err) {
    console.error("Failed to fetch keys:", err);
  }

  return (
    <div>
      <Navbar />
      <div className="h-screen flex flex-row">
        {brands && <FiltersSidebar brands={brands} />}
        {brands && allKeys && <Filters brands={brands} allKeys={allKeys} />}
      </div>
    </div>
  );
}

export default Keyfobs;
