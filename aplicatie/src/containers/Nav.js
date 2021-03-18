import React from 'react'
const navItems=['Home','About','Products']

const Nav =()=>{
    const generateNavList=()=>{
        return navItems.map((elem,index)=>{return(<div className="navElements" key={elem}>
            {elem}
            </div>)})
    }
    return(
        <div className="navElementsContainer">
            <div className="navigationElement">{generateNavList()}</div>
        </div>
    )
}
export default Nav;