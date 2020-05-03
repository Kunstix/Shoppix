import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

export const ErrorImageText = styled.span`
  font-size: 20px;
  color: black;
  text-align: center;
`;
