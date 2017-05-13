import { connect } from 'react-redux'
import Cell from '../Components/Cell'
import {toggleCell} from '../redux/actions/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onCellClick: (id) => {
      dispatch(toggleCell(id))
    }
  }
}

const CellConnect = connect(
  null,
  mapDispatchToProps
)(Cell)

export default CellConnect