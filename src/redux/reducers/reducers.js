import {boardReducer} from './board';
import {generationReducer, populationReducer, startReducer} from './controler'
import { combineReducers } from 'redux';

const gameOfLife = combineReducers({
  start: startReducer,
  generation: generationReducer,
  population: populationReducer,
  board: boardReducer
})

export default gameOfLife
