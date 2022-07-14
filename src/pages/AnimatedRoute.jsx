import React from "react";
import Home from './Home'
import Contact from './Contact'
import Services from './Services'
import Gallery from './Gallery'
import About from './About'


import {Routes, Route, useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion'

const AnimatedRoute = () => {
    const location = useLocation()
  return <AnimatePresence> 
    <Routes location={location} key={location.key}>
  <Route path='/' element={<Home/>}/>
  <Route path='services' element={<Services/>}/>
  <Route path='gallery' element={<Gallery/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='About' element={<About/>}/>
</Routes>
</AnimatePresence>;
};

export default AnimatedRoute;
