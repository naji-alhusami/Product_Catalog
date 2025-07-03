import Image from "next/image";

import { type Key } from "../lib/getAllKeys";

type allKeysProps = {
  allKeys: Key[];
  brands: string[];
};

const AllKeys = ({ allKeys }: allKeysProps) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-16">
      {allKeys.map((key) => (
        <div
          key={key.id}
          className="relative border-1 border-gray-200 rounded-md p-2 w-full"
        >
          <p className="absolute text-lg border-1 border-black top-5 left-60 px-2 py-1 text-black bg-white rounded-lg font-bold">
            {key.boxName.match(/\d+/)?.[0]}
          </p>
          <Image
            src={key.keyForm.imageUrl}
            alt="key-image"
            width={500}
            height={100}
            className="rounded-md"
            priority
          />
          <div className="flex flex-row items-center justify-start py-4">
            <h1 className="font-bold text-md pr-2">Brand:</h1>
            <p className="font-bold text-sm text-gray-500">{key.brand}</p>
          </div>
          <div className="">
            <button className="cursor-pointer w-full px-3 py-2 text-white font-bold bg-cyan-400 hover:bg-cyan-700">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllKeys;
