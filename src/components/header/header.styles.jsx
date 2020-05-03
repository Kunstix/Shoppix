import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  margin-bottom: 25px;
  border: 1px solid black;
  background-color: #7e685a;
  padding: 10px;
  box-shadow: 10px 10px 16px -4px rgba(0, 0, 0, 0.83);

  @media screen and (max-width: 800px) {
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const LogoLink = styled(Link)`
  height: 45%;
  width: 4.5%;
  padding: 5px;
  color: white;
  opacity: 0.9;
  filter: invert(100%) sepia(12%) saturate(7453%) hue-rotate(179deg)
    brightness(112%) contrast(110%);
  margin-left: 10px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  color: white;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: white;
  box-shadow: 10px 10px 16px -4px rgba(0, 0, 0, 0.83);
  border-radius: 5%;
  border: 1px solid black;
  margin-left: 10px;
`;
