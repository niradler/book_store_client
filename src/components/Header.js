import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    Toolbar,
    ToolbarRow,
    ToolbarSection,
    ToolbarMenuIcon,
    ToolbarTitle,
    ToolbarIcon,
  } from 'rmwc';
  const barStyle={
    color:'white', textDecoration: 'none'
  }
  class Header extends Component {
    constructor(props){
      super()
  this.state={
    showSideNav:true
  }
  this.toggleSide = this.toggleSide.bind(this);
    }
    toggleSide(e){
      this.props.toggleSide()
    }
    render() {
      return (
  <div className="Header">
  <Toolbar fixed>
    <ToolbarRow>
      <ToolbarSection alignStart>
      <ToolbarMenuIcon use="menu" onClick={this.toggleSide}/>
        <ToolbarTitle><Link to='/' style={barStyle}>Book Store</Link></ToolbarTitle>
      </ToolbarSection>
      <ToolbarSection alignEnd>
      <Link to='/create' style={barStyle}><ToolbarIcon use="add_box"/></Link>
      </ToolbarSection>
    </ToolbarRow>
  </Toolbar>
  </div>
      );
    }
  }
  export default Header