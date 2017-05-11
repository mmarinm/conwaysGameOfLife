import React from 'react'
import Row from './Row'

const s = require('../styles/index.scss');

const Grid = () => {

    return (
        <div className={s.grid}>
            {
                Array(20).fill(null).map((item, index) => <Row key={index} />)
            }
        </div>
    )
}

export default Grid