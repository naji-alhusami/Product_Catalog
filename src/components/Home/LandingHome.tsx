import Image from "next/image";
import HomeImage from "@/Images/HomeImage.jpg";
import Navbar from "../layout/Navbar/BasicNavbar";

const LandingHome = () => {
  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Navbar on top of the image */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Background Image */}
      <Image
        src={HomeImage}
        alt="home-image"
        className="z-0 object-cover"
        priority
        fill
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Text content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-7xl font-bold mb-4">
          🔑 Find the Right Key
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl py-10">
          Discover every available car key with detailed images and powerful
          filters by brand, type, and more.
        </p>
        <button className="text-xl mt-6 px-20 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-300 transition cursor-pointer">
          Browse Keys
        </button>
      </div>
    </div>
  );
};

export default LandingHome;
