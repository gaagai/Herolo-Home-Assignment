import React, { UseEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import Favorites from './screens/favorites'
import Wehather from './screens/weather'
import NotFound from './screens/NotFound'

export default function Router() {
  return (
    <Switch>
      <Route path='/' exact component={Wehather} />
      <Route path='/city/:id' component={Wehather} />
      <Route path='/favorites' exact component={Favorites} />
      <Route component={NotFound} />
    </Switch>
  )
}
