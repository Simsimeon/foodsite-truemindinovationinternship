import React from 'react'
import NavBar from '../component/NavBar'
import styled from 'styled-components'
import Footer, { Containerfooter } from '../component/Footer'
const Accountcontainer=styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
& p{
  color:var(--input-color);
  font-size:14px;
}
@media only screen and (max-width:1100px) {
  &{
  
    
  }
}
@media only screen and (max-width:700px) {
  &{

    height:600px;
  }
}
`
const Box=styled.div`
 
  background-color:#fff; 
  border-radius:var(--spacing-sm);

`
const Paymentbox=styled.div`
padding: 0 var(--spacing-md);
 height:500px;
  width:450px;
display:flex;
flex-direction:column; 
justify-content:space-between; 
background-color:#fff;
 margin: var(--spacing-md) var(--spacing-sm) var(--spacing-sm) var(--spacing-md);
  border:10px;

  & h3{
    font-size:16px;
    font-weight:500;
  }

  .radio{
  display:flex;
  justify-content:space-between;
}
.checkbox{
  height:30px;
  width:130px;
  display:flex;
  align-items:center;
  justify-content:space-between; 
}
.checkbox label{
  font-size:13px;
  color:var(--input-color);

}
.radio span{
  margin-left:7px;
}
.last-child{
   margin-right:100px; 
}
.card{
  width:100%;
  height:40px;
  background-color:white;
  margin:var(--spacing-sm) 0;
  
}
.radio-class{
  height:30px;
  width:100px;
  display:flex;
  align-items:center;
  color:var(--input-color);
}
.card input{
  width:inherit;
  height:inherit;
  border:1px solid var(--input-color);
  border-radius:5px;
  font-size:14px;
  color:var(--input-color);
}
.card input:focus{
  outline:none;

}
.details{
    display:flex; 
    justify-content:space-between;   
   width:100%;
   margin-top:20px;
   gap:10px;
   
}
.monthly{
  width:100%;
  height:35px;
  margin:var(--spacing-sm) 0;
  background-color:white;
  border-radius:var(--spacing-sm);
  
}
.monthly input{
  width:100%;
  height:inherit;
  border:1px solid var(--input-color);
   border-radius:5px;
}
.monthly input:focus{
  outline:none;
  font-size:var(--spacing-md);
}
.cl{
  width:50%;
  height:40px;
  
}
.cvv{
  width:100%;
  height:35px;

  margin:var(--spacing-sm) 0;
 
}
.cvv input{
  width:100%;
  height:inherit;
  border:1px solid var(--input-color);
   border-radius:5px;

}
.cvv input:focus{
  outline:none;
  font-size:var(--spacing-md);
}
.btn{
  margin-top:80px;
  width:100%;
  height:40px;
  border:none;
  outline:none;
  border-radius:5px;
}
.btn button{
  width:100%;
  height:100%;
  border:none;
  outline:none;
  border-radius:5px;
  background-color:orange;
}
@media only screen and (max-width: 700px) {
  &{
    height:500px;
  width:300px;
  }.last-child{
  margin-right:0; 
}
}
`
const Account = () => {
  return (
      <>
    <Accountcontainer>
       <Box>
        <Paymentbox>
           <h4>Payment</h4>
           <hr />
          <p>Pay with...</p>
          <div className='radio'>
            <div className='radio-class' >
              <input type="radio" name="" id="" />
              <span>Card</span>
            </div>
             <div className='radio-class'>
              <input type="radio" name="" id="" />
                <span>Bank</span>
            </div>
             <div className='last-child radio-class'>
              <input type="radio" name="" id="" />
              <span>Transfer</span>
            </div>
          </div>
            <div >
              <h3>Card number</h3>
              <div className='card'>
                <input type="text" placeholder='1234  5678  9101  1121'/>
              </div>
            </div>
            <div className='details' >
              <div className='cl'>

              <label>Expiration Date</label>
              <div className='monthly'>
                <input type="text" placeholder='MM/YY' />
              </div>
               
              
              <div className='checkbox'>
                    <input type="checkbox" />
                    <label>Save card details</label>
              </div>
             
           
              </div>
          <div className='cl'>
              <div>

            <label >CVV</label>
              <div className='cvv' >
                 <input type="text" placeholder='121'/>
              </div>
            </div>
             </div>
           </div> 
          
           <div className='btn'>
            <button>Pay 9,900</button>
          </div>
          <div>
            <p>Your personal data will be used to process your order, support your experience throughout this
               website, and for other purposes described in our privacy policy.</p>
          </div>
        </Paymentbox>
          
       </Box>
        
  
    </Accountcontainer>
     <Containerfooter>
             
                       <Footer/>
                     
          </Containerfooter>
  
  </>
  )
}

export default Account