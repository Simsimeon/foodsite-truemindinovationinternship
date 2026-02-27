import { createGlobalStyle } from "styled-components";
export const GlobalStyles= createGlobalStyle`
:root{
--bg-color:#F3F4F6;
--primary-color:#FF7A18;
--text-color:#1F2937;
--input-color:#ACACAC;
--text-color2:#1E88E5;
--light-pink:#FFE1C4;
--footer-color:#562F00;



 --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --spacing-xl: 64px;
  --alignment-spacing:50px;
  --alignment-spacing-md:30px;
   --alignment-spacing-sm:10px;
 }
body {
   background-color:var(--bg-color) ;
  font-family:"Inter", sans-serif, cursive;
};
.container{
 background-color:#000;
}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    /* background-color: black; */
}
a:-webkit-any-link{
        text-decoration: none;
        /* color:white; */
}
`;