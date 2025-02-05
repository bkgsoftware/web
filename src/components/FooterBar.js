import React, { useEffect, useState } from "react";
import QuickContact from "./QuickContact";
import { useLocation } from "react-router-dom";

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
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-sm">
              &copy; {currentYear} BKG Software. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
