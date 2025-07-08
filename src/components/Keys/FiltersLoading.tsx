const FiltersLoading = () => {
  const skeletons = Array.from({ length: 5 });

  return (
    <div className="hidden lg:flex flex-col w-full max-w-xs pr-16 pb-4">
      {["Brands", "Classes", "Types"].map((section) => (
        <div key={section} className="mb-6">
          <h2 className="py-2 font-bold text-cyan-900 text-lg">{section}</h2>

          {skeletons.map((_, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 mb-2 animate-pulse"
            >
              <div className="h-4 w-4 bg-gray-300 rounded" />
              <div className="h-4 bg-gray-300 rounded w-24" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FiltersLoading;
