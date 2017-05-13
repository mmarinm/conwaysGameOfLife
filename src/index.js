import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
import * as actions from './redux/actions/actions'

const store = configureStore({});

store.subscribe(() => {
  console.log('New state', store.getState());
})

store.dispatch(actions.generateRandomGrid())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
