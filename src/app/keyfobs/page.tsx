import { Suspense } from "react";

import Navbar from "@/components/layout/Navbar/BasicNavbar";
import KeysHeader from "@/components/KeyfobsPage/Header/KeysHeader";
import FiltersSidebar from "@/components/KeyfobsPage/Filters/FiltersSidebar";
import FiltersLoading from "@/components/KeyfobsPage/Filters/FiltersLoading";
import KeysLoader from "@/components/KeyfobsPage/Keys/KeysLoader";
import KeysToolbar from "@/components/KeyfobsPage/Keys/KeysToolbar";
import KeysLoading from "@/components/KeyfobsPage/Keys/KeysLoading";

export default function KeyfobsPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col mx-12 my-20 lg:px-12">
        <KeysHeader />
        {/* <div className="flex flex-row">
          <div className="hidden lg:flex flex-col w-100 pr-16 py-32">
            <h1 className="text-2xl font-semibold">Filters</h1>
            <Suspense fallback={<FiltersLoading />}>
              <FiltersSidebar />
            </Suspense>
          </div>
          <div className="w-full">
            <KeysToolbar />
            <Suspense fallback={<KeysLoading />}>
              <KeysLoader />
            </Suspense>
          </div>
        </div> */}
        <div className="flex flex-row pt-20">
          {/* Filters Sidebar */}
          <aside className="hidden lg:flex flex-col w-64 sticky top-0 max-h-screen overflow-y-auto pr-8 pt-2">
            <h1 className="text-2xl font-semibold mb-4">Filters</h1>
            <Suspense fallback={<FiltersLoading />}>
              <FiltersSidebar />
            </Suspense>
          </aside>

          {/* Main Content (Keys) */}
          <main className="flex-1 pl-10">
            <KeysToolbar />
            <Suspense fallback={<KeysLoading />}>
              <KeysLoader />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}
