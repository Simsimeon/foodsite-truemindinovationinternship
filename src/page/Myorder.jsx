import React from 'react'
import NavBar from '../component/NavBar'
// import { Container } from './Home'
import styled from 'styled-components'
import Footer, { Containerfooter } from '../component/Footer'
import { Container } from './Home'
const Containerorder=styled.div`
 
  /* margin-top:100px; */
  background-color:var(--footer-color);
    width:100%;
    height:400px;
   
  /* @media only screen and (min-width:2000px) {
    &{
      display:none;
    }
  } */
`
const Overallcontainer=styled.div`
        

     
      display:flex;
       flex-direction:column; 
         margin-bottom:100px;
         justify-content:center; 
         width:100%;
         height:100vh ;
          .bottom{
    display:inline-block;
    margin-left:var(--spacing-sm);
    color:var(--text-color2);
  }
  .last{
     margin-left:var(--spacing-md);
     color:var(--text-color2);
  }
    .overall{
       margin:0 auto;
    background-color:white;
    margin-top:20px;
    width:80%;
    border-radius:var(--spacing-sm);
     padding:var(--spacing-sm) var(--spacing-sm); 
    }
   
    @media only screen and (max-width:850px) {
      &{
      
          padding:0;
          margin-bottom:200px; 
     
      }
      .overall{
        width:inherit;
        height:900px;
      
      }
    }
   
`
  const Ordercontainer=styled.div`
    display:flex;
    flex-direction:column;
    gap:20px;
    margin:0 20px;
    @media only screen and (max-width:800px) {
      &{
         width:inherit;
          margin:0 ;
      }
    }
  `
  const Orderstyles=styled.div`
    display:flex;
     justify-content:space-between; 
    width:100%;
    height:90px;
    border: 1px solid var(--input-color);
    align-items:center;
    border-radius:var(--spacing-sm);
    h4{
      display:inline-block;
       margin:0 var(--spacing-lg); 
      font-size:32px;
    }
    .li{
      display:flex;
         /* align-items:flex-end;    */
        justify-content:space-between;
         width:25%;
        height:18px;
        


    }
    
   .li  h3{
    color:var(--primary-color);
  
    }
    .box{
      height:20px;
       width:20px; 
      background-color:#1F2937;
       display:inline-flex; 
      justify-content:center;
      color:white;
       align-items:center; 
      border-radius:4px;
      
      
    }
    .box-color{
      background-color:var(--primary-color);
    }
    .flex{
      display:flex;
       align-items:center;  
      height:100%; 
      justify-content:center; 
      
      padding-top:9%;
      margin:auto 0;
      
    
    }
    .minus,.plus{
      background-color:#BDBDBD;
      color:black;
    }
    span{
      display:inline-block; 

    }
    .cancel{
      margin-right:var(--spacing-sm);
    }
     .orderclass{
        display:flex;
         width:100%;
         height:90px; 
          z-index:2;
        flex-direction:row;
         align-items:center; 
        flex-direction:row;
        justify-content:space-around;
      }
     .math h3{
      margin-left:var(--spacing-sm);
      color:var(--primary-color);
      margin-right:var(--spacing-lg);
     } 

     
    @media only screen and (max-width:850px) {
      &{
        display:flex;
        width:100%; 
        height:190px;
        gap:10px;
        padding:calc( var(--spacing-sm) *2) 1px;
        border: 1px solid black;
        .box-color{
     
      background-color:#1F2937;
      
      
      
    }
      }
      .li{
        width:100%;
        height:18px;
         
      }
      .li h3{
        color:var(--primary-color);
         margin-left: var(--spacing-sm);
       
      }
      .orderclass{
        flex-direction:column;
      }
      .box{
        margin-right: var(--spacing-sm);
      }
      .math{
        display:flex;
        width:100%;
        justify-content:space-between;
      }
      .plus{
        margin-left:var(--spacing-sm);
      }
      .minus{
        margin-right:var(--spacing-sm);
      }
      .orderclass{
        display:flex;
         width:100%;
         height: 170px;
        justify-content:space-between;
        align-items:center;
background-color:white ;   
      }
     
    }
    @media only screen and (max-width: 500px) {
       .orderclass h3{
        font-size:15px;
      }
    }
  `
  const Imagecontainer=styled.div`
    height:90px;
    width:120px;
    margin-left:var(--spacing-sm);
    @media only screen and (max-width:850px) {
      &{
         height:150px;
    width:150px;}
    }
      `
  const OrderImage=styled.img`
    width:100%;
    height:100%;
    border-radius:var(--spacing-sm);
    object-fit:cover;
  `
