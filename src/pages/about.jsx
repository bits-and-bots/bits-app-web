import React from 'react';

import '../styles/pages/about.scss';
import verda from '../assets/images/verda-headshot.JPG';
import danny from '../assets/images/danny-headshot.jpeg';
import john from '../assets/images/john-headshot.jpg';
import isabel from '../assets/images/isabel-headshot.jpg';
import ishika from '../assets/images/ishika-headshot.jpg';
import sarah from '../assets/images/sarah-headshot.jpg';

class About extends React.Component {
  render() {
    return (
      <div className="page-about__div__wrapper-page">
        <header className="page-shared__header__container-splash-header">
          <h2 className="page-shared__h2__header-title"><span>Bits &amp; Bots</span> About</h2>
        </header>

        <div className="page-about__div__container-divider">
          <div className="page-about__div__divider-line" />
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
              <br />
              <br />
              Intersectionality is a key aspect of our teaching model. We aim to foster diversity in computer science
              and engineering fields by sparking interest from a young age, which involves providing our students
              with role models who look like them.
              <br />
              <br />
              Our open-source curriculum is always under construction. We’re constantly building and improving it
              using feedback from teachers at the end of each lesson.
            </p>
          </div>
        </div>

        <div className="page-about__div__container-divider">
          <div className="page-about__div__divider-line" />
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
                Verda is a Computer Science and Cognitive Psychology student who joined Bits&Bots in 2019.
                She came to Northeastern intent on becoming a neurosurgeon, but changed course and decided to follow
                her childhood dream of being a hacker. She is proud to have a hand in giving other young children the
                same dream. When she’s not working towards becoming a CTO, Verda spends her time biking, running,
                generally being outdoors, traveling, reading, and making art. She also enjoys board games, tea, and
                LinkedIn endorsements. Ask her about bilingualism or the difference between a fruit and a vegetable.
              </p>
            </div>

            <div className="page-about__div__person-spacer" />

            <div className="page-about__div__person-photo">
              <img src={verda} alt="Photo of Verda Bursal" />
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

            <div className="page-about__div__person-spacer" />

            <div className="page-about__div__person-photo">
              <img src={danny} alt="Photo of Daniel Rassaby" />
            </div>
          </div>

          <div className="page-about__div__wrapper-person">
            <div className="page-about__div__person-text">
              <h3 className="page-about__h3__person-title">
                John Harrington <span>Co-President</span>
              </h3>

              <p className="page-about__p__person-bio">
                John has been working with Bits&Bots for over 3 years. He has overseen much growth during that time,
                and is excited to expand and improve! John is a mechanical engineer with a strong interest in computer
                systems and robotics. When he’s not building or coding, he loves cooking meals for his friends and
                loved ones, traveling, games of all sorts, and helping the communities he’s a part of. One of his main
                passions is seeing how technology can be implemented on large scales to help the lives of all people,
                not just corporations. His personal goals for Bits&Bots are to expand to multiple branches of the BPL,
                and to publish research findings from the data we have collected.
              </p>
            </div>

            <div className="page-about__div__person-spacer" />


            <div className="page-about__div__person-photo">
              <img src={john} alt="Photo of John Harrington" />
            </div>
          </div>


          <div className="page-about__div__wrapper-person">
            <div className="page-about__div__person-text">
              <h3 className="page-about__h3__person-title">
                Isabel Silva <span>Co-Vice President</span>
              </h3>

              <p className="page-about__p__person-bio">
                Isabel Silva is new to Bits&Bots, joining in 2020. She is a second year Computer Science and Design student,
                interested in how people access and interact with tech as well as how students are introduced to and
                taught coding. She comes to Northeastern from Somerville, Mass. and is proud of being a “Villen”. She is
                interested in ESL education and hopes to return to Somerville as an educator one day. She spends her time
                playing frisbee in the dark, learning new things and eating good food. Ask her about Brazil and good eats
                in Boston.
            </p>
            </div>

            <div className="page-about__div__person-spacer" />

            <div className="page-about__div__person-photo">
              <img src={isabel} alt="Photo of Isabel Silva" />
            </div>
          </div>

          <div className="page-about__div__wrapper-person">
            <div className="page-about__div__person-text">
              <h3 className="page-about__h3__person-title">
                Sarah Lackey <span>Co-Vice President</span>
              </h3>

              <p className="page-about__p__person-bio">
                Sarah joined Bits&Bots in 2020. She is a Cybersecurity major, which means she's learning all about how to
                protect people on the computer (and how to be a bonafide hacker!). She loves helping her community and teaching
                kids more about the things she loves, and that's exactly what she gets to do with Bits&Bots! If she's not to
                working with Bits&Bots, she's probably reading a good book, playing fun video games, or learning to ice skate.
            </p>
            </div>

            <div className="page-about__div__person-spacer" />

            <div className="page-about__div__person-photo">
              <img src={sarah} alt="Photo of Sarah Lackey" />
            </div>
          </div>

          <div className="page-about__div__wrapper-person">
            <div className="page-about__div__person-text">
              <h3 className="page-about__h3__person-title">
                Ishika Choudhary <span>Curriculum Developer, Teacher</span>
              </h3>

              <p className="page-about__p__person-bio">
                Ishika is a second year Computer Science and Math major. She joined Bits&Bots in Spring 2020, and is looking forward
                to developing more curriculum! In her free time, she likes to visit new coffee shops, attend concerts at Boston
                Symphony Orchestra, cook with her roommates, and code!
            </p>
            </div>

            <div className="page-about__div__person-spacer" />

            <div className="page-about__div__person-photo">
              <img src={ishika} alt="Photo of Ishika Choudhary" />
            </div>
          </div>
        </div>


        <div className="page-about__div__container-divider">
          <div className="page-about__div__divider-line" />
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

        <div className="page-about__div__spacer" />
      </div>
    );
  }
}

export default About;
