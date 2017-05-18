import React from 'react';
import PropTypes from 'prop-types'

const s = require('../styles/index.scss');

const Controls = ({start, clear, generation, population, onStartClick, onClearClick,
onStepClick, onRandomClick}) => {

    const nexStepDisable = () => {
        if(start){
            return true;
        }
        if(!start && clear){
            return true
        }
        return false;
    };

    return(
        <div className={s.controls}>
            <div className={s.labels}>
                <h3>Generations: <span>{generation}</span></h3>
                <h3>Population: <span>{population}</span></h3>
            </div>

            <div className={s.ctrlBtns}>
                <button onClick={() => onStartClick(1, clear)}>{!start ? 'Start' : 'Stop'}</button>
                <button onClick={onStepClick}  style={nexStepDisable() ?  {cursor: "not-allowed"} : {}} disabled={nexStepDisable()}>Next Step</button>
                <button onClick={() => onClearClick(0, clear, start)}>Clear</button>
                <button onClick={() => onRandomClick(1)}>Random</button>
            </div>
        </div>
    )
}

Controls.PropTypes = {
    start: PropTypes.bool.isRequired,
    clear: PropTypes.bool.isRequired,
    generation: PropTypes.number.isRequired,
    population:PropTypes.number.isRequired,
    onStartClick: PropTypes.func.isRequired, 
    onClearClick: PropTypes.func.isRequired,
    onStepClick: PropTypes.func.isRequired,
    onRandomClick: PropTypes.func.isRequired
}

export default Controls