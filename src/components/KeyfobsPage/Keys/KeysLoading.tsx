const KeysLoading = () => {
  const skeletons = Array.from({ length: 12 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {skeletons.map((_, index) => (
        <div
          key={index}
          className={`
            ${index >= 10 ? "hidden lg:block" : ""}
            relative border border-gray-300 rounded-md p-2 w-full animate-pulse
          `}
        >
          <div className="absolute top-5 right-5 px-4 py-2 bg-gray-300 rounded-lg h-6 w-12" />

          <div className="bg-gray-300 rounded-md h-48 w-full mb-4" />

          <div className="flex items-center justify-start py-4 space-x-2">
            <div className="h-4 w-16 bg-gray-300 rounded" />
            <div className="h-4 w-24 bg-gray-300 rounded" />
          </div>

          <div className="h-10 bg-gray-300 rounded w-full" />
        </div>
      ))}
    </div>
  );
};

export default KeysLoading;
