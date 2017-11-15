import React, { Component } from 'react';
import ListView from "./ListView";
import GridView from "./GridView";
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
    Route,
    Link,
    Switch, Redirect
} from 'react-router-dom';

class App extends Component {
  render() {

    const postsGridView = this.props.posts.map((post) => (
      <div className="PostGridView" >
        <GridView post={post} key={post.data.id} />
      </div>
    ));

    const postsListView = this.props.posts.map((post) => (
      <div className="PostListView" >
        <ListView post={post} key={post.data.id} />
      </div>
    ));

    return (
      <Router>
        <div className="App">
          <header className="Heading">
            <h1>Didn't Readit</h1>
            <h3>Pick your view preference:</h3>
            {" "}<Link to="/gridView">Grid View</Link>
            {" "}<Link to="/listView">List View</Link>
          </header>

          <Switch>
            <Route path="/gridView" render={() => (
              <div className="GridContents">
                {postsGridView}
              </div>
            )} />

            <Route path="/listView" render={() => (
              <div className="ListContents">
                {postsListView}
              </div>
            )} />

            <Redirect to="/" />

          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(App);