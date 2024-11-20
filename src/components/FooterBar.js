import React, { useEffect, useState } from "react";
import QuickContact from "./QuickContact";
import { Link, useLocation } from "react-router-dom";

const FooterBar = () => {
  const location = useLocation();
  const [showHtml, setShowHtml] = useState(true);
  useEffect(() => {
    if (location.pathname === "/contact") {
      setShowHtml(false);
    } else {
      setShowHtml(true);
    }
  }, [location.pathname]);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {showHtml ? <QuickContact /> : ""}
      <div>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              &copy; {currentYear} BKG Software. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {/* TODO Can be a quick generation of privacy and stuff. Esp since we do collected emails */}
              <Link to="#" className="text-sm hover:text-white">
                Privacy Policy
              </Link>
              <Link to="#" className="text-sm hover:text-white">
                Terms of Use
              </Link>
              <Link to="#" className="text-sm hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
