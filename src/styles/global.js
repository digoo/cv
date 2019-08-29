import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body {
background: #e6ecf0;
font-family: 'helvetica Neue', 'Helvetica', Arial, sans-serif;
text-rendering: optimizeLegibility !important;
-webkit-font-smoothing: antialiased !important;
}

input, button {
  outline: 0;
}

button {
  cursor: pointer;
}

.content {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 30px;
}
`;
