"use client"
import './style99.css';

import React, { useEffect, useState } from 'react';



const Minesweeper = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

 

  return (
    <>
  {/* Global site tag (gtag.js) - Google Analytics */}
 
    <script src="./js/main.js" type="module" defer></script>
  
  {/**/}
  <h1>minesweeper</h1>
 
    <ul className="levels">
        <li><a id="easy" href="#">Easy</a></li>
        <li></li>
        <li><a id="intermediate" href="#">Hard</a></li>
       
    </ul>
  
    <canvas id="canvas"></canvas>
    </>
  )
}

export default Minesweeper;
