import React from 'react';
import PropTypes from 'prop-types'
const s = require('../styles/index.scss')

const Cell = (props) => {
    const  {active, id, onCellClick} = props;
    
    return (
        <div className={active ? s.cell + " " +  s.active : s.cell} onClick={() => onCellClick(id)}>
        </div>
    )
}

Cell.PropTypes = {
    onCellClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
}

export default Cell