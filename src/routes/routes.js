import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom'
import Browse from '../screens/Browse'
import Create from '../screens/Create'
import Update from '../screens/Update'
const router = () => (
    <div>
    <Switch>
  <Route exact path='/' component={Browse}/>
  <Route path='/browse' component={Browse}/>
  <Route path='/create' component={Create}/>
  <Route path='/update/:id' component={Update}/>
  {/* <Route path='/book/:id' component={Book}/> */}
</Switch>
    </div>
  )

  export default router