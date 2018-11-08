import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from './components/Menu';
import News from './components/News/News';
import Info from './components/Info';
import Home from './components/Home';

const App = () => (
  <Fragment>
    <Menu />
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
        path="/news"
        component={News}
      />
      <Route
        path="/info"
        render={props =>
          <Info
            {...props}
            myProp="Alo"
          />
        }
      />
      <Route
        path="*"
        children={<div>Not Found</div>}
      />
    </Switch>
  </Fragment>
);

export default App;
