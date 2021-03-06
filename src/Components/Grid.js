import React from 'react'
import PropTypes from 'prop-types'
import Row from './Row'

const s = require('../styles/index.scss');

const Grid = ({gameField}) => {
    return (
        <div className={s.grid}>
            {
                gameField.board.map((item, index) => <Row key={index} collumnArr={item} x={index}/>)
            }
        </div>
    )
}

Grid.PropTypes = {
    board: PropTypes.array.isRequired,
}

export default Grid