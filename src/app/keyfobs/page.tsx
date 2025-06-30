// import AllKeys from "@/components/Keys/AllKeys";
import Keys from "@/components/Keys/Keys";
// import FiltersSidebar from "@/components/Keys/FiltersSidebar";
import Navbar from "@/components/layout/Navbar/BasicNavbar";
import { getAllKeys } from "@/components/lib/getAllKeys";
import { getBrands } from "@/components/lib/getBrands";

async function KeyfobsPage() {
  const brands = await getBrands();
  const allKeys = await getAllKeys();

  return (
    <div>
      <Navbar />
      {brands && allKeys && <Keys brands={brands} allKeys={allKeys} />}
    </div>
  );
}

export default KeyfobsPage;
