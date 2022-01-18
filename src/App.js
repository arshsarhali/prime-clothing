import React, { useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { Switch, Route,Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.jsx';
import Header from './components/header/header';
import CheckoutPage from './pages/checkout/checkout';
import Signin from './pages/Sign-in-and-up/signinandup';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';




const App = ()=> {

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())

  }, [dispatch]);


  
  
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />

          



          <Route exact path='/signin' render={()=>currentUser ? (<Redirect to='/'/>) : (<Signin />) } />
        </Switch>
      </div>
    );
  }


export default App;
