import React, { useState } from 'react'
import '../assets/css/navbar.css';
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {Link} from 'react-router-dom'

function Navbar() {

    const [nav,setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='nav'>
    <div  className='navbar'>
    <div>
    { nav ?  <div> </div>:    <h1 className=''>Logo</h1>
}
    </div>
    <ul className='navbarLinks '>
        <li className='navlinkText' >
        <Link to="/">Home</Link>
        </li>
        <li className='navlinkText' >
        <Link to="/about">About</Link>
        </li>
        <li className='navlinkText' >
        <Link to="/contact">Contact</Link>
        </li>
    </ul>
    {/* <div>
    </div> */}
    {/* Hamburger */}

    <div onClick={handleNav} className='mediumView'>
    {  nav ? <AiOutlineClose className='b' />:<HiOutlineMenuAlt4 className='b'/> }
    
    </div>

    <div  onClick={handleNav}  className={ ( nav ? 'show' : 'hide' )}>

    <h1 className='mediumViewLogo'>Logo</h1>

    <ul className='mediumView'>
    
        <li className='navlinkText' >
        <Link to="/">Home</Link>
        </li>
        <li className='navlinkText' >
        <Link to="/about">About</Link>
        </li>
        <li className='navlinkText' >
        <Link to="/contact">Contact</Link>
        </li>
    </ul>
    </div>
    </div>
    </div>

  )
}

export default Navbar