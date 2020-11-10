import React from 'react';
import { Link } from 'react-router-dom';

import wordmarkFull from '../assets/images/bits-wordmark-large.png';
import groupScreenshot from '../assets/images/group-screenshot-smiling.png';
import danny from '../assets/images/danny-headshot-mini.jpeg';
import john from '../assets/images/john-headshot-mini.jpg';
import verda from '../assets/images/verda-headshot-mini.JPG';

import '../styles/pages/home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="page-home__div__wrapper-page">
        <div className="page-home__div__wrapper-splash">
          <div className="page-home__div__container-splash-content">
            
            <img src={groupScreenshot} alt="Photo of 9 Bits&Bots members on a Zoom call" className="page-home__section__container-splash-image"/>

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

        <div className="page-home__div__container-upcoming-events">
          <p className="page-home__p__no-upcoming-events">
            No events yet! Check back in later.
          </p>
        </div>

        <div className="page-home__div__container-divider">
          <div className="page-home__div__divider-line"></div>
          <header className="page-home__header__section-header">
            <h3 className="page-home__h3__section-header-text">Latest Articles</h3>
          </header>
        </div>

        <div className="page-home__div__container-latest-articles">
          <p className="page-home__p__no-latest-articles">
            No news yet! Check back in later.
          </p>
        </div>

        <div className="page-home__div__container-divider">
          <div className="page-home__div__divider-line"></div>
          <header className="page-home__header__section-header">
            <h3 className="page-home__h3__section-header-text">Meet the Team</h3>
          </header>
        </div>

        <div className="page-home__div__container-meet-the-team">
          <div className="page-home__div__wrapper-person">
            <div className="page-home__div__wrapper-person-photo">
              <div className="page-home__div__person-photo">
                <img src={john} alt="Photo of John Harrington"/>
              </div>
            </div>

            <div className="page-home__div__person-spacer"/>

            <div className="page-home__div__wrapper-person-text-pink">
              <div className="page-home__div__wrapper-person-text-white">
                <div className="page-home__div__person-text">
                  John Harrington
                  <span> Co-President</span>
                </div>
              </div>
            </div>
          </div>

          <div className="page-home__div__wrapper-person">
            <div className="page-home__div__wrapper-person-photo">
              <div className="page-home__div__person-photo">
                <img src={danny} alt="Photo of Daniel Rassaby"/>
              </div>
            </div>

            <div className="page-home__div__person-spacer"/>

            <div className="page-home__div__wrapper-person-text-pink">
              <div className="page-home__div__wrapper-person-text-white">
                <div className="page-home__div__person-text">
                  Daniel Rassaby
                  <span> Co-President</span>
                </div>
              </div>
            </div>
          </div>

          <div className="page-home__div__wrapper-person">
            <div className="page-home__div__wrapper-person-photo">
              <div className="page-home__div__person-photo">
                <img src={verda} alt="Photo of Verda Bursal"/>
              </div>
            </div>

            <div className="page-home__div__person-spacer"/>

            <div className="page-home__div__wrapper-person-text-pink">
              <div className="page-home__div__wrapper-person-text-white">
                <div className="page-home__div__person-text">
                  Verda Bursal
                  <span> Co-President, Web Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page-home__div__spacer">
        </div>
      </div>
    )
  }
}

export default Home;
