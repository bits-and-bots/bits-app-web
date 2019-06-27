import React from 'react';
import { Link } from 'react-router-dom';

import wordmarkIcon from '../assets/images/bits-wordmark-small.png';

import '../styles/components/header.scss';

const Header = () => (
  <header className="component-header__header__wrapper-component">
    <Link to="/">
      <img
        src={wordmarkIcon}
        alt="Bits and Bots"
        className="component-header__img__wordmark-icon"
      />
    </Link>
    <nav className="component-header__nav__container-page-links">
      <Link to="/news" className="component-header__a__page-link">News</Link>
      <Link to="/calendar" className="component-header__a__page-link">Calendar</Link>
      <Link to="/lessons" className="component-header__a__page-link">Lessons</Link>
      <Link to="/about" className="component-header__a__page-link">About</Link>
      <Link to="/contact" className="component-header__a__page-link">Contact</Link>
    </nav>
  </header>
);

export default Header;
