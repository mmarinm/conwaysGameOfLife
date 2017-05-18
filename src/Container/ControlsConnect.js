import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions'
import Controls from '../Components/Controls'

const mapStateToProps = (state) => {
  return {
    start: state.start,
    clear: state.gameField.clear,
    generation: state.generation,
    population: state.gameField.population
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRandomClick: (generation) => {
      dispatch(actions.updateGeneration(generation));
      dispatch(actions.generateRandomGrid());
    },
    onStartClick:(generation, clear) => {
      if(clear){
        dispatch(actions.updateGeneration(generation));
        dispatch(actions.generateRandomGrid());
      }
      dispatch(actions.startGame());
    },
    onClearClick:(generation, clear, start) => {
      if(!clear){
        dispatch(actions.updateGeneration(generation));
        dispatch(actions.clearBoard());
        if(start){
          dispatch(actions.startGame());
        }
      }
    },
    onStepClick: () => {
      dispatch(actions.updateGeneration());
      dispatch(actions.updateGrid());
    }
  }
}

const ControlsConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls)

export default ControlsConnect