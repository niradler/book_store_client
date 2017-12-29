import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    Toolbar,
    ToolbarRow,
    ToolbarSection,
    ToolbarMenuIcon,
    ToolbarTitle,
    ToolbarIcon,
    Icon
  } from 'rmwc';
const router = () => (
    <div>
    <Toolbar fixed>
      <ToolbarRow>
        <ToolbarSection alignStart>
          {/* <ToolbarMenuIcon use="menu"/> */}
          <ToolbarTitle><Link to='/' style={{color:'white'}}>Book Store</Link></ToolbarTitle>
        </ToolbarSection>
        <ToolbarSection alignEnd>
        <ToolbarIcon use="add_box"/>
        </ToolbarSection>
      </ToolbarRow>
    </Toolbar>
    </div>
  )

  export default router