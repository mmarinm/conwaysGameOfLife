import {boardReducer} from './board';
import {generationReducer, startReducer, timerReducer} from './controler'
import { combineReducers } from 'redux';

const gameOfLife = combineReducers({
  start: startReducer,
  timerId: timerReducer,
  generation: generationReducer,
  gameField: boardReducer
})

export default gameOfLife
