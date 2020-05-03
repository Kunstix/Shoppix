import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 10px;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
