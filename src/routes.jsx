import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageLayout from './layouts/page-layout';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='*' component={PageLayout}/>
    </Switch>
  </BrowserRouter>
);

export default App;
