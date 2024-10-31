import React, { useState } from "react";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/bkg.svg";

// Desktop nav link component
const NavLink = ({
                   to,
                   children,
                   isActive = false,
                   className = ""
                 }) => {
  return (
      <Link
          to={to}
          className={`transition-all duration-350 hover:scale-110 border-2 py-1 px-2 rounded-md hover:shadow-md ${
              isActive
                  ? 'border-orange shadow-md scale-110'
                  : 'border-white hover:border-orange'
          } ${className}`}
      >
        {children}
      </Link>
  );
};

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Meet the Team', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActivePath = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
      <header className="sticky inset-x-0 top-0 z-50 bg-white text-black shadow">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 max-w-screen-xl mx-auto">
          <div className="flex lg:flex-1">
            <Link to="/" className="flex -m-1.5 p-1.5 transition">
              <span className="sr-only">BKG Software</span>
              <img
                  alt="Logo"
                  src={logo}
                  className="h-8 w-auto"
              />
              <h1 className="flex items-center ml-5">BKG Software</h1>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            >
              <span className="sr-only">Open main menu</span>
              <Menu aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.href}
                    isActive={isActivePath(item.href)}
                >
                  {item.name}
                </NavLink>
            ))}
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-black sm:ring-opacity-30">
            <div className="flex items-center justify-between">
              <div className="flex lg:flex-1">
                <Link to="/" className="flex -m-1.5 p-1.5 transition duration-350 hover:scale-110">
                  <span className="sr-only">BKG Software</span>
                  <img
                      alt="Logo"
                      src={logo}
                      className="h-8 w-auto"
                  />
                  <h1 className="flex items-center ml-5">BKG Software</h1>
                </Link>
              </div>
              <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="h-6 w-6"/>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-black divide-opacity-30">
                <div className="space-y-4 py-6">
                    {navigation.map((item) => (
                    <div key={item.name} className="block">
                      <NavLink
                          key={item.name}
                          to={item.href}
                          isActive={isActivePath(item.href)}
                      >
                          {item.name}
                      </NavLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  );
};

export default Header;