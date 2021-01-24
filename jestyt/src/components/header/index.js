import React from 'react';
import './style.scss';

const Header = () => {
    return(
        <header data-test='header-component'>
            <div className="wrap">
                <div className="logo" data-test='logo'>
                    LOGO
                </div>
            </div>
        </header>
    );
}

export default Header;