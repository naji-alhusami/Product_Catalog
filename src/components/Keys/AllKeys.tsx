import Image from "next/image";
import { type Key } from "../lib/getAllKeys";

type allKeysProps = {
  allKeys: Key[];
};
const AllKeys = ({ allKeys }: allKeysProps) => {
  console.log(allKeys);
  return (
    <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full">
      {allKeys.map((key) => (
        <div
          key={key.id}
          className="border-1 border-gray-200 rounded-md p-2 w-full"
        >
          <Image
            src={key.keyForm.imageUrl}
            alt="key-image"
            width={500}
            height={100}
            className="rounded-md"
          />
          <div className="flex flex-row items-center justify-start py-2">
            <h1 className="font-bold">Brand:</h1>
            <p>{key.brand}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllKeys;
