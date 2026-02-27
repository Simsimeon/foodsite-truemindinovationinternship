import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import Explore from './page/Expore'
import Myorder from './page/Myorder'
import Account from './page/Account'
 import Login from './page/Login'
 import { GlobalStyles } from './styles/GlobalStyles'
import AppLayout from './ui/AppLayout'

const App = () => {
  return (
    
   <>
   
   
    <GlobalStyles/>
   <BrowserRouter>
   <Routes>
    <Route element={<AppLayout/>}>
    <Route index element={<Navigate replace to="home" />} />
       <Route  path='home' element={<Home/>}/>
     <Route path='explore' element={<Explore/>}/>
     <Route path='myorder' element={<Myorder/>}/>
     <Route path='account' element={<Account/>}/> 
     
    </Route>
     <Route path='login' element={<Login/>}/>
    {/* <Route index element={<Navigate replace to="home" />} /> */}
    
    

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App