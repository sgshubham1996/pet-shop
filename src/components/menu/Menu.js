import React from 'react'
import "./Menu.css"
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='menu' >
       <div className='item' >
        <span className='title' >MAIN</span>
        <Link to="/" className='listItem' >
        <i className="fa-solid fa-house"></i>
         <span className='listItemTitle' >Home</span>
        </Link>
        <Link to="/management" className='listItem' >
        <i className="fa-regular fa-user"></i>
         <span className='listItemTitle' >Profile</span>
        </Link>
      </div>

      <div className='item' >
        <span className='title' >LISTS</span>
        <Link to="/service" className='listItem' >
        <i className="fa-solid fa-user"></i>
         <span className='listItemTitle' >Service</span>
        </Link>
        <Link to="/" className='listItem' >
        <i className="fa-solid fa-cart-shopping"></i>
         <span className='listItemTitle' >Product</span>
        </Link>
        <Link to="/" className='listItem' >
        <i className="fa-solid fa-clipboard"></i>
         <span className='listItemTitle' >Order</span>
        </Link>
      </div>

      <div className='item' >
        <span className='title' >GENERAL</span>
        <Link to="/" className='listItem' >
        <i className="fa-regular fa-note-sticky"></i>
         <span className='listItemTitle' >Note</span>
        </Link>
        <Link to="/" className='listItem' >
        <i className="fa-solid fa-calendar-days"></i>
         <span className='listItemTitle' >Calendar</span>
        </Link>
        <Link to="/" className='listItem' >
        <i className="fa-solid fa-globe"></i>
         <span className='listItemTitle' >Location</span>
        </Link>
      </div>

      <div className='item' >
        <span className='title' >ANALYTICS</span>
        <Link to="/" className='listItem' >
        <i className="fa-solid fa-chart-simple"></i>
         <span className='listItemTitle' >Chart</span>
        </Link>
        <Link to="/" className='listItem' >
        <i className="fa-solid fa-list"></i>
         <span className='listItemTitle' >Logs</span>
        </Link>
      </div>

      <div className='item' >
        <span className='title' >MAINTENANCE</span>
        <Link to="/" className='listItem' >
        <i className="fa-solid fa-chart-simple"></i>
         <span className='listItemTitle' >Setting</span>
        </Link>
        <Link to="/" className='listItem' >
        <i class="fa-solid fa-circle-down"></i>
         <span className='listItemTitle' >Backup</span>
        </Link>
      </div>
      
    </div>
  )
}

export default Menu