import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  render() {
    const { user, tweets } = this.props;

    // if (!tweets.length) {
    //   return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>
    // }

    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

    return <div>
      Links:
      {' '}
      <Link to="/">Home</Link>
      {' '}
      <Link to="/foo">Foo</Link>
      {' '}
      <Link to="/bar">Bar</Link>
      <h1>{user.name}</h1>
      {this.props.children}
    </div>
  }
}
