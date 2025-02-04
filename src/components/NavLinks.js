import React from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  // { name: "Services", href: "/services" },
  // { name: "Meet the Team", href: "/about" },
];

const NavLinks = ({ orientation = "row" }) => {
  const location = useLocation();

  const isActivePath = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4`}
    >
      <ul
        className={`flex ${orientation === "row" ? "flex-row" : "flex-col"} gap-8 items-center`}
      >
        {navigation.map((navItem) => (
          <li className="group transition duration-200">
            <Link to={navItem.href}>{navItem.name}</Link>
            {isActivePath(navItem.href) && navItem.href !== "/" ? (
              <span class="block max-w-full h-0.5 bg-orange"></span>
            ) : (
              <span class="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5   bg-orange"></span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
