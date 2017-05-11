import React, { Component } from 'react'

import Controls from './Components/Controls'
import Grid from './Components/Grid'
import Header from './Components/Header'

const s = require('./styles/index.scss');

class App extends Component {
  render() {
    return (
      <div className={s.container}>
        <Header />
        <Controls />
        <Grid />
      </div>
    );
  }
}

export default App;
