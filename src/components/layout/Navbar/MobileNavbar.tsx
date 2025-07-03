"use client";
import Link from "next/link";
import Image from "next/image";

// import Logo from "@/Images/test.png";

type MobileNavbarProps = {
  isToggled: boolean;
  toggleButtonHandler: () => void;
};

const MobileNavbar = ({
  isToggled,
  toggleButtonHandler,
}: MobileNavbarProps) => {
  return (
    <>
      <div className="w-60 h-16 p-2 border-b-3 border-x-3 border-cyan-300 bg-white rounded-b-full flex justify-center items-center absolute top-0 left-1/2 transform -translate-x-1/2 md:hidden">
        <Image src="/test.png" alt="logo" width={500} height={500} />
      </div>
      <div>
        <nav className="fixed w-full z-40 px-6 py-3 md:flex flex-row items-center justify-between md:px-8 md:py-0 lg:px-20">
          <div
            className={`fixed z-40 bg-white transition-all duration-500 ease-in-out md:hidden border-r-2 border-b-2 border-cyan-300 ${
              isToggled
                ? "w-60 h-66 top-0 left-0 rounded-br-full"
                : "w-16 h-16 top-0 left-0 rounded-br-full"
            }`}
          >
            <div
              className={`absolute flex flex-col items-center justify-center w-6 h-6 cursor-pointer ${
                isToggled ? "top-2.5 left-2.5" : "top-2.5 left-2.5"
              }`}
              onClick={toggleButtonHandler}
            >
              <span
                className={`block w-7 h-1 bg-purple-900 rounded transition-all duration-300 ${
                  isToggled ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-purple-900  rounded my-1 transition-all duration-300 ${
                  isToggled ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-7 h-1 bg-purple-900  rounded transition-all duration-300 ${
                  isToggled ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>

            {isToggled && (
              <nav className="flex flex-col justify-between items-center h-[80vh] mt-16 md:hidden">
                <div className="flex flex-col items-center gap-y-8 text-2xl">
                  <Link
                    href="/"
                    className="absolute left-32 top-2 p-2 rounded-md hover:bg-cyan-200 hover:scale-110 transition-transform"
                  >
                    Home
                  </Link>
                  <Link
                    href="/keyfobs"
                    className="absolute left-22 top-20 p-2 rounded-md hover:bg-cyan-200 hover:scale-110 transition-transform"
                  >
                    Keyfob
                  </Link>
                  <Link
                    href="/about"
                    className="absolute left-12 top-40 p-2 rounded-md hover:bg-cyan-200 hover:scale-110 transition-transform"
                  >
                    About
                  </Link>
                </div>
              </nav>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileNavbar;
