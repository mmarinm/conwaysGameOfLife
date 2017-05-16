import {boardReducer} from './board';
import {generationReducer, startReducer} from './controler'
import { combineReducers } from 'redux';

const gameOfLife = combineReducers({
  start: startReducer,
  generation: generationReducer,
  gameField: boardReducer
})

export default gameOfLife
