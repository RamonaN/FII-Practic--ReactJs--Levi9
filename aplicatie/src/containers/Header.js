import React from 'react'
import Logo from '../components/Logo';
import Nav from './Nav'
import '../styles/Header.scss'
const Header =()=>{
    return(
        <div className="wrapperHeader">
            <div className="logoContainer">
                <Logo name="Shopissimo"></Logo>
            </div>
        <div className="menuContainer">
        <Nav ></Nav>   
        </div>
        </div>
      
    )
}

export default Header;