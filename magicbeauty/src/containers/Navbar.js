import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Header.scss';
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
const navItems=[
    {title:'Home',url:'/'},
    {title:'Products',url:'/products'},
    {title:"Add product",url:"/addProduct"},
    {title:`Cart:${props.cartLength}`,url:"/cart"}]

const Navbar =(props)=>{
    const generateNavList=()=>{
        return navItems.map((elem,index)=>{return(<li className="nav-item navigationElement" key={elem}>
            <Link className="nav-link" to={elem.url}>{elem.title}</Link>
            </li>)})
    }
    return(
        
        
    <nav className="navbar navbar-expand-lg navbar-light w-100">
    <a className="logoContainer" href="#">Magic Beauty</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav w-100">
    {generateNavList()}
    </ul>
  </div>
</nav>
       
    )
}
export default Navbar;