import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Header from './components/header/Header';
import Spinner from './components/spinner/Spinner';
import ErrorBoundary from './components/error/ErrorBoundary';
import { fetchUser } from './redux/actions/userActions';
import { selectCurrentUser } from './redux/selectors/userSelectors';

import { GlobalStyle } from './global.styles';

const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const Checkout = lazy(() => import('./pages/Checkout'));
const SignInAndSignUp = lazy(() => import('./pages/SignInAndSignUp'));

const App = ({ fetchUser, currentUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Home} />
            <Route path='/shop' component={Shop} />
            <Route exact path='/checkout' component={Checkout} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndSignUp />
              }
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = { fetchUser };

export default connect(mapStateToProps, mapDispatchToProps)(App);
