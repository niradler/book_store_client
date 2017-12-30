import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
    PermanentDrawer,
    PermanentDrawerContent,
    List,
    ListItem,
    ListItemText
  } from 'rmwc';

  const linkStyle={zIndex: 1}

const SideNav = () => (
    <div>
    <PermanentDrawer>
	<PermanentDrawerContent style={{height: '660px'}}>
		<List>
			<ListItem>
				<ListItemText><Link to='/browse' style={linkStyle}>Browse</Link></ListItemText>
			</ListItem>
			<ListItem>
				<ListItemText><Link to='/create' style={linkStyle}>Add</Link></ListItemText>
			</ListItem>
		</List>
	</PermanentDrawerContent>
</PermanentDrawer>
    </div>
  )

  export default SideNav