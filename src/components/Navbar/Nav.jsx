import React, {useState} from "react";
import './Nav.css'
import logo from '../../assert/Logo-T-PNG - 1.png'

import { NavLink } from 'react-router-dom'
import OpenMenu from "../../assert/openMenu";
import CloseMenu from "../../assert/closeMenu";
// import useDimension from "../../hooks/useDimension";





const Nav = () => {
    // const {innerWidth, innerHeight} =  useDimension()
    const [openMenuBar, setOpenMenuBar] = useState(false)
    const [navBar, setNavBar] = useState(false)
    // const [navBarWidth, setNavBarWidth] = useState(false)
    //  const [widthSize, setWidthSize] = useState(undefined)
   


   const changeNavBarBackground = () => {
     if(window.scrollY >= 70){
      setNavBar(true)
     }else{
      setNavBar(false)
     }
   }
 window.addEventListener('scroll', changeNavBarBackground)


    const HandleCloseNav = () =>{
      if(openMenuBar === false){
        setOpenMenuBar(true)
      }else{
        setOpenMenuBar(false)
      }
    }

    const handleClose = () => {
      setOpenMenuBar(false)
    }

    let activeStyle = {
      color:'#c5a479',
    };

  return <div className={`Nav-bar ${navBar ? 'color': 'color'}`}>
      <span className="logo"><NavLink 
              to='/'
              >
                <img src={logo} alt="logo" className="Log" />
            </NavLink>
            </span>
      <span className={` ${openMenuBar ? "menu-item" :"list-item"} `}>
   {openMenuBar ?
    <span onClick={HandleCloseNav}  className={openMenuBar ? "menu" : "menu-X"}><CloseMenu /></span> : 
    <span onClick={HandleCloseNav}  className={openMenuBar ? "menu" : "menu-X"}><OpenMenu/></span>
    }
   <ul className={ ` ${openMenuBar ? "menu-ul" :"list-item my-ul"}` }> 
              <li className={openMenuBar ? "items" : "items-s"}>
            <NavLink 
              to='/'
              onClick={handleClose}
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
              >
                Home
            </NavLink>
              </li>
              <li  className={openMenuBar ? "items" : "items-s"}>
            <NavLink 
              to='services'
              onClick={handleClose}
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
                Services
            </NavLink>
              </li>
              <li  className={openMenuBar ? "items" : "items-s"}>
            <NavLink 
              to='gallery'
              onClick={handleClose}
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }  >
                Gallery
            </NavLink>
              </li>
              <li  className={openMenuBar ? "items" : "items-s"}>
            <NavLink 
              to='contact'
              onClick={handleClose}
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } >
                Contact
            </NavLink>
              </li>
              <li  className={openMenuBar ? "items" : "items-s"}>
            <NavLink 
              to='about'
              onClick={handleClose}
              style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }             >
                About
            </NavLink>
              </li>
          </ul>
      </span>
  </div>;
};

export default Nav;
