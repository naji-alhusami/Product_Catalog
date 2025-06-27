"use client";
import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const [showSideNavbar, setShowSideNavbar] = useState<boolean>(false);
  //   const [isScrolled, setIsScrolled] = useState<boolean>(false);

  function toggleButtonHandler() {
    setIsToggled(!isToggled);
    setShowSideNavbar(!showSideNavbar);
  }

  return (
    <div className="w-full flex justify-center items-center">
      {/* Navbar in Small Screens */}
      <MobileNavbar
        isToggled={isToggled}
        toggleButtonHandler={toggleButtonHandler}
      />

      {/* Navbar in Large Screens */}
      <DesktopNavbar />
    </div>
  );
};

export default Navbar;
