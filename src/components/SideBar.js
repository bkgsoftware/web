import React from "react";
import NavLinks from "./NavLinks";
import Button from "./Button";

const SideBar = ({ isOpen = false }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm z-30" />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 flex flex-col justify-center items-center h-full gap-8 bg-white shadow-lg transition-transform transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } w-3/4 max-w-[300px] z-40`}
      >
        <NavLinks orientation="col" />
        <Button to="/contact" text="Contact Us" type="basic" />
      </div>
    </>
  );
};

export default SideBar;
