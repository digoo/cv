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

@media (max-width: 450px) {
::-webkit-scrollbar {display:none;}
/* Also needed to disable scrollbar Firefox */
scrollbar-width: none;
/* Disable scrollbar IE 10+ */
-ms-overflow-style: none;
overflow-y: scroll;
}
}

input, button {
  outline: 0;
}

button {
  cursor: pointer;
}

.content {
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 30px;
}

.contentMobile {
  /* max-width: 380px; */
  margin: 0 auto;
  padding: 0 10px;
}

@media (max-width: 450px) {
@-moz-document url-prefix() {
    html,body {scrollbar-width: none;
}
}
`;
