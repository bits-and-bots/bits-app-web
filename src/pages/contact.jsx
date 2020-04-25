import React from 'react';

import '../styles/pages/contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div className="page-contact__div__wrapper-page">
        <header className="page-shared__header__container-splash-header">
          <h2 className="page-shared__h2__header-title"><span>Bits &amp; Bots</span> Contact</h2>
        </header>

        <div className="page-contact__div__container-divider">
          <div className="page-contact__div__divider-line"></div>
          <header className="page-contact__header__section-header">
            <h3 className="page-contact__h3__section-header-text">Contact Us</h3>
          </header>
        </div>

        <div className="page-contact__div__container-text">
          <div className="page-contact__div__container-social">
            <p className="page-contact__p__info">
              <span className="page-contact__span__info-bold">Email:</span>&nbsp;
              <a href="mailto:bitsandbots.neu@gmail.com" target="_blank">bitsandbots.neu@gmail.com</a><br/>

              <span className="page-contact__span__info-bold">Facebook:</span> Bits & Bots&nbsp;
              <a href="https://www.facebook.com/BitsBotsNU/"
                 target="_blank">https://www.facebook.com/BitsBotsNU/</a><br/>

              <span className="page-contact__span__info-bold">Twitter:</span> @Bits_and_Bots&nbsp;
              <a href="https://twitter.com/Bits_and_Bots" target="_blank">https://twitter.com/Bits_and_Bots</a>
            </p>
          </div>
        </div>

        <div className="page-contact__div__container-divider">
          <div className="page-contact__div__divider-line"></div>
          <header className="page-contact__header__section-header">
            <h3 className="page-contact__h3__section-header-text">
              Interested in volunteering? Check out our
              <span className="page-contact__span__section-header-text-red"> FAQ:</span>
            </h3>
          </header>
        </div>

        <div className="page-contact__div__container-text">
          <div className="page-contact__div__container-faq">
            <div className="page-contact__div__container-question">
              <header className="page-contact__header__question-header">
                <h4 className="page-contact__h4__question-header-text">
                  I don't have a computer science background, can I still help?
                </h4>
              </header>
              <p className="page-contact__p__info">
                Yes! Our lesson plans do not require any previous knowledge in computer science or engineering.
                If you feel more comfortable not working directly on the lessons, we have a lot of other jobs that
                need doing too!
              </p>
            </div>

            <div className="page-contact__div__container-question">
              <header className="page-contact__header__question-header">
                <h4 className="page-contact__h4__question-header-text">
                  What are you looking for in volunteers?
                </h4>
              </header>
              <p className="page-contact__p__info">
                We’re looking for motivated people who have an interest in education, technology, or both!
                We have a lot of different types of roles so that you can contribute in whatever way you feel
                comfortable, whether that's teaching, curriculum development, social media and publicity, or leadership
                and administration.
              </p>
            </div>

            <div className="page-contact__div__container-question">
              <header className="page-contact__header__question-header">
                <h4 className="page-contact__h4__question-header-text">
                  What can I learn as a volunteer who already has a computer science background?
                </h4>
              </header>
              <p className="page-contact__p__info">
                As a volunteer with us, you can learn technologies like React, git, LaTeX, GitHub, Mindstorms, and
                Travis CI. Don’t worry if you haven’t heard of any of these, we’d be happy to teach you what we know
                (and not all roles require these technologies)!
              </p>
            </div>

            <div className="page-contact__div__container-question">
              <header className="page-contact__header__question-header">
                <h4 className="page-contact__h4__question-header-text">
                  Cool! I'm sold by this extensive FAQ, where do I sign up?
                </h4>
              </header>
              <p className="page-contact__p__info">
                Just shoot us an email at&nbsp;
                <a href="mailto:bitsandbots.neu@gmail.com" target="_blank">bitsandbots.neu@gmail.com</a>
                &nbsp;with the subject line: "New Volunteer"
              </p>
            </div>
          </div>
        </div>

        <div className="page-contact__div__spacer"></div>
      </div>
    );
  }
}

export default Contact;
