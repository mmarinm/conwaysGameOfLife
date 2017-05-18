export function generateGrid(rows, collumns, random=false){
    let population = 0;
    const board = Array(rows).fill(null).map((row, indx) => {
        return Array(collumns).fill(null).map((collumn, index) => {
            const value = random ? Math.floor(Math.random() > 0.85) : 0
            population += value ? 1: 0;
           return {
                alive: value,
                newBorn: value
            }
        })
    })
    return {
        clear: !random ? true : false,
        board,
        population
    }
}

function checkNeighbours(grid, x, y){
    const gridHeight = grid.length -1;
    const gridLength = grid[0].length -1;
    let total = 0;
    const topRow = x - 1 < 0 ? gridHeight : x-1;
    const bottomRow = x + 1 > gridHeight ? 0 : x+1;
    const leftColumn = y -1 < 0 ? gridLength : y-1;
    const rightColumn = y + 1 > gridLength ? 0 : y+1;

    total += grid[topRow][leftColumn].alive;
    total += grid[topRow][y].alive;
    total += grid[topRow][rightColumn].alive;
    total += grid[x][rightColumn].alive;
    total += grid[x][leftColumn].alive;
    total += grid[bottomRow][leftColumn].alive;
    total += grid[bottomRow][y].alive;
    total += grid[bottomRow][rightColumn].alive;

    return total;
}

export function newGrid(gameField){
    const grid = gameField.board;
    let population = 0;
    //x represents row index and y column index
    const board = grid.map((row, x) => row.map((item, y) => {
        const isAlive = item.alive;
        const neighbours= checkNeighbours(grid, x, y);
        if(isAlive){
            population += 1;
            if(neighbours < 2 || neighbours >3){
                return {
                    alive: 0
                }
            } else {
                return {
                    alive: 1
                }
            }
        }
        if(!isAlive){
            if(neighbours === 3){
                return {
                    alive: 1,
                    newBorn: 1
                }
            }
        }
        return {
            alive: 0
        }
    }))
    return {
        clear: false,
        board,
        population
    }
}
