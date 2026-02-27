import React from 'react'
import NavBar, { LiStyles } from '../component/NavBar'
import styled from 'styled-components'
import { Button } from '../ui/Button'
import { Link, NavLink } from 'react-router-dom'
import Footer from '../component/Footer'
import { IoIosSearch } from "react-icons/io";
 export const HomedivStyles=styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows:1fr 1fr;
  gap:50px;
height:500px;
padding:0 var(--alignment-spacing);
& p{
  font-size:16px;
  width:90%;
  margin-top:10px;
  padding-left:20px;
}
& h2{
   padding-left:20px;
}
   .my-class{
    display:flex;
    align-items:center;
    padding:var(--spacing-lg) 0;
     height:100px;  
    justify-content:center;
  
   }  
    ;  
    .pricing-div{
      display:flex;
      justify-content:space-between;
      align-items:center;
       padding-bottom:50px; 
      padding-right:20px;
    }
  > *{
   background-color:white;
   border-radius:10px;
   
  }
  
     @media only screen and (max-width:1000px) {
      &{
        grid-template-columns: 1fr 1fr ;
         padding:0 var(--alignment-spacing-md);
        
      }
     }
      @media only screen and (max-width:700px) {
      &{
        grid-template-columns: 1fr;
         margin:0 auto;
         width:300px;
        padding:0 var( --alignment-spacing-sm);
      }
     }
      @media only screen and (max-width:450px) {
      &{
        grid-template-columns: 1fr;
         width:100%;
         margin:0;
        
      }
     }
 
  
`

export const HomeImagestyles=styled.img`
  width:100%;  
  height:inherit;
  object-fit:cover;
  border-radius: 10px 10px 0 0;
  background-repeat:no-repeat;

`
export const HomeScreendImagedivStyles=styled.div`
  width:100%;
   height:600px; 
  position:relative;
  background-color:transparent;


  
   &::before {
    content:" ";
    position:absolute;
     width:100%; 
     height:inherit;
     right:0;
    bottom:0;
    background-color:#000; 
   opacity:0.4 ;  
   }
  
`;
export const HomeScreendImagedStyles= styled.img`
 height:100%;
 width:100%;
 object-fit:cover;

`
export const HomeScreendTextstyles=styled.div`
  position:absolute;
  top:calc(50% - 50px);
  left:0; 
  color:#FFFFFF;
  width:60%;
  padding:0 var(--alignment-spacing);
  & h2{
    font-size:40px;
    font-weight:700;
    margin-bottom:calc( var(--spacing-md)*3);
  }
  & h4{
    margin-bottom:calc( var(--spacing-md)*3);
     font-size:20px;
  }
@media only screen and (max-width:900px) {
  &{
     padding:0 10px;
  }
  & h2{
    font-size:20px;
    font-weight:500;
    margin-bottom:calc( var(--spacing-md)*3);
  }
  & h4{
    margin-bottom:calc( var(--spacing-md)*3);
     font-size:10px;
  }
}
`
 export const ClearScreen=styled.div`
  width:100%;
  height:100%;
  position:relative;
  margin-bottom:150px;
  
`
const HomeScreenInput=styled.div`
  
   position:absolute;
  bottom:-5px;
  left:calc( 50% - 325px);
  border:none;
  width:39rem;
  margin: 0 10px;
  height:40px;
  background-color:white;
  border-radius:5px;
 z-index:2;
 input{
   height:100%;
   width: 100% ;
   border:none;
 }
 .icon{
  position:absolute;
  height:30px;
  transform:translateY(-50%);
  width:20px;
  top: 50%;
 }
 .icon > *{
  position:absolute;
  height:100%;
  width:100%;
  top:0;
  
 }
 
  input::placeholder{
    font-size:14px;
    font-weight:400;
    font-family:"Inter", sans-serif, cursive;
     padding-left:var(--spacing-md);
    color:var(--text-color);
    
  }
  .icon:focus{
    display:none;
  }
  input:focus{
     border:none;
     outline:none;
    
  }
  @media only screen and (max-width:700px ) {
     &{
  left:calc( 50% - 10rem); 
  border:none;
  width:20rem;
  padding-left:5px;
  
  
  }
  input::placeholder{
    font-size:18px;
    font-weight:400;
    font-family:"Inter", sans-serif, cursive;
     text-align:center; 
    color:var(--text-color);
    /* margin-right:200px */
  }
  }
 
