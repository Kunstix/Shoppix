import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_0QCYx7otozAjgTWajibH7zk900Sx1qZuJU';

  const onToken = async token => {
    try {
      await axios({
        url: 'payment',
        method: 'post',
        data: {
          amount: priceForStripe,
          token
        }
      });
      alert('Payment successfull');
    } catch (err) {
      console.log('Payment error: ', JSON.parse(err));
      alert(
        'An issue arised with your payment. Please check your provided payment information.'
      );
    }
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is ${price} €`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
