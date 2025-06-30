import Image from "next/image";

import box from "../../Images/box.jpg";

const KeysHeader = () => {
  return (
    <div className="h-full w-full xl:flex xl:flex-row xl:justify-between xl:items-center xl:gap-x-16">
      <div className="py-5 h-full w-full mx-auto text-center flex flex-col justify-between items-center xl:text-start">
        <div className="text-center w-full xl:text-start">
          <h1 className="text-4xl font-bold mb-4">
            🔐 Find the Perfect Key for Any Vehicle
          </h1>
          <p className="text-gray-600 text-lg pb-16">
            Browse our collection of car keys and filter by brand, type, or
            features to quickly find the exact key you need.
          </p>
        </div>
        {/* Search Bar */}
        <div className="relative mx-auto my-6 w-full">
          <input
            type="text"
            placeholder="What kind of key are you looking for?"
            className="w-full pl-6 pr-14 py-2 bg-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-cyan-200 text-white p-2 hover:bg-cyan-500 cursor-pointer">
            🔍
          </button>
        </div>
        <div className="w-full flex items-start space-x-6 mb-6">
          <button className="px-4 py-2 bg-gray-100 text-black rounded-full font-medium shadow-sm hover:bg-gray-200 cursor-pointer">
            🔑 Keys
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-black rounded-full hover:bg-gray-200 cursor-pointer">
            🚗 Brands
          </button>
          <button className="px-4 py-2 text-gray-500 hover:text-black rounded-full hover:bg-gray-200 cursor-pointer">
            ⚙️ Types
          </button>
        </div>
      </div>
      <div>
        <Image
          src={box}
          alt="box"
          width={600}
          height={500}
          className="hidden xl:flex xl:rounded-lg"
        />
      </div>
    </div>
  );
};

export default KeysHeader;
