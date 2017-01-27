import React from 'react'
import {render} from 'react-dom'
import ReactDOM from 'react-dom'
import {Route, IndexRoute, Router, hashHistory} from 'react-router'

import App from './pages/App.jsx'
import Home from './pages/Home.jsx'
import Docs from './pages/Docs.jsx'
import Pricing from './pages/Pricing.jsx'
import Features from './pages/Features.jsx'
import Account from './pages/Account.jsx'

{/* routes for the app */}
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/docs' component={Docs} />
      <Route path='/pricing' component={Pricing} />
      <Route path='/features' component={Features} />
      <Route path='/account' component={Account} />
    </Route>
  </Router>
), document.getElementById('app'));
