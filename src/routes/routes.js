import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom'
import Browse from '../screens/Browse'
import Create from '../screens/Create'
const router = () => (
    <div>
    <Switch>
  <Route exact path='/' component={Browse}/>
  <Route path='/Browse' component={Browse}/>
  <Route path='/Create' component={Create}/>
  {/* <Route path='/book/:id' component={Book}/> */}
</Switch>
    </div>
  )

  export default router