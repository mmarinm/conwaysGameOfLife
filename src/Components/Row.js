import React from 'react'
import CellConnect from '../Container/CellConnect'
import PropTypes from 'prop-types'
const s = require('../styles/index.scss')

const Row = (props) => {
    const {collumnArr} = props;

    return (
        <div className={s.row}>
        {
            collumnArr.map((item, indx) => 
                <CellConnect className={s.cell} key={indx} active={item.showing} id={item.id}/>
            )
        }
        </div>
    )
}

Row.PropTypes = {
    collumnArr: PropTypes.array.isRequired,
}

export default Row