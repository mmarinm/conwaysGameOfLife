import {generateGrid, newGrid} from '../../Api/Api'

const numOfRows = 25;
const numOfCollumns = 40;

const initialState = generateGrid(numOfRows, numOfCollumns);

export const boardReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'GENERATE_RANDOM':
            return generateGrid(numOfRows, numOfCollumns, true)
            
        case 'TOGGLE_CELL':
            const board = state.board.slice(0);
            let population = state.population;
            const cell = board[action.x][action.y];
            if(cell.alive){
                if(cell.newBorn){
                    cell.alive = false;
                    cell.newBorn = false;
                }
                cell.alive = false;
                population -= 1;
            } else {
                cell.alive = true;
                cell.newBorn = true;
                population += 1;
            }
            return {
                board,
                population
            }
        case 'UPDATE_GRID':
            return newGrid(state)
        case 'CLEAR_BOARD':
            return generateGrid(numOfRows, numOfCollumns)
        default:
            return state; 
    }
}