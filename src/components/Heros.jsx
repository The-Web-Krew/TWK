import React, { useState, useEffect, useRef } from 'react'
import Halo from 'vanta/dist/vanta.halo.min.js'

const Heros = (props) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(Halo({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        backgroundColor: 0x0,
        backgroundAlpha: 0,

        amplitudeFactor: 1.20,
        xOffset: 0.21
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div className='heroBackground'>
    <div  className='heroBackgroundImage' ref={myRef}>
    <h1>TWK</h1>
  </div>

</div>
  )
  
  
 
}


export default Heros