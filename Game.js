
var canvas;
var context;
var game = {};


function start()
{
    ASSETS = loadAssets("assets.json", init);
}

function init()
{
    canvas = document.getElementById("MainCanvas");
    context = canvas.getContext('2d');
    requestAnimationFrame(frame);
    game.grid = new Grid()


}

function frame()
{
    update();
    render();
    requestAnimationFrame(frame);
}

function update()
{
    game.grid.update();
}

function render()
{
    game.grid.render();
}

window.onload = start;
