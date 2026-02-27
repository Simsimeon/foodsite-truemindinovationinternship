import React from 'react'
import NavBar from '../component/NavBar'
import { ContaainerGriddivStyles, Container, ContainerImagestyles, HomedivStyles, HomeImagestyles, HomeScreendImagedivStyles, HomeScreendImagedStyles, HomeScreendTextstyles } from './Home'
import styled from 'styled-components'
import { Button } from '../ui/Button'
import Footer, { Containerfooter } from '../component/Footer'
const MenucotainerStyled=styled.div`
  width: 90%;
  height:300px;
  margin:40px auto;
  border-radius:10px;
  background-color:white;
  .menuh2 h2{
     padding:var(--spacing-md)  0 var(--spacing-md) var(--spacing-md);
  }
  p{
    font-size:23px; 
    font-weight:500;
  }
  .active h3{
    /* padding:0 0 0 20px; */
  }
  .populardiv{
    width:100%;
    height: calc( var(--spacing-lg)*1.2);
    background-color:var(--light-pink);
    border-left:2px solid var(--primary-color );
    display:flex; 
     align-items:center; 
    
  }
  .space{
    margin-bottom:var(--spacing-sm);
    padding-left: var(--spacing-sm);
  }
  
`
const Exploredsection=styled.div`
.add-price{
  height:30px;
  width: 30px;
  border-radius:50%;
  background-color:orange;
  color:white;
  align-items:center;
  justify-content:center;
  display:flex;
  }
  .pricing-div{
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
`
const Flexcontainerdiv=styled.div`
  display:flex;
  gap:20px;
   /* justify-content:center;  */
   padding:0 50px;   
  & > div{
      background-color:white; 
      border-radius:var(--spacing-sm);
      height:370px; 
  }
  .flex-one{
     max-width:400px;
      width:100%; 
      flex-wrap:wrap;  
  }
  .add-price{
  height:30px;
  width: 30px;
  border-radius:50%;
  background-color:orange;
  color:white;
  align-items:center;
  justify-content:center;
  display:flex;
  }
  .flex{
    padding:0 var(--spacing-sm) 50px var(--spacing-sm);
  
  }
  .flex h3{
    font-weight:600;
    color:var(--text-color);
    margin-bottom:5px;
    line-height:1.2;
  }
  .flex p{
    font-weight:500;
    color:var(--text-color);
  }
  .flex .pricing-div{
  
   padding-bottom:200px; 
  }
  .flex div{
    margin-top:13px;
  }
  .pricing-div{
      display:flex;
      justify-content:space-between;
      align-items:center;
    }
  @media only screen and (max-width:1080px) {
     &{
      display:flex;
      flex-wrap:wrap;
      justify-content:center;
      padding:0;
     }
     .flex-one{
     width:100%;
     
      flex-wrap:wrap;  
  }
   .flex{
    padding:0;
  
  } 
  } 
   @media only screen and (max-width:700px) {
   .flex{
    padding:0;
  
  }
    .flex-one{
    
    width:100%;
      flex-wrap:wrap;  
  }
   
  }
  
`
const Fleximagecontainer=styled.div`
  height:50%;
`
const Fleximage=styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  border-top-right-radius:var(--spacing-sm);
  border-top-left-radius: var(--spacing-sm);
`
export const ContaainerGridDivStyles=styled.div`
  padding:0 10px;
  margin: calc( var(--spacing-xl)*2) 0;
  margin-bottom:200px;
  height:100%;
  
   
  h2{
    padding:0 var(--alignment-spacing);
    font-size:30px;
    
  }
  
   @media only screen and (max-width:980px) {
      &{
        margin-top:100px;
       margin-bottom:600px; 
        
      }
      h2{
        text-align:center;
      }
     }
     @media only screen and (max-width:700px) {
      &{
        margin-top:100px;
       margin-bottom:200px; 
        
      }
     }

`

const Exploregrid=styled.div`
   display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows:1fr 1fr;
  gap:50px;
height:500px;
margin-bottom:350px;
padding: 0 var(--alignment-spacing);





.flex{
    padding:0 var(--spacing-sm) 50px var(--spacing-sm);
    
  }
  
  .flex p{
    font-weight:500;
    color:var(--text-color);
  }
> div{
   background-color:white;
   border-radius:10px;
   
  }

flex{
    padding:0 var(--spacing-sm) 50px var(--spacing-sm);
  }
  
