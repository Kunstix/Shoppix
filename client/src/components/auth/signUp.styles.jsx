import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding 10px; 

  @media screen and (max-width: 800px) {
    width: 70%;
    margin-top: 70px;
  }

  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;

export const SignUpTitle = styled.h2`
  margin: 10px 0;
  border-bottom: 1px solid #7e685a;
`;
