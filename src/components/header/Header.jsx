import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebaseUtils';

import { ReactComponent as Logo } from '../../assets/muffin.svg';
import './header.scss';

const Header = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;