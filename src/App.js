import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.jsx';
import Header from './components/header/header';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
