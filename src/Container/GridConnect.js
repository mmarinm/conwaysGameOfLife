import { connect } from 'react-redux'
import Grid from '../Components/Grid'

const mapStateToProps = (state) => {
  return {
    gameField: state.gameField
  }
}

const GridConnect = connect(
    mapStateToProps,
    null
)(Grid)

export default GridConnect