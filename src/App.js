import React, { Component } from 'react';
import {Grid} from 'rmwc';

import Routes from './routes/routes'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Grid>
<Header />
    </Grid>

    <Grid>
 <Routes />

                </Grid>
      </div>
    );
  }
}

export default App;
