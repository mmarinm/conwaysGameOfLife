import React from 'react'

const s = require('../styles/index.scss')

const Controls = () => {
    return(
        <div className={s.controls}>
            <div className={s.labels}>
                <h3>Generations: 2</h3>
                <h3>Population: 2899</h3>
            </div>
            <div className={s.speedCtrl}>
                <button>+</button>
                <span>5</span>
                <button>-</button>
            </div>
            <div className={s.ctrlBtns}>
            <button>Start</button>
            <button>Step</button>
            <button>Clear</button>
            <button>Random</button>
            </div>
        </div>
    )
}

export default Controls