import React from 'react';
import { Link } from 'react-router-dom';

import wordmarkFull from '../assets/images/bits-wordmark-large.png';
import abbeyRoad from '../assets/images/abbey_road.jpg'
import danny from '../assets/images/danny-headshot.jpeg';
import john from '../assets/images/john-headshot.jpg';
import verda from '../assets/images/verda-headshot.JPG';
import isabel from '../assets/images/isabel-headshot.jpg';
import sarah from '../assets/images/sarah-headshot.jpg';
import ishika from '../assets/images/ishika-headshot.jpg';

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
            <div className="page-home__div__person">
              <div className="page-home__div__person-photo">
                <img src={john} alt="Photo of John Harrington"/>
              </div>
              <div className="page-home__div__wrapper-person-text-white">
                <div className="page-home__div__person-text">
                  <h2 className="page-home__h2__person-title">
                    John Harrington
                    <span> Co-President</span>
                  </h2>
                  <p className="page-home__p__person-bio">
                    John has been working with Bits&Bots for over 3 years. He has overseen much growth during that time,
                    and is excited to expand and improve! John is a mechanical engineer with a strong interest
                    in... <Link to="/about">read more</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="page-home__div__wrapper-person">
            <div className="page-home__div__person">
              <div className="page-home__div__person-photo">
                <img src={danny} alt="Photo of Daniel Rassaby"/>
              </div>
              <div className="page-home__div__wrapper-person-text-white">
                <div className="page-home__div__person-text">
                  <h2 className="page-home__h2__person-title">
                    Daniel Rassaby
                    <span> Co-President</span>
                  </h2>
                  <p className="page-home__p__person-bio">
                    Danny joined Bits&Bots in 2017. He’s a computer science student, and knows first-hand how fun computer
                    science can be! Beyond tech, he really enjoys hiking, running, podcasts, board games, traveling,
                    and... <Link to="/about">read more</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="page-home__div__wrapper-person">
            <div className="page-home__div__person">
              <div className="page-home__div__person-photo">
                <img src={verda} alt="Photo of Verda Bursal"/>
              </div>
              <div className="page-home__div__wrapper-person-text-white">
                <div className="page-home__div__person-text">
                  <h2 className="page-home__h2__person-title">
                    Verda Bursal
                    <span> Co-President, Web Developer</span>
                  </h2>
                  <p className="page-home__p__person-bio">
                    Verda is a Computer Science and Cognitive Psychology student who joined Bits&Bots in 2019. She came to
                    Northeastern intent on becoming a neurosurgeon, but changed course and decided to follow
                    her childhood dream of... <Link to="/about">read more</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="page-home__div__wrapper-person">
            <div className="page-home__div__person">
              <div className="page-home__div__person-photo">
                <img src={sarah} alt="Photo of Sarah Lackey"/>
              </div>
              <div className="page-home__div__wrapper-person-text-white">
                <div className="page-home__div__person-text">
                  <h2 className="page-home__h2__person-title">
                    Sarah Lackey
                    <span> Co-Vice President</span>
                  </h2>
                  <p className="page-home__p__person-bio">
                    Sarah joined Bits&Bots in 2020. She is a Cybersecurity major, which means she's learning all about how to
                    protect people on the computer (and how to be a bonafide hacker!). She loves helping her community
                    and... <Link to="/about">read more</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="page-home__div__wrapper-person">
            <div className="page-home__div__person">
              <div className="page-home__div__person-photo">
                <img src={isabel} alt="Photo of Isabel Silva"/>
              </div>
              <div className="page-home__div__wrapper-person-text-white">
                <div className="page-home__div__person-text">
                  <h2 className="page-home__h2__person-title">
                    Isabel Silva
                    <span> Co-Vice President</span>
                  </h2>
                  <p className="page-home__p__person-bio">
                    Isabel Silva is new to Bits&Bots, joining in 2020. She is a second year Computer Science
                    and Design student, interested in how people access and interact with tech as well as how students
                    are introduced to... <Link to="/about">read more</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="page-home__div__wrapper-person">
            <div className="page-home__div__person">
              <div className="page-home__div__person-photo">
                <img src={ishika} alt="Photo of Ishika Choudhary"/>
              </div>
              <div className="page-home__div__wrapper-person-text-white">
                <div className="page-home__div__person-text">
                  <h2 className="page-home__h2__person-title">
                    Ishika Choudhary
                    <span> Curriculum Developer, Teacher</span>
                  </h2>
                  <p className="page-home__p__person-bio">
                    Ishika is a second year Computer Science and Math major. She joined Bits&Bots in Spring 2020, and is looking forward
                    to developing more curriculum! In her free time, she likes to... <Link to="/about">read more</Link>
                  </p>
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
