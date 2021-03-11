import React from 'react';
import './Page404.css'

const Page404 = ({wait}) => {
    return (
        <div style={wait && {animation: 'show 15s'}} className="not-found">
            <img src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png'} alt="not Found"/>
            <h1>404 this page is not founded</h1>
        </div>
    );
};

export default Page404;