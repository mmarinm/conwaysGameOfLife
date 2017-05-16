import {generateGrid, newGrid} from '../../Api/Api'

const numOfRows = 25;
const numOfCollumns = 40;

const initialState = generateGrid(numOfRows, numOfCollumns);

export const boardReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'GENERATE_RANDOM':
            return generateGrid(numOfRows, numOfCollumns, true)
            
        case 'TOGGLE_CELL':
            const board = state.slice(0);
            const cell = board[action.x][action.y];
            cell.alive = !cell.alive;
            cell.newBorn = !cell.newBorn;
            return board
        case 'UPDATE_GRID':
            return newGrid(state)
        case 'CLEAR_BOARD':
            return generateGrid(numOfRows, numOfCollumns)
        default:
            return state; 
    }
}