import React from 'react'
import { Route, Switch } from 'react-router-dom'

import PageHome from './PageHome'
import PageAbout from './PageAbout'
import PageVenture from './PageVenture'
import PageContact from './PageContact'
import Page404 from './Page404'

export default () => (
  <Switch>
    <Route path="/" exact component={PageHome} />
    <Route path="/about" component={PageAbout} />
    <Route path="/venture" component={PageVenture} />
    <Route path="/contact" component={PageContact} />
    <Route component={Page404} />
  </Switch>
)
