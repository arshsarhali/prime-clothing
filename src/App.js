import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.jsx';
import Header from './components/header/header';
import Signin from './pages/Sign-in-and-up/signinandup';
import { auth, createUserProfileDocument } from './firebase/firebase-util';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(
          snapShot => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            })
          }

  
        );

        console.log(this.setState);

      }
      this.setState({ currentUser: null });
      
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser } />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={Signin} />
        </Switch>
      </div>
    );
  }
}

export default App;
