
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

    document.documentElement.addEventListener('keydown', keyDown, false);
    document.documentElement.addEventListener('keyup', keyUp, false);

}

function keyDown(event)
{
    if(event.keyCode == 38)
    {
        G.K.up = true;
    }
    if(event.keyCode == 39)
    {
        G.K.right = true;
    }
    if(event.keyCode == 37)
    {
        G.K.left = true;
    }
}

function keyUp(event)
{
    if(event.keyCode == 38)
    {
        G.K.up = false;
    }
    if(event.keyCode == 39)
    {
        G.K.right = false;
    }
    if(event.keyCode == 37)
    {
        G.K.left = false;
    }
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
