import Game from "./game1.js";

window.onload = () => {
	var game = new Game();
	game.start(game);
};
