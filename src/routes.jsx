import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Home from "./pages/Home";

const history = createHistory();

const App = () => (
    <Router history={history}>
        <Switch>
            <Route
                exact
                path='/'
                component={Home}/>
        </Switch>
    </Router>
);

export default App;
