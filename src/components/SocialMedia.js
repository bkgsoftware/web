import React from "react";
import { Github } from "lucide-react"

const Copyright = () => {
    return (
        <nav className="flex items-center justify-center text-center p-2 pl-10 pr-10 text-white bg-black">
            <a href="https://github.com/bkgsoftware">
                <Github color='white'></Github>
            </a>
        </nav>
    );
}

export default Copyright;