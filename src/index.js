import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import PostsIndex from './components/posts_index';
import CreatePost from './components/post_new';
import PostDetail from './components/post_show';
import Header from './components/header';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <div className="container" >
          <Switch>
          <Route path="/posts/new" component={CreatePost} />
          <Route path="/posts/:id" component={PostDetail} />
          <Route path="/" component={PostsIndex} />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.root'));
