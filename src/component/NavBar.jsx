import React, { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import styled, { css, keyframes } from 'styled-components'
import { Link, NavLink } from 'react-router-dom';
const slideIn= keyframes`
     from{
          transform:translateY(-100%) 
        }to {
          transform:translateY(0) 
    
    }
`
const NavStyles=styled.nav`
    display:flex;
     justify-content:space-between;
    position:${props=>props.position ? "fixed":" " };
    width:100%;
    height: 50px;
    border:1px solid red;
    align-items:center;
    animation: slideDown 0.5s ease;
    background-color:white;
    z-index:2;
    padding:0 50px; 
    ${props=>props.visibility && css`
        animation: ${slideIn} 0.5s ease;
    `}
    .position{
       position:fixed; 
    }

     .icon{
       display:none;
     }
@media only screen and (max-width: 1000px) {
         .link{
        display:none;
     }
     .icon{
        display:block;
     }
}
@media only screen and (max-width: 700px) {
       & {
         padding:0 10px;
       }
    
    .link{
        display:none;
     }
     .icon{
        display:block;
     }
}
`
const Ulstyles=styled.ul`
    display:flex;
    list-style:none;
    justify-content:space-around;
   width:600px;
    @media only screen and (max-width:1000px) {
        &{
            display:none;
        }
        a{
            display:none;
        }
        .link{
            display:none;
        }
    }
`;
export const LiStyles=styled.li`
     text-decoration:none;
     font-family:"Inter", sans-serif, cursive;
     font-size:1rem; 
     color:var(--primary-color);
     
`
const StylesH3=styled.h3`
    font-family:"Island Moments","Inter", sans-serif, cursive;
    font-weight:400;
    font-size:30.8px;
    color:var(--primary-color);
    cursor: pointer;
`
const NavBar = () => {
    const [isFixed, setIsFixed]=useState(false);
    useEffect(()=>{
         const handleScroll=()=>{ 
        const navbar=document.querySelector( NavStyles);
        if(navbar){
         const navbarHeight=navbar.offsetHeight;
         setIsFixed(  window.scrollY > navbarHeight)
        }     
    };
    window.addEventListener('scroll',handleScroll)
    return ()=>{
        removeEventListener('scroll',handleScroll)
    }
        
    },[])
  return (

    <NavStyles visibility={isFixed?true:false} position={isFixed ? "position":""}>
        
     
       <Link to='/home'><StylesH3>Chuks Kitchen</StylesH3></Link> 
        <Ulstyles>
           <LiStyles>
            <NavLink style={({isActive})=>({
                color: isActive?'red':'#1F2937',
            })}  to='/home'>Home</NavLink>
            </LiStyles> 
           <LiStyles> 
            <NavLink style={({isActive})=>({
                color: isActive?'red':'#1F2937',
            })}  to='/explore'>Explore</NavLink></LiStyles>
              <LiStyles> 
                <NavLink style={({isActive})=>({
                color: isActive?'red':'#1F2937',
            })}  to='/myorder'> My order</NavLink>
                </LiStyles>   
                 <LiStyles>
                    <NavLink style={({isActive})=>({
                        color: isActive?'red':'#1F2937',
                    })}  to='/account'>Account</NavLink>
    
                    </LiStyles>
        </Ulstyles>
       <span className='link'><Link to='/login' > <Button  variations='primary'>Login</Button></Link></span> 
        <i class="fa-solid fa-bars icon"></i>
        </NavStyles>
  )
}

export default NavBar