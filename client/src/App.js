import React, { useEffect, lazy, Suspense } from 'react';

import { GlobalStyle } from './global.styles';

import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header';

import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

import Spinner from './components/spinner/spinner';
import ErrorBoundry from './components/error-boundary/error-boundry';


const HomePage = lazy(() => import('./pages/homepage/homepage'))
const ShopPage = lazy(() => import('./pages/shop/shop'))
const Signin = lazy(() => import('./pages/Sign-in-and-up/signinandup'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'))


const App = ()=> {

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())

  }, [dispatch]);


  
  
    return (
      <div>
        <GlobalStyle/>
        <Header />
        <Switch>
          <ErrorBoundry> 
          <Suspense fallback={<Spinner/>}>
            <Route exact path='/' component={HomePage} />
        
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />

          <Route exact path='/signin' render={()=>currentUser ? (<Redirect to='/'/>) : (<Signin />) } />
            </Suspense>
            </ErrorBoundry>
        </Switch>
      </div>
    );
  }


export default App;
