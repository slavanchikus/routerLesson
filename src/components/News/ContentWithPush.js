import React, { Component } from 'react';

import { getNews } from '../../api/newsApi';

class ContentWithPush extends Component {
  state = {
    news: [],
    isFetching: false
  };

  componentDidMount() {
    const { type } = this.props.match.params;

    this.handleFetchNews(type);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      this.handleFetchNews(this.props.type);
    }
  }

  handleFetchNews = (type) => {
    const { isFetching } = this.state;

    if (!isFetching) {
      this.setState({ isFetching: true });
      getNews(type)
        .then((response) => {
          this.setState({ news: response.articles, isFetching: false });
          this.props.history.push(this.props.type);
        });
    }
  };

  render() {
    const { news, isFetching } = this.state;
    const { type } = this.props.match.params;

    return (
      <div>
        <h1>{type}</h1>
        <div
          className="articles"
          style={{ opacity: isFetching ? 0.2 : 1 }}
        >
          {news.map(i =>
            <div className="article" key={i.url}>
              <h4>{i.title}</h4>
              <p>{i.description}</p>
            </div>)}
        </div>
      </div>
    );
  }
}

export default ContentWithPush;
