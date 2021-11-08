import Crystal from "./Crystal.js";
// import { functionDeclaration } from "babel-types";
// import { favicon } from "./util.js";

let canvasInstance;
let needsDraw = true;

var fade;

window.setup = () => {
	canvasInstance = createCanvas(windowWidth, windowHeight);
	// canvasInstance.doubleClicked()
	angleMode(DEGREES);
	rectMode(RADIUS);
	fade = 255;
};

window.draw = () => {
	if (!needsDraw) return;
	drawOnce();
	needsDraw = false;

	fill(0, 0, 0, fade);
	textSize(25);
	textStyle(BOLD);
	textAlign(CENTER);
	background(255, 255, 255, fade);
	text(
		"Press space or \ndouble tap to regenerate.",
		windowWidth / 2,
		windowHeight / 2
	);
};

const card = document.querySelector('body');

card.addEventListener('dblclick', function (e) {
  needsDraw = true;
  fade = 0
  console.log("double clicked")
});

window.keyPressed = () => {
	if (keyCode === 32) {
		needsDraw = true;
		fade = 0;
	}
};

window.drawOnce = () => {
	background(255);
	const CRYSTAL_SIZE_MAX = 250;
	const GAP_MIN = 10;

	const crystalSize = min(
		CRYSTAL_SIZE_MAX,
		min(windowWidth, windowHeight) - 2 * GAP_MIN
	);

	const cols = int((windowWidth - GAP_MIN) / (crystalSize + GAP_MIN));
	const rows = int((windowHeight - GAP_MIN) / (crystalSize + GAP_MIN));

	const gapHor = (windowWidth - cols * crystalSize) / (cols + 1);
	const gapVer = (windowHeight - rows * crystalSize) / (rows + 1);

	for (let i = 0; i < cols * rows; i++) {
		const x =
			gapHor + crystalSize / 2 + (i % cols) * (crystalSize + gapHor);
		const y =
			gapVer + crystalSize / 2 + int(i / cols) * (crystalSize + gapVer);
		new Crystal(x, y, crystalSize).render();
	}

	// favicon(displayDensity(), crystalSize, gapHor, gapVer);
};

window.windowResized = () => {
	resizeCanvas(windowWidth, windowHeight);
	needsDraw = true;
};
