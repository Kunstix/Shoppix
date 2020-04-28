import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Header from './components/header/Header';
import './app.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
