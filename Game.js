
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
    if(event.keyCode == 32)
    {
        //Spacebar
    }
    if(event.keyCode == 39)
    {
        //right
    }
    if(event.keyCode == 37)
    {
        //left
    }
}

function keyUp(event)
{
    if(event.keyCode == 32)
    {
        //Spacebar
    }
    if(event.keyCode == 39)
    {
        //right
    }
    if(event.keyCode == 37)
    {
        //left
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
