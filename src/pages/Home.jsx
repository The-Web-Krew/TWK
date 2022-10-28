import React from 'react'


import Heros from "../components/Heros";
import About from "../components/About";
import Tech from "../components/Tech";
import LetTalk from "../components/letTalk";
function Home() {
  return (
    <div>
    <Heros/>
    <About/>
    <Tech/>
    <LetTalk/>
    </div>
  )
}

export default Home