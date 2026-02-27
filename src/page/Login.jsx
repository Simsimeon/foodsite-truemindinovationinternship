import React from 'react'
import NavBar from '../component/NavBar'
import styled from 'styled-components'
import Footer, { Containerfooter } from '../component/Footer'
  const Logincontainer=styled.div`
     width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  `
  const Logindivright=styled.div`
    width:50%;
    height:inherit;
    background-color:red;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    &::before{
      content:" ";
       width:100%;
       height:inherit;
       background-color:var(--primary-color);
       top:0;
       right:0;
      
       position:absolute;
       opacity:0.8;
    }
     .login-text{
      position:absolute;
      color:#ffffff;
      height:100px;
      width:300px;
      text-align:center;
     line-height:1.3;
    }
    .login-text h2{
      margin-bottom:var(--spacing-sm);
    }
    @media only screen and (max-width:913px) {
      &{
        display:none;
      }
    }
  `
  const Logindivleft=styled.div`
    width:80%; 
    height:inherit;
    background-color:;
    display:flex;
    align-items:center;
    justify-content:center; 
  
  `
  
  const LoginDivrightImage=styled.img`
    width:100%;
    height:100%;
    object-fit:cover; 
    object-position: center;
   
  `
  const Logindivrightcontainer=styled.div`
     height:400px;
       width:300px;  
     display:flex;
      align-items:center;
      flex-direction:column;
       > *{
    color:#3B4758;
  }
  .label{
    margin-right:100px;
    margin-top:20px;
  }
 .label-password{
  margin-right:200px
 }
      .account{
        color:var(--input-color);
        font-size:12px;
        margin-top:var(--spacing-md);
        cursor: pointer;
      }
       .account a{
        color:var(--text-color2);
       }
      
     h2{
      font-family:"Island Moments","Inter", sans-serif, cursive;
       color:var(--primary-color);
       text-align:center
     }
     h4{
      font-weight:500;
     }
      .socials{
        cursor: pointer;
        width:100%;
          height:40px; 
          background-color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          margin:var(--spacing-sm) 0;
          border-radius:var(--spacing-sm);
      }
      .buttons{
        width:100%;
        cursor: pointer;
          background-color:orange;
          border:none;
          border-radius:var(--spacing-sm);
         padding:var(--spacing-md) 0; 
      }
      .button{
        cursor: pointer;
        background-color:var(--bg-color);
        width:100%;
         padding:var(--spacing-sm) 0;   
          border:none;
          border-radius:var(--spacing-sm);
          margin-bottom:10px;
      }
      .fpdiv{
  width:100%;
 height:40px;
 display:flex;
 justify-content:space-between; 
 
 }
 .fpdiv p{
  color:var(--text-color2);
  font-size:12px;
  margin:15px 0;
 }
 
     
  `
  const Inputdiv=styled.div`
      width:100%; 
         height:50px; 
        border-radius:var(--spacing-sm);
        margin:3px 0 var(--spacing-sm) 0;
          position:relative;
  > *{
    color:#3B4758;
  
  }
 
  & .bb{
    width:100%;  
   height:100%;
  }
   input{
    width:100%;  
   height:100%;
   padding:25px 0; 
   border:1px solid #BDBDBD; 
 border-radius:var(--spacing-sm);
 }
 .lock{
  position:absolute; 
  top:50%;
  transform:translateY(-50%);
  left:0;
 }
 
 .icon-eye{
  position:absolute; 
  top:50%;
  transform:translateY(-50%);
  left:0;
   z-index:2;
  padding-left:5px;
 }
 .iconz{
   position:absolute; 
  top:50%;
  transform:translateY(-50%);
  right:0;
  z-index:2;
  padding-right:5px;
 }
 input:focus{
  outline:none;
  font-size:14px;
 }
 input::placeholder{
   font-size:14px;
    padding-left:25px; 
    color:#000;
 }
 
  `
  const Divgoogle=styled.div`
    width:100%;
    height:40px;
     margin-bottom:10px;
    span{
      margin-left:10px;
    }
    img{
      height:30px
    }
  `
  
const Login = () => {
  return (
    <>
    <Logincontainer>
           
            <Logindivright>
                 <LoginDivrightImage src='/images/loginuser.png' alt=''/>
                 <div className='login-text'>
                  <h2>Chuks Kitchen</h2>
                  <p>Your journey to delicious, authentic Nigerian meals starts here. 
                    Sign up or log in to order your favorites today!</p>
                 </div>
              </Logindivright>  
           <Logindivleft>
            
                <Logindivrightcontainer>

                <div>
                 <h2>Chuks Kitchen</h2>
                 <h4>Login your Account</h4>
                </div>
                    
                         <label className='label'>Email or phone number</label>
                  
                  <Inputdiv  >
                     
                    <input  type="text"  placeholder='name@gmail.com'/>
                    <span className='lock'> <i class="fa-solid fa-envelope"></i></span>
                  </Inputdiv>
                  
                 
                  
                
                  <label className='label-password'>password</label> 
                  <Inputdiv >
                   
                      <input className='bb' type="text" placeholder='********'/>
                  

                    
                     <span className='icon-eye'> <i class="fa-solid fa-lock"></i></span>
                     <span className='iconz'> <i class="fa-solid fa-eye-slash "></i></span>
                      
                    
                  </Inputdiv>
                
                <div className='fpdiv'>
                  <div></div>
                  <div>
                    <p>forgot Password?</p>
                  </div>
                </div>
                
                  <button className='buttons'>Continue</button>
                  <button className='button'>or continue with</button>
                
                
                  < Divgoogle>
                        <div className="socials">
                        <img src="/images/Social Media.png" alt="" /> 
                        <p> Continue with Apple</p>
                      </div>
                      
                  </ Divgoogle>
                    <Divgoogle>
                      <div className="socials">
                        <img src="/images/SocialMedia1.png" alt="" /> 
                        <p> Continue with Apple</p>
                      </div>
                        
                        
                    </Divgoogle>
                 
                
                <div>
                  <p className='account'>Don’t have an account? <a href="">create an account</a> </p>
                </div>
              
                </Logindivrightcontainer>
            </Logindivleft> 
               
        </Logincontainer>
        <Containerfooter>
                 
                           <Footer/>
                         
     </Containerfooter>  
    </>
  )
}

export default Login