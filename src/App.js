import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Home} />
      <Route exact path='/shop' component={Shop} />
    </div>
  );
}

export default App;
