import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  min-height: 90vh;
  margin: 50px auto 0;

  @media screen and (max-width: 1200px) {
    width: 70%;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

export const PaymentSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

export const TotalContainer = styled.div`
  font-size: 36px;
`;

export const WarningContainer = styled.div`
  text-align: center;
  font-size: 10px;
  align-self: flex-end;
`;
