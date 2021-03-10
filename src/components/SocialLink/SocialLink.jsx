import React from 'react';
import './SocialLink.css'

const SocialLink = ({link, icon}) => {
    return (
        <a target="blank" href={`http://${link}`}>
            <img src={icon} alt="website"/>
        </a>
    );
};

export default SocialLink;