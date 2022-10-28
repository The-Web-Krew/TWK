import React from 'react'
import notFoundBackground from '../assets/Images/404.jpg'

function notFound() {
  return (
    <div className='notFound'>
    <img src={notFoundBackground} alt='/' />
    <h1  className='gradientText'> 404 <br/> Page Not Found </h1>
    </div>
  )
}

export default notFound