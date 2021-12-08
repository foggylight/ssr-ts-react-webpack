import React from 'react';

import header from './Header.module.scss';

const Header = () => {
    return (
        <header>
            <h1 className={header.text}>Header</h1>
        </header>
    )
};

export default Header;