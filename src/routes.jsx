import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PageLayout from './layouts/page-layout';

const history = createHistory();

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='*' component={PageLayout}/>
    </Switch>
  </Router>
);

export default App;
