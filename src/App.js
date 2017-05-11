import React, { Component } from 'react'

import Controls from './Components/Controls'
import Grid from './Components/Grid'
const s = require('./styles/index.scss');

class App extends Component {
  render() {
    return (
      <div className={s.container}>
        <Controls />
        <Grid />
      </div>
    );
  }
}

export default App;
