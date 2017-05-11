import React from 'react';

const s = require('../styles/index.scss');

const Header = () => {
    return (
      <div className={s.header}>
        <div className={s.title}>Conway's Game of Life</div>
        <div>Source code on <a href='https://github.com/mmarinm/conwaysGameOfLife' target='_blank' rel='github link'>GitHub</a></div>
      </div>
    )
}

export default Header;
