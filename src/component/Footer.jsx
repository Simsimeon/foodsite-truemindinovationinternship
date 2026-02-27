import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../ui/Button'
import { LiStyles } from './NavBar'
import { Link, NavLink } from 'react-router-dom'
const Footerdivflex=styled.div`
  display:flex;
  flex-direction:column;
  margin-top:var(--spacing-xl);
  margin-bottom:calc(var(--spacing-xl) * 2);
  color:white;
  background-color:var(--footer-color);
  ul{
    color:white;
    display:flex;
    flex-direction:column;
    gap:7px;
    font-size:10px;
  }
.footerh2{
font-family:"Island Moments","Inter", sans-serif, cursive;
color:var(--primary-color);
}
p{
  line-height:1.7;
}
.footertext{
  width:70%;
}
 `
 export const Containerfooter=styled.div`
  display:flex;
  flex-direction:column;
 background-color:#562F00;

  width:100%; 
   opacity:0.9; 
 @media only screen and (max-width: 850px) {
  &{
    display:none;
  }
 }
 `
 const Footerdiv=styled.div`
   display:flex;
   flex-direction:row;
   margin:0  calc( var(--spacing-sm)*3);
 
   > *{
     width:25%;
     color:white;
 
   }
   h3{
     margin-bottom:var(--spacing-md);
   }
   li {
     list-style:none;
     margin-bottom:10px;
     font-size:10px;
   }
   
    
 `
 const Footeritem=styled.div`
  display:flex;
  justify-content:space-between;
  color:#FFFFFF;
  margin:0  calc( var(--spacing-sm)*3);
  margin-bottom: var(--spacing-md);
  .child{
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:blue;
    height:40px;
    width:40px;
    border-radius:50%;
    cursor: pointer;
    animation: scaleup 2s ease-in-out infinite;
  }
  @keyframes scaleup {
  0% {
    transform: scale(1);  
  }
  50% {
    transform: scale(1.2);  
  }
 100% {
    transform: scale(1);  
  }
}
 `

 export const Footer = () => {
  const [isVisible,setIsVisible]=useState(false);
  useEffect(()=>{
    const toggleVisibility=()=>{
      if(window.scrollY > 300){
      return  setIsVisible(true)
      }else{
        return setIsVisible(false)
      }
    }
    window.addEventListener('scroll',toggleVisibility)
    return ()=>{
        removeEventListener('scroll',toggleVisibility)
    }
  },[])
  const scrollToTop=()=>{ 
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  };
  return (<>
  
          
          <Containerfooter>

           <Footerdiv>

      <Footerdivflex>
            <div className='footertext'>

            <h2 className='footerh2'>Chuks kitchen</h2>
            <p>
              Bringing the authentic flavors of Nigerian 
              home cooking to your table, 
              with passion and care.
            </p>
            </div>
          
          </Footerdivflex>
          <Footerdivflex>
            <h2>Quick Links</h2>
            <ul>
             <Link style={{color:'white'}} to='/home'>Home</Link>
                <Link  style={{color:'white'}}  to='/explore'>Explore</Link>
              <Link  style={{color:'white'}} to='/myorder'> My order</Link>  
              <Link  style={{color:'white'}} to='/account'>Account</Link>
               <Link  style={{color:'white'}} to='/account'>Contact us</Link>
                 
            </ul>
          </Footerdivflex>
          <Footerdivflex>
            <h2>Contact us</h2>
            <li>+234 801 234 5678</li>
            <li>hello@chukskitchen.com</li>
            <li>23 Taste Blvd, Lagos, Nigeriat</li>
           
          </Footerdivflex>
          <Footerdivflex>
            <h3>Facebook</h3>
            <li>Twitter</li>
            <li>Linkedin</li>
            <li>Instagram</li>
          </Footerdivflex>
         
           </Footerdiv>
           <Footeritem >
            <div>
              <p>&copy; 2020 Lift Media. All rights reserved.</p>
            </div>
           { isVisible && <div onClick={scrollToTop} className='child'>
              <i class="fa-solid fa-arrow-up"></i>
            </div>
                }
           </Footeritem>
          </Containerfooter>
  </>
  )
}

export default Footer