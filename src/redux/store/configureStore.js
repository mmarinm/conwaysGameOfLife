import { createStore, compose } from 'redux'
import gameOfLife from '../reducers/reducers'

export default function configureStore(initialState={}) {
  const store = createStore(gameOfLife, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  return store
}
