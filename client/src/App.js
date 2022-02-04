import React, { useEffect, lazy, Suspense } from 'react';

import { GlobalStyle } from './global.styles';

import { Routes, Route, Navigate } from 'react-router-dom';

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
        <ErrorBoundry> 
        <Suspense fallback={<Spinner/>}>
        <Routes>
         
              <Route path='/' element={<HomePage />} />
        
          <Route path='shop/*' element={<ShopPage/>} />
              <Route path='checkout' element={<CheckoutPage />} />
             


              {
                currentUser ?
                <Route path='signin' element={<Navigate replace to='/' />} />
                  :
                  <Route path='signin' element={<Signin />} />

              }

      
            

            
            </Routes>
            </Suspense>
            </ErrorBoundry>
      </div>
    );
  }


export default App;
