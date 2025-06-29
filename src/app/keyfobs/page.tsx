import Keys from "@/components/Keys/Keys";
import Navbar from "@/components/layout/Navbar/BasicNavbar";
import { getBrands } from "@/components/lib/getBrands";

async function Keyfobs() {
  const brands = await getBrands();
  return (
    <div>
      <Navbar />
      {brands && <Keys brands={brands} />}
    </div>
  );
}

export default Keyfobs;
