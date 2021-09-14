import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart';
import Error from './components/Error';

const App = () => (
  <Router basename='/dist'>
    <Header />
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/shop'>
        <Shop />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
      <Route path='*'>
        <Error />
      </Route>
    </Switch>
  </Router>
);

export default App;
