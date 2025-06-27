"use client";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/Images/test.png";

const DesktopNavbar = () => {
  return (
    <div className="hidden md:w-full md:h-16 md:flex flex-row justify-between items-center bg-white shadow-2xl md:px-16 border-b-1 border-cyan-300">
      <Image src={Logo} alt="logo" width={250} height={250} />
      <nav className="flex flex-row justify-center items-center text-xl font-bold gap-x-12">
        <Link
          href="/"
          className="p-2 rounded-md hover:bg-cyan-200 hover:scale-110 transition-transform"
        >
          Home
        </Link>
        <Link
          href="/keyfobs"
          className="p-2 rounded-md hover:bg-cyan-200 hover:scale-110 transition-transform"
        >
          Keyfobs
        </Link>
        <Link
          href="/about"
          className="p-2 rounded-md hover:bg-cyan-200 hover:scale-110 transition-transform"
        >
          About
        </Link>
      </nav>
    </div>
  );
};

export default DesktopNavbar;
