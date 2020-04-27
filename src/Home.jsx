import React from 'react';

import './home.scss';

const Home = () => (
  <div className='home'>
    <div className='menu-grid'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>BONBONS</h1>
          <span>SHOW NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>ICECREAM</h1>
          <span>SHOW NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>LOLLIS</h1>
          <span>SHOW NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>COOKIES</h1>
          <span>SHOW NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>CHOCOS</h1>
          <span>SHOW NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