const Myorder = () => {
  return (
            
            <Container>

        <Overallcontainer>
          <div className='overall'>

          <div >
               <h2>Your cart</h2>
          </div>
             
          <Ordercontainer>
        
         <Orderstyles>
            <Imagecontainer>
              <OrderImage src="/images/yourorder1.png" alt=""/>
            </Imagecontainer>
           <div className="orderclass">

            <div>
              <h3>Jollof Rice & Fried Chicken</h3>
              <p>With plantain, extra pepper sauce</p>
            </div>
            <div className='math'>
              <span className='box plus'>+</span>
                 <h4>1</h4>
              <span className='box minus'>-</span>
            </div>
            <div className='mat li fle'>
             
              <h3>₦3,200</h3>
            
              <div className='box  box-color'>
                x
              </div>
            
            </div>
           
            </div>
         </Orderstyles>
                  <Orderstyles>
            <Imagecontainer>
              <OrderImage src="/images/yourorder2.png" alt=""/>
            </Imagecontainer>
            <div className="orderclass">

            <div>
              <h3>Jollof Rice & Fried Chicken</h3>
              <p>With plantain, extra pepper sauce</p>
            </div>
            <div className='math'>
              
              <span className='box plus'>+</span>
                 <h4>1</h4>
              <span className='box minus'>-</span>
            </div>
            <div className='mat li fle' >
              <h3>₦3,200</h3>
               <div className='box box-color'>
                x
              </div>
            </div>
            
            </div>
         </Orderstyles>
                  <Orderstyles>
            <Imagecontainer>
              <OrderImage src="/images/yourorder3.png" alt=""/>
            </Imagecontainer>
               <div className="orderclass">

            <div>
              <h3>Jollof Rice & Fried Chicken</h3>
              <p>With plantain, extra pepper sauce</p>
            </div>
            <div className='math '>
              <span className='box plus'>+</span>
                 <h4>1</h4>
              <span className='box minus'>-</span>
            </div>
            <div className='mat li fle'>
              <h3>₦3,200</h3>
             
              <div className='box box-color'>
                x
              </div>
            
            </div>
           
            </div>
         </Orderstyles>
                  <Orderstyles>
            <Imagecontainer>
              <OrderImage src="/images/yourorder1.png" alt=""/>
            </Imagecontainer>
            <div className="orderclass">

            <div>
              <h3>Jollof Rice & Fried Chicken</h3>
              <p>With plantain, extra pepper sauce</p>
            </div>
            <div className='math'>
              <span className='box plus'>+</span>
                 <h4>1</h4>
              <span className='box minus'>-</span>
            </div>
         <div className='mat li fle'>
              <h3 >₦3,200</h3>
             
              <div className='box box-color'>
                x
              </div>
             
          </div>
           
            </div>
         </Orderstyles>
      </Ordercontainer>
      <span className='last'>+</span>
      <p className='bottom'>Add more items from Chuks Kitchen</p>
          </div>
       </Overallcontainer>
          
         <Containerfooter>
                  <Containerorder>


                   <Footer/>
         </Containerorder>  
         </Containerfooter>
                  
                 
    
         </Container>
          
  )
}

export default Myorder