import styled, { css } from "styled-components";
const variations = {
  primary: css`
    color: #fff;
    background-color: var(--primary-color);
     transition:background-color 0.9s ease;

    &:hover {
      background-color:white;
      color:var(--primary-color);
       transition:background-color 0.9s ease;
    }
  `,
  secondary: css`
    color: #fff  ;
    background:var(--primary-color);;
    transition:background-color 0.9s ease;
    height:40px;
    width:200px;

    &:hover {
      background-color: white;
      color:var(--primary-color);
     
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

export const Button=styled.button.attrs(props=>({
   variations :props.variations || 'primary',
//   sizes:props.sizes||'medium',
}))`
background-color:var(--primary-color);
color:white;
   border:none; 
  height:40px;
  width:80px;
  border-radius:10px;
   ${props=>variations[props.variations]}
`
 