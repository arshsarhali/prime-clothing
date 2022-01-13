import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { Switch, Route,Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.jsx';
import Header from './components/header/header';
import CheckoutPage from './pages/checkout/checkout';
import Signin from './pages/Sign-in-and-up/signinandup';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';




class App extends React.Component {

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }
  
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />

          



          <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/'/>) : (<Signin />) } />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps) (App);
