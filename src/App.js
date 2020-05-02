import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import Header from './components/header/Header';
import SignInAndSignUp from './pages/SignInAndSignup';
import { fetchUser } from './redux/actions/userActions';
import { selectCurrentUser } from './redux/selectors/userSelectors';

import './App.css';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/shop' component={Shop} />
          <Route exact path='/checkout' component={Checkout} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = { fetchUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);
