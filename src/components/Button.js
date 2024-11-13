import React from 'react';
import { Link } from 'react-router-dom';

function Button({to = "/", text = "Button", type = "basic", className = ""}) {

    // Base button class shared by all buttons
    const baseClass = "rounded-md px-3.5 py-2.5 font-medium";

    // Dictionary of button types with predefined styles
    const buttonTypeClasses = {
        "basic": "bg-black hover:bg-dark-gray text-white",
        "green-outline": "border-2 border-green-500 text-green-500 hover:bg-green-100",
        "green-fill": "bg-green hover:saturate-150 transition-all duration-150 hover:shadow-md hover:scale-105 px-3.5 py-2.5 font-medium text-white shadow-sm hover:bg-black-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600",
    };

    // Get the class for the specified button type, fallback to 'basic' if not found
    const buttonTypeClass = buttonTypeClasses[type] || buttonTypeClasses.basic;

    return (
        <Link
            to={to}
            className={`${baseClass} ${buttonTypeClass} ${className}`}
        >
            {text}
        </Link>
    );
}

export default Button;