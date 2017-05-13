import React, { Component } from 'react'

import Controls from './Components/Controls'
import GridConnect from './Container/GridConnect'
import Header from './Components/Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const s = require('./styles/index.scss');
import {generateGrid} from './Api/Api'


class App extends Component {

  render() {

    return (
      <MuiThemeProvider >
        <div className={s.container}>
          <Header />
          <Controls />
          <GridConnect/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
