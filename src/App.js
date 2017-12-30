import React, { Component } from 'react';
import {Grid,GridCell} from 'rmwc';

import Routes from './routes/routes'
import Header from './components/Header'
import SideNav from './components/SideNav'

class App extends Component {
  constructor(props){
    super()
this.state={
  showSideNav:true
}
this.toggleSide = this.toggleSide.bind(this);
  }
  toggleSide(){
    this.setState({showSideNav:!this.state.showSideNav})
  }
  render() {
    return (
      <div className="App">
      <Grid>
<Header toggleSide={this.toggleSide}/>
    </Grid>

    <Grid>
    {this.state.showSideNav?
    <GridCell span="3" >
      <SideNav />
    </GridCell>
    :''}
    <GridCell span={this.state.showSideNav?'9':'12'}>
 <Routes />
 </GridCell>
                </Grid>
      </div>
    );
  }
}

export default App;
