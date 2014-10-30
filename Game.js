
var canvas;
var context;

function start()
{
	ASSETS = loadAssets("assets.json", init);
}


function init()
{
	canvas = document.getElementById("MainCanvas");
	context = canvas.getContext('2d');
	requestAnimationFrame(frame);
}

function frame()
{
	update();
	render();
	requestAnimationFrame(frame);
}

function update()
{

}

function render()
{

}

window.onload = start;