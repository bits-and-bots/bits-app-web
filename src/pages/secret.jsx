import React from 'react';

import '../styles/pages/secret.scss';
import sleuthRobot from '../assets/images/bits_and_bots_robot_sleuth.png';

class Secret extends React.Component {
  render() {
    return (
      <div className="page-secret__div__wrapper-page">
        <header className="page-shared__header__container-splash-header">
          <h2 className="page-shared__h2__header-title"><span>Congrats,</span> Sleuth!</h2>
        </header>

        <div className="page-secret__div__container-text">
          <div className="page-secret__div__container-row">
            <p className="page-secret__p__info">
              You've found our <span>hidden page</span>!
              <br/>
              <br/>
              Want to get involved in more codebreaking challenges? Want to use challenges like this as a way to
              introduce kids to computer science and robotics? Have a look at the rest of our website to find out more
              about what we do and how to get involved!
            </p>

            <div className="page-secret__div__spacer"/>

            <div className="page-secret__div__sleuth-robot">
              <img src={sleuthRobot} alt="Photo of our robot with a magnifying glass"/>
            </div>
          </div>
        </div>

        <div className="page-secret__div__spacer"/>
      </div>
    );
  }
}

export default Secret;