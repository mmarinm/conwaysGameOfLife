import React from 'react'
import Cell from './Cell'
const s = require('../styles/index.scss')

const Row = () => {
    return (
        <div className={s.row}>
        {
            Array(20).fill(null).map((item, indx) => 
                <Cell className={s.cell} key={indx}/>
            )
        }
        </div>
    )
}

export default Row