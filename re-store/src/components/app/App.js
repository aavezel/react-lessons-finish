import React from 'react'
import * as Router from 'react-router-dom';
import * as Pages from '../pages';
import AppHeader from '../app-header';

const App = () => {

  return (
    <>
      <AppHeader count={3} sum={4300} />
      <Router.Switch>
        <Router.Route path="/" exact component={Pages.HomePage} />
        <Router.Route path="/cart" exact component={Pages.CartPage} />
      </Router.Switch>
    </>
  )
}

export default App;