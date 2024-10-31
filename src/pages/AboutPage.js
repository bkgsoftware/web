import React from 'react';
import BraydenHeadshot from "../assets/image-not-found.png";
import KarlHeadshot from "../assets/image-not-found.png";
import GavinHeadshot from "../assets/image-not-found.png";
import {Link} from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="flex flex-col items-center justify-center m-2">
            <h1>
                Our Developers
            </h1>
            <div className="flex flex-row w-1/2 border-2 border-tertiary rounded-lg bg-primary p-2 m-2">
                <Link to="https://github.com/braybowler">
                    <img
                        src={BraydenHeadshot}
                        alt="Brayden Bowler"
                        className="h-24 w-24 border-2 border-secondary rounded-full hover:border-4"
                    />
                </Link>
                <p>
                    Text about Brayden.
                </p>
            </div>
            <div className="flex flex-row w-1/2 border-2 border-tertiary rounded-lg bg-primary p-2 m-2">
                <Link to="https://github.com/kstencell">
                    <img
                        src={KarlHeadshot}
                        alt="Karl Stencell"
                        className="h-24 w-24 border-2 border-secondary rounded-full hover:border-4"
                    />
                </Link>
                <p>
                    Text about Karl.
                </p>
            </div>
            <div className="flex flex-row w-1/2 border-2 border-tertiary rounded-lg bg-primary p-2 m-2">
                <Link to="https://github.com/Gabeele">
                    <img
                        src={GavinHeadshot}
                        alt="Gavin Abeele"
                        className="h-24 w-24 border-2 border-secondary rounded-full hover:border-4"
                    />
                </Link>
                <p>
                    Text about Gavin.
                </p>
            </div>
        </div>
    );
};

export default AboutPage;