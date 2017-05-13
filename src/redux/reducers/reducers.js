import {boardReducer} from './board';
import { combineReducers } from 'redux';

const gameOfLife = combineReducers({
  board: boardReducer
})

export default gameOfLife
