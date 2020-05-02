import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  margin-bottom: 25px;
`;

export const LogoLink = styled(Link)`
  height: 60px;
  width: 60px;
  padding: 5px;
  border-radius: 50%;
  border: 1px solid #4a4a4a;
  color: #4a4a4a;
  opacity: 0.9;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
