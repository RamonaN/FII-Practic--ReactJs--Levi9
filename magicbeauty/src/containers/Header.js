import React from 'react'
import Logo from '../components/Logo';
import Navbar from './Navbar'
import '../styles/Header.scss'
const Header =()=>{
    return(
        <div className="wrapperHeader">
        <Navbar></Navbar>   
        </div>
       
      
    )
}

export default Header;