import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/SigninAndSignup';
import { auth, createUserProfileDoc } from './firebase/firebaseUtils';
import { setCurrentUser } from './redux/actions/userActions';

import './app.css';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async loggedInUser => {
      if (loggedInUser) {
        const userRef = await createUserProfileDoc(loggedInUser);
        userRef.onSnapshot(snapShot => {
          console.log('snap');

          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      console.log('no snap');

      console.log('no if');

      setCurrentUser(loggedInUser);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = { setCurrentUser };

export default connect(null, mapDispatchToProps)(App);
