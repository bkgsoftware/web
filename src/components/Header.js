import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";
import HamburgerMenuIcon from "./HamburgerMenuIcon/HamburgerMenuIcon";
import SideBar from "./SideBar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768 && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Attach resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarOpen]);

  return (
    <header className="text-dark-gray flex justify-center p-4 px-10 h-24 z-0 shadow-sm">
      <div className="flex items-center justify-between w-full max-w-[1800px]">
        <div className="flex items-center gap-6">
          <Logo width={42} height={42} />
          BKG Software
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Button to="/contact" text="Contact Us" type="basic" />
        </div>
        <button onClick={toggleSidebar} className="md:hidden z-50">
          <HamburgerMenuIcon isOpen={isSidebarOpen} />
        </button>
        <SideBar isOpen={isSidebarOpen} />
      </div>
    </header>
  );
};

export default Header;
