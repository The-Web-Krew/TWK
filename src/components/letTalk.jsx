import React from 'react'
import '../assets/css/letsTalk.css'
import TWK4 from '../assets/Images/TWK4.png'
import {Link} from 'react-router-dom'

function letTalk() {
  return (
    <section>

<div className='letsTalk'>
<div className='letsTalkDirect'>
<h3 className='letsTalkTexth3 gradientText'>Lets Talk  </h3>
<h1 className='letsTalkText gradientText'>About Your Next Project</h1>
<button className=' letsConnectButton buttonColor '>  <Link to="/contact"> <h3>Lets Connect </h3></Link></button>


</div>
<div className='imageCenter'>
    <img src={TWK4} alt='/' />
</div>
</div>


    </section>
  )
}

export default letTalk