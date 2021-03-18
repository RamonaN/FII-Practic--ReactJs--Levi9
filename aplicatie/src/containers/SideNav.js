import React from 'react'
const sideNavItems=['Link 1','Link 2','Link 3','Link 4']

const SideNav =()=>{
    const generateSideNavList=()=>{
        return sideNavItems.map((elem)=>{return(<div className="sideNavElements" key={elem}>
            {elem}
            </div>)})
    }
    return(
        
            <div className="sideNavigationElement">{generateSideNavList()}</div>
      
    )
}
export default SideNav;