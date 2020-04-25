import React from 'react';
import { HashRouter, Route, Switch, Link } from 'react-router-dom';

import PageLayout from './layouts/page-layout';

const App = () => (
  <HashRouter basename='/'>
    <Switch>
      <Route exact path='*' component={PageLayout}/>
    </Switch>
  </HashRouter>
);

export default App;
