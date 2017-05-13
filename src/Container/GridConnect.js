import { connect } from 'react-redux'
import Grid from '../Components/Grid'

const mapStateToProps = (state) => {
  return {
    board: state.board
  }
}

const GridConnect = connect(
    mapStateToProps,
    null
)(Grid)

export default GridConnect