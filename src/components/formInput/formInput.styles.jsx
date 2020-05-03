import styled, { css } from 'styled-components';

const primaryColor = 'black';
const secondaryColor = '#7e685a';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${primaryColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  display: block;
  background: none;
  background-color: white;
  width: 100%;
  color: ${secondaryColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${secondaryColor};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${secondaryColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  pointer-events: none;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;
