import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import PageLayout from './layouts/page-layout';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path='*' component={PageLayout}/>
    </Switch>
  </BrowserRouter>
);

export default App;
