import React, { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Button from "./Button";
import HamburgerMenuIcon from "./HamburgerMenuIcon/HamburgerMenuIcon";
import SideBar from "./SideBar";

// // Desktop nav link component
// const NavLink = ({
//                    to,
//                    children,
//                    isActive = false,
//                    className = ""
//                  }) => {
//   return (
//       <Link
//           to={to}
//           className={`transition-all duration-350 hover:scale-110 border-2 py-1 px-2 rounded-md hover:shadow-md ${
//               isActive
//                   ? 'border-orange shadow-md scale-110'
//                   : 'border-white hover:border-orange'
//           } ${className}`}
//       >
//         {children}
//       </Link>
//   );
// };

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
      window.addEventListener('resize', handleResize);

      // Clean up the event listener on unmount
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, [isSidebarOpen]);

  // const isActivePath = (path) => {
  //   if (path === '/') {
  //     return location.pathname === '/';
  //   }
  //   return location.pathname.startsWith(path);
  // };

  return (
      <header className="bg-white text-dark-gray flex items-center justify-between p-4 px-10 h-24 z-0 shadow-sm">
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
        <SideBar isOpen={isSidebarOpen}/>
      </header>
  );
};

export default Header;