`
export const ContaainerGriddivStyles=styled.div`
  padding:0 10px;
  margin: calc( var(--spacing-xl)*2) 0;
  margin-bottom:200px;
  height:100%;

  
   .popularh3{
    padding:0 var(--alignment-spacing);
    font-size:30px;
    text-align:left;
   }
  h3{
    text-align :center;
    font-size:30px;
    
  }
  
   @media only screen and (max-width:980px) {
      &{
        margin-top:100px;
       margin-bottom:800px; 
        
      }
      .popularh3{
     padding:0 var(--alignment-spacing-md);
    font-size:30px;
    text-align:left;
   }
     }
     @media only screen and (max-width:700px) {
      &{
        margin-top:100px;
       margin-bottom:1700px; 
  .popularh3{
    padding:0 var(--alignment-spacing-sm);
    font-size:30px;
    text-align:left;
   }
        
      }
     }
      @media only screen and (max-width:500px) {
       
  .popularh3{
    padding:0 ;
    font-size:30px;
    text-align:left;
   }
        
      }
     }

`




export const Container=styled.div`
   width:100%;

  
   flex-direction:column;
    h3{
    margin-bottom:var(--spacing-md);
  
  }
`

export const ContainerImagestyles=styled.div`
  height:200px; 
`
 const FooterDiv=styled.div`
  display:flex;
  flex-direction:column;
  margin-top:200px;
  opacity:90%;
  .bottom {
    background-color:#562F00;  
  margin:0 auto;
   display:flex;
   flex-direction:column;
   width:100%;
  
}
@media only screen and (max-width:960px) {
 
  .bottom{
    display:none;
  }
}
`
const FooterImageDiv=styled.div`
  position:relative;
  background-color:black;
   width:100%;
   height:500px;
  & h2{
     padding:0 50px;
  }
  & p{
     padding:0 50px;
     width:50%;
  }
  & button{
     margin:0 50px;
  }

  .image-footer-div{
    position:absolute;
    top:50%;
    left:0;
    color:white;
    padding:0 0 0 var(--spacing-lg);
  }
  
  
   &::before {
    content:" ";
    position:absolute;
     width:100%; 
     height:inherit; 
     right:0;
    bottom:0;
    background-color:#000; 
   opacity:0.4; 
   } 
   
    &{
       margin-top:250px; 
    }
    & h2{
     padding:0 10px;
  }
  & p{
     padding:0 10px;
     margin-bottom:10px;
     line-height:1.3;
  }
  & button{
     margin:0 5px;
  }
  
   @media only screen and (max-width: 960px) {
    .image-footer-div{
    position:absolute;
    top:30%;
    left:0;
    width:80%;  
    color:white;
    padding:0 0 0 10px;
  }
  &{
    margin-top:500px;
  }
}
`
const FooterImagez=styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    top:0;
    left:0;
   `
   

 

