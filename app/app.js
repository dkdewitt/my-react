import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';
import App from 'containers/App';
import Sample from 'containers/Sample';

import rootReducer from './containers/App/reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="sample" component={Sample}>
          <Route path="new" component={Sample}/>
          </Route>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('app')
)