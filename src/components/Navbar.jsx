import React, { useState } from 'react'
import '../assets/css/navbar.css';
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'

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
        <li className='navlinkText' >Home</li>
        <li className='navlinkText' > About </li>
        <li className='navlinkText' >Contact</li>
    </ul>
    {/* <div>
    </div> */}
    {/* Hamburger */}

    <div onClick={handleNav} className='mediumView'>
    {  nav ? <AiOutlineClose className='b' />:<HiOutlineMenuAlt4 className='b'/> }
    
    </div>

    <div  onClick={handleNav}  className={ ( nav ? 'show' : 'hide' )}>
    <ul className='mediumView'>
    <h1>Logo</h1>
        <li className='navlinkText' >Home</li>
        <li className='navlinkText'>About </li>
        <li className='navlinkText'>Contact</li>
    </ul>
    </div>
    </div>
    </div>

  )
}

export default Navbar