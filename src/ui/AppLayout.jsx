import React from 'react'
import styled from 'styled-components'
import NavBar from '../component/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
const StyledAppLayout=styled.div`

     background-color:var(--bg-color); 
`
const Container=styled.div`
  width:100%;
  margin:0 auto;
  display:flex;
  flex-direction:column;

  /* gap:3.2rem; */
  /* background-color:black; */
  background-color:var(--bg-color);
`
const Mainstyles=styled.main`
padding:var(--spacing--lg) 0 0 0;
 width:100%;
 
  /* overflow:scroll; */
`

const AppLayout = () => {
  return (
    <>
    
    <StyledAppLayout>
        <NavBar/>
        <Mainstyles>
            <Container>
                  <Outlet/> 
            </Container>
            {/* <Footer/> */}
        </Mainstyles>
         
    </StyledAppLayout>
    </>
  )
}

export default AppLayout