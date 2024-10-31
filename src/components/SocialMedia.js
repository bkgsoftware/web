import React from "react";
import { Github } from "lucide-react"
import {Link} from "react-router-dom";

const Copyright = () => {
    return (
        <nav className="flex items-center justify-center text-center p-2 pl-10 pr-10 text-white bg-black">
            <Link to="https://github.com/bkgsoftware">
                <Github color='white' className="transition duration-350 hover:scale-110"></Github>
            </Link>
        </nav>
    );
}

export default Copyright;