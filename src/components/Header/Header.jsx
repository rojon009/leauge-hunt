import React from 'react';
import './Header.css'
const Header = ({children}) => {
    return (
        <div className="header__container">
            {
                children
            }
        </div>
    );
};

export default Header;