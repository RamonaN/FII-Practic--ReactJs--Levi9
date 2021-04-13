import React from 'react';
import Logo from '../components/Logo';
import '../styles/Footer.scss'
const Footer= () =>{
    return(
        <div className="footerContainer">
            <div className="logoContainer">
                    <Logo name="Magic Beauty"></Logo>
            </div>  
        </div>
    )
}

export default Footer;