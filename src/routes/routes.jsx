import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import CoreLayout from '../layouts/CoreLayout'
import Intro from '../views/Intro'
import Todos from '../views/Todos'
import NotFound from '../views/NotFound'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={Intro} />
    <Route path='todomvc' component={Todos} />
    <Route path='/404' component={NotFound} />
    <Redirect from='*' to='/404' />
  </Route>
)
