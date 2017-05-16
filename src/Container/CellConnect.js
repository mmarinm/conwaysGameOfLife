import { connect } from 'react-redux'
import Cell from '../Components/Cell'
import {toggleCell} from '../redux/actions/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onCellClick: (x, y) => {
      dispatch(toggleCell(x, y))
    }
  }
}

const CellConnect = connect(
  null,
  mapDispatchToProps
)(Cell)

export default CellConnect