import React from 'react';
import { Link } from 'react-router-dom';

import wordmarkFull from '../assets/images/bits-wordmark-large.png';
import abbeyRoad from '../assets/images/abbey_road.jpg'

import '../styles/pages/home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="page-home__div__wrapper-page">
        <div className="page-home__div__wrapper-splash">
          <div className="page-home__div__container-splash-content">
            
            <img src={abbeyRoad} alt="Photo of robots chilling with the Beatles on Abbey Road" className="page-home__section__container-splash-image"/>

            <aside className="page-home__aside__container-splash-info">
              <img src={wordmarkFull} alt="Bits and Bots" className="page-home__img__wordmark-full" />
              <p className="page-home__p__info">
                Bits &amp; Bots is a team dedicated to promoting early interest and education in
                STEM. We teach a free weekly lesson using LEGO robots and use our first hand
                experience to continually develop our open source curriculum so that others can use
                it too!​
              </p>
              <nav className="page-home__nav__container-splash-actions">
                <Link to="/about" className="page-home__a__action-link">Learn More</Link>
                <Link to="/contact" className="page-home__a__action-link">Get Involved</Link>
              </nav>
            </aside>
          </div>
        </div>

        <div className="page-home__div__container-divider">
          <div className="page-home__div__divider-line"></div>
          <header className="page-home__header__section-header">
            <h3 className="page-home__h3__section-header-text">Upcoming Events</h3>
          </header>
        </div>

        <div className="page-home__div__wrapper-upcoming-events">
        </div>

        <div className="page-home__div__container-divider">
          <div className="page-home__div__divider-line"></div>
          <header className="page-home__header__section-header">
            <h3 className="page-home__h3__section-header-text">Latest Articles</h3>
          </header>
        </div>

        <div className="page-home__div__wrapper-upcoming-events">
        </div>

        <div className="page-home__div__container-divider">
          <div className="page-home__div__divider-line"></div>
          <header className="page-home__header__section-header">
            <h3 className="page-home__h3__section-header-text">Meet the Team</h3>
          </header>
        </div>

        <div className="page-home__div__wrapper-upcoming-events">
        </div>
      </div>
    )
  }
}

export default Home;
