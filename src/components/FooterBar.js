import { NavLink } from "react-router-dom";
import React from "react";
import { ReactComponent as BKGLogo} from "../assets/bkg.svg";

const NavBar = () => {
    return (
        <nav className="flex justify-between border-b-2 bg-tertiary p-2 pl-10 pr-10">
            <div className="flex w-1/3 items-center justify-center space-x-4">
                <BKGLogo className="h-20 w-auto"/>
                <h1>Software Consultancy</h1>
            </div>
            <div className="flex w-1/3 items-center justify-center">
                <div className="flex w-1/3 items-center justify-center">
                    <NavLink
                        to="/"
                        className={({isActive}) => isActive ? "hover:text-primary" : "hover:text-primary"}
                    >
                        Home
                    </NavLink>
                </div>
                <div className="flex w-1/3 items-center justify-center">
                    <NavLink
                        to="/about"
                        className={({isActive}) => isActive ? "hover:text-primary" : "hover:text-primary"}
                    >About
                    </NavLink>
                </div>
                <div className="flex w-1/3 items-center justify-center">
                    <NavLink
                        to="/project"
                        className={({isActive}) => isActive ? "hover:text-primary" : "hover:text-primary"}
                    >Projects
                    </NavLink>
                </div>
            </div>
            <div className="flex w-1/3 items-center justify-center">
                <NavLink
                    to="/contact"
                    className={({isActive}) => isActive ? "hover:p-2 hover:text-primary hover:border hover:rounded-md" : "hover:p-2 hover:text-primary hover:border hover:rounded-md"}
                >Contact
                </NavLink>
            </div>
        </nav>
    );
}

export default NavBar;