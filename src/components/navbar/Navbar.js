import React from 'react'
import "./Navbar.css"


function Navbar() {
  return (
    <div className='navbar' >
      <div className='logo' >
      <i className="fa-solid fa-shop"></i>
        <span>Pet Veterinary Dashboard</span>
      </div>
      <div className='icons' >
      <i className="icon fa-solid fa-magnifying-glass"></i>
      
      
        <div className='notification' >
        <i className="icon fa-regular fa-bell"></i>
          <span>1</span>
        </div>
        <div className='user' >
        <img src="https://picsum.photos/200/300" alt='' />
          <span>Shop</span>
        </div>
        <i className="icon fa-solid fa-gear"></i>
        
      </div> 
    </div>
  )
}

export default Navbar