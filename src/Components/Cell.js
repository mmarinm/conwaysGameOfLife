import React from 'react';
import PropTypes from 'prop-types'
const s = require('../styles/index.scss')

const Cell = (props) => {
    const  {showing, onCellClick, newborn, x, y} = props;

    const checkCell = (newborn, showing) => {
        if(newborn){
            return s.cell + " " +  s.newborn
        } if (showing){
            return s.cell + " " +  s.active
        }
        return s.cell
    }

    return (
        <div className={checkCell(newborn, showing)} onClick={() => onCellClick(x, y)}>
        </div>
    )
}

Cell.PropTypes = {
    onCellClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    showing: PropTypes.bool.isRequired
}

export default Cell