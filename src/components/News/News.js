import React, { Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import Content from './Content';

const News = () => (
  <Fragment>
    <nav>
      <ul className="menu">
        <li>
          <Link to="/news/politic">
            Politic
          </Link>
        </li>
        <li>
          <Link to="/news/sport">
            Sport
          </Link>
        </li>
        <li>
          <Link to="/news/music">
            Music
          </Link>
        </li>
        <li>
          <Link to="/news/movie">
            Movie
          </Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route
        path="/news/:type"
        component={Content}
      />
      <Route
        path="/news"
        render={() => <div>Please choose a category...</div>}
      />
    </Switch>
  </Fragment>
);

export default News;
