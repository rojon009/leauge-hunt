import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.css'

const Page404 = ({wait}) => {
    return (
        <div style={wait && {animation: 'show 15s'}} className="not-found">
            <img src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png'} alt="not Found"/>
            <div>
                <h1>404 this page is not founded</h1>
                <Link className="error-link" to="/">Goto Home</Link>
            </div>
        </div>
    );
};

export default Page404;