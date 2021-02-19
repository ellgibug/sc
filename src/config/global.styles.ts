import { createGlobalStyle } from 'styled-components';
import './fonts/styles.css';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Poppins';
    box-sizing: border-box;
    margin: 2px;
    padding: 0;
  }
`;