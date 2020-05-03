import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  @media screen and (max-width: 800px) {
    padding-bottom: 50px;
    width: 70%;
    margin-top: 30px;
    border-bottom: 1px solid lightgrey;
  }

  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
