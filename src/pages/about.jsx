import React from 'react';

import '../styles/pages/about.scss';
import verda from '../assets/images/verda-headshot.JPG';
import danny from '../assets/images/danny-headshot.jpeg';
import john from '../assets/images/john-headshot.jpg';

class About extends React.Component {
  render() {
    return (
      <div className="page-about__div__wrapper-page">
        <header className="page-shared__header__container-splash-header">
          <h2 className="page-shared__h2__header-title"><span>Bits &amp; Bots</span> About</h2>
        </header>

        <div className="page-about__div__container-divider">
          <div className="page-about__div__divider-line"/>
          <header className="page-about__header__section-header">
            <h3 className="page-about__h3__section-header-text">Our Mission</h3>
          </header>
        </div>

        <div className="page-about__div__container-text">
          <div className="page-about__div__container-faq">
            <p className="page-about__p__info">
              Bits & Bots is a service-oriented research project based at Northeastern University.
              Our work involves early childhood introduction to computer science and robotics, and benefits
              elementary school children in ethnically and racially diverse parts of the Greater Boston area. We
              currently teach at the Grove Hall branch of the Boston Public Library, and are hoping to expand to
              other nearby branches.
              <br/>
              <br/>
              Intersectionality is a key aspect of our teaching model. We aim to foster diversity in computer science
              and engineering fields by sparking interest from a young age, which involves providing our students
              with role models who look like them.
              <br/>
              <br/>
              Our open-source curriculum is always under construction. We’re constantly building and improving it
              using feedback from teachers at the end of each lesson.
            </p>
          </div>
        </div>

        <div className="page-about__div__container-divider">
          <div className="page-about__div__divider-line"/>
          <header className="page-about__header__section-header">
            <h3 className="page-about__h3__section-header-text">Our Team</h3>
          </header>
        </div>

        <div className="page-about__div__container-text">
          <div className="page-about__div__wrapper-person">
            <div className="page-about__div__person-text">
              <h3 className="page-about__h3__person-title">
                Verda Bursal <span>Co-President, Web Developer</span>
              </h3>

              <p className="page-about__p__person-bio">
                Verda is cool
              </p>
            </div>

            <div className="page-about__div__person-spacer"/>

            <div className="page-about__div__person-photo">
              <img src={verda} alt="Photo of Verda Bursal"/>
            </div>
          </div>

          <div className="page-about__div__wrapper-person">
            <div className="page-about__div__person-text">
              <h3 className="page-about__h3__person-title">
                Daniel Rassaby <span>Co-President</span>
              </h3>

              <p className="page-about__p__person-bio">
                Danny joined Bits&Bots in 2017. He’s a computer science student, and knows first-hand how fun computer
                science can be! Beyond tech, he really enjoys hiking, running, podcasts, board games, traveling, and
                talking philosophy. He’s especially interested in the intersection between philosophy and modern tech,
                and is so excited to see what future generations of engineers will come up with! Feel free to check out
                his website (<a href="https://danielrassaby.com/" target="_blank">https://danielrassaby.com/</a>) to see
                more of his projects.
              </p>
            </div>

            <div className="page-about__div__person-spacer"/>

            <div className="page-about__div__person-photo">
              <img src={danny} alt="Photo of Daniel Rassaby"/>
            </div>
          </div>

          <div className="page-about__div__wrapper-person">
            <div className="page-about__div__person-text">
              <h3 className="page-about__h3__person-title">
                John Harrington <span>Co-President</span>
              </h3>

              <p className="page-about__p__person-bio">
                John has been working with Bits&Bots for over 2 years. He has overseen much growth during that time,
                and is excited to expand and improve! John is a mechanical engineer with a strong interest in computer
                systems and robotics. When he’s not building or coding, he loves cooking meals for his friends and
                loved ones, traveling, games of all sorts, and helping the communities he’s a part of. One of his main
                passions is seeing how technology can be implemented on large scales to help the lives of all people,
                not just corporations. His personal goals for Bits&Bots are to expand to multiple branches of the BPL,
                and to publish research findings from the data we have collected.
              </p>
            </div>

            <div className="page-about__div__person-spacer"/>


            <div className="page-about__div__person-photo">
              <img src={john} alt="Photo of John Harrington"/>
            </div>
            }
          </div>
        </div>

        <div className="page-about__div__container-divider">
          <div className="page-about__div__divider-line"/>
          <header className="page-about__header__section-header">
            <h3 className="page-about__h3__section-header-text">Our Research</h3>
          </header>
        </div>

        <div className="page-about__div__container-text">
          <div className="page-about__div__container-faq">
            <p className="page-about__p__info">
              This is filler text please let's replace it.
            </p>
          </div>
        </div>

        <div className="page-about__div__spacer"/>
      </div>
    );
  }
}

export default About;
