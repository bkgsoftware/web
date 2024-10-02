import React from "react";
import GitHubLogo from "../assets/github-logo.png";

const Copyright = () => {
    return (
        <nav className="flex items-center justify-center border-t-2 bg-tertiary p-2 pl-10 pr-10">
            <a href="https://github.com/bkgsoftware">
                <img src={GitHubLogo} alt="GitHub company logo"/>
            </a>
        </nav>
    );
}

export default Copyright;