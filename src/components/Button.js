import React from "react";
import { Link } from "react-router-dom";

function Button({ to = "/", text = "Button", type = "basic", className = "" }) {
  // Base button class shared by all buttons
  const baseClass =
    "rounded-md px-3.5 py-2.5 font-medium transition-all duration-150 shadow-md hover:shadow-lg hover:scale-105";

  // Dictionary of button types with predefined styles
  const buttonTypeClasses = {
    basic: "bg-black hover:bg-dark-gray text-white",
    "green-outline": "border-2 border-blue text-black",
    "green-fill": "bg-blue hover:saturate-150 text-white",
    "orange-fill": "bg-orange hover:saturate-125 text-white",
  };

  // Get the class for the specified button type, fallback to 'basic' if not found
  const buttonTypeClass = buttonTypeClasses[type] || buttonTypeClasses.basic;

  return (
    <Link to={to} className={`${baseClass} ${buttonTypeClass} ${className}`}>
      {text}
    </Link>
  );
}

export default Button;
