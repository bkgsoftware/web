import React from 'react';
import {Link} from 'react-router-dom';

function CtaButton(props) {
    return (
        <Link
            to={props.to}
            className="rounded-md bg-green hover:saturate-150 transition-all duration-150 hover:shadow-md hover:scale-105 px-3.5 py-2.5 font-medium text-white shadow-sm hover:bg-black-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600"
        >
            {props.text}
        </Link>
    );
}

export default CtaButton;