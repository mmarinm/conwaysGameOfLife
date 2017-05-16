import React, { Component } from 'react'

import ControlsConnect from './Container/ControlsConnect'
import GridConnect from './Container/GridConnect'
import Header from './Components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const s = require('./styles/index.scss');

class App extends Component {

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

export default App;
