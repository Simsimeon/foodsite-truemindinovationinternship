import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import Home from './page/Home'
// import Explore from './page/Expore'
// import Myorder from './page/Myorder'
// import Account from './page/Account'
//  import Login from './page/Login'
//  import { GlobalStyles } from './styles/GlobalStyles'
// import AppLayout from './ui/AppLayout'
import { lazy } from 'react'
const Homepage=lazy(()=>import("./page/Home"))
const Explorepage=lazy(()=>import("./page/Explore"))
const Accountpage=lazy(()=>import("./page/Account"))
const Myorderage=lazy(()=>import("./page/Myorder"))
const Loginpage=lazy(()=>import("./page/Login"))

const App = () => {
  return (
    
   <>
   
   
    <GlobalStyles/>
   <BrowserRouter>
   <Routes>
    <Route element={<AppLayout/>}>
    <Route index element={<Navigate replace to="home" />} />
       <Route  path='home' element={<Homepage/>}/>
     <Route path='explore' element={<Explorepage/>}/>
     <Route path='myorder' element={<Myorderpage/>}/>
     <Route path='account' element={<Accountpage/>}/> 
     
    </Route>
     <Route path='login' element={<Loginpage/>}/>
    {/* <Route index element={<Navigate replace to="home" />} /> */}
    
    

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App