import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions'
import Controls from '../Components/Controls'

const mapStateToProps = (state) => {
  return {
    start: state.start,
    generation: state.generation,
    population: state.population,
    board: state.board
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRandomClick: (generation) => {
      dispatch(actions.updateGeneration(generation));
      dispatch(actions.generateRandomGrid());
    },
    onStartClick:() => {
      dispatch(actions.startGame());
    },
    onClearClick:(generation) => {
      dispatch(actions.updateGeneration(generation));
      dispatch(actions.clearBoard());
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