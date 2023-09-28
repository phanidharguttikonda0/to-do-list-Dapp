import React from 'react';
import css from './Header.module.css';
import LeftHeader from './LeftHeader';
import RightHeader from './RightHeader';
function Header(props) {
    return (
        <div className={css.main}>
            <LeftHeader />
            <RightHeader />
        </div>
    );
}

export default Header;