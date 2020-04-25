import React from 'react';

import '../styles/pages/lessons.scss';

class Lessons extends React.Component {
  render() {
    return (
      <div className="page-lessons__div__wrapper-page">
        <header className="page-shared__header__container-splash-header">
          <h2 className="page-shared__h2__header-title"><span>Bits &amp; Bots</span> Lessons</h2>
        </header>

        <div className="page-lessons__div__container-text">
          <p className="page-lessons__p__no-lessons">
            We'll be adding PDFs of our lessons here shortly! In the mean time, if you are familiar with LaTeX, feel free to compile them yourself <a href="https://github.com/bits-and-bots/lessons">here</a>!
          </p>
        </div>
      </div>
    );
  }
}

export default Lessons;
