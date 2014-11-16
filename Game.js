
var canvas;
var context;
var game;

var MAPHEIGHT = 20
var MAPWIDTH = 35

function start()
{
    ASSETS = loadAssets("assets.json", init);
}

function getRandomArray(size)
{
    return Array.apply(null, Array(size))
        .map(function (_, i){return Math.floor(Math.random() * 10);});
}

function negitive_ones(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? -1 : negitive_ones(dimensions.slice(1)));}

    return array;
}

function setup_grid(){
    grid = negitive_ones([MAPWIDTH, MAPHEIGHT + 1]) // extra row for base case.
    for (var i = 1, i < MAPWIDTH; i++){
        grid[i, MAPHEIGHT] = 11;
    }

    return grid;
}

function init()
{
    canvas = document.getElementById("MainCanvas");
    context = canvas.getContext('2d');
    requestAnimationFrame(frame);
    game.grid = setup_grid()
    game.top_row = getRandomArray(MAPWIDTH)


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