@media only screen and (max-width: 1024px) {
  &{
    grid-template-columns: 1fr 1fr;
     padding:0 var(--alignment-spacing-md);
     margin-bottom:700px;
     h3{
    padding:0 var(--alignment-spacing-sm);
    font-size:30px;
    
  }

  }
  
}
@media only screen and (max-width: 600px) {
  &{
    grid-template-columns: 1fr;
    margin-bottom:2000px;
     padding:0 var(--alignment-spacing-sm);
  }
   h3{
    padding:0 var(--alignment-spacing-sm);
    font-size:30px;
    
  }
  }
  @media only screen and (max-width:450px) {
      &{
        grid-template-columns: 1fr;
         width:100%;
         margin:0;
         margin-bottom:2000px;
      }
   h3{
    
    padding:0 ;
    font-size:30px;
    
  }
}
`
const Explore = () => {
  return (
    <Container>
      <HomeScreendImagedivStyles>
        <HomeScreendImagedStyles src='/images/exploreimage.png' alt=''/>
        <HomeScreendTextstyles>
        <h2>Chuks  Kitchen</h2>
        <p>Chuks  KitchenNigerian Home Cooking 4.8  (1.2k) </p>
      </HomeScreendTextstyles>
      </HomeScreendImagedivStyles>
      
         <MenucotainerStyled>
             <div className='menuh2'>
              <h2>Menu Categories</h2>
             </div>
             

            <div className='active'>
              <div className='populardiv space'>        
              <p >Popular</p>
             </div>
             <div className='space'>
                <p>Jollof Rice & Entrees</p>
             </div>
             <div className='space'>
              <p>Swallow & Soups</p>
             </div>
             <div className='space'>
              <p>Grills & sides</p>
             </div>
             <div className='space'>
              <p>Beverages</p>
             </div>
             <div className='space'>
              <p>Desserts</p>
             </div>
            </div>
             
             
             
             
             
          
         </MenucotainerStyled>
         <ContaainerGriddivStyles>
           <div>
              <h3 className='popularh3'>Popular Categories</h3>
           </div>
       <Exploregrid>
                 <Exploredsection>
                  
                  <ContainerImagestyles>
                           <HomeImagestyles src="/images/Image.png" alt="" />
                  </ContainerImagestyles>
                 
                  <div className='flex'>
                    <div>
                        <h2>Jollof Rice & Fried Chicken</h2>
                        <p>Our signature Jollof rice, served with crispy 
                          fried chicken and plantain.
                          </p>
                    </div>
                       <div className="pricing-div">
                            <div className="">
                          <p>#3,500</p>
                        </div>
                        <div className="">
                          <div className='add-price'>+</div>
                        </div>        
                       </div>
                  </div>
                  </Exploredsection>
                   <Exploredsection>
                  
                  <ContainerImagestyles>
                           <HomeImagestyles src="/images/ebaandsoup.png" alt="" />
                  </ContainerImagestyles>
                 
                  <div className='flex'>
                    <div>
                        <h2>Eba & Egusi Soup (Goat Meat)</h2>
                        <p>Hearty Egusi soup with tender goat meat, served with soft Eba.</p>
                    </div>
                       <div className="pricing-div">
                            <div className="">
                          <p>#3,500</p>
                        </div>
                        <div className="">
                          <div className='add-price'>+</div>
                        </div>        
                       </div>
                  </div>
                  </Exploredsection>
                   <Exploredsection>
                  
                  <ContainerImagestyles>
                           <HomeImagestyles src="/images/Pounded Yam & Edikaikong.png" alt="" />
                  </ContainerImagestyles>
                 
                  <div className='flex'>
                    <div>
                        <h2>Pounded Yam & Edikaikong</h2>
                        <p>Traditional pounded yam with rich, 
                          leafy Edikaikong soup.</p>
                    </div>
                       <div className="pricing-div">
                            <div className="">
                          <p>#3,500</p>
                        </div>
                        <div className="">
                          <div className='add-price'>+</div>
                        </div>        
                       </div>
                  </div>
                  </Exploredsection>
                   <Exploredsection>
                  
                  <ContainerImagestyles>
                           <HomeImagestyles src="/images/pepper.png" alt="" />
                  </ContainerImagestyles>
                 
                  <div className='flex'>
                    <div>
                        <h2>Peppered Snail</h2>
                        <p>Spicy and savory peppered snail, perfect as a starter.</p>
                    </div>
                       <div className="pricing-div">
                            <div className="">
                          <p>#3,500</p>
                        </div>
                        <div className="">
                          <div className='add-price'>+</div>
                        </div>        
                      </div>
                  </div>
                  </Exploredsection>
                   <Exploredsection>
                  
                  <ContainerImagestyles>
                           <HomeImagestyles src="/images/fish.png" alt="" />
                  </ContainerImagestyles>
                 
                  <div className='flex'>
                    <div>
                        <h2>Grilled Tilapia Fish</h2>
                        <p>Whole grilled tilapia seasoned with our special spices.</p>
                    </div>
                       <div className="pricing-div">
                            <div className="">
                          <p>#3,500</p>
                        </div>
                        <div className="">
                          <div className='add-price'>+</div>
                        </div>        
                       </div>
                  </div>
                  </Exploredsection>
                   <Exploredsection>
                  
                  <ContainerImagestyles>
                            <HomeImagestyles src="/images/Image.png" alt="" />
                  </ContainerImagestyles>
                 
                  <div className='flex'>
                    <div>
                        <h2>Jollof Rice & Fried Chicken</h2>
                        <p>Our signature Jollof rice, served with crispy 
                          fried chicken and plantain.</p>
                    </div>
                       <div className="pricing-div">
                            <div className="">
                          <p>#3,500</p>
                        </div>
                        <div className="">
                          <div className='add-price'>+</div>
                        </div>        
                       </div>
                  </div>
                  </Exploredsection>
       </Exploregrid>
         </ContaainerGriddivStyles>
         <ContaainerGridDivStyles>
          <div>
              <h2>Jollof Rice & Entrees</h2>
           </div>
            <Flexcontainerdiv>
                <div className='flex-one'>
                  <Fleximagecontainer>
                      <Fleximage src='/images/differentfish.png' alt=''/>
                  </Fleximagecontainer>
                
                  <div className='flex'>
                      <div>
                        <h3>Jollof Rice & Smoked Fish</h3>
                        <p>Flavorful jollof rice served with perfectly smoked fish.</p>
                    </div>
                     <div className="pricing-div">
                            <div className="">
                          <p>#3,500</p>
                        </div>
                        <div className="">
                          <div className='add-price'>+</div>
                        </div>        
                       </div>
                  </div>
                </div>
                <div className='flex-one'>
                   <Fleximagecontainer>
                      <Fleximage src='/images/Image.png' alt=''/>
                  </Fleximagecontainer>
                  <div className='flex '>
                     <div>
                        <h3>Party Jollof Rice (Veg)</h3>
                        <p>Vegetarian party jollof, full of rich </p>
                    </div>
                    <div className="pricing-div">
                            <div className="">
                          <p>#3,500</p>
                        </div>
                        <div className="">
                          <div className='add-price'>+</div>
                        </div>        
                       </div>
                  </div>
                </div>
                <div className='flex-one'>
                   <Fleximagecontainer>
                      <Fleximage src='/images/Image.png' alt=''/>
                  </Fleximagecontainer>
                  <div className='flex'>
                       <div>
                        <h3>Party Jollof Rice (Veg)</h3>
                        <p>Vegetarian party jollof, full of rich </p>
                    </div>
                    <div className="pricing-div">
                         
                            <div className="">
                          <p>#3,500</p>
                        </div>
                        <div className="">
                          <div className='add-price'>+</div>
                        </div>        
                       </div>
                  </div>
                </div>
            </Flexcontainerdiv>
         </ContaainerGridDivStyles>
         <ContaainerGridDivStyles>
           <div>
              <h2>Swallow & Soups</h2>
           </div>
            <Flexcontainerdiv>
                <div className='flex-one'>
                  <Fleximagecontainer>
                      <Fleximage src='/images/Amala with Gbegiri &Ewedu.png' alt=''/>
                  </Fleximagecontainer>
                  <div className='flex '>
                      <div>
                        <h3>Spicy Tilapia Pepper Soup</h3>
                        <p>A comforting and spicy soup with tender tilapia fish,
                           a true Nigerian delicacy.</p>
                    </div>
                     <div className="pricing-div">
                            <div className="">
                          <p>#3,500</p>
                        </div>
                        <div className="">
                          <div className='add-price'>+</div>
                        </div>        
                       </div>
                  </div>
                </div>
                <div className='flex-one'>
                   <Fleximagecontainer>
                      <Fleximage src='/images/fufu & Okra soup.png' alt=''/>
                  </Fleximagecontainer>
                  <div className='flex '>
                     <div>
                        <h3>Fufu & Okra Soup (Fish)</h3>
                        <p>Light Fufu served with fresh okra soup and tilapia fish.</p>
                    </div>
                    <div className="pricing-div">
                            <div className="">
                          <p>#3,500</p>
                        </div>
                        <div className="">
                          <div className='add-price'>+</div>
                        </div>        
                       </div>
                  </div>
                </div>
                <div className='flex-one'>
                   <Fleximagecontainer>
                      <Fleximage src='/images/fufu & Okra soup.png' alt=''/>
                  </Fleximagecontainer>
                  <div className='flex '>
                       <div>
                        <h3>Fufu & Okra Soup (Fish)</h3>
                        <p>Light Fufu served with fresh okra soup and tilapia fish.</p>
                    </div>
                    <div className="pricing-div">
                         
                            <div className="">
                          <p>#3,500</p>
                        </div>
                        <div className="">
                          <div className='add-price'>+</div>
                        </div>        
                       </div>
                  </div>
                </div>
            </Flexcontainerdiv>
         </ContaainerGridDivStyles>
         <Containerfooter>

          <Footer/>
        
         </Containerfooter>
    </Container>
      
      
      
  )
}

export default Explore