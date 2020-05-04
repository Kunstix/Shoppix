import React from 'react';
import { withRouter } from 'react-router-dom';
import './menuItem.scss';

const MenuItem = ({ title, imgUrl, size, linkUrl, history, match }) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background'
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span>SHOW NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
