import React from 'react';
import './menuItem.scss';

const MenuItem = ({ title, imgUrl, size }) => (
  <div className={`menu-item ${size}`}>
    <div className='background' style={{ backgroundImage: `url(${imgUrl})` }} />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span>SHOW NOW</span>
    </div>
  </div>
);

export default MenuItem;
