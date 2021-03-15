import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <div className="header">
    <Link to="/">
      <span className="header-shelf">My</span>
      <span className="header-shelf"><strong>Record</strong></span>
      <span className="header-shelf">Shelf</span>
    </Link>
  </div>
);

export default Header;
