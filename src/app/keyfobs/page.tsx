import Navbar from "@/components/layout/Navbar/BasicNavbar";
import { Suspense } from "react";
import KeysLoader from "@/components/Keys/KeysLoader";
import KeysHeader from "@/components/Keys/KeysHeader";
import FiltersSidebar from "@/components/Keys/FiltersSidebar";

export default function KeyfobsPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col mx-12 my-20 lg:px-12">
        <KeysHeader />
        <div className="flex flex-row">
          <div className="hidden lg:flex flex-col w-100 pr-16 py-32">
            <h1 className="text-2xl font-semibold">Filters</h1>
            <Suspense fallback={<p>Loading Filters...</p>}>
              <FiltersSidebar />
            </Suspense>
          </div>
          <Suspense fallback={<p>Loading keys...</p>}>
            <KeysLoader />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
