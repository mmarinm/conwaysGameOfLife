const uuidV4 = require('uuid/v4');

export function generateGrid(rows, collumns, random=false){
    return Array(rows).fill(null).map((row, indx) => {
        return Array(collumns).fill(null).map((collumn, index) => {
            const value = random ? Math.random() > 0.85 : false
           return {
                id: uuidV4(),
                showing: value
            }
        })
    })
}
