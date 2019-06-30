import React from 'react';

import '../styles/pages/news.scss';

class News extends React.Component {
  render() {
    return (
      <div className="page-news__div__wrapper-page">
        <header className="page-shared__header__container-splash-header">
          <h2 className="page-shared__h2__header-title"><span>Bits &amp; Bots</span> News</h2>
        </header>
      </div>
    );
  }
}

export default News;