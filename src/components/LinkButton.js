import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({
                     to,
                     children,
                     isActive = false,
                     className = ""
                 }) => {
    return (
        <Link
            to={to}
            className={`transition-all duration-500 ease-in-out hover:scale-110 border-2 py-1 px-2 rounded-md hover:shadow-md ${
                isActive
                    ? 'border-orange shadow-md scale-110'
                    : 'border-white hover:border-orange'
            } ${className}`}
        >
            {children}
        </Link>
    );
};

export default NavLink;