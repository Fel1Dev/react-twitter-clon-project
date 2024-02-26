import styled from 'styled-components';
import Button from './Button';

//Style previously created elements.
export const StyledButton = styled(Button)`
  color: #09f;
  text-decoration: none;
  background-color: #00f2;
  width: 60px;
  height: 40px;
  margin: 8px 5px;
  cursor: pointer;
  transition: all, 1s ease;

&:hover {
  background-color: #0004;
}
`;
