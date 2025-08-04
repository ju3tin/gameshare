"use client"
import './pacman.css';
import './pacman-home.css';
import soundon from './img/sound-on.png';
import github from './img/github.png';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';


const Pacman = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

 

  return (
    <>
  {/* Global site tag (gtag.js) - Google Analytics */}
  <script type="text/javascript" src="./js/jquery.js"></script>
		<script type="text/javascript" src="./js/jquery-buzz.js"></script>
		
		<script type="text/javascript" src="./js/game2.js"></script>
		<script type="text/javascript" src="./js/tools.js"></script>
		<script type="text/javascript" src="./js/board1.js"></script>
		<script type="text/javascript" src="./js/paths.js"></script>
		<script type="text/javascript" src="./js/bubbles.js"></script>
		<script type="text/javascript" src="./js/fruits.js"></script>
		<script type="text/javascript" src="./js/pacman.js"></script>
		<script type="text/javascript" src="./js/ghosts.js"></script>
		<script type="text/javascript" src="./js/home.js"></script>
		<script type="text/javascript" src="./js/sound.js"></script>
    <script type="text/javascript" src="./js/game3.js"></script>
  
  {/**/}
  <title>Justin Grierson - Pac-Man</title>
  <div id="sound" />
  
  <div id="home">
    <h1>pac-man</h1>
    <h3>
      Justin Grierson
      <br />
    </h3>
    <canvas id="canvas-home-title-pacman" />
    <div id="presentation">
      <div id="presentation-titles">character &nbsp;/&nbsp; nickname</div>
      <canvas id="canvas-presentation-blinky" />
      <div id="presentation-character-blinky">- shadow</div>
      <div id="presentation-name-blinky">"blinky"</div>
      <canvas id="canvas-presentation-pinky" />
      <div id="presentation-character-pinky">- speedy</div>
      <div id="presentation-name-pinky">"pinky"</div>
      <canvas id="canvas-presentation-inky" />
      <div id="presentation-character-inky">- bashful</div>
      <div id="presentation-name-inky">"inky"</div>
      <canvas id="canvas-presentation-clyde" />
      <div id="presentation-character-clyde">- pokey</div>
      <div id="presentation-name-clyde">"clyde"</div>
    </div>
    <canvas id="trailer" />
   
    <a className="sound" href="javascript:void(0);" data-sound="on">
      <Image src={soundon} alt="" style={{ border: '2px solid black' }} />
    </a>
    <a
      className="github"
      target="_blank"
      href="https://github.com/luciopanepinto/pacman"
    >
      <Image src={github} alt="GitHub - Lucio PANEPINTO - Pac-Man" />
    </a>
   
  </div>
  <div id="panel">
    <h1>pac-man</h1>
  
    <canvas id="canvas-panel-title-pacman" />
    <div id="score">
      <h2>1UP</h2>
      <span>00</span>
    </div>
    <div id="highscore">
      <h2>High Score</h2>
      <span>00</span>
    </div>
    <div id="board">
      <canvas id="canvas-board" />
      <canvas id="canvas-paths" />
      <canvas id="canvas-bubbles" />
      <canvas id="canvas-fruits" />
      <canvas id="canvas-pacman" />
      <canvas id="canvas-ghost-blinky" />
      <canvas id="canvas-ghost-pinky" />
      <canvas id="canvas-ghost-inky" />
      <canvas id="canvas-ghost-clyde" />
      <div id="control-up-big" />
      <div id="control-down-big" />
      <div id="control-left-big" />
      <div id="control-right-big" />
    </div>
    <div id="control">
      <div id="control-up" />
      <div id="control-up-second" />
      <div id="control-down" />
      <div id="control-down-second" />
      <div id="control-left" />
      <div id="control-right" />
    </div>
    <canvas id="canvas-lifes" />
    <canvas id="canvas-level-fruits" />
    <div id="message" />
   
    <a className="sound" href="javascript:void(0);" data-sound="on">
      <Image src={soundon} alt="" style={{ border: '0px solid black' }}  />
    </a>
  </div>
    </>
  )
}

export default Pacman;
