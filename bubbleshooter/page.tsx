"use client"

import React, { useEffect, useState } from 'react';



const BubbleShooter = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

 

  return (
    <>
  {/* Global site tag (gtag.js) - Google Analytics */}
    <script type="text/javascript" src="/bubble-shooter-example.js"></script>
  
  {/**/}
 
  <canvas style={{marginLeft: '30%'}} id="viewport" width="628" height="628" />
    </>
  )
}

export default BubbleShooter;
