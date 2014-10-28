
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

	console.log("test");
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

start();