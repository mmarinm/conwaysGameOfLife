import React from 'react'
import CellConnect from '../Container/CellConnect'
import PropTypes from 'prop-types'
const s = require('../styles/index.scss')

const Row = (props) => {
    const {collumnArr, x} = props;

    return (
        <div className={s.row}>
        {
            collumnArr.map((item, indx) => 
                <CellConnect className={s.cell} key={indx} showing={item.alive} newborn={item.newBorn} x={x} y={indx}/>
            )
        }
        </div>
    )
}

Row.PropTypes = {
    collumnArr: PropTypes.array.isRequired,
    x: PropTypes.number.isRequired
}

export default Row