var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory,
    SessionApiUtil = require('./util/session_api_util.js'),
    SessionStore = require('./stores/session_store.js'),
    App = require('./components/App.jsx'),
    LoginForm = require('./components/LoginForm.jsx'),
    SignUpForm = require('./components/SignUpForm.jsx');
require('./util/favor_api_util.js');

var routes = (
  <Route path="/" component={App}>
  <IndexRoute component={LoginForm}/>
  <Route path="/signup" component={SignUpForm} />
  </Route>
);

function _ensureLoggedIn(nextState, replace, asyncDoneCallback) {
  if (SessionStore.currentUserHasBeenFetched()) {
    redirectIfNotLoggedIn();
  } else {
    SessionApiUtil.fetchCurrentUser(redirectIfNotLoggedIn);
  }

  function redirectIfNotLoggedIn () {
    if(!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }

    asyncDoneCallback();
  }
}
window.FavorApiUtil = require('./util/favor_api_util.js');
document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router history={hashHistory} routes={routes}/>,
  document.getElementById('content'));
});
