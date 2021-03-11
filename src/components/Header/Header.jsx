import React from 'react';
import StadiumImg from '../../images/stadium.jpg'

import './Header.css';

const Header = ({children,white}) => {
    const headerStyle = {
        background: `url('${StadiumImg}') center`,
        boxShadow: white ? `inset 0 0 0 2000px rgba(255, 255, 255, 0.5)` : `inset 0 0 0 2000px rgba(0, 0, 0, 0.5)`
    }

    return (
        <div className="header__container" style={headerStyle}>
            {
                children
            }
        </div>
    )
};

export default Header;