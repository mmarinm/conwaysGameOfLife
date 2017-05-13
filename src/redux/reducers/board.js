import {generateGrid} from '../../Api/Api'

const numOfRows = 25;
const numOfCollumns = 40;

export const boardReducer = (state=[], action) => {
    console.log(state)
    switch(action.type) {
        case 'GENERATE_RANDOM':
            return generateGrid(numOfRows, numOfCollumns, true);
        case 'TOGGLE_CELL':
            return state.map((row) => 
                row.map((cell) => {
                    if(cell.id === action.id){
                        return {
                            ...cell,
                            showing: !cell.showing
                        }
                    }
                    return {
                        ...cell
                    }
                })
            )
        default:
            return state; 
    }
}