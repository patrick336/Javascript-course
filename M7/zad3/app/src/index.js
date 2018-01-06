import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// import { createStore } from 'redux';

import { createLogger } from 'redux-logger';
// import DevTools from './DevTools';

import reducer from './reducer.js';
import { addComment } from './actions.js';
 
const logger = createLogger(); 
const store = createStore(reducer,
	applyMiddleware(logger)
	// DevTools.instrument()
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
