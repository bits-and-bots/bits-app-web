import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { IoIosMenu, IoIosClose } from 'react-icons/io';

import wordmarkIcon from '../assets/images/bits-wordmark-small.png';

import styles from '../styles/components/header.module.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMobileNav: false
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.hideMobileNav();
    }
  }

  toggleMobileNav = () => {
    const { displayMobileNav } = this.state
    this.setState({
      displayMobileNav: !displayMobileNav
    });
  }

  hideMobileNav = () => {
    this.setState({
      displayMobileNav: false
    });
  }

  render() {
    const { displayMobileNav } = this.state;
    return (
      <header className={styles.headerWrapper}>
        <Link to="/">
          <img
            src={wordmarkIcon}
            alt="Bits and Bots"
            title="Bits and Bots"
            className={styles.imgWordmarkIcon}
          />
        </Link>
        <nav className={`${styles.navWrapper} ${displayMobileNav ? styles.navWrapperMobileVisible : null}`}>
          <IoIosClose className={styles.iconClose} onClick={this.hideMobileNav} />
          <Link to="/news" className={styles.aPageLink}>News</Link>
          <Link to="/calendar" className={styles.aPageLink}>Calendar</Link>
          <Link to="/lessons" className={styles.aPageLink}>Lessons</Link>
          <Link to="/about" className={styles.aPageLink}>About</Link>
          <Link to="/contact" className={styles.aPageLink}>Contact</Link>
        </nav>
        <IoIosMenu className={styles.iconNavMenu} onClick={this.toggleMobileNav} />
      </header>
    );
  }
};

export default withRouter(props => <Header {...props}/>);
