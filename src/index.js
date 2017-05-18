import React from 'react';
import ReactDOM from 'react-dom';
import AppConnect from './App';
import './index.css';
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'

const store = configureStore({});

// store.subscribe(() => {
//   console.log('New state', store.getState());
// })

ReactDOM.render(
  <Provider store={store}>
    <AppConnect />
  </Provider>,
  document.getElementById('root')
);
