import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../components/checkout/CheckoutItem';
import StripeCheckoutButton from '../components/checkout/StripeCheckoutButton';
import {
  selectCartItems,
  selectCartTotal
} from '../redux/selectors/cartSelectors';

import {
  CheckoutContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  PaymentSectionContainer,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <PaymentSectionContainer>
      <TotalContainer>TOTAL: {total} €</TotalContainer>
      <StripeCheckoutButton price={total} />
    </PaymentSectionContainer>
    <WarningContainer>
      *Use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 04/24 - CVV: 242
    </WarningContainer>
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
