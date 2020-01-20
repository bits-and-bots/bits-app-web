import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/header';
import Home from '../pages/home';
import News from '../pages/news';
import Calendar from '../pages/calendar';
import Lessons from '../pages/lessons';
import About from '../pages/about';
import Contact from '../pages/contact';
import Secret from '../pages/secret';

const PageLayout = () => (
  <React.Fragment>
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/news" component={News} />
    <Route exact path="/calendar" component={Calendar} />
    <Route exact path="/lessons" component={Lessons} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/secret" component={Secret}/>
  </React.Fragment>
);

export default PageLayout;