const Home = () => {
  return (
    <Container>
    

       <HomeScreendImagedivStyles>
       
         <HomeScreendImagedStyles src="/images/differentfood.png" alt=""  /> 
          <HomeScreendTextstyles >
          <h2>The Heart of Nigerian Home Cooking</h2>
          <h4>Handcrafted with passion, delivered with care.</h4>
          <Button variations='secondary'>Discover what's new</Button>
         
        </HomeScreendTextstyles>
          <HomeScreenInput>
            <input type="text" placeholder='Search for your favorite meals...' />
            <div className="icon">
              <IoIosSearch/>
            </div>
          </HomeScreenInput>
           
           
       
            
       </HomeScreendImagedivStyles>
       
        
    
    <ContaainerGriddivStyles>
       <div>
        <h3>Popular Categories</h3>
       </div>
    <HomedivStyles>
        <div>
         <ContainerImagestyles>
          <HomeImagestyles src="/images/Jollof Delight.png" alt="" />
          </ContainerImagestyles>
          <div className='my-class'>
            <h2>Jollof Delights</h2>
          
          </div>
        </div>
         <div>
          <ContainerImagestyles>
              <HomeImagestyles src="/images/Swallow & sous.png"  alt=""  />
          </ContainerImagestyles>
            <div className='my-class'>
              <h2>Swallow & Soups</h2>
            </div>
          </div>
         
           <div>
            <ContainerImagestyles>
               <HomeImagestyles src="/images/Grills & BBQ.png"  alt="" />
            </ContainerImagestyles>
            <div className='my-class'>
              <h2>Grills & BBQ</h2>
            </div>
          </div>
        
          <div>
          <ContainerImagestyles>
              <HomeImagestyles src="/images/sweet.png"  alt="" />
          </ContainerImagestyles>
            <div className='my-class'>
               <h2>Sweet Treats</h2>
            </div>
         </div>
         <div>
          <ContainerImagestyles>
               <HomeImagestyles src="/images/Jollof Delight.png" alt="" />
          </ContainerImagestyles>
            <div className='my-class'>
               <h2>Jollof Delights</h2>
            </div>
         </div>
         <div>
          <ContainerImagestyles>
              <HomeImagestyles src="/images/Swallow & sous.png"  alt=""  />
          </ContainerImagestyles>
            <div className='my-class'>
               <h2>Jollof Delights</h2>
            </div>
         </div>
        
        </HomedivStyles>
    </ContaainerGriddivStyles>
     {/* AONTHER ONE */}
     <ContaainerGriddivStyles>
      <div>
        <h3>Chef's Specials</h3>
       </div>
        <HomedivStyles>
         <div>
          <ContainerImagestyles>
                   <HomeImagestyles src="/images/sicy tilaia pepper soup.png" alt="" />
          </ContainerImagestyles>
         
          <div>
            <div>
                <h2>Spicy Tilapia Pepper Soup</h2>
                <p>A comforting and spicy soup with tender tilapia fish,
                   a true Nigerian delicacy.</p>
            </div>
               <div className="pricing-div">
                    <div className="">
                  <p>#3,500</p>
                </div>
                <div className="">
                  <Button variation="primary">Add to Cart</Button>
                </div>        
               </div>
          </div>
          </div>
         <div>
          <ContainerImagestyles>
              <HomeImagestyles src="/images/jfc.png"  alt=""  />
          </ContainerImagestyles>
          
            <div>
              <div >
                 <h2>Jollof Rice & Fried Chicken</h2>
                <p>Our signature Jollof rice, cooked to 
                  perfection, served with succulent fried chicken.</p>
              </div>
              <div className="pricing-div">
                 <div className="">
                  <p>#3,500</p>
                </div>
                <div className="">
                  <Button variation="primary">Add to Cart</Button>
                </div> 
              </div>
              
            </div>
          </div>
         <div>
          <ContainerImagestyles>
              <HomeImagestyles src="/images/jfc.png"  alt="" />
          </ContainerImagestyles>
          
            <div>
              <div className="">
                 <h2>Jollof Rice & Fried Chicken</h2>
                    <p>Our signature Jollof rice, cooked to 
                      perfection, served with succulent fried chicken.</p>
              </div>
               <div className="pricing-div">
                   <div className="">
                  <p>#3,500</p>
                </div>
                <div className="">
                  <Button variation="primary">Add to Cart</Button>
                </div> 
               </div>
            </div>
          </div>
         <div>
          <ContainerImagestyles>
               <HomeImagestyles src="/images/jfc.png"  alt="" />
          </ContainerImagestyles>
            <div>
              <div >
                 <h2>Jollof Rice & Smoked Chicken</h2>
                 <p>0ur signature Jollof rice, cooked to 
                  perfection, served with succulent Smoked chicken.</p>
              </div>
                <div className="pricing-div">
                     <div className="">
                  <p>#3,500</p>
                </div>
                <div className="">
                  <Button variation="primary">Add to Cart</Button>
                </div> 
                </div>
            </div>
         </div>
         <div>
           <ContainerImagestyles>
              <HomeImagestyles src="/images/jollof rice & fired chicken.png" alt="" />
           </ContainerImagestyles>
            <div>
              <div>
               <h2>Jollof Rice & Fried Chicken</h2>
               <p>Our signature Jollof rice, cooked to 
                perfection, served with succulent fried chicken.</p>
               </div>
               <div className="pricing-div">
                    <div className="">
                  <p>#3,500</p>
                </div>
                <div className="">
                  <Button variation="primary">Add to Cart</Button>
                </div> 
               </div>
            </div>
         </div>
          <div>
               <ContainerImagestyles>
                 <HomeImagestyles src="/images/Egusi soup and pounded yam.png"  alt=""  />
               </ContainerImagestyles>
            <div>
              <div>
                 <h2>Egusi Soup & Pounded Yam</h2>
                 <p>rich and savory Egusi soup with assorted meats, 
                  paired with freshly pounded yam.</p>
              </div>
              <div className='pricing-div'>
                <div className="">
                  <p>#3,500</p>
                </div>
                <div className="">
                  <Button variation="primary">Add to Cart</Button>
                </div>
              </div>
            </div>
         </div>
         
        
        </HomedivStyles>
    </ContaainerGriddivStyles> 
      <FooterDiv>
        
          
      
        <FooterImageDiv >
             <FooterImagez src="/images/footerimage.png" alt="" srcset="" />
             <div className="image-footer-div">
              <h2>Introducing Our New Menu Additions!</h2>
              <p>Explore exciting new dishes, crafted with the freshestingredients 
                and authentic Nigerian flavors. Limited time offer!</p>
                <Button variations='secondary'>Discover what new</Button>
             </div>
        </FooterImageDiv>
      
        <div className="bottom">

        
            
         <Footer/>
        
        
        </div>
      </FooterDiv>
    </Container>
  )
}

export default Home