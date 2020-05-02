import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signOut } from '../../redux/actions/userActions';
import CartIcon from '../cart/CartIcon';
import CartDropDown from '../cart/CartDropDown';
import { selectCartHidden } from '../../redux/selectors/cartSelectors';
import { selectCurrentUser } from '../../redux/selectors/userSelectors';

import { ReactComponent as Logo } from '../../assets/muffin.svg';
import {
  HeaderContainer,
  LogoLink,
  OptionsContainer,
  OptionLink
} from './header.styles';

const Header = ({ currentUser, hidden, signOut }) => {
  console.log(currentUser);
  return (
    <HeaderContainer>
      <LogoLink to='/'>
        <Logo className='logo' />
      </LogoLink>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/shop'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps, { signOut })(Header);
