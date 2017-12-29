import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom'
import Browse from '../screens/Browse'
const router = () => (
    <div>
    <Switch>
  <Route exact path='/' component={Browse}/>
  {/* <Route path='/book/:id' component={Book}/> */}
</Switch>
    </div>
  )

  export default router