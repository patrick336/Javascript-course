import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';

import reducer from './reducer.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
const store = createStore(reducer);
store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
