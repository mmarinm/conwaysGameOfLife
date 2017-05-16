import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
const s = require('../styles/index.scss');
const style = {
  margin: "0 5px",
};

const Controls = ({onRandomClick, start, onStartClick, onClearClick,
onStepClick, generation, population}) => {

    return(
        <div className={s.controls}>
            <div className={s.labels}>
                <h3>Generations: {generation}</h3>
                <h3>Population: {population}</h3>
            </div>
            <div className={s.speedCtrl}>
                <FloatingActionButton mini={true} style={style}>
                    <ContentAdd />
                </FloatingActionButton>
                <span>5</span>
                <FloatingActionButton mini={true} style={style}>
                    <ContentRemove />
                </FloatingActionButton>
            </div>
            <div className={s.ctrlBtns}>
            <RaisedButton style={style} primary={true} label={!start ? 'Start' : 'Stop'} onTouchTap={onStartClick} labelStyle={{textTransform: 'none'}}></RaisedButton>
            <RaisedButton style={style} onTouchTap={onStepClick} disabled={!start}>Step</RaisedButton>
            <RaisedButton style={style} onTouchTap={() => onClearClick(0)}>Clear</RaisedButton>
            <RaisedButton style={style} onTouchTap={() => onRandomClick(1)}>Random</RaisedButton>
            </div>
        </div>
    )
}

export default Controls