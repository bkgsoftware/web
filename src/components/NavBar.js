import { NavLink } from "react-router-dom";
import React from "react";

const NavBar = () => {
    return (
        <nav class="space-x-2 bg-red-50">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
}

export default NavBar;