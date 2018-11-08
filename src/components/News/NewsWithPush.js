import React, { Fragment, Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Content from './ContentWithPush';

class NewsWithPush extends Component {
  state = {
    type: ''
  };

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.type && this.state.type) {
      this.props.history.push(`/news/${this.state.type}`);
    }
  }

  handleTypeClick = (e) => {
    const type = e.target.getAttribute('data-news-type');

    if (type) {
      this.setState({ type });
    }
  };

  render() {
    const { type } = this.state;

    return (
      <Fragment>
        <nav>
          <ul
            className="menu"
            onClick={this.handleTypeClick}
          >
            <li>
              <a data-news-type="politic">
                Politic
              </a>
            </li>
            <li>
              <a data-news-type="sport">
                Sport
              </a>
            </li>
            <li>
              <a data-news-type="music">
                Music
              </a>
            </li>
            <li>
              <a data-news-type="movie">
                Movie
              </a>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route
            path="/news/:type"
            render={props =>
              <Content
                {...props}
                type={type}
              />
            }
          />
          <Route
            path="/news"
            render={() => <div>Please choose a category...</div>}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default NewsWithPush;
