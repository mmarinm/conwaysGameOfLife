import React, { Component } from 'react'
import { connect } from 'react-redux'
import ControlsConnect from './Container/ControlsConnect'
import GridConnect from './Container/GridConnect'
import Header from './Components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import * as actions from './redux/actions/actions'

const s = require('./styles/index.scss');

class App extends Component {
  componentDidMount() {
    this.props.startGame()
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.start !== prevProps.start){
      if(this.props.start === false) {
        const tick = this.props.timerId
        clearInterval(tick)
      } else {
        const tick = setInterval(() => this.props.updateGrid(), 300);
        this.props.setTimerId(tick);
      }
    }
  }

  render() {

    return (
      <MuiThemeProvider >
        <div className={s.container}>
          <Header />
          <ControlsConnect />
          <GridConnect/>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    start: state.start,
    timerId: state.timerId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame:() => {
      dispatch(actions.startGame());
      dispatch(actions.generateRandomGrid());
    },
    updateGrid:() => {
      dispatch(actions.updateGeneration());
      dispatch(actions.updateGrid())
    },
    setTimerId: (id) => {
      dispatch(actions.setTimerId(id))
    }
  }
}

const AppConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppConnect

