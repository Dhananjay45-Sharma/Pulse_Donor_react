import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route} from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Services from "./Services";
import Login from "./Login";
import Home from "./Home";
import Register from "./Register";
import { Toaster } from "react-hot-toast";
import NewRegister from "./NewRegister";
import NewLogin from "./NewLog";
import Verify from "./Verify";
import DonorHome from "./DonorHome";
import DonorReq from "./DonorReq";
import DonorPro from "./DonorPro";


export default function App()
{
  return(
    <>
    <Toaster
            position="top-center"
            reverseOrder={false}
            />

          <Navbar/>
    
        <Routes>
        <Route path='/' element={<Home/>}/> 
         <Route path="/service" element={<Services/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/reg" element={<NewRegister/>}/>
         <Route path="/log" element={<NewLogin/>}/>
         <Route path="/verification" element={<Verify/>}/>

         <Route path='/donor/'>
           <Route path="home" element={<DonorHome/>}/>
           <Route path="request" element={<DonorReq/>}/>
           <Route path="profile" element={<DonorPro/>}/>
         </Route>
         {/* <Route path='/http://localhost:3000/verification?token=${token}' element={<Login/>}/> */}
{/*         
         <Route path='/donor/'>
             <Route path='home' element={<DonorHome/>}></Route>
            </Route> */}
        
        </Routes>

        
 
        
        
 
    </>)
}