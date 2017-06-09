import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';

import App from '../ui/App';
import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

import { Router, Route, browserHistory } from 'react-router';

window.browserHistory = browserHistory;

const unauthenticatedPages = ['/', '/app/signup'];
const authenticatedPages = ['/app/links'];

const onEnterPublicPage = () => {




  if (Meteor.userId()) {
    browserHistory.replace('/app/links')
  }
};

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/')
  }
};

export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) browserHistory.push('/app/links');
  else if (isAuthenticatedPage && !isAuthenticated) browserHistory.push('/');

  console.log('isAuthenticated', isAuthenticated);
};


export const routes = (



  <Router history={browserHistory}>

    <Route path="/" component={Login} onEnter={onEnterPublicPage} />
    <Route path="/app" component={App} onEnter={onEnterPublicPage} />
    <Route path="/app/signup" component={Signup} onEnter={onEnterPublicPage} />
    <Route path="/app/links" component={Link} onEnter={onEnterPrivatePage} />
    <Route path="*" component={NotFound}/>


  </Router>
);
