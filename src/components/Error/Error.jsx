import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div>
            <h1 className="invalid-text">Invalid ID passed Data could not founded.</h1>
            <Link className="home-link" to="/">Goto Home</Link>
        </div>
    );
};

export default Error;